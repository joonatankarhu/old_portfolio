import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joonatan Karhu",
  description: "Portfolio, Fullstack Developer Joonatan Karhu",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="home">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
