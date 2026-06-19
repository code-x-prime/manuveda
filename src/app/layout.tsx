import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Manuveda - Launching Soon",
  description: "Manuveda: Ancient Wisdom. Modern Wellness. Ayurveda for a healthy tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
