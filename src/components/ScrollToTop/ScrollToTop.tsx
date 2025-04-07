import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Só rola pro topo se for uma navegação nova (push, replace)
    if (navigationType === "PUSH") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    // Se for 'POP', significa que o usuário usou o botão de voltar/avançar → mantemos a rolagem
  }, [pathname, navigationType]);

  return null;
}
