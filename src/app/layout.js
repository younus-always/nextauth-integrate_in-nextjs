import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";
import Navber from "@/components/Navber";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextAuth Integrate in Next JS",
  description: "How to integrate nextauth in nextjs project ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}        >
          <Navber />
          {children}
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
