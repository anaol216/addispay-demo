import { useSearchParams, Link } from 'react-router-dom';
import { searchDocumentation, getExcerpt } from '../data/searchData';
import { LuFileText, LuSearch } from 'react-icons/lu';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const results = query ? searchDocumentation(query) : [];
  
  return (
    <main className="flex flex-col px-4 sm:px-6 lg:pt-14 pb-40 lg:pb-12 transition-all duration-300 ease-in-out">
      <article className="w-full max-w-3xl mx-auto space-y-6">
        {/* Search Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <LuSearch className="text-[#239165] text-2xl" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Search Results
            </h1>
          </div>
          
          {query && (
            <p className="text-base text-gray-600 dark:text-gray-400">
              {results.length > 0 ? (
                <>
                  Found <span className="font-semibold text-[#239165]">{results.length}</span> result{results.length !== 1 ? 's' : ''} for "{query}"
                </>
              ) : (
                <>No results found for "{query}"</>
              )}
            </p>
          )}
        </header>

        {/* Search Results */}
        {query ? (
          <div className="space-y-4 mt-8">
            {results.length > 0 ? (
              results.map((result) => (
                <Link
                  key={result.id}
                  to={result.path}
                  className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[#239165] dark:hover:border-[#239165] transition-all duration-200 hover:shadow-md group"
                >
                  <div className="flex items-start gap-3">
                    <LuFileText className="text-[#239165] text-xl mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      {/* Category Badge */}
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded mb-2">
                        {result.category}
                      </span>
                      
                      {/* Title */}
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[#239165] dark:group-hover:text-[#239165] transition-colors mb-2">
                        {result.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                        {getExcerpt(result.content, query, 200)}
                      </p>
                      
                      {/* Path */}
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                        {result.path}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-12">
                <LuSearch className="mx-auto text-6xl text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  No documentation found matching your search.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Try different keywords or browse our documentation sections.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <LuSearch className="mx-auto text-6xl text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Enter a search query to find documentation
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Use the search box in the header to search through our documentation.
            </p>
          </div>
        )}
      </article>
    </main>
  );
}
