import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./_components/ui/Header";
import Footer from "./_components/ui/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Your best stop for audio devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${manrope.className} antialiased flex flex-col bg-darker`}
      >
        <Header />
        <main
        // className="mx-auto max-w-[1110px]"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
