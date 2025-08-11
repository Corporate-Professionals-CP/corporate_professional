import { CPheader } from "@/components";
import React from "react";

function page() {
  return (
    <>
      <CPheader />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold mb-2 text-[#7074ff]">
          Cookie Policy – Corporates &amp; Professionals
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: <time dateTime="2025-05-21">21 May 2025</time>
        </p>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#7074ff]">
            1. What Are Cookies?
          </h2>
          <p className="text-gray-700">
            Cookies are small text files placed on your device when you visit a
            website. They help the site function properly, improve your
            experience, and provide analytics on site usage.
          </p>
          <p className="text-gray-700">Cookies can be:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>First party (set by our website)</li>
            <li>Third-party (set by others — e.g. Google, YouTube)</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#7074ff]">
            2. How We Use Cookies
          </h2>
          <p className="text-gray-700">We use cookies to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Ensure the website works correctly (essential cookies)</li>
            <li>Understand how visitors use our site (analytics cookies)</li>
            <li>Enable embedded content (e.g., YouTube, social media feeds)</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#7074ff]">
            3. Types of Cookies We Use
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-[#7074ff]">
                <tr>
                  <th className="px-4 py-2 text-left text-white">Type</th>
                  <th className="px-4 py-2 text-left text-white">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-gray-50">
                  <td className="px-4 py-2 font-medium">Essential</td>
                  <td className="px-4 py-2">
                    Required for core functionality (e.g., navigation, login,
                    forms)
                  </td>
                </tr>
                <tr className="odd:bg-gray-50">
                  <td className="px-4 py-2 font-medium">Analytics</td>
                  <td className="px-4 py-2">
                    Used to collect usage data (e.g., pages visited, time on
                    site via Google Analytics)
                  </td>
                </tr>
                <tr className="odd:bg-gray-50">
                  <td className="px-4 py-2 font-medium">Embedded Content</td>
                  <td className="px-4 py-2">
                    Enables third-party services like video players (YouTube,
                    Vimeo)
                  </td>
                </tr>
                <tr className="odd:bg-gray-50">
                  <td className="px-4 py-2 font-medium">Performance</td>
                  <td className="px-4 py-2">
                    Helps improve site speed, responsiveness, and user
                    experience
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#7074ff]">
            4. Third-Party Cookies
          </h2>
          <p className="text-gray-700">
            We use services that may place their own cookies on your device,
            such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <strong>Google Analytics</strong> – to track site traffic and
              behaviour
            </li>
            <li>
              <strong>YouTube or Vimeo</strong> – to display embedded video
              content
            </li>
            <li>
              <strong>Social platforms</strong> – for embedded posts or share
              buttons
            </li>
          </ul>
          <p className="text-gray-700">
            These providers may collect data about your browsing behaviour
            independently. We encourage you to review their privacy and cookie
            policies.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#7074ff]">
            5. How to Manage Cookies
          </h2>
          <p className="text-gray-700">
            You can control and delete cookies through your browser settings.
            You may also see a cookie banner when visiting our site that allows
            you to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Accept all cookies</li>
            <li>Reject non-essential cookies</li>
            <li>Choose specific cookie preferences</li>
          </ul>
          <p className="text-gray-700">Browser links for cookie settings:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7074ff] underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7074ff] underline"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7074ff] underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/help/4468242"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7074ff] underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#7074ff]">
            6. Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Cookie Policy from time to time. All updates will
            be posted on this page with an updated effective date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#7074ff]">
            7. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions about this policy or your cookie
            preferences, please contact:
          </p>
          <p className="text-gray-700">
            📧{" "}
            <a
              href="mailto:info@corporatesandprofessionals.com"
              className="text-[#7074ff] underline"
            >
              info@corporatesandprofessionals.com
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

export default page;
