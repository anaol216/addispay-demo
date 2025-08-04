// src/sections/AdditionalResources.tsx

import React from "react";

export default function AdditionalResources() {
  return (
    <section id="additional-resources" className="py-8 px-8 lg:ml-64">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#239165] mb-6 tracking-tight">
          Additional Resources
        </h2>
        <p className="text-gray-800 text-lg mb-6 leading-relaxed">
          For further assistance and detailed documentation, utilize the following resources provided by AddisPay:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2"> AddisPay Documentation</h3>
            <p className="text-gray-700 leading-relaxed">
              Access our comprehensive documentation, including API references and SDKs, to support your integration
              and explore the full capabilities of the AddisPay platform.
            </p>
            <a
              href="https://devportal.addispay.et/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[#239165] font-medium  hover:text-[#1e7c57] transition-colors"
            >
              Visit Documentation
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2"> Support</h3>
            <p className="text-gray-700 leading-relaxed">
              Encountering issues or need assistance? Our dedicated support team is ready to help you ensure a smooth and successful integration experience.
            </p>
            <p className="mt-2 text-gray-700">
              Contact us at{" "}
              <a href="mailto:info@addispay.co" className="text-[#239165]  hover:text-[#1e7c57]">
                info@addispay.co
              </a>{" "}
              or reach out via our{" "}
              <a href="https://addispay.et" target="_blank" rel="noopener noreferrer" className="text-[#239165] underline hover:text-[#1e7c57]">
                support portal
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
