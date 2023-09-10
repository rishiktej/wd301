import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  const location = useLocation();
  const isNotFoundRoute = location.pathname === "/notfound";
  return (
    <>
      {!isNotFoundRoute && <Header />}
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
