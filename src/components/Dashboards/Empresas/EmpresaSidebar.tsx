import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Building2,
  MessageSquare,
  PanelRightOpen,
  Settings,
  Users,
} from "lucide-react";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "src/components/ui/sidebar";
import { Badge } from "src/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { cn } from "src/lib/utils";

// Interface para as props da Sidebar da Empresa
interface EmpresaSidebarProps {
  isOpen: boolean;
  toggleSidebar?: () => void;
  isMobileView?: boolean;
  empresaName: string;
  empresaAccountType: string;
  empresaInitials: string;
  empresaAvatarSrc?: string;
  messageCount: number;
  onNavigate?: (path: string) => void; // Mantido na interface, mas não usado para navegação principal
  activePage: string; // Identificador da página ativa para highlight
}

export const EmpresaSidebar: React.FC<EmpresaSidebarProps> = ({
  isOpen,
  toggleSidebar,
  isMobileView = false,
  empresaName,
  empresaAccountType,
  empresaInitials,
  empresaAvatarSrc,
  messageCount,
  // onNavigate, // Não precisamos mais desestruturar se não for usar
  activePage,
}) => {
  // Classe base para os botões do menu (sem alterações)
  const menuButtonClass = (isActive = false): string =>
    cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors dark:text-gray-400 hover:bg-accent hover:text-foreground w-full text-left", // Garantir alinhamento e largura
      !isOpen ? "justify-center px-2" : "",
      isActive
        ? "bg-accent text-foreground bg-zinc-200/70 dark:bg-zinc-700 dark:text-white" // Estilo ativo
        : "hover:bg-zinc-200/40 hover:dark:bg-zinc-800" // Estilo hover não ativo no dark mode (opcional)
    );

  return (
    // Container principal da Sidebar - COR PADRONIZADA
    <div
      className={cn(
        "flex flex-col h-full bg-background dark:bg-zinc-900 w-full", // COR PADRONIZADA: dark:bg-zinc-900
        isMobileView ? "" : ""
      )}
    >
      {/* Cabeçalho da Sidebar - COR PADRONIZADA */}
      <SidebarHeader className="flex items-center justify-between p-4 h-16 border-b dark:border-zinc-800">
        {" "}
        {/* COR PADRONIZADA: dark:border-zinc-800 */}
        {/* Container da Logo e Nome */}
        <div className="flex items-center gap-2">
          {/* Ícone/Logo Nexus */}
          <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-white/20 blur-[2px]"></div>
            </div>
          </div>
          {/* Nome "Nexus" somente se aberto */}
          {isOpen && (
            <span className="text-xl font-bold dark:text-white whitespace-nowrap">
              {" "}
              {/* COR TEXTO PADRÃO */}
              Nexus
            </span>
          )}
        </div>
        {/* Botão para Minimizar/Expandir (apenas Desktop) - COR PADRONIZADA */}
        <div className="pt-2"></div>
        {!isMobileView && toggleSidebar && (
          <button
            onClick={toggleSidebar}
            className="p-1 rounded ml-auto hover:bg-zinc-200 dark:hover:bg-zinc-800" // COR PADRONIZADA: hover:bg-zinc-800 (light hover adicionado para consistência)
            aria-label={isOpen ? "Recolher menu" : "Expandir menu"}
          >
            <PanelRightOpen
              className={cn(
                "h-6 w-6 transform transition-transform duration-200 dark:text-white", // COR TEXTO PADRÃO
                !isOpen ? "rotate-180" : ""
              )}
            />
          </button>
        )}
      </SidebarHeader>

      {/* Conteúdo Principal da Sidebar (Menu) */}
      <SidebarContent className="flex-1 py-4 pt-12 overflow-y-auto">
        <SidebarMenu className="space-y-1 px-2">
          {/* Item: Candidatos */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                to="/dashboard/empresa" // Assume que esta é a rota correta para "Candidatos" ou o dashboard principal
                className={menuButtonClass(
                  activePage === "dashboard" || activePage === "candidatos"
                )} // COR PADRONIZADA (via função)
              >
                <Users className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span>Candidatos</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Item: Vagas */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                to="/dashboard/empresa/gerenciar-vagas"
                className={menuButtonClass(activePage === "gerenciar-vagas")} // COR PADRONIZADA (via função)
              >
                <Building2 className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span>Vagas</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Item: Mensagens - COR PADRONIZADA BADGE RING */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                to="/dashboard/empresa/mensagens"
                className={menuButtonClass(activePage === "mensagens")} // COR PADRONIZADA (via função)
              >
                {/* Div interna para layout do badge */}
                <div className="flex items-center gap-3">
                  {" "}
                  {/* Adicionado w-full aqui */}
                  <MessageSquare className="h-5 w-5 flex-shrink-0" />
                  {isOpen && (
                    <div className="flex flex-1 justify-between items-center">
                      <span>Mensagens</span>
                      <div className="ml-20"></div>
                      {messageCount > 0 && (
                        <Badge className="ml-auto h-5 px-1.5 text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                          {" "}
                          {/* Cores específicas mantidas */}
                          {messageCount}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
                {/* Badge indicador no modo recolhido */}
                {!isOpen && messageCount > 0 && (
                  // CORREÇÃO: Posição ajustada (right-1.5 top-1) e ring-zinc-900
                  <span className="absolute right-1/4 top-1 block h-2 w-2 rounded-full bg-purple-600 ring-background dark:ring-zinc-900">
                    {" "}
                    {/* COR PADRONIZADA: dark:ring-zinc-900 */}
                    <span className="sr-only">
                      {messageCount} mensagens não lidas
                    </span>
                  </span>
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Item: Análises */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                to="/dashboard/empresa/analises"
                className={menuButtonClass(activePage === "analises")} // COR PADRONIZADA (via função)
              >
                <BarChart3 className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span>Análises</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Item: Configurações */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                to="/dashboard/empresa/configuracoes"
                className={menuButtonClass(activePage === "configuracoes")} // COR PADRONIZADA (via função)
              >
                <Settings className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span>Configurações</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      {/* Rodapé da Sidebar - COR PADRONIZADA */}
      <SidebarFooter className="p-4 border-t dark:border-zinc-700">
        {" "}
        {/* COR PADRONIZADA: dark:border-zinc-700 */}
        <div
          className={cn(
            "flex items-center gap-3",
            !isOpen ? "justify-center" : ""
          )}
        >
          {/* Avatar da Empresa */}
          <Avatar className={cn(isOpen ? "h-9 w-9" : "h-8 w-8")}>
            <AvatarImage src={empresaAvatarSrc} alt={empresaName} />
            <AvatarFallback>{empresaInitials}</AvatarFallback>
          </Avatar>
          {/* Informações da Empresa (se sidebar aberta) */}
          {isOpen && (
            <div className="overflow-hidden">
              <p className="text-sm font-medium dark:text-white truncate">
                {" "}
                {/* COR TEXTO PADRÃO */}
                {empresaName}
              </p>
              <p className="text-xs text-muted-foreground dark:text-zinc-400 truncate">
                {" "}
                {/* COR PADRONIZADA: dark:text-zinc-400 */}
                {empresaAccountType}
              </p>
            </div>
          )}
        </div>
      </SidebarFooter>
    </div>
  );
};
