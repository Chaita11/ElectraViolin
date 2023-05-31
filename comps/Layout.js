import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="ContainerLimit">{children}</div>
    </div>
  );
};

export default Layout;
