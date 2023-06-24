import Navbar from "./NavBar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <main className='flex flex-col h-screen'>
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <div className='flex flex-1 flex-col overflow-x-auto'>
          <div className='flex p-4'>
            <Navbar />
          </div>
          <div className='p-12'>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
