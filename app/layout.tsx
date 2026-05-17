import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
})
export const metadata: Metadata = {
  title: "Zain Ahmad",
  description: "Portfolio of Zain Ahmad, a software developer specializing in web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.variable} antialiased`} suppressHydrationWarning>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
