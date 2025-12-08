// Search data index for documentation pages
export interface SearchItem {
  id: string;
  title: string;
  path: string;
  content: string;
  category: 'Learn' | 'Integration';
  keywords: string[];
}

export const SEARCH_DATA: SearchItem[] = [
  {
    id: 'overview',
    title: 'Overview',
    path: '/learn/overview',
    category: 'Learn',
    content: `Addispay Payment Gateway Integration User Guide. Welcome to the Addispay Payment Gateway Integration User Guide! 
    This comprehensive guide is designed to walk you through the process of seamlessly integrating Addispay into your system. 
    By following these steps, you'll be equipped to process payments securely and efficiently, enhancing the user experience for your customers.
    
    Overview: Addispay is a robust payment gateway solution that enables businesses to accept online payments hassle-free. 
    Integrating Addispay into your system empowers you to securely process transactions, manage payments, and enhance your overall payment infrastructure.
    
    Prerequisites: Before you begin the integration process, ensure you have the following prerequisites in place:
    - Access to the Addispay Dashboard or Account: You'll need login credentials to access your Addispay dashboard
    - Basic Understanding of Web Development and APIs: Familiarity with web concepts like HTTP, JSON, and REST APIs
    - Access to Your System's Codebase: Make sure you have access to your application's source code`,
    keywords: ['addispay', 'payment', 'gateway', 'integration', 'overview', 'prerequisites', 'dashboard', 'api', 'web development', 'transactions']
  },
  {
    id: 'resources',
    title: 'Additional Resources',
    path: '/learn/resources',
    category: 'Learn',
    content: `Additional Resources for AddisPay Integration.
    
    AddisPay Documentation: Access our comprehensive documentation, including API references and SDKs, to support your integration 
    and explore the full capabilities of the AddisPay platform.
    
    Developer Community: Join our vibrant developer community and connect with fellow developers. Share insights, ask questions, 
    and collaborate to make the most of your AddisPay integration.
    
    Support: Encountering issues or need assistance? Our dedicated support team is ready to help you ensure a smooth and successful integration experience.`,
    keywords: ['resources', 'documentation', 'api reference', 'sdk', 'community', 'support', 'help', 'developer']
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    path: '/integration/api',
    category: 'Integration',
    content: `Direct API Integration Guide.
    
    Prepare your constants: You can get your API key from the merchant dashboard. Please make sure to activate the API key before use.
    
    Create an order to server: The initial step in the payment process involves creating an order. During this stage, you will need to provide 
    details about your order, payer information, and URLs for payment actions. Once completed, you will receive a UUID, which is essential for 
    proceeding to the next step of payment initiation.
    
    API Integration allows you to have full control over the payment flow and customize the experience for your customers.`,
    keywords: ['api', 'integration', 'direct', 'api key', 'merchant dashboard', 'order', 'uuid', 'payment', 'rest api', 'endpoint']
  },
  {
    id: 'hosted-integration',
    title: 'Hosted Integration',
    path: '/integration/hosted',
    category: 'Integration',
    content: `Hosted Integration Guide.
    
    Hosted integration provides a quick and easy way to integrate AddisPay into your application. 
    With hosted integration, AddisPay handles the payment page, reducing your PCI compliance requirements.`,
    keywords: ['hosted', 'integration', 'payment page', 'pci compliance', 'quick', 'easy']
  }
];

/**
 * Search function that filters items based on query
 */
export function searchDocumentation(query: string): SearchItem[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const lowerQuery = query.toLowerCase().trim();
  const queryTerms = lowerQuery.split(/\s+/);

  return SEARCH_DATA.filter(item => {
    const searchableText = `${item.title} ${item.content} ${item.keywords.join(' ')}`.toLowerCase();
    
    // Check if any query term matches
    return queryTerms.some(term => searchableText.includes(term));
  }).sort((a, b) => {
    // Sort by relevance - title matches first
    const aTitle = a.title.toLowerCase().includes(lowerQuery);
    const bTitle = b.title.toLowerCase().includes(lowerQuery);
    
    if (aTitle && !bTitle) return -1;
    if (!aTitle && bTitle) return 1;
    return 0;
  });
}

/**
 * Get highlighted excerpt from content that matches query
 */
export function getExcerpt(content: string, query: string, maxLength: number = 150): string {
  const lowerContent = content.toLowerCase();
  const lowerQuery = query.toLowerCase();
  
  const index = lowerContent.indexOf(lowerQuery);
  
  if (index === -1) {
    // If exact match not found, just return beginning
    return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
  }
  
  // Get text around the match
  const start = Math.max(0, index - 50);
  const end = Math.min(content.length, index + lowerQuery.length + maxLength);
  
  let excerpt = content.substring(start, end);
  
  if (start > 0) excerpt = '...' + excerpt;
  if (end < content.length) excerpt = excerpt + '...';
  
  return excerpt;
}
