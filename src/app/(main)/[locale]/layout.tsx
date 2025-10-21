// app/(main)/[locale]/layout.tsx
import type {Metadata} from 'next';
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import {getSongs} from '@/lib/songs';
import Header from '@/app/components/Header';
import Main from '@/app/components/Main/Main';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import Footer from '@/app/components/Footer';
import Loading from '@/app/loading';
import {Suspense} from 'react';

export const metadata: Metadata = {
  title: 'Your Site',
  keywords: ['ファンアート','新曲','エルマ','エイミー'],
};

// Revalidate as you had it (ISR)
export const revalidate = 3600;

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params;
}) {
  setRequestLocale(locale);

  // One-time fetch for the layout (Sidebar reuses it)
  const allSongs = await getSongs();
  console.log(`🎵 [MainLayout] ${allSongs.length}件の楽曲データを取得`);
  console.log('🎵 [MainLayout] レイアウトコンポーネントがレンダリングされました');

  return (
	<div>
	<NextIntlClientProvider locale={locale}>
          <Header />
          <div className="grid w-[97%] mx-auto grid-cols-1 lg:gap-4 lg:grid-cols-5">
            <div className="lg:h-[95vh] col-span-1 mt-5 mb-5 grid-item">
              <Sidebar songsData={allSongs} />
            </div>


          {/* メインコンテンツエリア */}
          <div className="col-span-1 p-2 mt-5 mb-5 bg-gray-100 rounded-md sm:col-span-4 grid-item">
            <main className="flex-1">
              {/* ✅ childrenの代わりにMainコンポーネントを表示 */}
              <Suspense fallback={<Loading />}>
                <Main songsData={allSongs} />
              </Suspense>
              {/* {children}  */}
            </main>
          </div>
          </div>
          <Footer />
	</NextIntlClientProvider>
	</div>
  );
}
