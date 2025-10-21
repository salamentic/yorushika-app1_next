// app/components/Privacy/PrivacyEN.tsx
import Link from "next/link";

export default function PrivacyEN() {
  return (
    <>
      {/* Main Content */}
      <main className="container max-w-4xl px-4 py-12 mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1
            className="text-2xl sm:text-3xl font-bold mb-8 pb-4 border-b-2"
            style={{ color: "#499FD8" }}
          >
            Privacy Policy
          </h1>

          {/* Analytics Tool */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#499FD8" }}>
              About Analytics Tools
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                This site uses the Google Analytics service provided by Google
                to collect and analyze access data.
              </p>
              <p>
                Google Analytics uses cookies to collect traffic data. This
                information is collected anonymously and does not personally
                identify you.
              </p>
              <p>
                You can disable cookies in your browser settings if you prefer
                not to share data.
              </p>
              <p>
                For more information on the Google Analytics Terms of Service,
                please refer to{" "}
                <a
                  href="https://www.google.com/analytics/terms/jp.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline ml-1"
                >
                  this page
                </a>
                .
              </p>
            </div>
          </section>

          {/* Affiliate Programs */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#499FD8" }}>
              About Affiliate Programs
            </h2>

            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Rakuten Affiliate
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-3 mb-6">
              <p>
                This site participates in the Rakuten Affiliate Program provided
                by Rakuten, Inc.
              </p>
              <p>
                Some links on this site are affiliate links. When a user
                purchases a product through these links, this site may receive a
                referral commission.
              </p>
            </div>

            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Amazon Associates
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-3 mb-4">
              <p>
                This site participates in the Amazon Associates Program, an
                affiliate advertising program designed to provide a means for
                sites to earn referral fees by advertising and linking to
                Amazon.co.jp.
              </p>
              <p>
                If a user purchases a product through Amazon via this site, the
                site may receive a commission.
              </p>
            </div>

            <div
              className="bg-blue-50 border-l-4 p-4 text-sm text-gray-700"
              style={{ borderColor: "#499FD8" }}
            >
              ※ Visitors will not incur any additional costs when purchasing
              products through affiliate links.
            </div>
          </section>

          {/* Establishment Date */}
          <div className="text-right text-sm text-gray-500 mt-12 pt-4 border-t">
            Established: September 17, 2025
            <br />
            Last Updated: October 7, 2025
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-block px-6 py-3 text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#499FD8" }}
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
