'use client';

import { Locale, localeLabels, locales } from '@/i18n/setting';
import {useLocale,} from 'next-intl';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

const {useRouter, usePathname} = createSharedPathnamesNavigation({locales});

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: Locale) => {
    router.push(pathname, {locale: newLocale});
  };

  return (
    <div className="fixed top-5 right-5">
      <select
        onChange={(e) => handleChange(e.target.value as Locale)}
        value={locale}
        className="bg-white border border-gray-300 rounded-md px-4 py-2"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeLabels[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}