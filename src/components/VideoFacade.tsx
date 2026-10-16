"use client";

import { Play } from "lucide-react";
import { useState } from "react";

/**
 * Click-to-play facade. The iframe is never mounted until the user asks for
 * it, so nothing third-party loads on first paint and the poster frame
 * reserves the exact 16:9 box (no layout shift when the embed swaps in).
 */
export function VideoFacade({
  videoId,
  title,
  poster,
}: {
  videoId: string;
  title: string;
  poster: string;
}) {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[16px] border border-border bg-surface">
      {play ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="group absolute inset-0 size-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            className="absolute inset-0 size-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent" />

          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-16 place-items-center rounded-full border border-accent/40 bg-canvas/70 text-accent-3 backdrop-blur-sm transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:scale-105 md:size-20">
              <Play className="ml-1 size-6 fill-current md:size-7" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
