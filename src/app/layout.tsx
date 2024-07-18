import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Providers } from "@/provider/Providers";
import "@/app/globals.css";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LabOne Hospital",
  description: "We are committed to provide cheap hospitality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
