import React, { createContext, useState } from "react";
const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openModalTemp = () => {
    setShowModal(true);
    setTimeout(closeModal, 1500);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <ModalContext.Provider
      value={{ showModal, openModalTemp, closeModal, openModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };
