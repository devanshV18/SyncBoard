import { ClerkProvider } from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "SyncBoard",
  description: "AI-powered management and collaboration tool",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider afterSignInUrl="/dashboard" afterSignUpUrl="/dashboard">
      <html lang="en">
        <body className={outfit.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
