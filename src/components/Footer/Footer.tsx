import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button"; // Verifique o caminho
import { ArrowUp } from "lucide-react";
import { cn } from "src/lib/utils"; // Verifique o caminho

const Footer = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      // Define um limite um pouco menor para o botão aparecer mais cedo
      const showThreshold = 200; // Pixels a partir do topo
      if (!showScrollTopButton && window.scrollY > showThreshold) {
        setShowScrollTopButton(true);
      } else if (showScrollTopButton && window.scrollY <= showThreshold) {
        setShowScrollTopButton(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollTopButton]);

  // --- Função para rolar ao topo (GARANTINDO SMOOTH) ---
  const scrollToTop = () => {
    if (window?.scrollTo) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Essencial para animação suave
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t py-6 md:py-8 dark:border-zinc-800 dark:bg-black">
      {/* MOBILE: Layout para telas pequenas */}
      <div className="container mx-auto px-4 flex flex-col gap-4 md:hidden relative">
        {/* Linha com Logo centralizado */}
        <div className="relative flex items-center justify-center">
          {/* Logo e Nome */}
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-white/20 blur-[2px]"></div>
              </div>
            </div>
            <span className="text-sm font-semibold dark:text-white">Nexus</span>
          </div>
          {/* Botão Voltar ao Topo posicionado na extrema direita */}
          <Button
            aria-label="Voltar ao topo"
            onClick={scrollToTop}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-lg p-0 bg-purple-600 text-white shadow-lg",
              "hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800",
              "transition-all duration-300 ease-in-out",
              showScrollTopButton
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            )}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
        {/* Linha com Navegação e Copyright centralizados */}
        <div className="flex flex-col items-center gap-4">
          <nav className="flex flex-wrap justify-center gap-4">
            <Link
              to="/termos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground dark:text-gray-300 hover:underline underline-offset-4 transition-colors"
            >
              Termos
            </Link>
            <Link
              to="/politica-de-privacidade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground dark:text-gray-300 hover:underline underline-offset-4 transition-colors"
            >
              Privacidade
            </Link>
            <Link
              to="/contato"
              className="text-xs text-muted-foreground dark:text-gray-300 hover:underline underline-offset-4 transition-colors"
            >
              Contato
            </Link>
          </nav>
          <p className="text-xs text-muted-foreground dark:text-gray-300 text-center">
            © {currentYear} Nexus. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* DESKTOP: Layout para telas médias e maiores */}
      <div className="hidden md:flex container mx-auto px-4 items-center justify-between">
        {/* Coluna Esquerda: Logo (centralizada na coluna) */}
        <div className="flex-1 flex justify-start items-center">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-white/20 blur-[2px]"></div>
              </div>
            </div>
            <span className="text-sm font-semibold dark:text-white">Nexus</span>
          </div>
        </div>

        {/* Coluna Central: Navegação - Centralizada */}
        <div className="flex-1 flex justify-center">
          <nav className="flex gap-6">
            <Link
              to="/termos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground dark:text-gray-300 hover:underline underline-offset-4 transition-colors"
            >
              Termos
            </Link>
            <Link
              to="/politica-de-privacidade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground dark:text-gray-300 hover:underline underline-offset-4 transition-colors"
            >
              Privacidade
            </Link>
            <Link
              to="/contato"
              className="text-xs text-muted-foreground dark:text-gray-300 hover:underline underline-offset-4 transition-colors"
            >
              Contato
            </Link>
          </nav>
        </div>

        {/* Coluna Direita: Copyright e Botão Voltar ao Topo alinhados à direita */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <p className="text-xs text-muted-foreground dark:text-gray-300 text-right">
            © {currentYear} Nexus. Todos os direitos reservados.
          </p>
          <Button
            aria-label="Voltar ao topo"
            onClick={scrollToTop}
            className={cn(
              "h-10 w-10 rounded-lg p-0 bg-purple-600 text-white shadow-lg",
              "hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800",
              "transition-all duration-300 ease-in-out",
              showScrollTopButton
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            )}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
