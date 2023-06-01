import "./globals.css";
import { Header } from "@/components";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-950/95 text-white">
        <Header />
        <main className="mx-auto flex w-full max-w-[90rem] flex-1 p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
