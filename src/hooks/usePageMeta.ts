import { useEffect } from "react";

interface PageMeta {
  /** Page title (will be suffixed with the site name). */
  title: string;
  /** Meta description, ≤160 chars. */
  description: string;
  /** Canonical path, e.g. "/home-purchase". Defaults to "/". */
  path?: string;
}

const SITE_NAME = "HB Mortgage Group";

/**
 * Lightweight per-page SEO meta manager for the SPA.
 * Sets document.title, meta description, and canonical link on mount.
 * The production canonical domain is pending owner confirmation;
 * until then canonicals use relative root-relative paths.
 */
export const usePageMeta = ({ title, description, path = "/" }: PageMeta) => {
  useEffect(() => {
    document.title =
      path === "/"
        ? `${title} — Maine & New Hampshire Residential Mortgages`
        : `${title} | ${SITE_NAME}`;

    setMeta("name", "description", description);
    setCanonical(path);
    setOgTag("og:title", document.title);
    setOgTag("og:description", description);
    setOgTag("og:url", path);
    setTwitterTag("twitter:title", document.title);
    setTwitterTag("twitter:description", description);
  }, [title, description, path]);
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setOgTag(property: string, content: string) {
  setMeta("property", property, content);
}

function setTwitterTag(name: string, content: string) {
  setMeta("name", name, content);
}

function setCanonical(path: string) {
  let el = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  // Root-relative canonical; absolute production domain pending owner confirmation.
  el.setAttribute("href", path);
}
