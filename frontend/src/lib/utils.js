import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Ask Unsplash / Pexels for a resized, modern-format copy of a stock photo
 * instead of the multi-megabyte original. Other URLs are returned unchanged.
 */
export function optimizeImageUrl(url, width = 1200) {
  if (typeof url !== "string" || !/^https:\/\/images\.(unsplash|pexels)\.com\//.test(url)) {
    return url;
  }
  try {
    const u = new URL(url);
    if (!u.searchParams.has("w")) u.searchParams.set("w", String(width));
    if (u.hostname === "images.unsplash.com") {
      if (!u.searchParams.has("auto")) u.searchParams.set("auto", "format");
    } else {
      if (!u.searchParams.has("auto")) u.searchParams.set("auto", "compress");
      if (!u.searchParams.has("cs")) u.searchParams.set("cs", "tinysrgb");
    }
    return u.toString();
  } catch {
    return url;
  }
}
