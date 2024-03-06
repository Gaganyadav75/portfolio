import { Inter } from "next/font/google";
import "./globals.css";

import Mode from "@/components/Mode";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Gagan's Portfolio",
  description: "I am a web developer",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Gagan's Portfolio</title>
        <link rel="icon" href="https://i.imgur.com/0PmrtLl.png" sizes="32x32" type="image/png"/>
      </head>
      <body className={inter.className}>
       <div className="banner night">
        {children}
        <Mode/>
        </div>
      </body>
    </html>
  );
}
