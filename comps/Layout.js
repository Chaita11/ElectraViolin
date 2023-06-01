import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="ContainerLimit">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
