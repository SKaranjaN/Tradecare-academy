import GlobalNavbar from "@/components/global-navbar";
import NavBar from "./(dashboard)/_components/navbar";

const HomePage = () => {
  return (
    // <NavBar />
    <main>
      <div className="h-full">
        <div className="h-[80px] w-full fixed inset-y-0 z-50">
          <GlobalNavbar />
        </div>
        {/* <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
          <Sidebar />
        </div> */}
        {/* <main className="md:pl-56 pt-[80px] h-full">{children}</main> */}
      </div>
    </main>
  );
};

export default HomePage;
