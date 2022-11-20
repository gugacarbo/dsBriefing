import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const RollTimer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 200);
    return () => clearTimeout(RollTimer);
  }, [pathname]);

  return null;
}

export function useStateTimer(callBack, timer = 1500) {
  const [saveTimer, setSaveTimer] = useState();

  useEffect(() => {
    const T = setTimeout(() => callBack(saveTimer), timer);
    return () => clearTimeout(T);
  }, [saveTimer]);

  return setSaveTimer;
}
