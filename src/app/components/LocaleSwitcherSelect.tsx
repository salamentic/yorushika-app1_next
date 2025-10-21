// src/app/components/LocaleSwitcherSelect.tsx
'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {PropsWithChildren, useEffect} from 'react';

// TODO: Make these localizations not hard-coded for future languages
const stripLocale = (p: string) => p.replace(/^\/(en|ja)(?=\/|$)/, '') || '/';

export default function LocaleSwitcherSelect(
  {label, children}: PropsWithChildren<{label?: string}>
) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onChange = (next: 'en' | 'ja') => {
    const clean = stripLocale(pathname);
    router.replace(clean, {locale: next});
  };

  return (
  <label className="flex flex-col items-end space-y-1">
    <select
      value={locale}
      onChange={(e) => onChange(e.target.value as 'en' | 'ja')}
      className="w-32 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      {children}
    </select>
  </label>
);
}

