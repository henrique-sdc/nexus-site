import React, { useState } from "react";

// --- Importações Essenciais (Layout Padrão - EmpresaSidebar) ---
import { SidebarProvider } from "src/components/ui/sidebar";
import { Sheet, SheetContent } from "src/components/ui/sheet";
import { cn } from "src/lib/utils";
import { DashboardNavbar } from "src/components/Dashboards/DashboardNavbar";
import { EmpresaSidebar } from "src/components/Dashboards/Empresas/EmpresaSidebar";

// --- Importações dos Componentes UI para o conteúdo ---
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
// Importe bibliotecas de gráficos aqui se/quando as implementar (e.g., Recharts, Chart.js)

// --- Importações dos Ícones ---
import {
  BarChart3, // Ícone de gráfico de barras
  Calendar, // Ícone de calendário
  Download, // Ícone de download
  LineChart, // Ícone de gráfico de linha
  PieChart, // Ícone de gráfico de pizza
  Users, // Ícone de usuários/demografia
  ArrowUp, // Ícone para aumento
  ArrowDown, // Ícone para diminuição
} from "lucide-react"; // Adicionadas setas

import Footer from "src/components/Footer/Footer";

// --- Importações para Navegação (Opcional) ---
// import { useNavigate } from 'react-router-dom';

/**
 * Página de Análises do Dashboard da Empresa.
 * Exibe métricas e performance de recrutamento (com placeholders de gráficos).
 * Utiliza a estrutura de layout padrão do dashboard da empresa.
 */
