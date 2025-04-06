import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "src/lib/utils";
import { Button } from "src/components/ui/button";
import ModeToggle from "src/components/DarkMode/ModeToggle";
import { Sheet, SheetContent, SheetTrigger } from "src/components/ui/sheet";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Classes para links do DESKTOP (Versão Original que você gostava) ---
  const desktopActiveClasses =
    "text-black dark:text-white text-sm font-medium transition-colors";
  const desktopInactiveClasses =
    "text-sm font-medium text-gray-500 dark:text-gray-300 transition-colors hover:text-black dark:hover:text-white";
  // -----------------------------------------------------------------------

  // --- Classes para links DENTRO DA SHEET (Padronizadas com Zinc) ---
  const sheetLinkBaseClasses =
    "text-base font-medium transition-colors px-4 py-3 rounded-md block";
  const sheetActiveClasses = cn(
    sheetLinkBaseClasses,
    "bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white"
  );
  const sheetInactiveClasses = cn(
    sheetLinkBaseClasses,
    "text-gray-500 dark:text-zinc-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-zinc-800 dark:hover:text-white"
  );
  // ------------------------------------------------------------------

  return (
    // Header com cores e borda padronizadas
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b",
        "border-gray-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "dark:border-zinc-800 dark:bg-zinc-950/90 dark:supports-[backdrop-filter]:bg-zinc-950/80"
      )}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo e nome da marca */}
        <NavLink to="/" className="flex items-center gap-2 mr-6">
          {" "}
          {/* mr-6 pode ser ajustado se necessário para balancear */}
          <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-white/20 blur-[2px]"></div>
            </div>
          </div>
          <span className="text-xl font-bold dark:text-white">Nexus</span>
        </NavLink>

        {/* Navegação principal DESKTOP - justify-center adicionado */}
        <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-6 flex-1">
          {" "}
          {/* <<< ADICIONADO justify-center */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? desktopActiveClasses : desktopInactiveClasses
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/para-candidatos"
            className={({ isActive }) =>
              isActive ? desktopActiveClasses : desktopInactiveClasses
            }
          >
            Para Candidatos
          </NavLink>
          <NavLink
            to="/para-empresas"
            className={({ isActive }) =>
              isActive ? desktopActiveClasses : desktopInactiveClasses
            }
          >
            Para Empresas
          </NavLink>
          <NavLink
            to="/sobre-nos"
            className={({ isActive }) =>
              isActive ? desktopActiveClasses : desktopInactiveClasses
            }
          >
            Sobre
          </NavLink>
        </nav>

        {/* Seção direita: Botão de troca de modo e links de autenticação */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Botão de troca de modo */}
          <div className="rounded-lg hover:bg-zinc-100 active:bg-zinc-100 dark:hover:bg-zinc-800 dark:active:bg-zinc-800">
            <ModeToggle />
          </div>

          {/* Botões de "Entrar" e "Cadastre-se" DESKTOP - Estilos Originais */}
          <div className="hidden md:flex gap-2">
            <Button
              className="hover:bg-gray-100 dark:hover:bg-zinc-800 bg-white dark:bg-black dark:border-zinc-700 border transition-all duration-100"
              variant="outline"
              asChild
            >
              <NavLink className="dark:text-white" to="/login">
                Entrar
              </NavLink>
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-500 text-white transition-all duration-100"
              asChild
            >
              <NavLink to="/cadastro">Cadastre-se</NavLink>
            </Button>
          </div>

          {/* --- ÍNICIO: Lógica da Sheet Mobile --- */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            {/* Botão de menu mobile (Trigger) */}
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>

            {/* Conteúdo da Sheet */}
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] bg-background bg-white dark:bg-zinc-950 p-0 flex flex-col border-l dark:border-zinc-800"
            >
              {/* Cabeçalho da Sheet */}
              <div className="flex items-center justify-between p-4 h-16 border-b dark:border-zinc-800">
                <NavLink
                  to="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-white/20 blur-[2px]"></div>
                    </div>
                  </div>
                  <span className="text-xl font-bold dark:text-white">
                    Nexus
                  </span>
                </NavLink>
                {/* Botão X padrão da Sheet aqui */}
              </div>

              {/* Navegação dentro da Sheet */}
              <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? sheetActiveClasses : sheetInactiveClasses
                  }
                >
                  Início
                </NavLink>
                <NavLink
                  to="/para-candidatos"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? sheetActiveClasses : sheetInactiveClasses
                  }
                >
                  Para Candidatos
                </NavLink>
                <NavLink
                  to="/para-empresas"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? sheetActiveClasses : sheetInactiveClasses
                  }
                >
                  Para Empresas
                </NavLink>
                <NavLink
                  to="/sobre-nos"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? sheetActiveClasses : sheetInactiveClasses
                  }
                >
                  Sobre
                </NavLink>
              </nav>

              {/* Seção de autenticação na Sheet (no rodapé) */}
              <div className="mt-auto p-4 border-t dark:border-zinc-800">
                <div className="flex flex-col gap-3">
                  {/* Botão Entrar Padronizado com Hover Shadow */}
                  <Button
                    className="w-full hover:bg-gray-100 dark:hover:bg-zinc-800 bg-background dark:bg-transparent dark:border-zinc-700 transition-all duration-300 ease-in-out dark:text-white dark:hover:shadow-[0_4px_10px_rgba(255,255,255,0.1)]"
                    variant="outline"
                    asChild
                  >
                    <NavLink
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Entrar
                    </NavLink>
                  </Button>
                  {/* Botão Cadastre-se Padronizado com Hover Shadow */}
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white transition-all duration-300 ease-in-out dark:hover:shadow-[0_4px_14px_rgba(168,85,247,0.3)]"
                    asChild
                  >
                    <NavLink
                      to="/cadastro"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Cadastre-se
                    </NavLink>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          {/* --- FIM: Lógica da Sheet Mobile --- */}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
