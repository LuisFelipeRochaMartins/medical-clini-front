import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ 
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Medical Clinic"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
