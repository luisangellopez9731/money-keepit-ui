import { useEffect } from "react";

export const useResize = (callbackInResize: () => void) => {
  useEffect(() => {
    window.addEventListener("resize", callbackInResize);
    return () => {
      window.removeEventListener("resize", callbackInResize);
    };
  }, [callbackInResize]);
};
