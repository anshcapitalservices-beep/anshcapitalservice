import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Loader2, ExternalLink, EyeOff } from "lucide-react";
import { newsApi } from "../lib/api";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const CATEGORIES = ["Markets", "RBI & Banking", "Mutual Funds", "Insurance", "Loans", "Tax", "Economy"];

const today = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

const blank = () => ({
  title: "",
  summary: "",
  category: "",
  source: "",
  url: "",
  news_date: today(),
  published: true,
});

/** Admin list and editor for the home page "Latest Finance News" section. */
const AdminNews = ({ onAuthError }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(null); // null = list view
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = () => {
    setLoading(true);
    newsApi
      .listAll()
      .then((res) => setItems(res.data))
      .catch((err) => onAuthError(err, "Could not load news"))
      .finally(() => setLoading(false));
  };

  useEffect(load, []); // eslint-disable-line react-hooks/exhaustive-deps

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const startNew = () => {
    setEditingId(null);
    setForm(blank());
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setForm({ ...blank(), ...item });
  };

  const save = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      toast.error("Headline is required.");
      return;
    }
    const url = form.url.trim();
    if (url && !/^https?:\/\//i.test(url)) {
      toast.error("Link must start with https://");
      return;
    }
    const { title, summary, category, source, news_date, published } = form;
    const data = { title, summary, category, source, url, news_date, published };
    setSaving(true);
    try {
      if (editingId) {
        await newsApi.update(editingId, data);
        toast.success("News updated");
      } else {
        await newsApi.create(data);
        toast.success(published ? "News published" : "News saved as hidden");
      }
      setForm(null);
      load();
    } catch (err) {
      onAuthError(err, "Could not save news");
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this news item permanently?")) return;
    try {
      await newsApi.remove(id);
      toast.success("News deleted");
      load();
    } catch (err) {
      onAuthError(err, "Could not delete news");
    }
  };

  // ---------------- Editor ----------------
  if (form) {
    return (
      <form onSubmit={save}>
        <h1 className="font-display text-2xl font-bold text-navy mb-6">
          {editingId ? "Edit News" : "Add News"}
        </h1>
        <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 space-y-5">
          <div>
            <Label htmlFor="n-title" className="text-navy">Headline *</Label>
            <Input id="n-title" value={form.title} onChange={set("title")} maxLength={200} placeholder="e.g. RBI keeps repo rate unchanged" className="mt-2" />
          </div>

          <div>
            <Label htmlFor="n-summary" className="text-navy">Summary</Label>
            <Textarea id="n-summary" value={form.summary} onChange={set("summary")} maxLength={600} rows={3} placeholder="Two or three lines in your own words: what happened and what it means for clients" className="mt-2" />
            <p className="mt-1 text-xs text-slate-400">{form.summary.length}/600</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="n-cat" className="text-navy">Category</Label>
              <Input id="n-cat" list="news-cats" value={form.category} onChange={set("category")} maxLength={60} placeholder="e.g. Mutual Funds" className="mt-2" />
              <datalist id="news-cats">
                {CATEGORIES.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>
            <div>
              <Label htmlFor="n-source" className="text-navy">Source</Label>
              <Input id="n-source" value={form.source} onChange={set("source")} maxLength={100} placeholder="e.g. RBI, SEBI, Economic Times" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="n-date" className="text-navy">News date</Label>
              <Input id="n-date" type="date" value={form.news_date} onChange={set("news_date")} className="mt-2" />
            </div>
          </div>

          <div>
            <Label htmlFor="n-url" className="text-navy">Link to original story (optional)</Label>
            <Input id="n-url" type="url" value={form.url} onChange={set("url")} maxLength={1000} placeholder="https://" className="mt-2" />
          </div>

          <label className="flex items-center gap-2 text-sm text-navy">
            <input type="checkbox" checked={form.published} onChange={set("published")} className="h-4 w-4 accent-[#d89626]" />
            Show on the home page
          </label>

          <div className="flex gap-3 pt-2">
            <button type="submit" disabled={saving} className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3 rounded-md transition-colors disabled:opacity-60">
              {saving && <Loader2 className="h-4 w-4 animate-spin" />}
              {editingId ? "Update News" : "Save News"}
            </button>
            <button type="button" onClick={() => setForm(null)} className="px-6 py-3 rounded-md border border-slate-200 text-navy font-medium hover:bg-slate-50">
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }

  // ---------------- List ----------------
  const live = items.filter((n) => n.published).length;
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-navy">Finance News</h1>
          <p className="text-sm text-slate-500">
            {live} shown on the home page (latest 12 appear){items.length > live ? `, ${items.length - live} hidden` : ""}
          </p>
        </div>
        <button onClick={startNew} className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-5 py-2.5 rounded-md transition-colors">
          <Plus className="h-4 w-4" /> Add News
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-100">
        {loading && items.length === 0 && (
          <div className="p-10 flex justify-center text-slate-400"><Loader2 className="h-5 w-5 animate-spin" /></div>
        )}
        {!loading && items.length === 0 && (
          <div className="p-10 text-center text-slate-400">
            No news yet. The home page section appears once you add the first item.
          </div>
        )}
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                {item.category && <span className="text-[10px] font-bold tracking-wide text-gold uppercase">{item.category}</span>}
                <span className="text-xs text-slate-400">{item.news_date}{item.source ? ` · ${item.source}` : ""}</span>
                {!item.published && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                    <EyeOff className="h-3 w-3" /> Hidden
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-navy truncate">{item.title}</h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {item.url && (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-md flex items-center justify-center text-slate-400 hover:bg-cream hover:text-gold transition-colors" title="Open link">
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <button onClick={() => startEdit(item)} className="h-9 w-9 rounded-md flex items-center justify-center text-navy hover:bg-cream hover:text-gold transition-colors" title="Edit">
                <Pencil className="h-4 w-4" />
              </button>
              <button onClick={() => remove(item.id)} className="h-9 w-9 rounded-md flex items-center justify-center text-rose-500 hover:bg-rose-50 transition-colors" title="Delete">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminNews;
