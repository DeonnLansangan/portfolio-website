import type { Metadata } from "next";
import Header from "@/components/layout/header";
import "./globals.css";
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Portfolio Website",
  description:
    "Discover the projects created by 2024 -2025 Computer Science graduates of Holy Angel University",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${inter.className} antialiased`}>
        <MantineProvider>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
