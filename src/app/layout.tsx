import type { Metadata } from "next";
import { Poppins, Proza_Libre } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], // Personaliza los pesos
  variable: '--font-poppins', // Variable CSS
});

const prozaLibre = Proza_Libre({
  subsets: ['latin'],
  weight: ['400', '700'], // Agrega pesos según necesites
  variable: '--font-proza', // Variable CSS
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning
        className={`${poppins.variable} ${prozaLibre.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
