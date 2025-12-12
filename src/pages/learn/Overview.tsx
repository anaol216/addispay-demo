export default function OverviewGuide() {
  return (
    <main className="flex flex-col px-4 sm:px-6   lg:pt-14 pb-40 lg:pb-12 transition-all duration-300 ease-in-out">
      <article className="w-full max-w-3xl mx-auto space-y-8 text-gray-600">
        <header className="space-y-4 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
            <span className="text-[#239165] font-black">Addis</span>
            <span className="text-yellow-500 font-black">pay</span>{" "}
            Payment Gateway Integration User Guide
          </h1>
          <p className="text-base sm:text-lg text-gray-400 dark:text-gray-500 italic leading-relaxed">
            Welcome to the <strong>Addispay Payment Gateway Integration User Guide</strong>!
            This comprehensive guide is designed to walk you through the process of 
            seamlessly integrating Addispay into your system. By following these steps, 
            you'll be equipped to process payments securely and efficiently, enhancing 
            the user experience for your customers.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-400 dark:text-gray-300 text-center sm:text-left">
            Overview
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-400 dark:text-gray-500">
            <strong>Addispay</strong> is a robust payment gateway solution that enables businesses 
            to accept online payments hassle-free. Integrating Addispay into your system 
            empowers you to securely process transactions, manage payments, and enhance your 
            overall payment infrastructure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-400 dark:text-gray-300 text-center sm:text-left">
            Prerequisites
          </h2>
          <p className="text-base sm:text-lg  text-gray-400 dark:text-gray-500">
            Before you begin the integration process, ensure you have the following prerequisites in place:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-base sm:text-lg pl-4 text-gray-400 dark:text-gray-500">
            <li>
              <strong>Access to the Addispay Dashboard or Account:</strong>{" "}
              You'll need login credentials to access your{" "}
              <a
                href="https://addispay.et/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#239165] font-medium italic hover:underline"
              >
                Addispay dashboard
              </a>
              . If you don't have an account yet,{" "}
              <a
                href="https://uat.dashboard.addispay.et/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#239165] font-medium italic hover:underline"
              >
                sign up here
              </a>
              .
            </li>
            <li>
              <strong>Basic Understanding of Web Development and APIs:</strong>{" "}
              Familiarity with web concepts like HTTP, JSON, and REST APIs is essential for integrating Addispay 
              into your system smoothly. If you're new, check out this{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#239165] font-medium italic hover:underline"
              >
                developer resource
              </a>
              .
            </li>
            <li>
              <strong>Access to Your System's Codebase:</strong>{" "}
              Make sure you have access to your application’s source code so you can make the necessary 
              changes for Addispay integration. If working in a team, confirm you have push access or 
              collaborate via version control tools like{" "}
              <a
                href="https://github.coxm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#239165] font-medium italic hover:underline"
              >
                GitHub
              </a>
              .
            </li>
          </ol>
        </section>
      </article>
    </main>
  );
}
