import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      if (!hash) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }
      const id = hash.slice(1);

      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
