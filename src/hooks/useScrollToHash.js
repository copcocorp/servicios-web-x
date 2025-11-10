import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Espera un poco para asegurar que el DOM esté listo
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);
}
