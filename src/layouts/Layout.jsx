import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import Sidebar from "../components/Sidebar";
import Resumen from "../components/Resumen";
import ModalProducto from "../components/ModalProducto";
import useQuiosco from "../hooks/useQuiosco";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRigth: "-50%",
    width: "65%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Layout = () => {
  const { modal } = useQuiosco();

  return (
    <>
      <div className="md:flex">
        <Sidebar />

        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
          <Outlet />
        </main>

        <Resumen />
      </div>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>
    </>
  );
};

export default Layout;
