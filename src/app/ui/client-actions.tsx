"use client";

import { useMemo, useState } from "react";

type Props = {
  url: string;
};

export default function ClientActions({ url }: Props) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  const displayUrl = useMemo(() => {
    try {
      const parsed = new URL(url);
      return parsed.href.replace(/\/$/, "");
    } catch {
      return url;
    }
  }, [url]);

  async function onCopy() {
    setCopyError(null);
    try {
      await navigator.clipboard.writeText(displayUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopyError("Kopieren nicht möglich");
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={onCopy}
        className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/15 bg-transparent px-6 text-sm font-semibold text-white/90 transition hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:w-auto"
        aria-label="Link kopieren"
      >
        {copied ? "Kopiert" : "Link kopieren"}
        {copyError ? <span className="ml-2 text-white/50">({copyError})</span> : null}
      </button>
    </div>
  );
}
