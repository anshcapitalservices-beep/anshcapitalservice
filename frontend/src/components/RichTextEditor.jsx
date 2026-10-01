import React, { useRef, useEffect } from "react";
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Link2,
  Quote,
  Pilcrow,
} from "lucide-react";
import { sanitizeHtml } from "../lib/sanitize";

/**
 * Lightweight rich text editor built on contentEditable + execCommand.
 * Emits HTML string via onChange. Dependency-free for reliability.
 */
const RichTextEditor = ({ value, onChange, placeholder = "Write your article..." }) => {
  const ref = useRef(null);

  // Set initial / external value without disrupting the caret while typing.
  useEffect(() => {
    if (ref.current && ref.current.innerHTML !== (value || "") && document.activeElement !== ref.current) {
      ref.current.innerHTML = sanitizeHtml(value);
    }
  }, [value]);

  const emit = () => {
    if (ref.current) onChange(ref.current.innerHTML);
  };

  const exec = (cmd, arg = null) => {
    document.execCommand(cmd, false, arg);
    ref.current && ref.current.focus();
    emit();
  };

  const addLink = () => {
    const url = (window.prompt("Enter URL", "https://") || "").trim();
    if (!url) return;
    if (!/^(https?:|mailto:|tel:|\/|#)/i.test(url)) {
      window.alert("Please enter a link starting with https://, mailto: or tel:");
      return;
    }
    exec("createLink", url);
  };

  const Btn = ({ onClick, title, children }) => (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className="h-8 w-8 flex items-center justify-center rounded-md text-navy hover:bg-cream hover:text-gold transition-colors"
    >
      {children}
    </button>
  );

  return (
    <div className="border border-slate-200 rounded-md overflow-hidden">
      <div className="flex flex-wrap items-center gap-0.5 border-b border-slate-200 bg-slate-50 px-2 py-1.5">
        <Btn title="Bold" onClick={() => exec("bold")}><Bold className="h-4 w-4" /></Btn>
        <Btn title="Italic" onClick={() => exec("italic")}><Italic className="h-4 w-4" /></Btn>
        <div className="w-px h-5 bg-slate-200 mx-1" />
        <Btn title="Heading" onClick={() => exec("formatBlock", "H2")}><Heading2 className="h-4 w-4" /></Btn>
        <Btn title="Sub-heading" onClick={() => exec("formatBlock", "H3")}><Heading3 className="h-4 w-4" /></Btn>
        <Btn title="Paragraph" onClick={() => exec("formatBlock", "P")}><Pilcrow className="h-4 w-4" /></Btn>
        <div className="w-px h-5 bg-slate-200 mx-1" />
        <Btn title="Bullet list" onClick={() => exec("insertUnorderedList")}><List className="h-4 w-4" /></Btn>
        <Btn title="Numbered list" onClick={() => exec("insertOrderedList")}><ListOrdered className="h-4 w-4" /></Btn>
        <Btn title="Quote" onClick={() => exec("formatBlock", "BLOCKQUOTE")}><Quote className="h-4 w-4" /></Btn>
        <Btn title="Link" onClick={addLink}><Link2 className="h-4 w-4" /></Btn>
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={emit}
        onBlur={emit}
        data-placeholder={placeholder}
        className="rte blog-content min-h-[240px] max-h-[460px] overflow-y-auto px-4 py-3 focus:outline-none"
      />
    </div>
  );
};

export default RichTextEditor;
