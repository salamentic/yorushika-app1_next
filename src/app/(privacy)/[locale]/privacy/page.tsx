import { getLocale } from 'next-intl/server';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import PrivacyEN from '@/app/components/Privacy/PrivacyEN';
import PrivacyJP from '@/app/components/Privacy/PrivacyJP';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 月猫図書館',
  description: '「月猫図書館」のプライバシーポリシーです。',
};

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  const isEnglish = locale === 'en';
  
  // Pick the component you want based on next-intl provided locale, and render it
  const PrivacyComp = isEnglish ? PrivacyEN : PrivacyJP;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PrivacyComp />
      <Footer />
    </div>
  );
}

