import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Theme } from "@radix-ui/themes";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GRAVITEE",
  description: "Generated by create next app",
  icons: {
    icon: "/my_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Theme
            accentColor="purple"
            grayColor="mauve"
            panelBackground="solid"
            radius="large"
          >
            <nav className="">
              <NavBar />
            </nav>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
