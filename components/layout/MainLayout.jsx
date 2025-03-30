import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function MainLayout({ children }) {
  return (
    <div className="space-y-10">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
