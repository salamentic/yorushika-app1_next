// components/LanguageSwitcher.tsx
'use client';

import {useRouter, usePathname} from 'next/navigation';
import {useEffect, useMemo, useState} from 'react';

const LOCALES = ['en', 'ja'] as const;
const LABELS: Record<(typeof LOCALES)[number], string> = {
  en: 'English',
  ja: '日本語'
};
const FLAGS: Record<(typeof LOCALES)[number], string> = {
  en: '🇬🇧',
  ja: '🇯🇵'
};

// Regex to match and strip the locale prefix from pathname
const LOCALE_RE = /^\/(en|ja)(?=\/|$)/;

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Detect the active locale
  const activeLocale = useMemo<('en' | 'ja')>(() => {
    const match = pathname.match(LOCALE_RE);
    return (match?.[1] as 'en' | 'ja') ?? 'ja';
  }, [pathname]);

  const [value, setValue] = useState<'en' | 'ja'>(activeLocale);
  useEffect(() => setValue(activeLocale), [activeLocale]);

  const changeLanguage = (locale: 'en' | 'ja') => {
    const bare = pathname.replace(LOCALE_RE, '') || '/';
    router.push(`/${locale}${bare}`);
  };

  return (
    <div className="flex justify-end w-full">
      <div className="relative">
        <select
          className="
            appearance-none
            bg-white
            border border-gray-300
            rounded-md
            text-gray-800
            px-3 py-2 pr-8
            cursor-pointer
            focus:outline-none
            focus:ring-2 focus:ring-blue-400
            transition
          "
          value={value}
          onChange={(e) => changeLanguage(e.target.value as 'en' | 'ja')}
        >
          {LOCALES.map((loc) => (
            <option key={loc} value={loc}>
              {FLAGS[loc]} {LABELS[loc]}
            </option>
          ))}
        </select>
        {/* Down arrow icon */}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          ⌄
        </span>
      </div>
    </div>
  );
}
