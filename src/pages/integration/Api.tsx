import React, { useState } from 'react';
// Import a second icon for the "copied" state (e.g., FaCheck or FaCheckCircle)
import { FaCopy, FaCheck } from "react-icons/fa"; 
import CodeBlock from '../../components/CodeBlock.tsx'; 

export default function Api() {
    const codeExample = `
const apiKey = "**********************************";
const baseUrl = "https://uat.api.addispay.et/checkout-api/v1"; // for uat
const baseUrl = "https://api.addispay.et/checkout-api/v1"; // for main
    `.trim();

    const [currentLanguage, setCurrentLanguage] = useState('javascript');
    // State to track if the text has been recently copied
    const [isCopied, setIsCopied] = useState(false); 

    const handleCopy = () => {
        // 1. Copy the text to the clipboard
        navigator.clipboard.writeText(codeExample)
            .then(() => {
                // 2. Set the 'isCopied' state to true to change the icon/style
                setIsCopied(true);

                // 3. Set a timeout to reset the state after 3000 milliseconds (3 seconds)
                setTimeout(() => {
                    setIsCopied(false);
                }, 3000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                // Fallback action if copy fails (e.g., an alert)
                alert('Could not copy code. Please try again.'); 
            });
    };

    // Determine the style and icon based on the 'isCopied' state
    const copyButtonClass = isCopied 
        ? 'text-green-400' // Style when copied (green checkmark)
        : 'text-gray-400 hover:text-white'; // Default style

    const CopyIcon = isCopied ? FaCheck : FaCopy;


    return (
        <div className="max-w-3xl mx-auto p-6 gap-row-8">
          <div className="mb-6 flex flex-col gap-4">
            <h1 className="font-bold text-3xl">Direct Api Integration</h1>
            <div>
              <p className="sm:hidden flex flex-col text-gray-700">
                Downlaod postman collection for easy and quick testing
              </p>
              <button className="mt-2 px-4 py-2 bg-[#239165] text-white rounded hover:bg-[#1e7c57] transition-colors">
                Download
              </button>
            </div>
          </div>
            <h1 className="font-bold text-3xl">Prepare your constants</h1>
            <p className="text-gray-700">
                You can get your API key from the merchant dashboard at <a href="https://uat.dashboard.addispay.et/Settings" className="text-blue-400 hover:text-blue-300">setting</a>. Please make sure to activate the API key before use.
            </p>

            <div className='mt-4 '>
                <div className='flex justify-between rounded-t-md bg-gray-700 p-2'>
                    
                    {/* Language Buttons (as before) */}
                    <div>
                        <button 
                            className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${currentLanguage === 'node' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-green-400'}`}
                            onClick={() => setCurrentLanguage('node')}
                        >
                            node
                        </button>
                        <button 
                            className={`ml-2 px-3 py-1 text-sm font-semibold rounded-md transition-colors ${currentLanguage === 'python' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-green-400'}`}
                            onClick={() => setCurrentLanguage('python')}
                        >
                            python
                        </button>
                    </div>

                    {/* 4. The Copy Button with dynamic icon and style */}
                    <button onClick={handleCopy} className={`transition-colors ${copyButtonClass}`} >
                        <CopyIcon size={18} title={isCopied ? "Copied!" : "Copy code"} />
                    </button>
                </div>

                {/* Use the CodeBlock component */}
                <CodeBlock 
                    code={codeExample} 
                    language="javascript" 
                    
                />
            </div>
        </div>
    );
}