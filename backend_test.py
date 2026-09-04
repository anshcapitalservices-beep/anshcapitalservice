#!/usr/bin/env python3
"""
Backend API Test Suite for ANSH Capital Services Blog - Firestore Migration Verification
Tests all blog endpoints against Firebase Firestore backend
CRITICAL: Cleans up test data after testing (real Firestore database)
"""

import requests
import json
import base64
from io import BytesIO

# Configuration
BASE_URL = "https://mirror-build-43.preview.emergentagent.com/api"
ADMIN_PASSWORD = "ansh@admin2025"

# Test results tracking
test_results = []
admin_token = None
created_test_posts = []  # Track all test posts for cleanup


def log_test(test_name, passed, details=""):
    """Log test result"""
    status = "✅ PASS" if passed else "❌ FAIL"
    result = f"{status} | {test_name}"
    if details:
        result += f"\n    Details: {details}"
    test_results.append({"name": test_name, "passed": passed, "details": details})
    print(result)


def print_response(response):
    """Helper to print response details"""
    print(f"    Status: {response.status_code}")
    try:
        body = response.json()
        body_str = json.dumps(body, indent=2)
        if len(body_str) > 500:
            print(f"    Body: {body_str[:500]}... (truncated)")
        else:
            print(f"    Body: {body_str}")
    except:
        text = response.text
        if len(text) > 500:
            print(f"    Body: {text[:500]}... (truncated)")
        else:
            print(f"    Body: {text}")


print("=" * 80)
print("FIRESTORE MIGRATION VERIFICATION - BLOG API TEST SUITE")
print("=" * 80)
print(f"Backend URL: {BASE_URL}")
print(f"Admin Password: {ADMIN_PASSWORD}")
print("=" * 80)
print()

# ============================================================================
# TEST 1: GET /api/blog - List all posts (may contain user's existing posts)
# ============================================================================
print("\n[Test 1] GET /api/blog - List all posts")
try:
    response = requests.get(f"{BASE_URL}/blog", timeout=10)
    print_response(response)
    
    if response.status_code == 200:
        posts = response.json()
        if isinstance(posts, list):
            # Verify each item has required fields
            required_fields = ['id', 'slug', 'title', 'category', 'excerpt', 'content', 
                             'image', 'author', 'read_time', 'date', 'created_at']
            
            if len(posts) > 0:
                first_post = posts[0]
                missing_fields = [f for f in required_fields if f not in first_post]
                
                if not missing_fields:
                    log_test("GET /api/blog returns list with all required fields", True, 
                            f"Found {len(posts)} posts with all required fields: {', '.join(required_fields)}")
                else:
                    log_test("GET /api/blog returns list with all required fields", False,
                            f"Missing fields in first post: {missing_fields}")
            else:
                log_test("GET /api/blog returns list", True, "Empty list (no posts yet)")
        else:
            log_test("GET /api/blog returns list", False, f"Response is not a list: {type(posts)}")
    else:
        log_test("GET /api/blog returns 200", False, f"Got status {response.status_code}")
except Exception as e:
    log_test("GET /api/blog", False, f"Exception: {str(e)}")


# ============================================================================
# TEST 2: GET /api/blog/categories
# ============================================================================
print("\n[Test 2] GET /api/blog/categories - Get all categories")
try:
    response = requests.get(f"{BASE_URL}/blog/categories", timeout=10)
    print_response(response)
    
    if response.status_code == 200:
        data = response.json()
        if 'categories' in data and isinstance(data['categories'], list):
            log_test("GET /api/blog/categories returns correct format", True,
                    f"Categories: {data['categories']}")
        else:
            log_test("GET /api/blog/categories returns correct format", False,
                    "Missing 'categories' key or not a list")
    else:
        log_test("GET /api/blog/categories returns 200", False, f"Got status {response.status_code}")
except Exception as e:
    log_test("GET /api/blog/categories", False, f"Exception: {str(e)}")


# ============================================================================
# TEST 3: POST /api/admin/login - Wrong password should return 401
# ============================================================================
print("\n[Test 3] POST /api/admin/login with wrong password - Should return 401")
try:
    response = requests.post(f"{BASE_URL}/admin/login", 
                            json={"password": "wrong_password_123"}, 
                            timeout=10)
    print_response(response)
    
    if response.status_code == 401:
        log_test("POST /api/admin/login with wrong password returns 401", True,
                f"Response: {response.json()}")
    else:
        log_test("POST /api/admin/login with wrong password returns 401", False,
                f"Got status {response.status_code} instead of 401")
except Exception as e:
    log_test("POST /api/admin/login with wrong password", False, f"Exception: {str(e)}")


