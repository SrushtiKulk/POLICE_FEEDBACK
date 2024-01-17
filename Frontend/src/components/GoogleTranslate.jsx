// GoogleTranslate.js
import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      };
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;