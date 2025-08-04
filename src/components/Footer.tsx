import React, { useState, useEffect } from "react";

const SOCIAL_LINKS = [
  {
    name: "X",
    href: "https://twitter.com/YourAccount",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 50 50" fill="currentColor" aria-hidden="true">
        <path d="M 5.92 6 L 20.58 27.38 L 6.23 44 H 9.41 L 21.99 29.42 L 31.99 44 H 44 L 28.68 21.67 L 42.2 6 H 39.03 L 27.28 19.62 L 17.93 6 H 5.92 Z M 9.72 8 H 16.88 L 40.2 42 H 33.04 L 9.72 8 Z" />
      </svg>
    ),
  },
  {
    name: "Slack",
    href: "https://slack.com/your-workspace",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
        <path d="M53.84 161.32c0 14.83-11.99 26.82-26.82 26.82S.2 176.15.2 161.32c0-14.83 11.99-26.82 26.82-26.82H53.84zm13.41 0c0-14.83 11.99-26.82 26.82-26.82s26.82 11.99 26.82 26.82v67.05c0 14.83-11.99 26.82-26.82 26.82-14.83 0-26.82-11.99-26.82-26.82z" />
        <path d="M94.07 53.64c-14.83 0-26.82-11.99-26.82-26.82S79.24 0 94.07 0s26.82 11.99 26.82 26.82v26.82zm0 13.61c14.83 0 26.82 11.99 26.82 26.82s-11.99 26.82-26.82 26.82H26.82C11.99 120.89 0 108.9 0 94.07c0-14.83 11.99-26.82 26.82-26.82z" />
        <path d="M201.55 94.07c0-14.83 11.99-26.82 26.82-26.82s26.82 11.99 26.82 26.82-11.99 26.82-26.82 26.82H201.55zm-13.41 0c0 14.83-11.99 26.82-26.82 26.82-14.83 0-26.82-11.99-26.82-26.82V26.82C134.5 11.99 146.49 0 161.32 0s26.82 11.99 26.82 26.82z" />
        <path d="M161.32 201.55c14.83 0 26.82 11.99 26.82 26.82s-11.99 26.82-26.82 26.82-26.82-11.99-26.82-26.82V201.55zm0-13.41c-14.83 0-26.82-11.99-26.82-26.82 0-14.83 11.99-26.82 26.82-26.82h67.25c14.83 0 26.82 11.99 26.82 26.82s-11.99 26.82-26.82 26.82z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/your-channel",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="none" aria-hidden="true">
        <circle cx="128" cy="128" r="128" fill="#229ED9" />
        <path
          fill="#fff"
          d="M57.94 126.65q55.98-24.38 74.64-32.15c35.56-14.79 42.94-17.35 47.76-17.44 1.06 0 3.42.25 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.47.16 1 .38 3.27.2 5.04-1.92 20.24-10.26 69.36-14.5 92.03-1.78 9.59-5.32 12.81-8.74 13.12-7.44.68-13.08-4.91-20.28-9.63-11.26-7.39-17.62-11.98-28.56-19.19-12.64-8.33-4.44-12.91 2.76-20.39 1.88-1.96 34.64-31.75 35.26-34.45.08-.34.16-1.6-.6-2.26-.74-.67-1.84-.44-2.64-.26-1.14.26-19.12 12.15-54 35.69-5.1 3.51-9.72 5.22-13.88 5.13-4.56-.1-13.36-2.58-19.9-4.71-8-2.61-14.38-3.98-13.82-8.41.28-2.3 3.46-4.66 9.52-7.07Z"
        />
      </svg>
    ),
  },
];

const FOOTER_LINKS = [
  { label: "Support", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "License", href: "#" },
];

function SidebarContent() {
  return (
    <div className="flex flex-col items-center text-center w-full ">
      <h2 className="mb-3 text-xl font-bold text-gray-900">Developers Community</h2>
      <p className="mb-8 max-w-xs text-sm text-gray-600">
        Join our vibrant developer channels for support, collaboration, and updates.
      </p>
      <nav className="flex space-x-6 mb-6">
        {SOCIAL_LINKS.map(({ name, href, svg }) => (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#239165] transition-colors" aria-label={name}>
            <div className="h-8 w-8">{svg}</div>
          </a>
        ))}
      </nav>
      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-400 lg:mt-8">
        {FOOTER_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="hover:underline hover:text-[#239165]">
            {label}
          </a>
        ))}
      </nav>
      <span className="mt-2 text-xs text-gray-400">© 2025 AddisPay</span>
    </div>
  );
}

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const updateDevice = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      if (!isMobileOrTablet) return;

      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrollY + winHeight >= docHeight - 100;

      setShowFooter(nearBottom);
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateDevice);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileOrTablet]);

  return (
    <>
      {/* Desktop right sidebar */}
      <aside className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 w-64  py-10 px-6 z-30">
        <SidebarContent />
      </aside>

      {/* Mobile sliding footer */}
      <footer
        className={`fixed bottom-0 left-0 right-0 z-50 flex lg:hidden w-full flex-col items-center  py-6 px-4 pt-8 transform transition-all duration-700 ease-out ${
          showFooter
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <SidebarContent />
      </footer>
    </>
  );
}
