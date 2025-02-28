// useLanguageSettings.ts
import { useLanguage } from '@/context/Language';
import i18n from '@/context/translation';
import { useEffect } from 'react';

const useLanguageSettings = () => {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== language) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, [language, setLanguage]);

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    i18n.changeLanguage(value);
    localStorage.setItem("language", value);
  };

  return { language, handleLanguageChange };
};

export default useLanguageSettings;
