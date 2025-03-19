import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { dbConnect } from "@/service/mongo";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Trip Haven - Home",
  description: "Trip Haven Home Page",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar sideMenu={false}/>
        <main>{children}</main>
      </body>
    </html>
  );
}
