import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export function useStateTimer(callBack, timer = 1000) {
  const [saveTimer, setSaveTimer] = useState();

  useEffect(() => {
    const T = setTimeout(() => callBack(saveTimer), timer);
    return () => clearTimeout(T);
  }, [saveTimer]);

  return setSaveTimer;
}
