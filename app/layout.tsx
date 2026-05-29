import Script from "next/script";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "HelpInTech - Modern Developer & IT Utilities",
  description:
    "Open source utilities platform for developers, networking engineers, cybersecurity professionals, Linux administrators, and DevOps teams.",

  keywords: [
    "developer tools",
    "json formatter",
    "base64 encoder",
    "regex tester",
    "dns lookup",
    "ip lookup",
    "yaml validator",
    "linux tools",
    "devops utilities",
    "cybersecurity tools",
  ],

  authors: [
    {
      name: "HelpInTech",
    },
  ],

  openGraph: {
    title: "HelpInTech",
    description:
      "Modern utilities platform for developers and IT professionals.",
    url: "https://helpintech.cloud",
    siteName: "HelpInTech",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N61WWCRCEC"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-N61WWCRCEC');
          `}
        </Script>

        <Navbar />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />

        {children}

        <Footer />
      </body>
    </html>
  );
}