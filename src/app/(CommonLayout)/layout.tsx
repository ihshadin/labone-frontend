import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/app/globals.css";
import "@/styles/background-outlet.css";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-450px)]">
        <div className="labone-body-gradient"></div>
        <div className="labone-body-gradient-lines">
          <div className="labone-body-gradient-line"></div>
          <div className="labone-body-gradient-line"></div>
          <div className="labone-body-gradient-line"></div>
          <div className="labone-body-gradient-line"></div>
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default layout;
