import { useEffect } from "react";

export const useOverflow = (orderConfirmed) => {
  useEffect(() => {
    if (orderConfirmed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [orderConfirmed]);
};
