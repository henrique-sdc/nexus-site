import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Search, Bell, Menu, X } from "lucide-react";
import { Button } from "src/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import ModeToggle from "../DarkMode/ModeToggle";
import { cn } from "src/lib/utils";

interface DashboardNavbarProps {
  onMobileMenuClick: () => void;
  userName: string;
  userInitials: string;
  userAvatarSrc?: string;
  notificationCount: number;
}

export const DashboardNavbar: React.FC<DashboardNavbarProps> = ({
  onMobileMenuClick,
  userName,
  userInitials,
  userAvatarSrc,
  notificationCount,
}) => {
  const location = useLocation();
  const placeholderText = location.pathname.startsWith("/dashboard/empresa")
    ? "Pesquisar por candidatos, habilidades..."
    : "Pesquisar por vagas, empresas...";

  const [searchActive, setSearchActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const searchMobileContainerRef = useRef<HTMLDivElement>(null);
  const inputMobileRef = useRef<HTMLInputElement>(null);

  // Controle de scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setIsVisible(true);
        return;
      }

      if (Math.abs(currentScroll - lastScrollY) < 5) return;

      if (currentScroll > lastScrollY) {
        // Scroll para baixo
        setIsVisible(false);
      } else {
        // Scroll para cima
        setIsVisible(true);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Restante dos efeitos originais...
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchMobileContainerRef.current &&
        !searchMobileContainerRef.current.contains(event.target as Node)
      ) {
        setSearchActive(false);
      }
    };

    if (searchActive && window.innerWidth < 768) {
      const timerId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);
      return () => {
        clearTimeout(timerId);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [searchActive]);

  useEffect(() => {
    if (searchActive && window.innerWidth < 768 && inputMobileRef.current) {
      const timer = setTimeout(() => inputMobileRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [searchActive]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6 dark:border-zinc-700 dark:bg-zinc-900 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      {/* --- Elementos da Esquerda --- */}
      <div
        className={cn(
          "flex items-center gap-2 transition-opacity duration-200",
          searchActive && window.innerWidth < 768
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        )}
      >
        <div className="lg:hidden">
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-zinc-200 dark:hover:bg-zinc-800 shrink-0"
            onClick={onMobileMenuClick}
            disabled={searchActive}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menu lateral</span>
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-white/20 blur-[2px]"></div>
            </div>
          </div>
          <span className="text-xl font-bold dark:text-white">Nexus</span>
        </div>
      </div>

      {/* --- Barra de Pesquisa Desktop --- */}
      <div className="relative flex-1 hidden md:block lg:left-[-1rem]">
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-zinc-400" />
          <input
            type="search"
            placeholder={placeholderText}
            className="w-full h-10 rounded-lg bg-background pl-8 pr-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-zinc-800 dark:border dark:border-zinc-700 dark:text-zinc-300 dark:placeholder-zinc-400"
          />
        </div>
      </div>

      {/* --- Ícones da Direita e Busca Mobile --- */}
      <div className="flex items-center justify-end gap-2 md:gap-4">
        {/* Busca Mobile */}
        <div
          ref={searchMobileContainerRef}
          className={cn(
            "relative flex items-center md:hidden overflow-hidden transition-all duration-300 ease-in-out h-10",
            !searchActive &&
              "w-10 border border-input dark:border-zinc-700 bg-background hover:bg-zinc-100 active:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:hover:bg-zinc-700 rounded-md justify-center",
            searchActive &&
              "absolute left-4 right-4 w-[calc(100%-2rem)] max-w-none border border-input dark:border-zinc-700 bg-background dark:bg-zinc-900 rounded-md"
          )}
        >
          <input
            ref={inputMobileRef}
            type="search"
            placeholder={placeholderText}
            className={cn(
              "w-full h-full rounded-md border-0 bg-transparent py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0",
              "dark:text-zinc-300 dark:placeholder-zinc-400 pl-3 pr-10",
              searchActive ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground dark:text-zinc-400"
            onClick={() => setSearchActive(!searchActive)}
            aria-label={searchActive ? "Fechar busca" : "Abrir busca"}
          >
            {searchActive ? (
              <X className="h-5 w-5" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Ícones da Direita */}
        <div
          className={cn(
            "flex items-center gap-2 md:gap-3 transition-opacity duration-200",
            searchActive && window.innerWidth < 768
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          )}
        >
          <div className="rounded-lg hover:bg-zinc-200 active:bg-zinc-200 dark:hover:bg-zinc-800 dark:active:bg-zinc-800">
            <ModeToggle />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full relative shrink-0 dark:border-zinc-700"
          >
            <Bell className="h-4 w-4 dark:text-white" />
            <span className="sr-only">Notificações</span>
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-purple-600 text-[10px] font-medium text-white flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </Button>
          <div className="hidden sm:block">
            <Avatar className="h-9 w-9 shrink-0 border dark:border-zinc-700">
              <AvatarImage src={userAvatarSrc} alt={userName} />
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
