"use client";

import { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GoogleTranslate = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'tr', name: 'Turque' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'ar', name: 'العربية' },
    { code: 'zh-CN', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
  ];

  useEffect(() => {
    const addScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    window.googleTranslateElementInit = () => {
        console.log("Google Translate initialized");
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'fr,en,es,de,it,pt,ar,zh-CN,ja,ko',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      };
      

    if (!mounted) {
      const script = addScript();
      setMounted(true);

      return () => {
        document.body.removeChild(script);
        delete window.googleTranslateElementInit;
      };
    }
  }, [mounted]);

  useEffect(() => {
    const userLanguage = navigator.language.split('-')[0];
    const defaultLang = languages.find((lang) => lang.code === userLanguage) ? userLanguage : 'tr';
    setSelectedLanguage(defaultLang);
  }, []);

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    const iframe = document.querySelector('.goog-te-menu-frame');
    
    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const select = iframeDoc.querySelector('.goog-te-combo');
      
      if (select) {
        select.value = value;
        select.dispatchEvent(new Event('change'));
      }
    }
  };

  return (
    <div className="relative">
      <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-32">
          <Globe className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden" />

      {/* Styles to hide Google Translate widget and fix common issues */}
      <style jsx global>{`
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .goog-te-gadget {
          height: 0;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default GoogleTranslate;