# ============================================================================
# TEST 4: POST /api/admin/login - Correct password should return 200 with token
# ============================================================================
print("\n[Test 4] POST /api/admin/login with correct password - Should return 200 with token")
try:
    response = requests.post(f"{BASE_URL}/admin/login", 
                            json={"password": ADMIN_PASSWORD}, 
                            timeout=10)
    print_response(response)
    
    if response.status_code == 200:
        data = response.json()
        if 'token' in data and data['token']:
            admin_token = data['token']
            log_test("POST /api/admin/login with correct password returns token", True,
                    f"Token received: {admin_token[:30]}...")
        else:
            log_test("POST /api/admin/login returns token", False,
                    "Response missing 'token' field")
    else:
        log_test("POST /api/admin/login with correct password returns 200", False,
                f"Got status {response.status_code}")
except Exception as e:
    log_test("POST /api/admin/login with correct password", False, f"Exception: {str(e)}")


# ============================================================================
# TEST 5: POST /api/blog WITHOUT X-Admin-Token - Should return 401
# ============================================================================
print("\n[Test 5] POST /api/blog without X-Admin-Token - Should return 401")
try:
    response = requests.post(f"{BASE_URL}/blog",
                            json={"title": "Test", "category": "Test", "content": "Test"},
                            timeout=10)
    print_response(response)
    
    if response.status_code == 401:
        log_test("POST /api/blog without X-Admin-Token returns 401", True)
    else:
        log_test("POST /api/blog without X-Admin-Token returns 401", False,
                f"Got status {response.status_code} instead of 401")
except Exception as e:
    log_test("POST /api/blog without X-Admin-Token", False, f"Exception: {str(e)}")


# Variables to store created post details
created_post_id = None
created_post_slug = None

# ============================================================================
# TEST 6: POST /api/blog WITH token - Create test post
# ============================================================================
print("\n[Test 6] POST /api/blog WITH X-Admin-Token - Create test post")
if admin_token:
    try:
        new_post_data = {
            "title": "QA Firestore Test",
            "category": "QA",
            "excerpt": "e",
            "content": "<p>hi</p>",
            "author": "QA",
            "read_time": "2 min read"
        }
        response = requests.post(f"{BASE_URL}/blog",
                                json=new_post_data,
                                headers={"X-Admin-Token": admin_token},
                                timeout=10)
        print_response(response)
        
        if response.status_code == 200:
            post = response.json()
            if 'id' in post and 'slug' in post:
                created_post_id = post['id']
                created_post_slug = post['slug']
                created_test_posts.append(created_post_id)  # Track for cleanup
                
                # Verify slug is auto-generated
                if created_post_slug and created_post_slug != "":
                    log_test("POST /api/blog with token creates post with auto-generated slug", True,
                            f"Created post ID: {created_post_id}, Slug: {created_post_slug}")
                else:
                    log_test("POST /api/blog auto-generates slug", False,
                            "Slug is empty or missing")
            else:
                log_test("POST /api/blog returns post with id and slug", False,
                        "Missing id or slug in response")
        else:
            log_test("POST /api/blog with token returns 200", False,
                    f"Got status {response.status_code}")
    except Exception as e:
        log_test("POST /api/blog with token", False, f"Exception: {str(e)}")
else:
    log_test("POST /api/blog with token", False, "No admin token available (login failed)")


# ============================================================================
# TEST 7: GET /api/blog/{slug} - Retrieve created post
# ============================================================================
print("\n[Test 7] GET /api/blog/{slug} - Retrieve created post")
if created_post_slug:
    try:
        response = requests.get(f"{BASE_URL}/blog/{created_post_slug}", timeout=10)
        print_response(response)
        
        if response.status_code == 200:
            post = response.json()
            if post.get('slug') == created_post_slug and post.get('title') == "QA Firestore Test":
                log_test(f"GET /api/blog/{created_post_slug} returns created post", True,
                        f"Title: {post.get('title')}, Content: {post.get('content')}")
            else:
                log_test(f"GET /api/blog/{created_post_slug} returns correct post", False,
                        f"Post data mismatch - slug: {post.get('slug')}, title: {post.get('title')}")
        else:
            log_test(f"GET /api/blog/{created_post_slug} returns 200", False,
                    f"Got status {response.status_code}")
    except Exception as e:
        log_test(f"GET /api/blog/{created_post_slug}", False, f"Exception: {str(e)}")
else:
    log_test("GET /api/blog/{slug}", False, "No post slug available (creation failed)")


