'use client';

import { useMemo } from 'react';

type Props = {
  url: string;
  height?: number;
  /** Compact style (default) vs. full. */
  compact?: boolean;
  /** Optional className for the wrapper div */
  className?: string;
};

export default function SpotifyEmbed({ url, height, compact = true, className }: Props) {
  const embedUrl = useMemo(() => toSpotifyEmbedUrl(url), [url]);

  const iframeHeight = useMemo(() => {
    if (height) return height;
    if (!embedUrl) return 152;
    return /\/(album|playlist|show)\//.test(embedUrl) ? 352 : 152;
  }, [height, embedUrl]);

  if (!embedUrl) {
    return <p className="text-red-600 text-sm">Invalid or unsupported Spotify URL.</p>;
  }

  return (
    <div className={['w-full overflow-hidden rounded-xl shadow', className].filter(Boolean).join(' ')}>
      <iframe
        src={embedUrl + (compact ? '?utm_source=generator' : '')}
        width="100%"
        height={iframeHeight}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}

/** Accepts:
 *  - https://open.spotify.com/{type}/{id}[?si=...]
 *  - spotify:{type}:{id}
 *  Returns: https://open.spotify.com/embed/{type}/{id}
 */
export function toSpotifyEmbedUrl(input: string): string | null {
  try {
    if (input.startsWith('spotify:')) {
      const [, type, id] = input.split(':');
      if (validType(type) && id) return `https://open.spotify.com/embed/${type}/${id}`;
      return null;
    }
    const u = new URL(input);
    if (u.hostname !== 'open.spotify.com') return null;
    const [type, id] = u.pathname.split('/').filter(Boolean);
    if (validType(type) && id) return `https://open.spotify.com/embed/${type}/${id}`;
    return null;
  } catch {
    return null;
  }
}

function validType(t?: string) {
  return ['track', 'album', 'playlist', 'episode', 'show'].includes(t ?? '');
}
