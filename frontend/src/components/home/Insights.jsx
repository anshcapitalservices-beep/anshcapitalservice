import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { insights as fallbackInsights, insightsIntro } from "../../mock/mock";
import { blogApi } from "../../lib/api";
import Reveal from "../Reveal";

const Insights = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    blogApi
      .list("All")
      .then((res) => setPosts(res.data.slice(0, 3)))
      .catch(() => setPosts([]));
  }, []);

  // Fall back to mock articles if the backend has none / fails.
  const items =
    posts.length > 0
      ? posts.map((p) => ({
          id: p.id,
          slug: p.slug,
          category: p.category,
          title: p.title,
          date: p.date,
          readTime: p.read_time,
          image: p.image,
        }))
      : fallbackInsights;

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          <Reveal className="lg:w-[26%] shrink-0">
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-3">
              {insightsIntro.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-bold text-navy leading-tight">
              {insightsIntro.titleLine1}
              <br />
              {insightsIntro.titleLine2}
            </h2>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              {insightsIntro.description}
            </p>
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors"
            >
              {insightsIntro.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
            {items.map((post, i) => (
              <Reveal key={post.id} delay={i * 90}>
                <Link
                  to={post.slug ? `/blog/${post.slug}` : "/blog"}
                  className="group block bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-[0_24px_50px_-24px_rgba(11,31,58,0.3)] transition-all duration-300 h-full"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-bold tracking-wider text-gold uppercase">
                      {post.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-navy leading-snug group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