# ============================================================================
# TEST 8: GET /api/blog?category=QA - Filter by QA category
# ============================================================================
print("\n[Test 8] GET /api/blog?category=QA - Filter by QA category")
try:
    response = requests.get(f"{BASE_URL}/blog", params={"category": "QA"}, timeout=10)
    print_response(response)
    
    if response.status_code == 200:
        posts = response.json()
        if isinstance(posts, list):
            # Check if created post is included
            qa_posts = [p for p in posts if p.get('category') == 'QA']
            created_post_found = any(p.get('id') == created_post_id for p in qa_posts)
            
            if created_post_found:
                log_test("GET /api/blog?category=QA includes created post", True,
                        f"Found {len(qa_posts)} QA posts, including our test post")
            else:
                log_test("GET /api/blog?category=QA includes created post", False,
                        f"Created post not found in QA category filter. Found {len(qa_posts)} QA posts")
        else:
            log_test("GET /api/blog?category=QA returns list", False, "Response is not a list")
    else:
        log_test("GET /api/blog?category=QA returns 200", False, f"Got status {response.status_code}")
except Exception as e:
    log_test("GET /api/blog?category=QA", False, f"Exception: {str(e)}")


# ============================================================================
# TEST 9: PUT /api/blog/{id} WITH token - Update post title
# ============================================================================
print("\n[Test 9] PUT /api/blog/{id} WITH token - Update post title to 'QA Firestore Updated'")
if created_post_id and admin_token:
    try:
        updated_data = {
            "title": "QA Firestore Updated",
            "category": "QA",
            "excerpt": "e",
            "content": "<p>hi</p>",
            "author": "QA",
            "read_time": "2 min read"
        }
        response = requests.put(f"{BASE_URL}/blog/{created_post_id}",
                               json=updated_data,
                               headers={"X-Admin-Token": admin_token},
                               timeout=10)
        print_response(response)
        
        if response.status_code == 200:
            post = response.json()
            if post.get('title') == "QA Firestore Updated":
                log_test(f"PUT /api/blog/{created_post_id} updates title", True,
                        f"Updated title: {post.get('title')}")
            else:
                log_test(f"PUT /api/blog/{created_post_id} updates title correctly", False,
                        f"Expected 'QA Firestore Updated', got '{post.get('title')}'")
        else:
            log_test(f"PUT /api/blog/{created_post_id} returns 200", False,
                    f"Got status {response.status_code}")
    except Exception as e:
        log_test(f"PUT /api/blog/{created_post_id}", False, f"Exception: {str(e)}")
else:
    log_test("PUT /api/blog/{id}", False, "No post ID or token available")


# ============================================================================
# TEST 10: POST /api/blog/upload WITHOUT token - Should return 401
# ============================================================================
print("\n[Test 10] POST /api/blog/upload WITHOUT token - Should return 401")
try:
    # Create a small test image (1x1 red pixel PNG)
    img_data = base64.b64decode("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==")
    files = {'file': ('test.png', BytesIO(img_data), 'image/png')}
    
    response = requests.post(f"{BASE_URL}/blog/upload", files=files, timeout=10)
    print_response(response)
    
    if response.status_code == 401:
        log_test("POST /api/blog/upload without token returns 401", True)
    else:
        log_test("POST /api/blog/upload without token returns 401", False,
                f"Got status {response.status_code} instead of 401")
except Exception as e:
    log_test("POST /api/blog/upload without token", False, f"Exception: {str(e)}")


# ============================================================================
# TEST 11: POST /api/blog/upload WITH token - Should return base64 JPEG data URL
# ============================================================================
print("\n[Test 11] POST /api/blog/upload WITH token - Should return base64 JPEG data URL")
if admin_token:
    try:
        # Create a small test image (1x1 red pixel PNG)
        img_data = base64.b64decode("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==")
        files = {'file': ('test.png', BytesIO(img_data), 'image/png')}
        
        response = requests.post(f"{BASE_URL}/blog/upload",
                                files=files,
                                headers={"X-Admin-Token": admin_token},
                                timeout=10)
        print_response(response)
        
        if response.status_code == 200:
            data = response.json()
            if 'url' in data:
                url = data['url']
                # Backend compresses images to JPEG
                if url.startswith('data:image/jpeg;base64,'):
                    log_test("POST /api/blog/upload with token returns JPEG base64 data URL", True,
                            f"URL prefix: {url[:60]}...")
                else:
                    log_test("POST /api/blog/upload returns JPEG data URL", False,
                            f"Expected 'data:image/jpeg;base64,', got '{url[:50]}...'")
            else:
                log_test("POST /api/blog/upload returns url", False,
                        "Response missing 'url' field")
        else:
            log_test("POST /api/blog/upload with token returns 200", False,
                    f"Got status {response.status_code}")
    except Exception as e:
        log_test("POST /api/blog/upload with token", False, f"Exception: {str(e)}")
