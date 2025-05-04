import MainLayout from "@/components/layout/MainLayout";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
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
      <body className={urbanist.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
