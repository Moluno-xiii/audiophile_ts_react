import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./_components/ui/Header";
import Footer from "./_components/ui/Footer";
import ConvexClientProvider from "./ConvexClientProvider";
import { Toaster } from "react-hot-toast";
import { CartContextProvider } from "./_contexts/CartContextProvider";

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
        className={` ${manrope.className} bg-darker flex flex-col antialiased`}
      >
        <ConvexClientProvider>
          <CartContextProvider>
            <Header />
            <main>
              <Toaster />
              {children}
            </main>
          </CartContextProvider>
        </ConvexClientProvider>
        <Footer />
      </body>
    </html>
  );
}
