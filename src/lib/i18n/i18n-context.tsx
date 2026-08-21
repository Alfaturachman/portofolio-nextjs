'use client';

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from 'react';
import en from './en';
import idDict from './id';

export type Lang = 'en' | 'id';

interface I18nContextType {
    lang: Lang;
    t: typeof en;
    toggleLang: () => void;
}

const I18nContext = createContext<I18nContextType>({
    lang: 'en',
    t: en,
    toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('en');

    useEffect(() => {
        const saved = localStorage.getItem('lang');
        if (saved === 'en' || saved === 'id') {
            // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable after mount; same pattern as theme-context
            setLang(saved);
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const toggleLang = () => {
        const next: Lang = lang === 'en' ? 'id' : 'en';
        setLang(next);
        localStorage.setItem('lang', next);
    };

    return (
        <I18nContext.Provider
            value={{ lang, t: lang === 'id' ? idDict : en, toggleLang }}
        >
            {children}
        </I18nContext.Provider>
    );
}

export const useI18n = () => useContext(I18nContext);
