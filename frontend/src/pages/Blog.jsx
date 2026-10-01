import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { blogApi } from "../lib/api";
import { optimizeImageUrl } from "../lib/utils";

const SkeletonCard = () => (
  <div className="bg-white rounded-xl overflow-hidden border border-slate-100">
    <div className="h-48 bg-slate-100 animate-pulse" />
    <div className="p-5 space-y-3">
      <div className="h-3 w-20 bg-slate-100 rounded animate-pulse" />
      <div className="h-5 w-4/5 bg-slate-100 rounded animate-pulse" />
      <div className="h-3 w-full bg-slate-100 rounded animate-pulse" />
    </div>
  </div>
);

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    blogApi
      .categories()
      .then((res) => setCategories(["All", ...res.data.categories]))
      .catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    blogApi
      .list(active)
      .then((res) => setPosts(res.data))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [active]);

  return (
    <>
      <PageHeader
        eyebrow="LEARN & GROW"
        title="Financial Insights & Guides"
        subtitle="Explore our latest articles on investments, insurance, loans and financial planning for a better tomorrow."
        current="Blog"
      />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === c
                    ? "bg-gold text-white"
                    : "bg-cream text-navy hover:bg-gold/15"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              No articles found in this category yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={(i % 3) * 90}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-[0_24px_50px_-24px_rgba(11,31,58,0.3)] transition-all duration-300 h-full"
                  >
                    <div className="overflow-hidden">
                      <img
                        loading="lazy" decoding="async"
                        src={optimizeImageUrl(post.image)}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[11px] font-bold tracking-wider text-gold uppercase">
                        {post.category}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-bold text-navy leading-snug group-hover:text-gold transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>{post.date}</span>
                          <span className="h-1 w-1 rounded-full bg-slate-300" />
                          <span>{post.read_time}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                          Read <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
