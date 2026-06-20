import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: "ANKHARA — Minispazia 4.0",
  description:
    "The kingdom has slept for centuries. The gates awaken once more — Freshers' Welcome, ANKHARA, Minispazia 4.0. 21st June, 9 A.M. – 5 P.M., B2 Lecture Hall.",
  openGraph: {
    title: "ANKHARA — Minispazia 4.0",
    description: "The gods have not forgotten. Freshers, prepare to answer their call.",
    type: "website",
  },
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body className="bg-void text-amber font-body antialiased">
        {children}
      </body>
    </html>
  );
}
