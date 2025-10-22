"use client";

import React, { useState, useEffect } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from "next/navigation";

// firestoreからのSong型をインポート
import { Song } from "@/types/songs";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import SongDetailContent from "@/app/components/SongDetails/SongDetailContent";

interface MainProps {
  songsData: Song[];
}

// アフィリエイトリンクの判定関数
// URLが楽天またはAmazonのアフィリエイトリンクかどうかを判定
// MEMO: レンダリング時に毎回読込みされないように、コンポーネントの外に定義
const isAffiliateLink = (url: string): boolean => {
  if (!url) return false;

  const rakutenPatterns = [
    "hb.afl.rakuten.co.jp",
    "af.moshimo.com",
    "px.a8.net",
    "rakuten.co.jp",
  ];

  const amazonPatterns = [
    "amazon.co.jp",
    // "amzn.to",
    "amazon.com",
    "associates-amazon.com",
  ];

  const allAffiliatePatterns = [...rakutenPatterns, ...amazonPatterns];

  return allAffiliatePatterns.some((pattern) => url.includes(pattern));
};

const Main = ({ songsData }: MainProps) => {
  const t = useTranslations('SongListClient');
  const pathname = usePathname();
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  // パスから楽曲IDを取得して該当楽曲を設定
  useEffect(() => {
    const songIdMatch = pathname.match(/^\/(?:[a-z]{2}(?:-[A-Z]{2})?)?\/song\/([^/]+)\/?$/);

    if (songIdMatch) {
      const songId = songIdMatch[1];
      const song = songsData.find((s) => s.id === songId);
      setSelectedSong(song || null);

      if (song) {
        console.log(`🎵 [Main] 楽曲詳細表示: ${song.name}`);
      } else {
        console.log(`🎵 [Main] 楽曲が見つかりません: ${songId}`);
      }
    } else {
      // ホームページまたは他のページ
      setSelectedSong(null);
      console.log(`🎵 [Main] ホームページ表示`);
    }
  }, [pathname, songsData]);

  // 楽曲詳細表示
  console.log("Selected song was", selectedSong)
  if (selectedSong) {
    return <SongDetailContent song={selectedSong} />;
  }

  // ホームページ表示（空白）
  return <HomeContent songsCount={songsData.length} />;
};

// ホームページの空白コンテンツ
const HomeContent = ({ songsCount }: { songsCount: number }) => {
  const t = useTranslations('HomeContent');
  return (
    <div className="flex items-center justify-center h-full min-h-[60vh]">
      <div className="text-center space-y-4">
        <div className="text-6xl mb-4">🎵</div>
        <h2 className="text-2xl font-semibold text-gray-700">
	{t('select-song-disc')} 
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
	  {t('select-song-instructions')} 
        </p>
        <div className="mt-8 text-sm text-gray-400">
	  <p>{t('song-count', {count: songsCount})}</p>
          <p>{t('search-tip')}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
