import { Meta } from "./Meta";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="border-2 border-red-600">
      <Meta />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
