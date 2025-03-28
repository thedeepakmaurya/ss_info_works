import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
