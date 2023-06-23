import Navbar from "./NavBar";
import Sidebar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className='flex flex-auto h-screen'>
        <Sidebar />
        <div className='grow'>
          <Navbar />
          <div className='m-5'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
