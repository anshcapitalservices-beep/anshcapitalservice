import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  Lock,
  Plus,
  Pencil,
  Trash2,
  LogOut,
  ArrowLeft,
  Upload,
  Loader2,
  ExternalLink,
} from "lucide-react";
import Logo from "../components/Logo";
import RichTextEditor from "../components/RichTextEditor";
import { blogApi, getToken, setToken, clearToken } from "../lib/api";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

const emptyForm = {
  title: "",
  category: "",
  excerpt: "",
  read_time: "5 min read",
  author: "ANSH Capital",
  image: "",
  content: "",
};

const Admin = () => {
  const [authed, setAuthed] = useState(!!getToken());
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [mode, setMode] = useState("list"); // list | edit
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const loadPosts = () => {
    blogApi.list("All").then((res) => setPosts(res.data)).catch(() => {});
    blogApi.categories().then((res) => setCategories(res.data.categories)).catch(() => {});
  };

  useEffect(() => {
    document.title = "Admin Portal | ANSH Capital Services";
  }, []);

  useEffect(() => {
    if (authed) loadPosts();
  }, [authed]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoggingIn(true);
    try {
      const res = await blogApi.login(password);
      setToken(res.data.token);
      setAuthed(true);
      toast.success("Welcome back!");
    } catch (err) {
      toast.error("Invalid password. Please try again.");
    } finally {
      setLoggingIn(false);
    }
  };

  const logout = () => {
    clearToken();
    setAuthed(false);
    setPassword("");
  };

  const startNew = () => {
    setForm(emptyForm);
    setEditingId(null);
    setMode("edit");
  };

  const startEdit = (post) => {
    setForm({
      title: post.title,
      category: post.category,
      excerpt: post.excerpt,
      read_time: post.read_time,
      author: post.author,
      image: post.image,
      content: post.content,
    });
    setEditingId(post.id);
    setMode("edit");
  };

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await blogApi.upload(file);
      setForm((f) => ({ ...f, image: res.data.url }));
      toast.success("Image uploaded");
    } catch (err) {
      handleAuthError(err, "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleAuthError = (err, fallback) => {
    if (err?.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      logout();
    } else {
      toast.error(fallback);
    }
  };

  const save = async (e) => {
    e.preventDefault();
    if (!form.title || !form.category) {
      toast.error("Title and category are required.");
      return;
    }
    setSaving(true);
    try {
      if (editingId) {
        await blogApi.update(editingId, form);
        toast.success("Article updated");
      } else {
        await blogApi.create(form);
        toast.success("Article published");
      }
      setMode("list");
      loadPosts();
    } catch (err) {
      handleAuthError(err, "Could not save article");
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this article permanently?")) return;
    try {
      await blogApi.remove(id);
      toast.success("Article deleted");
      loadPosts();
    } catch (err) {
      handleAuthError(err, "Could not delete article");
    }
  };

  // ---------------- Login screen ----------------
  if (!authed) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-white rounded-2xl p-8 shadow-2xl">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          <div className="h-12 w-12 rounded-full bg-cream flex items-center justify-center mx-auto mb-4">
            <Lock className="h-6 w-6 text-gold" />
          </div>
          <h1 className="text-center font-display text-2xl font-bold text-navy">
            Admin Login
          </h1>
          <p className="text-center text-sm text-slate-500 mt-1 mb-6">
            Enter your password to manage articles.
          </p>
          <form onSubmit={handleLogin}>
            <Label htmlFor="pw" className="text-navy">Password</Label>
            <Input
              id="pw"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-2"
              autoFocus
            />
            <button
              type="submit"
              disabled={loggingIn}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3 rounded-md transition-colors disabled:opacity-60"
            >
              {loggingIn && <Loader2 className="h-4 w-4 animate-spin" />}
              Log In
            </button>
          </form>
          <Link to="/" className="mt-5 flex items-center justify-center gap-1.5 text-sm text-slate-400 hover:text-gold">
            <ArrowLeft className="h-4 w-4" /> Back to website
          </Link>
        </div>
      </div>
    );
  }

  // ---------------- Editor ----------------
  if (mode === "edit") {
    return (
      <div className="min-h-screen bg-cream">
        <div className="bg-navy">
          <div className="max-w-4xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
            <button onClick={() => setMode("list")} className="inline-flex items-center gap-2 text-white/70 hover:text-gold text-sm">
              <ArrowLeft className="h-4 w-4" /> Back to articles
            </button>
            <Logo variant="light" />
          </div>
        </div>
        <form onSubmit={save} className="max-w-4xl mx-auto px-4 md:px-6 py-8">
          <h1 className="font-display text-2xl font-bold text-navy mb-6">
            {editingId ? "Edit Article" : "New Article"}
          </h1>
          <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 space-y-5">
            <div>
              <Label htmlFor="title" className="text-navy">Title *</Label>
              <Input id="title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Article title" className="mt-2" />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="category" className="text-navy">Category *</Label>
                <Input id="category" list="cats" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="e.g. Mutual Funds" className="mt-2" />
                <datalist id="cats">
                  {categories.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </div>
              <div>
                <Label htmlFor="read" className="text-navy">Read time</Label>
                <Input id="read" value={form.read_time} onChange={(e) => setForm({ ...form, read_time: e.target.value })} placeholder="5 min read" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="author" className="text-navy">Author</Label>
                <Input id="author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="mt-2" />
              </div>
            </div>

            <div>
              <Label htmlFor="excerpt" className="text-navy">Excerpt</Label>
              <Textarea id="excerpt" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2} placeholder="Short summary shown on cards" className="mt-2" />
            </div>

            <div>
              <Label className="text-navy">Cover Image</Label>
              <div className="mt-2 flex items-center gap-4">
                <label className="inline-flex items-center gap-2 cursor-pointer bg-cream hover:bg-gold/15 text-navy text-sm font-medium px-4 py-2.5 rounded-md transition-colors">
                  {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                  Upload image
                  <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
                </label>
                {form.image && (
                  <img src={form.image} alt="cover" className="h-14 w-24 object-cover rounded-md border border-slate-200" />
                )}
              </div>
            </div>

            <div>
              <Label className="text-navy">Content</Label>
              <div className="mt-2">
                <RichTextEditor value={form.content} onChange={(html) => setForm({ ...form, content: html })} />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button type="submit" disabled={saving} className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3 rounded-md transition-colors disabled:opacity-60">
                {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                {editingId ? "Update Article" : "Publish Article"}
              </button>
              <button type="button" onClick={() => setMode("list")} className="px-6 py-3 rounded-md border border-slate-200 text-navy font-medium hover:bg-slate-50">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  // ---------------- List ----------------
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-navy">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Logo variant="light" />
          <div className="flex items-center gap-3">
            <Link to="/blog" className="hidden sm:inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-gold">
              View blog <ExternalLink className="h-4 w-4" />
            </Link>
            <button onClick={logout} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-2xl font-bold text-navy">Manage Articles</h1>
            <p className="text-sm text-slate-500">{posts.length} article(s) published</p>
          </div>
          <button onClick={startNew} className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-5 py-2.5 rounded-md transition-colors">
            <Plus className="h-4 w-4" /> New Article
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-100">
          {posts.length === 0 && (
            <div className="p-10 text-center text-slate-400">No articles yet. Create your first one!</div>
          )}
          {posts.map((post) => (
            <div key={post.id} className="flex items-center gap-4 p-4">
              <img src={post.image} alt={post.title} className="h-14 w-20 object-cover rounded-md shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-wide text-gold uppercase">{post.category}</span>
                  <span className="text-xs text-slate-400">• {post.date}</span>
                </div>
                <h3 className="font-semibold text-navy truncate">{post.title}</h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => startEdit(post)} className="h-9 w-9 rounded-md flex items-center justify-center text-navy hover:bg-cream hover:text-gold transition-colors" title="Edit">
                  <Pencil className="h-4 w-4" />
                </button>
                <button onClick={() => remove(post.id)} className="h-9 w-9 rounded-md flex items-center justify-center text-rose-500 hover:bg-rose-50 transition-colors" title="Delete">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
