// src/components/CodeBlock.tsx
"use client"; // Required for App Router when using hooks like useEffect

import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
// Import your preferred theme's CSS file
import 'highlight.js/styles/atom-one-dark.css'; 

import type { CodeBlockProps  }from '../interfaces'; 
// Assuming the interfaces file is one directory up: src/interfaces/index.ts

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
    return () => {
      // Any cleanup here
    };

  }, [code, language]); 

  return (
    <pre className="rounded-b-md overflow-x-auto bg-gray-900 p-4">
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;