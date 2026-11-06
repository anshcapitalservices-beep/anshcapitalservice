import React, { useEffect, useState } from "react";
import { Newspaper, ExternalLink, Calendar } from "lucide-react";
import { newsApi } from "../../lib/api";
import Reveal from "../Reveal";

const INITIAL = 5;

const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
};

// External links open in a new tab and pass no ranking credit to the source.
const NewsLink = ({ url, className, children }) =>
  url ? (
    <a href={url} target="_blank" rel="noopener noreferrer nofollow" className={className}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );

const Meta = ({ item, light = false }) => (
  <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs ${light ? "text-white/60" : "text-slate-400"}`}>
    {item.category && (
      <span className="font-bold tracking-wider uppercase text-gold">{item.category}</span>
    )}
    <span className="inline-flex items-center gap-1">
      <Calendar className="w-3.5 h-3.5" />
      {formatDate(item.news_date)}
    </span>
    {item.source && <span>· {item.source}</span>}
  </div>
);

/**
 * "Latest Finance News" on the home page. Items are added in /admin → News.
 * The section stays hidden until at least one item is published.
 */
const FinanceNews = () => {
  const [items, setItems] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    newsApi
      .list(12)
      .then((res) => setItems(Array.isArray(res?.data) ? res.data : []))
      .catch(() => setItems([]));
  }, []);

  if (items.length === 0) return null;

  const [lead, ...rest] = items;
  const visible = showAll ? rest : rest.slice(0, INITIAL - 1);

  return (
    <section id="finance-news" className="bg-white py-16 md:py-24 border-t border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-semibold tracking-wider uppercase mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            Market Updates
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
            Latest <span className="text-gold italic font-normal">Finance News</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-xl leading-relaxed">
            Key updates from insurance, mutual funds, banking and the markets, picked by our advisors.
          </p>
        </Reveal>

        <div className="mt-8 md:mt-12 grid lg:grid-cols-5 gap-6">
          {/* Lead story */}
          <NewsLink
            url={lead.url}
            className="group lg:col-span-2 flex flex-col justify-between rounded-2xl bg-navy p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(11,31,58,0.35)]"
          >
            <div>
              <Meta item={lead} light />
              <h3 className="mt-4 font-display text-2xl md:text-[1.7rem] font-bold text-white leading-snug group-hover:text-gold transition-colors">
                {lead.title}
              </h3>
              {lead.summary && (
                <p className="mt-4 text-sm md:text-[15px] text-white/75 leading-relaxed">{lead.summary}</p>
              )}
            </div>
            {lead.url && (
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                Read full story <ExternalLink className="w-4 h-4" />
              </span>
            )}
          </NewsLink>

          {/* Other stories */}
          {visible.length > 0 && (
            <ul className="lg:col-span-3 rounded-2xl border border-slate-200/90 bg-[#FAF9F5] divide-y divide-slate-200/80">
              {visible.map((item) => (
                <li key={item.id}>
                  <NewsLink
                    url={item.url}
                    className="group flex gap-4 p-5 md:p-6 hover:bg-white transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                  >
                    <div className="flex-1 min-w-0">
                      <Meta item={item} />
                      <h3 className="mt-1.5 font-semibold text-navy leading-snug group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      {item.summary && (
                        <p className="mt-1.5 text-sm text-slate-500 leading-relaxed line-clamp-2">{item.summary}</p>
                      )}
                    </div>
                    {item.url && (
                      <ExternalLink className="w-4 h-4 mt-1 shrink-0 text-slate-300 group-hover:text-gold transition-colors" />
                    )}
                  </NewsLink>
                </li>
              ))}
            </ul>
          )}
        </div>

        {rest.length > INITIAL - 1 && (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="text-sm font-semibold text-navy hover:text-gold py-2 px-4 rounded-lg border border-slate-200 hover:border-gold/50 bg-white shadow-sm"
            >
              {showAll ? "Show fewer" : `Show all ${items.length} updates`}
            </button>
          </div>
        )}

        <p className="mt-6 text-xs text-slate-400">
          News is summarised for general information and is not investment advice. Links open the original source.
        </p>
      </div>
    </section>
  );
};

export default FinanceNews;
