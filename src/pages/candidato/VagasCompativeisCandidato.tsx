import React, { useState } from "react";

// --- Importações Essenciais (como na página funcional) ---
import { SidebarProvider } from "src/components/ui/sidebar"; // Ou seu contexto
import { Sheet, SheetContent } from "src/components/ui/sheet"; // Para sidebar mobile
import { cn } from "src/lib/utils"; // Utilitário para classes condicionais
import { DashboardNavbar } from "src/components/Dashboards/DashboardNavbar";
import { CandidatoSidebar } from "src/components/Dashboards/Candidatos/CandidatoSidebar";

// --- Importações dos Componentes UI para o conteúdo da página ---
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { Badge } from "src/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar"; // Importado AvatarImage também

// --- Importações dos Ícones ---
import {
  Building2,
  Calendar,
  Clock,
  Filter,
  Heart,
  MapPin,
  Search,
  Sliders,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import Footer from "src/components/Footer/Footer";

// --- Importações para Navegação (Opcional, descomentar se usar) ---
// import { useNavigate } from 'react-router-dom';

/**
 * Página "Vagas Compatíveis" do Dashboard do Candidato.
 * Utiliza a mesma estrutura de layout da página de Perfil funcional.
 */
export default function VagasCompativeis() {
  // --- Estado para Controle da Sidebar/Sheet (Exatamente como na página funcional) ---
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  // --- Hooks (Exemplo: Navegação) ---
  // const navigate = useNavigate(); // Descomentar para usar navegação real

  // --- Handlers para Sidebar/Sheet (Exatamente como na página funcional) ---
  const toggleDesktopSidebar = () => setIsDesktopSidebarOpen((prev) => !prev);
  const openMobileSheet = () => setIsMobileSheetOpen(true);

  const navigateTo = (path: string) => {
    console.log("Navegar para (placeholder):", path);
    // Exemplo com react-router-dom:
    // navigate(path); // Ajuste o path base se necessário (e.g., `/dashboard/candidato/${path}`)
    setIsMobileSheetOpen(false); // Fecha o sheet mobile ao clicar
  };

  // --- Dados de Exemplo do Usuário (Consistente com a página funcional) ---
  const userData = {
    name: "Ana Silva",
    title: "Engenheira de Software Sênior",
    initials: "AS",
    avatarSrc: "https://github.com/shadcn.png", // URL de exemplo
    messageCount: 3,
    notificationCount: 5,
  };

  // Dummy pagination variables for demonstration
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const totalItems = 30;
  const startIndex = (currentPage - 1) * 10 + 1;
  const endIndex = Math.min(totalItems, currentPage * 10);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <SidebarProvider>
      {/* Container principal Flex (Estrutura da página funcional) */}
      <div className="flex min-h-screen bg-gray-100/50 dark:bg-black">
        {" "}
        {/* Cor de fundo como na página funcional */}
        {/* --- Sidebar Desktop (Estrutura da página funcional) --- */}
        <div
          className={cn(
            "hidden lg:flex h-screen sticky top-0 transition-all duration-300 ease-in-out border-r dark:border-zinc-800",
            "bg-background dark:bg-gray-900", // Fundo explícito
            isDesktopSidebarOpen ? "w-64" : "w-16" // Largura dinâmica
          )}
        >
          <CandidatoSidebar
            isOpen={isDesktopSidebarOpen}
            toggleSidebar={toggleDesktopSidebar}
            userName={userData.name}
            userTitle={userData.title}
            userInitials={userData.initials}
            userAvatarSrc={userData.avatarSrc}
            messageCount={userData.messageCount}
            onNavigate={navigateTo}
            activePage="vagas" // **IMPORTANTE**: Marca 'Vagas' como ativa
          />
        </div>
        {/* --- Sidebar Mobile (Sheet - Estrutura da página funcional) --- */}
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetContent
            side="left"
            className={cn(
              "p-0 w-64 lg:hidden border-r dark:border-gray-800",
              "bg-white dark:bg-gray-900" // Fundo explícito
            )}
          >
            <CandidatoSidebar
              isOpen={true} // Sempre aberta dentro do Sheet
              isMobileView={true} // Indica que é a versão mobile
              userName={userData.name}
              userTitle={userData.title}
              userInitials={userData.initials}
              userAvatarSrc={userData.avatarSrc}
              messageCount={userData.messageCount}
              onNavigate={navigateTo}
              activePage="vagas" // **IMPORTANTE**: Marca 'Vagas' como ativa
            />
          </SheetContent>
        </Sheet>
        {/* --- Área de Conteúdo Principal (Estrutura da página funcional) --- */}
        <div className="flex-1 flex flex-col min-w-0 relative">
          <div className="sticky top-0 z-50">
            {/* Navbar Superior */}
            <DashboardNavbar
              onMobileMenuClick={openMobileSheet}
              userName={userData.name}
              userInitials={userData.initials}
              userAvatarSrc={userData.avatarSrc}
              notificationCount={userData.notificationCount}
            />
          </div>

          {/* Conteúdo Principal (Main) - Layout geral da página funcional */}
          {/* Aplicando padding e background consistentes */}
          <main className="flex-1 p-4 md:p-6 bg-gray-50/50 dark:bg-zinc-900/60 overflow-x-hidden">
            {" "}
            {/* CORREÇÃO: Fundo dark:bg-zinc-900/60 */}
            {/* ================================================================== */}
            {/* INÍCIO DO CONTEÚDO ESPECÍFICO DA PÁGINA DE VAGAS                  */}
            {/* Este container interno mantém o espaçamento original 'space-y-6'  */}
            {/* ================================================================== */}
            <div className="space-y-6">
              {/* Cabeçalho da Página e Botões de Ação */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  {/* Título e Descrição com cores consistentes */}
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Vagas Compatíveis
                  </h1>
                  <p className="text-muted-foreground dark:text-gray-400">
                    Descubra oportunidades que correspondem às suas habilidades
                    e preferências
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {/* Botões Outline com estilo dark consistente */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // CORREÇÃO: Borda e Hover
                  >
                    <Filter className="h-3.5 w-3.5" />
                    <span>Filtros</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // CORREÇÃO: Borda e Hover
                  >
                    <Sliders className="h-3.5 w-3.5" />
                    <span>Preferências</span>
                  </Button>
                </div>
              </div>

              {/* Barra de Pesquisa */}
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground dark:text-gray-400" />
                {/* Input com estilo dark consistente */}
                <Input
                  type="search"
                  placeholder="Buscar vagas, empresas ou locais..."
                  className="pl-8 w-full md:w-2/3 lg:w-1/2 bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // CORREÇÃO: Fundo e Borda
                />
              </div>

              {/* Cards de Estatísticas Resumidas */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Cards com estilo dark consistente */}
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* CORREÇÃO: Fundo e Borda */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      {" "}
                      {/* CORREÇÃO: Cor do texto */}
                      Pontuação de Compatibilidade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      95%
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                      Pontuação média para vagas recomendadas
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* CORREÇÃO: Fundo e Borda */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      {" "}
                      {/* CORREÇÃO: Cor do texto */}
                      Novas Vagas Compatíveis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      12
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                      Novas vagas nos últimos 7 dias
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* CORREÇÃO: Fundo e Borda */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      {" "}
                      {/* CORREÇÃO: Cor do texto */}
                      Candidaturas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      5
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                      Candidaturas de emprego ativas
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Sistema de Abas para Vagas */}
              <Tabs defaultValue="recomendadas" className="w-full">
                <TabsList className="bg-gray-100 dark:bg-zinc-800 lg:w-9/12 w-full gap-1">
                  {" "}
                  {/* CORREÇÃO: Fundo dark */}
                  <TabsTrigger
                    value="recomendadas"
                    className="data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors" // CORREÇÃO: Fundo ativo dark
                  >
                    Recomendadas
                  </TabsTrigger>
                  <TabsTrigger
                    value="aplicadas"
                    className="data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors" // CORREÇÃO: Fundo ativo dark
                  >
                    Aplicadas
                  </TabsTrigger>
                  <TabsTrigger
                    value="salvas"
                    className="data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors" // CORREÇÃO: Fundo ativo dark
                  >
                    Salvas
                  </TabsTrigger>
                </TabsList>

                {/* Conteúdo da Aba: Recomendadas */}
                <TabsContent value="recomendadas" className="mt-4">
                  <div className="grid gap-4">
                    {/* --- Exemplo de Card de Vaga 1 --- */}
                    <Card className="overflow-hidden bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                      <div className="flex flex-col md:flex-row">
                        {/* Seção Principal */}
                        {/* Aplicado padding e largura como no código a ser mudado */}
                        <div className="p-4 md:p-6 md:w-2/3">
                          {/* Div Externa do Header - CORRIGIDO com flex-col sm:flex-row e gap */}
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                            {" "}
                            {/* <<< CORREÇÃO APLICADA AQUI */}
                            {/* Info do Candidato (Avatar, Nome, Título) */}
                            <div className="flex items-center gap-4">
                              <Avatar className="h-12 w-12 border dark:border-zinc-700">
                                <AvatarImage
                                  src={userData.avatarSrc} // Usando userData como exemplo
                                  alt="Logo Empresa"
                                />
                                <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                  {/* Adapte o fallback se necessário */}
                                  TC
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                  Desenvolvedor Frontend Sênior
                                </h3>
                                <p className="text-sm text-muted-foreground dark:text-gray-400">
                                  TechCorp Inc.
                                </p>
                              </div>
                            </div>
                            {/* Ações / Badges - CORRIGIDO com self-start/center, shrink-0 e gap padronizado */}
                            <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-center">
                              {" "}
                              {/* <<< CORREÇÃO APLICADA AQUI */}
                              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 whitespace-nowrap">
                                95% Compatível
                              </Badge>
                              <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Salvar vaga"
                                // Ajustado tamanho do botão/ícone e cores/hovers para consistência
                                className="h-8 w-8 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                              >
                                <Heart className="h-5 w-5" />{" "}
                                {/* Ajustado tamanho do ícone */}
                              </Button>
                            </div>
                          </div>
                          {/* Restante do conteúdo do card (inalterado) */}
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>São Francisco, CA (Remoto)</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>Tempo Integral</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>Publicado há 2 dias</span>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                Habilidades Requeridas
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                <Badge
                                  variant="outline"
                                  className="dark:border-zinc-500 dark:text-gray-400"
                                >
                                  React
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="dark:border-zinc-500 dark:text-gray-400"
                                >
                                  TypeScript
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="dark:border-zinc-500 dark:text-gray-400"
                                >
                                  Tailwind CSS
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="dark:border-zinc-500 dark:text-gray-400"
                                >
                                  CSS
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="dark:border-zinc-500 dark:text-gray-400"
                                >
                                  5+ anos
                                </Badge>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground dark:text-gray-400 line-clamp-2">
                              Estamos procurando um Desenvolvedor Frontend
                              experiente para se juntar à nossa equipe...
                            </p>
                          </div>
                        </div>
                        {/* Seção Lateral (inalterada) */}
                        <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-b-lg md:rounded-bl-none md:rounded-r-lg p-4 md:p-6 flex flex-col justify-between md:w-1/3 border-t md:border-t-0 md:border-l dark:border-zinc-700">
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                Faixa Salarial
                              </h4>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                $120.000 - $150.000 / ano
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                Benefícios
                              </h4>
                              <ul className="text-sm list-disc list-inside space-y-1 text-muted-foreground dark:text-gray-400">
                                <li>Plano de saúde, odonto e visão</li>
                                <li>401(k) com contrapartida</li>
                                <li>Horário flexível</li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 mt-4">
                            <Button
                              size="sm"
                              className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                            >
                              Candidatar-se Agora
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                            >
                              Ver Detalhes
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* --- Exemplo de Card de Vaga 2 --- */}
                    <Card className="overflow-hidden bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                      <div className="flex flex-col md:flex-row">
                        {/* Seção Principal */}
                        {/* Aplicado padding e largura */}
                        <div className="p-4 md:p-6 md:w-2/3">
                          {" "}
                          {/* Ajustado padding p/ 4 no mobile */}
                          {/* Div Externa do Header - CORRIGIDO com flex-col sm:flex-row e gap */}
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                            {" "}
                            {/* <<< CORREÇÃO APLICADA AQUI */}
                            {/* Info da Empresa */}
                            <div className="flex items-center gap-4">
                              <Avatar className="h-12 w-12 border dark:border-zinc-700">
                                <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                  IL
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                  Engenheiro Full Stack
                                </h3>
                                <p className="text-sm text-muted-foreground dark:text-gray-400">
                                  InnovateLabs
                                </p>
                              </div>
                            </div>
                            {/* Ações / Badges - CORRIGIDO com self-start/center, shrink-0 e gap padronizado */}
                            <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-center">
                              {" "}
                              {/* <<< CORREÇÃO APLICADA AQUI */}
                              <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 whitespace-nowrap">
                                88% Compatível
                              </Badge>
                              <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Salvar vaga"
                                className="h-8 w-8 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                              >
                                <Heart className="h-5 w-5" />{" "}
                                {/* Ajustado tamanho */}
                              </Button>
                            </div>
                          </div>
                          {/* Restante do conteúdo (inalterado) */}
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>Nova York, NY (Híbrido)</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>Tempo Integral</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>Publicado há 5 dias</span>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                Habilidades Requeridas
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                <Badge
                                  variant="outline"
                                  className="dark:border-zinc-500 dark:text-gray-400"
                                >
                                  Node.js
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="dark:border-zinc-500 dark:text-gray-400"
                                >
                                  React
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="dark:border-zinc-500 dark:text-gray-400"
                                >
                                  Java
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="dark:border-zinc-500 dark:text-gray-400"
                                >
                                  PostgreSQL
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="dark:border-zinc-500 dark:text-gray-400"
                                >
                                  3+ anos
                                </Badge>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground dark:text-gray-400 line-clamp-2">
                              Junte-se à nossa equipe dinâmica como Engenheiro
                              Full Stack para desenvolver e manter aplicações
                              web...
                            </p>
                          </div>
                        </div>
                        {/* Seção Lateral (inalterada) */}
                        <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-b-lg md:rounded-bl-none md:rounded-r-lg p-4 md:p-6 flex flex-col justify-between md:w-1/3 border-t md:border-t-0 md:border-l dark:border-zinc-700">
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                Faixa Salarial
                              </h4>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                $110.000 - $140.000 / ano
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                Benefícios
                              </h4>
                              <ul className="text-sm list-disc list-inside space-y-1 text-muted-foreground dark:text-gray-400">
                                <li>Benefícios de saúde abrangentes</li>
                                <li>Férias ilimitadas (PTO)</li>
                                <li>Opções de trabalho remoto</li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 mt-4">
                            <Button
                              size="sm"
                              className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                            >
                              Candidatar-se Agora
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                            >
                              Ver Detalhes
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                    {/* Adicionar mais cards de vagas aqui */}
                  </div>
                </TabsContent>

                {/* Conteúdo da Aba: Aplicadas */}
                <TabsContent value="aplicadas" className="mt-4">
                  <Card className="p-6 bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* CORREÇÃO: Fundo e Borda */}
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/20 mb-4">
                        <Building2 className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                        Suas Candidaturas
                      </h3>
                      <p className="text-muted-foreground dark:text-gray-400 max-w-md mx-auto mb-4">
                        Você tem 5 candidaturas de emprego ativas. Acompanhe o
                        status aqui.
                      </p>
                      <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                        {" "}
                        {/* Adicionado bg light */}
                        Ver Candidaturas
                      </Button>
                    </div>
                  </Card>
                </TabsContent>

                {/* Conteúdo da Aba: Salvas */}
                <TabsContent value="salvas" className="mt-4">
                  <Card className="p-6 bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* CORREÇÃO: Fundo e Borda */}
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-900/20 mb-4">
                        <Heart className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                        Vagas Salvas
                      </h3>
                      <p className="text-muted-foreground dark:text-gray-400 max-w-md mx-auto mb-4">
                        Você tem 8 vagas salvas. Revise-as e candidate-se quando
                        estiver pronto.
                      </p>
                      <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                        {" "}
                        {/* Adicionado bg light */}
                        Ver Vagas Salvas
                      </Button>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Controles de Paginação */}
              {/* Controles de Paginação */}
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 pt-4 border-t dark:border-zinc-700">
                {/* Texto "Mostrando X-Y de Z" */}
                <div className="text-sm text-muted-foreground dark:text-gray-400 text-center md:text-left">
                  Mostrando{" "}
                  <strong>
                    {startIndex}-{endIndex}
                  </strong>{" "}
                  de <strong>{totalItems}</strong> vagas{" "}
                  {/* Use variáveis reais aqui */}
                </div>

                {/* Container Principal dos Botões de Paginação */}
                <div className="flex items-center gap-2 w-full md:w-auto justify-center">
                  {" "}
                  {/* Mantém centralizado e permite que os itens internos controlem o espaço */}
                  {/* Botão Anterior */}
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === 1} // Desabilita se for a primeira página
                    onClick={() => handlePageChange(currentPage - 1)} // Adiciona onClick
                    className="disabled:opacity-50 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // Estilo Padrão Outline
                  >
                    Anterior
                  </Button>
                  {/* Container Scrollável para Botões de Página (APENAS MOBILE) */}
                  <div className="flex-1 overflow-x-auto whitespace-nowrap md:hidden mx-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
                    {/* Para estilizar a barra de scroll (opcional, requer plugin ou CSS customizado) */}
                    {/* Exemplo: npm install -D tailwind-scrollbar */}
                    {/* No tailwind.config.js: plugins: [require('tailwind-scrollbar')], */}
                    <div className="inline-flex items-center gap-1 px-1">
                      {" "}
                      {/* Container interno para os botões */}
                      {/* Renderiza os botões de página - PRECISA DE DADOS REAIS */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <Button
                            key={page}
                            variant={
                              page === currentPage ? "outline" : "outline"
                            }
                            size="sm"
                            className={cn(
                              "w-8 h-8 p-0 flex-shrink-0", // Tamanho fixo e impede encolhimento
                              "dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800", // Estilo padrão
                              page === currentPage &&
                                "bg-zinc-200 dark:bg-zinc-700 border-zinc-400 dark:border-zinc-500 font-bold" // Estilo ativo
                            )}
                            onClick={() => handlePageChange(page)} // Adiciona onClick
                          >
                            {page}
                          </Button>
                        )
                      )}
                    </div>
                  </div>
                  {/* Botões Numéricos para Desktop (Mantidos como antes) */}
                  <div className="hidden md:flex items-center gap-2">
                    {/* Lógica de renderização desktop (pode precisar ser dinâmica também) */}
                    {[1, 2, 3].map(
                      (
                        page // Mantenha sua lógica atual ou adapte para ser dinâmica
                      ) => (
                        <Button
                          key={page}
                          variant={page === currentPage ? "outline" : "outline"}
                          size="sm"
                          className={cn(
                            "w-8 h-8 p-0",
                            "dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800",
                            page === currentPage &&
                              "bg-zinc-100 dark:bg-zinc-800 font-bold"
                          )}
                          onClick={() => handlePageChange(page)} // Adiciona onClick
                        >
                          {page}
                        </Button>
                      )
                    )}
                    {totalPages > 4 && ( // Exibe '...' se houver mais páginas que o limite inicial
                      <span className="text-muted-foreground dark:text-gray-500 px-1">
                        ...
                      </span>
                    )}
                    {totalPages > 3 && ( // Exibe a última página se houver mais de 3
                      <Button
                        variant="outline"
                        size="sm"
                        className={cn(
                          "w-8 h-8 p-0",
                          "dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800",
                          totalPages === currentPage &&
                            "bg-zinc-100 dark:bg-zinc-800 font-bold"
                        )}
                        onClick={() => handlePageChange(totalPages)} // Adiciona onClick
                      >
                        {totalPages}
                      </Button>
                    )}
                  </div>
                  {/* Botão Próxima */}
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === totalPages} // Desabilita se for a última página
                    onClick={() => handlePageChange(currentPage + 1)} // Adiciona onClick
                    className="disabled:opacity-50 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // Estilo Padrão Outline
                  >
                    Próxima
                  </Button>
                </div>
              </div>
            </div>
            {/* ================================================================== */}
            {/* FIM DO CONTEÚDO ESPECÍFICO DA PÁGINA DE VAGAS                    */}
            {/* ================================================================== */}
          </main>
          {/* Rodapé */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
