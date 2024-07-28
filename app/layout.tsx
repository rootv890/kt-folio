import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./splitting.css";
import "./splitting-cells.css";
import { ThemeProvider } from "@/components/theme-provider";
import { inter, supply } from "@/lib/font";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "KT Cybersecurity",
  description: "KT's Cybersecurity website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${supply.variable}`}>
      <body className={`${inter.className}  max-w-[640px] mx-auto `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
