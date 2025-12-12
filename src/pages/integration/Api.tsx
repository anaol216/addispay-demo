import { useState, useMemo } from 'react';
import CodeBlock from '../../components/CodeBlock.tsx'; 
import { codes_DirectApi } from '../../constants/codes';

export default function Api() {
    const [currentLanguage, setCurrentLanguage] = useState('node');
    const [responseType, setResponseType] = useState('success');

    const codeExample = useMemo(() => {
        const selectedCode = codes_DirectApi.find(c => c.language === currentLanguage);
        // Use the first element (index 0) for "Prepare your constants"
        return selectedCode ? selectedCode.content[0] : '';
    }, [currentLanguage]);

    const orderCodeExample = useMemo(() => {
        const selectedCode = codes_DirectApi.find(c => c.language === currentLanguage);
        // Use the second element (index 1) for "Create an order"
        return selectedCode ? selectedCode.content[1] : '';
    }, [currentLanguage]);

    const successResponseExample = useMemo(() => {
        const selectedCode = codes_DirectApi.find(c => c.language === currentLanguage);
        // Use the third element (index 2) for "Success Response"
        return selectedCode ? selectedCode.content[2] : '';
    }, [currentLanguage]);

    const failureResponseExample = useMemo(() => {
        const selectedCode = codes_DirectApi.find(c => c.language === currentLanguage);
        // Use the fourth element (index 3) for "Failure Response"
        return selectedCode ? selectedCode.content[3] : '';
    }, [currentLanguage]);

    const currentResponseExample = responseType === 'success' ? successResponseExample : failureResponseExample;

    return (
        <div className="shrink-1 max-w-3xl mx-auto p-6 gap-row-8">
            <div id="constants"> 
                <div className="mb-6 flex flex-col gap-4">
                    <h1 className="font-bold text-3xl">Direct Api Integration</h1>
                    <div>
                    <p className="sm:hidden flex flex-col text-gray-200 dark:text-gray-600">
                        Downlaod postman collection for easy and quick testing
                    </p>
                    <button className="mt-2 px-4 py-2 bg-[#239165] text-white rounded hover:bg-[#1e7c57] transition-colors cursor-pointer">
                        Download
                    </button>
                    </div>
                </div>
                <h1 className="font-bold text-3xl">Prepare your constants</h1>
                <p className="text-gray-200 dark:text-gray-600">
                    You can get your API key from the merchant dashboard at <a href="https://uat.dashboard.addispay.et/Settings" className="text-blue-400 hover:text-blue-300">setting</a>. Please make sure to activate the API key before use.
                </p>
                <div className='mt-4 '>
                    {/* Use the CodeBlock component with integrated header */}
                    <CodeBlock 
                        code={codeExample} 
                        language={currentLanguage === 'node' ? 'json' : 'python'} 
                        currentLanguage={currentLanguage}
                        onLanguageChange={setCurrentLanguage}
                    />
                </div>
            </div>
            <div id="order" className='mt-4'>
                <h1 className="font-bold text-3xl">Create an order to server</h1>
                <p className="text-gray-200 dark:text-gray-600">
                    The initial step in the payment process involves creating an order. During this stage, you will need to provide details about your order, payer information, and URLs for payment actions. Once completed, you will receive a UUID, which is essential for proceeding to the next step of payment initiation.
                </p>
                <div className='mt-4 '>
                    {/* Use the CodeBlock component with integrated header */}
                    <CodeBlock 
                        code={orderCodeExample} 
                        language={currentLanguage === 'node' ? 'json' : 'python'} 
                        currentLanguage={currentLanguage}
                        onLanguageChange={setCurrentLanguage}
                    />
                </div>
            </div>
            <div id="response" className='mt-8'>
                <h1 className="font-bold text-3xl mb-4">Response</h1>
                <div className='mt-4'>
                    <CodeBlock 
                        code={currentResponseExample} 
                        language={'json'} 
                        currentLanguage={responseType}
                        onLanguageChange={setResponseType}
                        availableLanguages={['success', 'failure']}
                    />
                </div>
            </div>
        </div>
    );
}