else:
    log_test("POST /api/blog/upload with token", False, "No admin token available")


# ============================================================================
# TEST 12: DELETE /api/blog/{id} WITHOUT token - Should return 401
# ============================================================================
print("\n[Test 12] DELETE /api/blog/{id} WITHOUT token - Should return 401")
if created_post_id:
    try:
        response = requests.delete(f"{BASE_URL}/blog/{created_post_id}", timeout=10)
        print_response(response)
        
        if response.status_code == 401:
            log_test(f"DELETE /api/blog/{created_post_id} without token returns 401", True)
        else:
            log_test(f"DELETE /api/blog/{created_post_id} without token returns 401", False,
                    f"Got status {response.status_code} instead of 401")
    except Exception as e:
        log_test(f"DELETE /api/blog/{created_post_id} without token", False, f"Exception: {str(e)}")
else:
    log_test("DELETE /api/blog/{id} without token", False, "No post ID available")


# ============================================================================
# TEST 13: DELETE /api/blog/{id} WITH token - Should delete post
# ============================================================================
print("\n[Test 13] DELETE /api/blog/{id} WITH token - Should delete post")
if created_post_id and admin_token:
    try:
        response = requests.delete(f"{BASE_URL}/blog/{created_post_id}",
                                  headers={"X-Admin-Token": admin_token},
                                  timeout=10)
        print_response(response)
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success') == True:
                log_test(f"DELETE /api/blog/{created_post_id} with token returns success", True,
                        "Post deleted successfully")
                # Remove from cleanup list since we deleted it
                if created_post_id in created_test_posts:
                    created_test_posts.remove(created_post_id)
            else:
                log_test(f"DELETE /api/blog/{created_post_id} returns success:true", False,
                        f"Response: {data}")
        else:
            log_test(f"DELETE /api/blog/{created_post_id} returns 200", False,
                    f"Got status {response.status_code}")
    except Exception as e:
        log_test(f"DELETE /api/blog/{created_post_id}", False, f"Exception: {str(e)}")
else:
    log_test("DELETE /api/blog/{id} with token", False, "No post ID or token available")


# ============================================================================
# TEST 14: GET /api/blog/{slug} after delete - Should return 404
# ============================================================================
print("\n[Test 14] GET /api/blog/{slug} after delete - Should return 404")
if created_post_slug:
    try:
        response = requests.get(f"{BASE_URL}/blog/{created_post_slug}", timeout=10)
        print_response(response)
        
        if response.status_code == 404:
            log_test(f"GET /api/blog/{created_post_slug} returns 404 after deletion", True)
        else:
            log_test(f"GET /api/blog/{created_post_slug} returns 404 after deletion", False,
                    f"Got status {response.status_code} instead of 404")
    except Exception as e:
        log_test(f"GET /api/blog/{created_post_slug} after deletion", False, f"Exception: {str(e)}")
else:
    log_test("GET /api/blog/{slug} after deletion", False, "No post slug available")


# ============================================================================
# CLEANUP: Delete any remaining test posts
# ============================================================================
print("\n" + "=" * 80)
print("CLEANUP: Removing test data from Firestore")
print("=" * 80)

if created_test_posts and admin_token:
    for post_id in created_test_posts:
        try:
            print(f"\nCleaning up test post: {post_id}")
            response = requests.delete(f"{BASE_URL}/blog/{post_id}",
                                      headers={"X-Admin-Token": admin_token},
                                      timeout=10)
            if response.status_code == 200:
                print(f"✅ Successfully deleted test post {post_id}")
            else:
                print(f"⚠️  Failed to delete test post {post_id}: Status {response.status_code}")
        except Exception as e:
            print(f"⚠️  Error deleting test post {post_id}: {str(e)}")
else:
    print("No test posts to clean up")


# ============================================================================
# SUMMARY
# ============================================================================
print("\n" + "=" * 80)
print("TEST SUMMARY - FIRESTORE MIGRATION VERIFICATION")
print("=" * 80)

passed = sum(1 for r in test_results if r['passed'])
failed = sum(1 for r in test_results if not r['passed'])
total = len(test_results)

print(f"\nTotal Tests: {total}")
print(f"Passed: {passed} ✅")
print(f"Failed: {failed} ❌")
print(f"Success Rate: {(passed/total*100):.1f}%")

if failed > 0:
    print("\n" + "=" * 80)
    print("FAILED TESTS:")
    print("=" * 80)
    for r in test_results:
        if not r['passed']:
            print(f"\n❌ {r['name']}")
            if r['details']:
                print(f"   {r['details']}")

print("\n" + "=" * 80)
print("END OF TEST SUITE")
print("=" * 80)
