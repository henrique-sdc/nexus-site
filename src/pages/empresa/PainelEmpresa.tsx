import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Badge } from "src/components/ui/badge";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Sheet, SheetContent } from "src/components/ui/sheet";
import { SidebarProvider } from "src/components/ui/sidebar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { cn } from "src/lib/utils";
import { Brain, FileCheck, Filter, Star, Users } from "lucide-react";
import { DashboardNavbar } from "src/components/Dashboards/DashboardNavbar";
import { EmpresaSidebar } from "src/components/Dashboards/Empresas/EmpresaSidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import Footer from "src/components/Footer/Footer";

const DashboardEmpresa: React.FC = () => {
  // --- Estado ---
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true); // Estado da sidebar desktop (aberta/fechada)
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false); // Estado da sidebar mobile (Sheet)

  // --- Dados de Exemplo da Empresa (Substitua por dados reais/fetch) ---
  const empresaData = {
    name: "TechCorp Inc.",
    accountType: "Conta de Administrador",
    initials: "TC",
    logoSrc: "https://github.com/shadcn.png", // Usando uma imagem de exemplo
    messageCount: 4, // Exemplo de contagem de mensagens
    notificationCount: 7, // Exemplo de contagem de notificações
  };

  // --- Dados de Paginação (Exemplo) ---
  const currentPage: number = 2;
  const totalPages = 10; // Exemplo
  const itemsPerPage = 10; // Exemplo
  const totalItems = 1248; // Exemplo

  const handlePageChange = (page: number) => {
    console.log("Mudar para página:", page);
    // Aqui eu atualizaria o estado da página atual e buscaria novos dados
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  // --- Handlers para controlar a Sidebar ---
  const toggleDesktopSidebar = () => setIsDesktopSidebarOpen((prev) => !prev);
  const openMobileSheet = () => setIsMobileSheetOpen(true);

  return (
    <SidebarProvider>
      {/* Container principal flexível - COR EXTERNA PADRONIZADA */}
      <div className="flex min-h-screen bg-gray-100/50 dark:bg-black dark:text-white">
        {" "}
        {/* COR PADRONIZADA: dark:bg-black */}
        {/* --- Sidebar Desktop (Fixa/Recolhida) - COR BORDA PADRONIZADA --- */}
        <div
          className={cn(
            "hidden lg:flex h-screen sticky top-0 transition-all duration-300 ease-in-out border-r dark:border-zinc-800", // COR PADRONIZADA: dark:border-zinc-800
            "bg-background dark:bg-gray-900", // Fundo Sidebar mantido gray-900
            isDesktopSidebarOpen ? "w-64" : "w-16"
          )}
        >
          {/* Renderiza o Sidebar da Empresa */}
          <EmpresaSidebar
            isOpen={isDesktopSidebarOpen}
            toggleSidebar={toggleDesktopSidebar}
            empresaName={empresaData.name}
            empresaAccountType={empresaData.accountType}
            empresaInitials={empresaData.initials}
            empresaAvatarSrc={empresaData.logoSrc}
            messageCount={empresaData.messageCount}
            onNavigate={() => {}}
            activePage="dashboard"
          />
        </div>
        {/* --- Sidebar Mobile (Sheet) - COR BORDA PADRONIZADA --- */}
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetContent
            side="left"
            className={cn(
              "p-0 w-64 lg:hidden border-r dark:border-zinc-800", // COR PADRONIZADA: dark:border-zinc-800
              "bg-white dark:bg-gray-900" // Fundo Sidebar mantido gray-900
            )}
          >
            <EmpresaSidebar
              isOpen={true}
              isMobileView={true}
              empresaName={empresaData.name}
              empresaAccountType={empresaData.accountType}
              empresaInitials={empresaData.initials}
              empresaAvatarSrc={empresaData.logoSrc}
              messageCount={empresaData.messageCount}
              onNavigate={() => {}}
              activePage="dashboard"
            />
          </SheetContent>
        </Sheet>
        {/* --- Área de Conteúdo Principal --- */}
        <div className="flex-1 flex flex-col min-w-0 relative">
          <div className="sticky top-0 z-50">
            {/* Navbar Superior */}
            <DashboardNavbar
              onMobileMenuClick={openMobileSheet}
              userName={empresaData.name}
              userInitials={empresaData.initials}
              userAvatarSrc={empresaData.logoSrc}
              notificationCount={empresaData.notificationCount}
            />
          </div>

          {/* Conteúdo Principal (Main) - COR FUNDO MAIN PADRONIZADA */}
          <main className="flex-1 flex flex-col p-4 md:p-6 gap-6 bg-gray-50/50 dark:bg-zinc-900/60 overflow-x-hidden">
            {" "}
            {/* COR PADRONIZADA: dark:bg-zinc-900/60 */}
            {/* ---- INÍCIO DO CONTEÚDO ESPECÍFICO DO DASHBOARD EMPRESA ---- */}
            {/* Cabeçalho do Conteúdo (Título e Botões) - CORES TEXTO/BOTÃO PADRÃO */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight dark:text-white">
                  {" "}
                  {/* COR TEXTO PADRÃO */}
                  Busca de Candidatos
                </h1>
                <p className="text-muted-foreground dark:text-gray-400">
                  {" "}
                  {/* COR TEXTO MUTED PADRÃO */}
                  Encontre o candidato perfeito para sua equipe.
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                >
                  <Filter className="h-3.5 w-3.5" />
                  <span>Filtros</span>
                </Button>
                <Button
                  size="sm"
                  className="h-8 bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                >
                  {" "}
                  {/* Botão Primário Padrão */}
                  Publicar uma Vaga
                </Button>
              </div>
            </div>
            {/* Cards de Estatísticas - COR CARD PADRONIZADA */}
            <div className="mt-6 mb-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1: Total de Candidatos */}
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                {" "}
                {/* COR PADRONIZADA: Card BG/Borda */}
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground dark:text-gray-400">
                    {" "}
                    {/* COR PADRONIZADA: Title Muted */}
                    Total de Candidatos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold dark:text-white">
                    {" "}
                    {/* COR TEXTO PADRÃO */}
                    1.248
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    {" "}
                    {/* COR TEXTO MUTED PADRÃO */}
                    +24 esta semana
                  </p>
                </CardContent>
              </Card>
              {/* Card 2: Pré-selecionados */}
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                {" "}
                {/* COR PADRONIZADA: Card BG/Borda */}
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground dark:text-gray-400">
                    {" "}
                    {/* COR PADRONIZADA: Title Muted */}
                    Pré-selecionados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold dark:text-white">
                    {" "}
                    {/* COR TEXTO PADRÃO */}
                    36
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    {" "}
                    {/* COR TEXTO MUTED PADRÃO */}
                    +5 esta semana
                  </p>
                </CardContent>
              </Card>
              {/* Card 3: Entrevistas Agendadas */}
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                {" "}
                {/* COR PADRONIZADA: Card BG/Borda */}
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground dark:text-gray-400">
                    {" "}
                    {/* COR PADRONIZADA: Title Muted */}
                    Entrevistas Agendadas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold dark:text-white">
                    {" "}
                    {/* COR TEXTO PADRÃO */}
                    12
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    {" "}
                    {/* COR TEXTO MUTED PADRÃO */}
                    +3 esta semana
                  </p>
                </CardContent>
              </Card>
              {/* Card 4: Vagas Abertas */}
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                {" "}
                {/* COR PADRONIZADA: Card BG/Borda */}
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground dark:text-gray-400">
                    {" "}
                    {/* COR PADRONIZADA: Title Muted */}
                    Vagas Abertas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold dark:text-white">
                    {" "}
                    {/* COR TEXTO PADRÃO */}8
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    {" "}
                    {/* COR TEXTO MUTED PADRÃO */}
                    +2 esta semana
                  </p>
                </CardContent>
              </Card>
            </div>
            {/* Abas para Listagem de Candidatos - COR TABS PADRONIZADA */}
            <Tabs defaultValue="all" className="w-full">
              {/* Container para Abas e Ordenação */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                {/* Lista de Abas (TabsList) */}
                <TabsList className="bg-gray-100 dark:bg-zinc-800 rounded-md flex gap-1 w-full max-w-full overflow-hidden lg:w-9/12">
                  <TabsTrigger
                    value="all"
                    className="w-1/3 sm:w-auto text-[0.7rem] sm:text-sm px-2 py-1 flex items-center justify-center data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                  >
                    Todos Candidatos
                  </TabsTrigger>
                  <TabsTrigger
                    value="recommended"
                    className="w-1/3 sm:w-auto text-[0.7rem] sm:text-sm px-2 py-1 flex items-center justify-center data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                  >
                    Recomendados
                  </TabsTrigger>
                  <TabsTrigger
                    value="shortlisted"
                    className="w-1/3 sm:w-auto text-[0.7rem] sm:text-sm px-2 py-1 flex items-center justify-center data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                  >
                    Pré-selecionados
                  </TabsTrigger>
                </TabsList>

                {/* Seletor de Ordenação - COR SELECT PADRONIZADA */}
                <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                  <span className="text-sm text-muted-foreground dark:text-gray-400">
                    {" "}
                    {/* COR TEXTO MUTED PADRÃO */}
                    Ordenar por:
                  </span>
                  <select className="flex-grow sm:flex-grow-0 h-8 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-zinc-900 dark:border-zinc-700 dark:text-gray-300 cursor-pointer">
                    {" "}
                    {/* COR PADRONIZADA: Select */}
                    <option value="relevance">Relevância</option>
                    <option value="recent">Recente</option>
                    <option value="experience">Experiência</option>
                  </select>
                </div>
              </div>

              {/* Conteúdo da Aba "Todos os Candidatos" */}
              <TabsContent value="all" className="mt-0">
                <div className="grid gap-4">
                  {/* --- Card Candidato 1 - COR CARD/AVATAR/BOTÃO PADRONIZADA --- */}
                  <Card className="overflow-hidden bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card BG/Borda */}
                    <div className="flex flex-col md:flex-row">
                      {/* Seção Principal do Card */}
                      <div className="p-4 md:p-6 md:flex-grow-[2] md:basis-0">
                        {/* Cabeçalho do Candidato */}
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                          {/* Info do Candidato */}
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 flex-shrink-0 border dark:border-zinc-700">
                              {" "}
                              {/* COR PADRONIZADA: Avatar Borda */}
                              <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="Jane Doe"
                              />
                              <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                JD
                              </AvatarFallback>{" "}
                              {/* Avatar Fallback Mantido */}
                            </Avatar>
                            <div>
                              <h3 className="font-semibold dark:text-white">
                                {" "}
                                {/* COR TEXTO PADRÃO */}
                                Jane Doe
                              </h3>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Engenheira de Software Sênior
                              </p>
                            </div>
                          </div>
                          {/* Ações / Badges */}
                          <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-center">
                            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 whitespace-nowrap">
                              {" "}
                              {/* Badge Colorido Mantido */}
                              98% Compatível
                            </Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <div className="dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400">
                                <Star className="h-4 w-4 text-muted-foreground" />{" "}
                              </div>
                              {/* COR Ícone/Hover Mantido */}
                              <span className="sr-only">Pré-selecionar</span>
                            </Button>
                          </div>
                        </div>
                        {/* Detalhes */}
                        <div className="space-y-4">
                          {/* Habilidades */}
                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-gray-300">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              Habilidades Principais
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {/* Badges Secundários - Mantendo padrão ShadCN por enquanto */}
                              <Badge variant="secondary">React</Badge>
                              <Badge variant="secondary">TypeScript</Badge>
                              <Badge variant="secondary">Node.js</Badge>
                              <Badge variant="secondary">GraphQL</Badge>
                              <Badge variant="secondary">AWS</Badge>
                            </div>
                          </div>
                          {/* Resumo */}
                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-gray-300">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              Resumo da Experiência
                            </h4>
                            <p className="text-sm text-muted-foreground dark:text-gray-400 line-clamp-2">
                              {" "}
                              {/* COR TEXTO MUTED PADRÃO */}
                              Mais de 7 anos de experiência em desenvolvimento
                              full-stack com foco em aplicações web escaláveis e
                              otimizadas. Liderança técnica em projetos...
                            </p>
                          </div>
                          {/* Scores */}
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
                            {/* Cores específicas mantidas */}
                            <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                              <Brain className="h-3.5 w-3.5" />
                              <span>Lógica: 95%</span>
                            </div>
                            <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                              <Users className="h-3.5 w-3.5" />
                              <span>Cultural: 92%</span>
                            </div>
                            <div className="flex items-center gap-1 text-violet-600 dark:text-violet-400">
                              <FileCheck className="h-3.5 w-3.5" />
                              <span>Técnico: 98%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Barra Lateral do Card - COR CARD SIDE/BORDER/TEXT PADRONIZADA */}
                      <div className="bg-gray-50 dark:bg-zinc-800/50 p-4 md:p-6 rounded-lg flex flex-col justify-between md:flex-grow-[1] md:basis-0 border-t md:border-t-0 md:border-l dark:border-zinc-700">
                        {" "}
                        {/* COR PADRONIZADA: Side BG/Borda */}
                        <div className="space-y-3 mb-4 md:mb-0">
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground dark:text-gray-300 mb-0.5">
                              {" "}
                              {/* COR PADRONIZADA: Side Title */}
                              Localização
                            </h4>
                            <p className="text-sm dark:text-gray-300">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              San Francisco, CA (Remoto)
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground dark:text-gray-300 mb-0.5">
                              {" "}
                              {/* COR PADRONIZADA: Side Title */}
                              Educação
                            </h4>
                            <p className="text-sm dark:text-gray-300">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              M.Sc. Ciência da Computação, Stanford
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground dark:text-gray-300 mb-0.5">
                              {" "}
                              {/* COR PADRONIZADA: Side Title */}
                              Disponibilidade
                            </h4>
                            <p className="text-sm dark:text-gray-300">
                              {" "}
                              {/* COR TEXTO PADRÃO */}2 semanas
                            </p>
                          </div>
                        </div>
                        {/* Botões de Ação */}
                        <div className="flex flex-col gap-2 mt-auto">
                          <Button
                            size="sm"
                            className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                          >
                            Ver Perfil Completo
                          </Button>{" "}
                          {/* Botão Primário Padrão */}
                          <Button
                            size="sm"
                            variant="outline"
                            className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                          >
                            {" "}
                            {/* COR PADRONIZADA: Botão Outline */}
                            Agendar Entrevista
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* --- Card Candidato 2 (Estrutura similar) --- */}
                  <Card className="overflow-hidden bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card BG/Borda */}
                    <div className="flex flex-col md:flex-row">
                      {/* Seção Principal */}
                      <div className="p-4 md:p-6 md:flex-grow-[2] md:basis-0">
                        {/* Cabeçalho */}
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                          {/* Info */}
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 flex-shrink-0 border dark:border-zinc-700">
                              {" "}
                              {/* COR PADRONIZADA: Avatar Borda */}
                              <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                MS
                              </AvatarFallback>{" "}
                              {/* Avatar Fallback Mantido */}
                            </Avatar>
                            <div>
                              <h3 className="font-semibold dark:text-white">
                                {" "}
                                {/* COR TEXTO PADRÃO */}
                                Michael Smith
                              </h3>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Gerente de Produto
                              </p>
                            </div>
                          </div>
                          {/* Ações / Badges */}
                          <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-center">
                            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 whitespace-nowrap">
                              {" "}
                              {/* Badge Colorido Mantido */}
                              85% Compatível
                            </Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <div className="dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400">
                                <Star className="h-4 w-4 text-muted-foreground" />{" "}
                              </div>
                              {/* COR Ícone/Hover Mantido */}
                              <span className="sr-only">Pré-selecionar</span>
                            </Button>
                          </div>
                        </div>
                        {/* Detalhes */}
                        <div className="space-y-4">
                          {/* Habilidades */}
                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-gray-300">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              Habilidades Principais
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {/* Badges Secundários - Mantendo padrão */}
                              <Badge variant="secondary">
                                Estratégia Produto
                              </Badge>
                              <Badge variant="secondary">
                                Metodologias Ágeis
                              </Badge>
                              <Badge variant="secondary">UX Research</Badge>
                              <Badge variant="secondary">Roadmapping</Badge>
                            </div>
                          </div>
                          {/* Resumo */}
                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-gray-300">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              Resumo da Experiência
                            </h4>
                            <p className="text-sm text-muted-foreground dark:text-gray-400 line-clamp-2">
                              {" "}
                              {/* COR TEXTO MUTED PADRÃO */}5 anos de
                              experiência em gerenciamento de produtos SaaS B2B,
                              focado em crescimento e retenção.
                            </p>
                          </div>
                          {/* Scores */}
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
                            {/* Cores específicas mantidas */}
                            <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                              <Brain className="h-3.5 w-3.5" />
                              <span>Lógica: 88%</span>
                            </div>
                            <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                              <Users className="h-3.5 w-3.5" />
                              <span>Cultural: 90%</span>
                            </div>
                            <div className="flex items-center gap-1 text-violet-600 dark:text-violet-400">
                              <FileCheck className="h-3.5 w-3.5" />
                              <span>Produto: 85%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Barra Lateral */}
                      <div className="bg-gray-50 dark:bg-zinc-800/50 p-4 md:p-6 rounded-lg flex flex-col justify-between md:flex-grow-[1] md:basis-0 border-t md:border-t-0 md:border-l dark:border-zinc-700">
                        {" "}
                        {/* COR PADRONIZADA: Side BG/Borda */}
                        <div className="space-y-3 mb-4 md:mb-0">
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground dark:text-gray-300 mb-0.5">
                              {" "}
                              {/* COR PADRONIZADA: Side Title */}
                              Localização
                            </h4>
                            <p className="text-sm dark:text-gray-300">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              New York, NY (Híbrido)
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground dark:text-gray-300 mb-0.5">
                              {" "}
                              {/* COR PADRONIZADA: Side Title */}
                              Educação
                            </h4>
                            <p className="text-sm dark:text-gray-300">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              MBA, Harvard Business School
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground dark:text-gray-300 mb-0.5">
                              {" "}
                              {/* COR PADRONIZADA: Side Title */}
                              Disponibilidade
                            </h4>
                            <p className="text-sm dark:text-gray-300">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              Imediata
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-auto">
                          <Button
                            size="sm"
                            className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                          >
                            Ver Perfil Completo
                          </Button>{" "}
                          {/* Botão Primário Padrão */}
                          <Button
                            size="sm"
                            variant="outline"
                            className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                          >
                            {" "}
                            {/* COR PADRONIZADA: Botão Outline */}
                            Agendar Entrevista
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Adicionar mais cards de candidatos conforme necessário */}
                </div>
              </TabsContent>

              {/* Conteúdo da Aba "Recomendados" - COR CARD PADRONIZADA */}
              <TabsContent value="recommended" className="mt-0">
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* COR PADRONIZADA: Card BG/Borda */}
                  <CardContent className="p-6">
                    {/* Estado Vazio/Placeholder */}
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                        {" "}
                        {/* BG Ícone Mantido */}
                        <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />{" "}
                        {/* Cor Ícone Mantida */}
                      </div>
                      <h3 className="text-lg font-medium mb-2 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Recomendações Inteligentes em Breve
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto mb-4 dark:text-gray-400 text-sm">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Nossa IA está processando os melhores candidatos para
                        suas vagas abertas. Volte em breve para ver as
                        recomendações.
                      </p>
                      <Button disabled>
                        Atualizando Recomendações...
                      </Button>{" "}
                      {/* Botão Padrão (Disabled) */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Conteúdo da Aba "Pré-selecionados" - COR CARD PADRONIZADA */}
              <TabsContent value="shortlisted" className="mt-0">
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* COR PADRONIZADA: Card BG/Borda */}
                  <CardContent className="p-6">
                    {/* Estado Vazio/Placeholder */}
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                        {" "}
                        {/* BG Ícone Mantido */}
                        <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />{" "}
                        {/* Cor Ícone Mantida */}
                      </div>
                      <h3 className="text-lg font-medium mb-2 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Nenhum Candidato Pré-selecionado
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto mb-4 dark:text-gray-400 text-sm">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Você ainda não pré-selecionou nenhum candidato. Clique
                        no ícone de estrela{" "}
                        <Star className="inline h-4 w-4 align-text-bottom" />{" "}
                        nos perfis para adicioná-los aqui.
                      </p>
                      {/* <Button variant="outline">Ver Todos os Candidatos</Button> */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            {/* Paginação - COR BORDA TOP PADRONIZADA */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 pt-4 border-t dark:border-zinc-700">
              <div className="text-sm text-muted-foreground dark:text-gray-400 text-center md:text-left">
                Mostrando <strong>1-3</strong> de <strong>12</strong> candidatos
              </div>

              <div className="flex flex-wrap justify-center items-center gap-2 w-full md:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="disabled:opacity-50 dark:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800"
                >
                  Anterior
                </Button>

                {/* Select para mobile */}
                <Select defaultValue="1">
                  <SelectTrigger className="w-24 h-8 md:hidden">
                    <SelectValue placeholder="Página 1" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-zinc-900">
                    <SelectItem value="1">Página 1</SelectItem>
                    <SelectItem value="2">Página 2</SelectItem>
                    <SelectItem value="3">Página 3</SelectItem>
                    <SelectItem value="4">Página 4</SelectItem>
                  </SelectContent>
                </Select>

                {/* Botões numéricos para desktop */}
                <div className="hidden md:flex items-center gap-2">
                  {[1, 2, 3].map((page) => (
                    <Button
                      key={page}
                      variant={page === 1 ? "outline" : "outline"}
                      size="sm"
                      className={cn(
                        "w-8 p-0 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800",
                        page === 1 && "bg-zinc-100 dark:bg-zinc-800"
                      )}
                    >
                      {page}
                    </Button>
                  ))}
                  <span className="text-muted-foreground dark:text-gray-500">
                    ...
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-8 p-0 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                  >
                    4
                  </Button>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                >
                  Próxima
                </Button>
              </div>
            </div>
            {/* ---- FIM DO CONTEÚDO ESPECÍFICO DO DASHBOARD EMPRESA ---- */}
          </main>
          {/* Rodapé */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardEmpresa;
