import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Reveal from "../components/Reveal";
import { blogApi } from "../lib/api";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ready | notfound

  useEffect(() => {
    setStatus("loading");
    blogApi
      .get(slug)
      .then((res) => {
        setPost(res.data);
        setStatus("ready");
        if (res.data?.title) {
          document.title = `${res.data.title} | ANSH Capital Services`;
        }
      })
      .catch(() => setStatus("notfound"));
  }, [slug]);

  if (status === "loading") {
    return (
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-20">
        <div className="h-4 w-24 bg-slate-100 rounded animate-pulse" />
        <div className="h-10 w-3/4 bg-slate-100 rounded animate-pulse mt-4" />
        <div className="h-72 bg-slate-100 rounded-2xl animate-pulse mt-8" />
        <div className="space-y-3 mt-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-3 bg-slate-100 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (status === "notfound") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-28 text-center">
        <h1 className="font-display text-3xl font-bold text-navy">Article not found</h1>
        <p className="mt-3 text-slate-500">The article you're looking for doesn't exist.</p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white">
      {/* header */}
      <div className="bg-navy">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="text-[11px] font-bold tracking-wider text-gold uppercase">
            {post.category}
          </span>
          <h1 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/60">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-gold" /> {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gold" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" /> {post.read_time}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6 -mt-8 md:-mt-10">
        <Reveal className="rounded-2xl overflow-hidden shadow-[0_30px_60px_-24px_rgba(11,31,58,0.4)]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </Reveal>

        <div className="py-10 md:py-14">
          {post.excerpt && (
            <p className="text-lg text-navy font-medium leading-relaxed mb-8 border-l-4 border-gold pl-4">
              {post.excerpt}
            </p>
          )}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
