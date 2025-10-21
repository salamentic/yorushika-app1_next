// app/(privacy)/[locale]/privacy-policy/layout.tsx
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';

export const metadata = {
  title: 'プライバシーポリシー | 月猫図書館',
};

export default function PrivacyLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
}) {
  setRequestLocale(locale);
  return (
    <div className="bg-gray-50 min-h-screen">
      <NextIntlClientProvider locale={locale}>
      {children}
      </NextIntlClientProvider>
    </div>
  );
}
