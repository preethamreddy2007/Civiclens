import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CivicLens | Infrastructure Intelligence",
  description: "Explore public infrastructure projects, budgets, and progress. A collaborative CivicLens prototype.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <div className="bg-blue-950 text-blue-100 text-center px-4 py-2 text-sm">
          CivicLens group project · Demo data · Sign-in and AI responses are simulated
        </div>
        {children}
      </body>
    </html>
  );
}
