import MainNavigation from "./MainNavigation";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping Project",
  description: "Generated for test",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <MainNavigation />

        {children}
      </body>
    </html>
  );
}
