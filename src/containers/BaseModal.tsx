import React, { useState, useEffect, FC } from "react";
import ReactDOM from "react-dom";

const BaseModal: FC<BaseModalTypes> = ({ children, show }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    const modalRoot: any = document.getElementById("modal");
    return show && ReactDOM.createPortal(children, modalRoot);
  } else {
    return null;
  }
};

type BaseModalTypes = {
  children?: any;
  show?: any;
};

export default BaseModal;
