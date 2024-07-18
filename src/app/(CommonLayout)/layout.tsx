import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/app/globals.css";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
