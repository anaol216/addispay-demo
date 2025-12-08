// src/components/CodeBlock.tsx
"use client"; // Required for App Router when using hooks like useEffect

import React, { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
// Import your preferred theme's CSS file
import 'highlight.js/styles/atom-one-dark.css'; 
import { FaCopy, FaCheck } from "react-icons/fa";

// Define props inline to avoid dependency issues
interface CodeBlockProps {
  code: string;
  language: string;
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
  availableLanguages?: string[];
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language, 
  currentLanguage, 
  onLanguageChange,
  availableLanguages = ['node', 'python']
}) => {
  const codeRef = useRef<HTMLElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.removeAttribute('data-highlighted');
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]); 

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Could not copy code. Please try again.'); 
      });
  };

  const copyButtonClass = isCopied 
    ? 'text-green-400' 
    : 'text-gray-400 hover:text-white';

  const CopyIcon = isCopied ? FaCheck : FaCopy;

  return (
    <div className="flex flex-col w-full">
      <div className='flex justify-between rounded-t-md bg-gray-700 p-2'>
        <div>
          {availableLanguages.map((lang) => (
            <button 
              key={lang}
              className={`mr-2 px-3 py-1 text-sm font-semibold cursor-pointer rounded-md transition-colors ${currentLanguage === lang ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-green-400'}`}
              onClick={() => onLanguageChange(lang)}
            >
              {lang}
            </button>
          ))}
        </div>

        <button onClick={handleCopy} className={`transition-colors ${copyButtonClass} cursor-pointer`} >
            <CopyIcon size={18} title={isCopied ? "Copied!" : "Copy code"} />
        </button>
      </div>

      <pre className="flex flex-col rounded-b-md overflow-x-auto bg-gray-900 p-4 items-start w-full m-0">
        <code ref={codeRef} className={`language-${language} text-sm md:text-base font-mono`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;