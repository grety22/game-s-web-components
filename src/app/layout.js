import { EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Game's web components",
  description: "A collection of web components for games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
