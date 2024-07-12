import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer";
import Row from "../../components/Row";

const ProfileLayout = () => {
  return (
    <>
      <Row />
      <Nav />
     
        <Outlet />
  
      <Footer />
    </>
  );
};

export default ProfileLayout;
