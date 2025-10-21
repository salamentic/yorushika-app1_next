// src/app/components/LocaleSwitcherSelect.tsx
'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {PropsWithChildren, useEffect} from 'react';

const stripLocale = (p: string) => p.replace(/^\/(en|ja)(?=\/|$)/, '') || '/';

export default function LocaleSwitcherSelect(
  {label, children}: PropsWithChildren<{label?: string}>
) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // sanity: log the types so we can see if hooks exist at runtime
  useEffect(() => {
    // should print: function function
    // if you see 'undefined', the import path is wrong or the helper isn't built
    // eslint-disable-next-line no-console
    console.log('[nav hooks]', typeof usePathname, typeof useRouter);
  }, []);

  const onChange = (next: 'en' | 'ja') => {
    const clean = stripLocale(pathname);
    router.replace(clean, {locale: next});
  };

  return (
    <label className="inline-flex items-center gap-2">
      {label ? <span>{label}</span> : null}
      <select value={locale} onChange={(e) => onChange(e.target.value as 'en' | 'ja')}>
        {children}
      </select>
    </label>
  );
}

