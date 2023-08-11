import React, { createContext, useState } from "react";
const ModalAkunContext = createContext();

const ModalAkunContextProvider = ({ children }) => {
  const [showModalAkun, setShowModalAkun] = useState(false);
  const [modalId, setModalId] = useState(null);

  const openModalAkun = (id) => {
    setShowModalAkun(true);
    setModalId(id);
  };

  const closeModalAkun = () => {
    setShowModalAkun(false);
  };

  return (
    <ModalAkunContext.Provider
      value={{ showModalAkun, openModalAkun, closeModalAkun, modalId }}
    >
      {children}
    </ModalAkunContext.Provider>
  );
};

export { ModalAkunContextProvider, ModalAkunContext };
