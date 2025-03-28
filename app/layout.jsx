import MainLayout from "@/components/layout/MainLayout";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Adjust as needed
  variable: "--font-comfortaa",
  display: "swap",
});

export const metadata = {
  title: "SS Infoworks Technology",
  description:
    "SS Infoworks Technology is a cutting-edge web service company delivering scalable, secure, and innovative digital solutions—from cloud infrastructure to custom software development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.variable}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
