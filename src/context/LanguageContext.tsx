import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import azData from '../DB/az.json';
import enData from '../DB/en.json';
import ruData from '../DB/ru.json';

type Language = 'az' | 'en' | 'ru';

type DataType = typeof azData;

interface LanguageContextProps {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  data: DataType;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const dataMap: Record<Language, DataType> = {
  az: azData,
  en: enData,
  ru: ruData,
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('az');

  useEffect(() => {
    const savedLang = localStorage.getItem('appLanguage') as Language;
    if (savedLang && ['az', 'en', 'ru'].includes(savedLang)) {
      setCurrentLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('appLanguage', lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        data: dataMap[currentLanguage],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
