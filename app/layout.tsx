import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MorphicNavbar from "@/components/kokonutui/morphic-navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aniket Prashar | Full Stack Developer & AI Engineer",
  description: "Portfolio of Aniket Prashar - Building SaaS, LLM tools, Next.js apps, and Flask AI pipelines. Co-founder of choomantar.online & qubexdeliver.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        //  style={{
        //         background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
        //       }}

        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <div className="relative w-full overflow-x-hidden">
          {/* Navigation - Top on Desktop, Bottom on Mobile */}
          <div className="fixed z-90 w-full top-0 md:top-0 md:py-5 bottom-auto md:bottom-auto
                          max-md:bottom-0 max-md:top-auto max-md:py-0 max-md:pb-safe">
            <MorphicNavbar />
          </div>

          {/* Main Content - Add padding for mobile bottom nav */}
          <div className="pb-0 md:pb-0 max-md:pb-24">
            {children}
          </div>

          {/* Floating WhatsApp Button */}
          <FloatingWhatsApp />
        </div>



      </body>
    </html>
  );
}
