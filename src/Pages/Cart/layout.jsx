import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer";
import Row from "../../components/Row";

const CartLayout = () => {
  return (
    <>
      <Row />
      <Nav />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CartLayout;
