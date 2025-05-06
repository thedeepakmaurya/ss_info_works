import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="py-3">{children}</main>
      <Footer />
    </>
  );
}