export default function AnalisesEmpresa() {
  // --- Estado para Controle da Sidebar/Sheet (Estrutura padrão) ---
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  // --- Hooks (Exemplo: Navegação) ---
  // const navigate = useNavigate();

  // --- Handlers para Sidebar/Sheet (Estrutura padrão) ---
  const toggleDesktopSidebar = () => setIsDesktopSidebarOpen((prev) => !prev);
  const openMobileSheet = () => setIsMobileSheetOpen(true);

  const navigateTo = (path: string) => {
    console.log("Navegar para (placeholder):", path);
    // Exemplo com react-router-dom:
    // navigate(path);
    setIsMobileSheetOpen(false);
  };

  // --- Dados de Exemplo da Empresa (Estrutura padrão) ---
  const empresaData = {
    name: "TechCorp Inc.",
    accountType: "Conta de Administrador",
    initials: "TC",
    logoSrc: "https://github.com/shadcn.png",
    messageCount: 4,
    notificationCount: 7,
  };

  // --- Dados de Exemplo das Estatísticas (Substituir por API) ---
  const stats = {
    totalCandidaturas: "1.248",
    variacaoCandidaturas: 12, // Positivo para aumento, negativo para diminuição
    entrevistasRealizadas: "86",
    variacaoEntrevistas: 8,
    ofertasEnviadas: "24",
    variacaoOfertas: -5,
    tempoMedioContratacao: "18 dias",
    variacaoTempoContratacao: -3, // Em dias, negativo é melhor
  };

  // Helper para exibir variação com ícone e cor
  const renderVariation = (
    value: number,
    unit: string = "%",
    lowerIsBetter: boolean = false
  ) => {
    const isPositive = lowerIsBetter ? value < 0 : value > 0;
    const isNegative = lowerIsBetter ? value > 0 : value < 0;
    const absValue = Math.abs(value);
    const color = isPositive
      ? "text-green-500 dark:text-green-400"
      : isNegative
      ? "text-red-500 dark:text-red-400"
      : "text-gray-500 dark:text-gray-400";
    const Icon = isPositive ? ArrowUp : isNegative ? ArrowDown : null;

    return (
      <span className={cn("flex items-center", color)}>
        {Icon && <Icon className="h-3 w-3 mr-0.5" />} {absValue}
        {unit}
      </span>
    );
  };

  return (
    <SidebarProvider>
      {/* Container principal Flex - COR EXTERNA PADRONIZADA */}
      <div className="flex min-h-screen bg-gray-100/50 dark:bg-black">
        {" "}
        {/* COR PADRONIZADA: dark:bg-black */}
        {/* --- Sidebar Desktop - COR BORDA PADRONIZADA --- */}
        <div
          className={cn(
            "hidden lg:flex h-screen sticky top-0 transition-all duration-300 ease-in-out border-r dark:border-zinc-800", // COR PADRONIZADA: dark:border-zinc-800
            "bg-background dark:bg-gray-900", // Fundo Sidebar Mantido
            isDesktopSidebarOpen ? "w-64" : "w-16"
          )}
        >
          <EmpresaSidebar
            isOpen={isDesktopSidebarOpen}
            toggleSidebar={toggleDesktopSidebar}
            empresaName={empresaData.name}
            empresaAccountType={empresaData.accountType}
            empresaInitials={empresaData.initials}
            empresaAvatarSrc={empresaData.logoSrc}
            messageCount={empresaData.messageCount}
            onNavigate={navigateTo}
            activePage="analises"
          />
        </div>
        {/* --- Sidebar Mobile (Sheet) - COR BORDA PADRONIZADA --- */}
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetContent
            side="left"
            className={cn(
              "p-0 w-64 lg:hidden border-r dark:border-zinc-800", // COR PADRONIZADA: dark:border-zinc-800
              "bg-white dark:bg-gray-900" // Fundo Sidebar Mantido
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
              onNavigate={navigateTo}
              activePage="analises"
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
          <main className="flex-1 p-4 md:p-6 bg-gray-50/50 dark:bg-zinc-900/60 overflow-x-hidden">
            {" "}
            {/* COR PADRONIZADA: dark:bg-zinc-900/60 */}
            {/* ================================================================== */}
            {/* INÍCIO DO CONTEÚDO ESPECÍFICO DA PÁGINA DE ANÁLISES               */}
            {/* ================================================================== */}
            <div className="space-y-6">
              {/* Cabeçalho da Página - CORES TEXTO/BOTÃO PADRÃO */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {" "}
                    {/* COR TEXTO PADRÃO */}
                    Análises
                  </h1>
                  <p className="text-muted-foreground dark:text-gray-400">
                    {" "}
                    {/* COR TEXTO MUTED PADRÃO */}
                    Acompanhe suas métricas e performance de recrutamento
                  </p>
                </div>
                {/* Botões de Filtro/Ação */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Últimos 30 dias</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                  >
                    <Download className="h-4 w-4" />
                    <span>Exportar</span>
                  </Button>
                </div>
              </div>

              {/* Cards de Estatísticas Principais - COR CARD PADRONIZADA */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Card Total Candidaturas */}
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* COR PADRONIZADA: Card BG/Borda */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      {" "}
                      {/* COR PADRONIZADA: Title Muted */}
                      Total de Candidaturas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {" "}
                      {/* COR TEXTO PADRÃO */}
                      {stats.totalCandidaturas}
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400 flex items-center gap-1">
                      {" "}
                      {/* COR TEXTO MUTED PADRÃO */}
                      {renderVariation(stats.variacaoCandidaturas)} vs período
                      anterior
                    </p>
                  </CardContent>
                </Card>
                {/* Card Entrevistas Realizadas */}
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* COR PADRONIZADA: Card BG/Borda */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      {" "}
                      {/* COR PADRONIZADA: Title Muted */}
                      Entrevistas Realizadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {" "}
                      {/* COR TEXTO PADRÃO */}
                      {stats.entrevistasRealizadas}
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400 flex items-center gap-1">
                      {" "}
                      {/* COR TEXTO MUTED PADRÃO */}
                      {renderVariation(stats.variacaoEntrevistas)} vs período
                      anterior
                    </p>
                  </CardContent>
                </Card>
                {/* Card Ofertas Enviadas */}
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* COR PADRONIZADA: Card BG/Borda */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      {" "}
                      {/* COR PADRONIZADA: Title Muted */}
                      Ofertas Enviadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {" "}
                      {/* COR TEXTO PADRÃO */}
                      {stats.ofertasEnviadas}
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400 flex items-center gap-1">
                      {" "}
                      {/* COR TEXTO MUTED PADRÃO */}
                      {renderVariation(stats.variacaoOfertas)} vs período
                      anterior
                    </p>
                  </CardContent>
                </Card>
                {/* Card Tempo Médio Contratação */}
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* COR PADRONIZADA: Card BG/Borda */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      {" "}
                      {/* COR PADRONIZADA: Title Muted */}
                      Tempo para Contratar (Médio)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {" "}
                      {/* COR TEXTO PADRÃO */}
                      {stats.tempoMedioContratacao}
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400 flex items-center gap-1">
                      {" "}
                      {/* COR TEXTO MUTED PADRÃO */}
                      {renderVariation(
                        stats.variacaoTempoContratacao,
                        " dias",
                        true
                      )}{" "}
                      vs período anterior
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Abas para Gráficos Detalhados - COR TABS PADRONIZADA */}
              <Tabs defaultValue="candidaturas" className="w-full">
                <TabsList className="bg-gray-100 dark:bg-zinc-800 rounded-md p-1 flex gap-1 lg:w-9/12 w-full overflow-hidden">
                  <TabsTrigger
                    value="candidaturas"
                    className="w-1/3 sm:w-auto text-[0.7rem] sm:text-sm px-2 py-1 flex items-center justify-center data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                  >
                    Candidaturas
                  </TabsTrigger>
                  <TabsTrigger
                    value="fontes"
                    className="w-1/3 sm:w-auto text-[0.7rem] sm:text-sm px-2 py-1 flex items-center justify-center data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                  >
                    Fontes
                  </TabsTrigger>
                  <TabsTrigger
                    value="vagas"
                    className="w-1/3 sm:w-auto text-[0.7rem] sm:text-sm px-2 py-1 flex items-center justify-center data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                  >
                    Vagas
                  </TabsTrigger>
                </TabsList>

                {/* Conteúdo Aba: Candidaturas - COR CARD PADRONIZADA */}
                <TabsContent value="candidaturas" className="mt-4">
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card BG/Borda */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Tendências de Candidaturas
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Acompanhe o volume de candidaturas ao longo do tempo
                      </CardDescription>
                    </CardHeader>
                    {/* Placeholder do Gráfico */}
                    <CardContent className="h-[400px] flex flex-col items-center justify-center text-center p-6">
                      <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/20 mb-4">
                        {" "}
                        {/* Cor Ícone Mantida */}
                        <LineChart className="h-10 w-10 text-purple-600 dark:text-purple-400" />{" "}
                        {/* Cor Ícone Mantida */}
                      </div>
                      <p className="text-muted-foreground dark:text-gray-500 max-w-md">
                        {" "}
                        {/* COR PLACEHOLDER PADRÃO */}
                        Visualização de gráfico apareceria aqui mostrando
                        tendências de candidaturas ao longo do tempo.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Conteúdo Aba: Fontes - COR CARD PADRONIZADA */}
                <TabsContent value="fontes" className="mt-4">
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card BG/Borda */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Fontes de Candidatura
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        De onde seus candidatos estão vindo
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px] flex flex-col items-center justify-center text-center p-6">
                      <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-900/20 mb-4">
                        {" "}
                        {/* Cor Ícone Mantida */}
                        <PieChart className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />{" "}
                        {/* Cor Ícone Mantida */}
                      </div>
                      <p className="text-muted-foreground dark:text-gray-500 max-w-md">
                        {" "}
                        {/* COR PLACEHOLDER PADRÃO */}
                        Visualização de gráfico apareceria aqui mostrando as
                        fontes de candidatura.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Conteúdo Aba: Vagas - COR CARD PADRONIZADA */}
                <TabsContent value="vagas" className="mt-4">
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card BG/Borda */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Candidaturas por Vaga
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Distribuição de candidaturas entre as vagas
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px] flex flex-col items-center justify-center text-center p-6">
                      <div className="rounded-full bg-violet-100 p-3 dark:bg-violet-900/20 mb-4">
                        {" "}
                        {/* Cor Ícone Mantida */}
                        <BarChart3 className="h-10 w-10 text-violet-600 dark:text-violet-400" />{" "}
                        {/* Cor Ícone Mantida */}
                      </div>
                      <p className="text-muted-foreground dark:text-gray-500 max-w-md">
                        {" "}
                        {/* COR PLACEHOLDER PADRÃO */}
                        Visualização de gráfico apareceria aqui mostrando
                        candidaturas por vaga.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Grid para Gráficos Adicionais - COR CARD PADRONIZADA */}
              <div className="grid gap-4 md:grid-cols-2">
                {/* Card: Demografia dos Candidatos */}
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* COR PADRONIZADA: Card BG/Borda */}
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">
                      {" "}
                      {/* COR TEXTO PADRÃO */}
                      Demografia dos Candidatos
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      {" "}
                      {/* COR TEXTO MUTED PADRÃO */}
                      Métricas de diversidade do seu pool de candidatos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px] flex flex-col items-center justify-center text-center p-6">
                    <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/20 mb-4">
                      {" "}
                      {/* Cor Ícone Mantida */}
                      <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />{" "}
                      {/* Cor Ícone Mantida */}
                    </div>
                    <p className="text-muted-foreground dark:text-gray-500 max-w-md">
                      {" "}
                      {/* COR PLACEHOLDER PADRÃO */}
                      Visualização de gráfico apareceria aqui mostrando a
                      demografia dos candidatos.
                    </p>
                  </CardContent>
                </Card>

                {/* Card: Funil de Recrutamento */}
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* COR PADRONIZADA: Card BG/Borda */}
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">
                      {" "}
                      {/* COR TEXTO PADRÃO */}
                      Funil de Recrutamento
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      {" "}
                      {/* COR TEXTO MUTED PADRÃO */}
                      Taxas de conversão em cada etapa
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px] flex flex-col items-center justify-center text-center p-6">
                    <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-900/20 mb-4">
                      {" "}
                      {/* Cor Ícone Mantida */}
                      <BarChart3 className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />{" "}
                      {/* Cor Ícone Mantida */}
                    </div>
                    <p className="text-muted-foreground dark:text-gray-500 max-w-md">
                      {" "}
                      {/* COR PLACEHOLDER PADRÃO */}
                      Visualização de gráfico apareceria aqui mostrando o funil
                      de recrutamento.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* ================================================================== */}
            {/* FIM DO CONTEÚDO ESPECÍFICO DA PÁGINA DE ANÁLISES                 */}
            {/* ================================================================== */}
          </main>
          {/* Rodapé */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
