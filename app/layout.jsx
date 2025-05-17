import MainLayout from "@/components/layout/MainLayout";
import "./globals.css";
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  display: 'swap',
});

export const metadata = {
  title: "SS Infoworks Technology",
  description:
    "SS Infoworks Technology is a cutting-edge web service company delivering scalable, secure, and innovative digital solutions—from cloud infrastructure to custom software development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
