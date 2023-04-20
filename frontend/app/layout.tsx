import "./globals.css";
import { Header } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto flex min-h-screen flex-col bg-gray-950/95 text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
