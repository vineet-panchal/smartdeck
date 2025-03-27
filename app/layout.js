import { Ubuntu } from "next/font/google";
import {ClerkProvider} from '@clerk/nextjs'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

const ubuntu = Ubuntu({ subsets: ["latin"], weight:['300', '400', '500', '700'] });

export const metadata = {
  title: "SmartDeck",
  description: "Create flashcards from text.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ubuntu.className}>{children}</body>
        <Analytics />
      </html>
    </ClerkProvider>
  );
}
