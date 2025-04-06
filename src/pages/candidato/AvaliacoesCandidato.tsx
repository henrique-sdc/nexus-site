import React, { useState } from "react";

// --- Importações Essenciais (Layout Padrão) ---
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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Progress } from "src/components/ui/progress"; // Componente de progresso
import { Badge } from "src/components/ui/badge";

// --- Importações dos Ícones ---
import {
  Brain, // Ícone para lógica
  CheckCircle2, // Ícone de concluído
  Clock, // Ícone de pendente/relógio
  FileCheck, // Ícone para técnico/arquivo
  Play, // Ícone de play/continuar
  Users, // Ícone para fit cultural/usuários
} from "lucide-react";
import Footer from "src/components/Footer/Footer";

// --- Importações para Navegação (Opcional) ---
// import { useNavigate } from 'react-router-dom';

/**
 * Página "Avaliações" do Dashboard do Candidato.
 * Exibe o progresso das avaliações (Lógica, Fit Cultural, Técnica),
 * avaliações recomendadas e insights (placeholder).
 * Utiliza a estrutura de layout padrão do dashboard.
 */
export default function AvaliacoesCandidato() {
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

  // --- Dados de Exemplo do Usuário (Estrutura padrão) ---
  const userData = {
    name: "Ana Silva",
    title: "Engenheira de Software Sênior",
    initials: "AS",
    avatarSrc: "https://github.com/shadcn.png",
    messageCount: 3,
    notificationCount: 5,
  };

  // --- Dados de Exemplo das Avaliações (Substituir por dados reais da API/Contexto) ---
  const overallProgress = 67; // Ex: 2 de 3 concluídas = 67%
  const logicScore = 92;
  const technicalProgress = 33; // Ex: 1 de 3 concluídas = 33%

  return (
    <SidebarProvider>
      {/* Container principal Flex (Estrutura padrão) */}
      <div className="flex min-h-screen bg-gray-100/50 dark:bg-black">
        {/* --- Sidebar Desktop (Estrutura padrão) --- */}
        <div
          className={cn(
            "hidden lg:flex h-screen sticky top-0 transition-all duration-300 ease-in-out border-r dark:border-zinc-700",
            "bg-background dark:bg-gray-900",
            isDesktopSidebarOpen ? "w-64" : "w-16"
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
            activePage="avaliacoes" // **IMPORTANTE**: Define a página ativa
          />
        </div>

        {/* --- Sidebar Mobile (Sheet - Estrutura padrão) --- */}
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetContent
            side="left"
            className={cn(
              "p-0 w-64 lg:hidden border-r dark:border-gray-800",
              "bg-white dark:bg-gray-900"
            )}
          >
            <CandidatoSidebar
              isOpen={true}
              isMobileView={true}
              userName={userData.name}
              userTitle={userData.title}
              userInitials={userData.initials}
              userAvatarSrc={userData.avatarSrc}
              messageCount={userData.messageCount}
              onNavigate={navigateTo}
              activePage="avaliacoes" // **IMPORTANTE**: Define a página ativa
            />
          </SheetContent>
        </Sheet>

        {/* --- Área de Conteúdo Principal (Estrutura padrão) --- */}
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

          {/* Conteúdo Principal (Main) - Layout padrão */}
          <main className="flex-1 p-4 md:p-6 bg-gray-50/50 dark:bg-gray-950/60 overflow-x-hidden">
            {/* ================================================================== */}
            {/* INÍCIO DO CONTEÚDO ESPECÍFICO DA PÁGINA DE AVALIAÇÕES             */}
            {/* ================================================================== */}
            <div className="space-y-6">
              {/* Cabeçalho da Página */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Avaliações
                  </h1>
                  <p className="text-muted-foreground dark:text-gray-400">
                    Complete as avaliações para destacar suas habilidades e
                    melhorar suas correspondências
                  </p>
                </div>
                {/* Botão com estilo dark consistente */}
                <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                  Ver Todos os Testes
                </Button>
              </div>

              {/* Progresso Geral */}
              <div className="mb-8 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Progresso Geral
                    </span>
                    {/* Idealmente, esses números viriam da lógica */}
                    <span className="text-sm text-muted-foreground dark:text-gray-400">
                      2 de 3 concluídas
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {overallProgress}%
                  </span>
                </div>
                {/* Barra de progresso com valor dinâmico */}
                <Progress
                  value={overallProgress}
                  className="h-2 bg-zinc-200 dark:bg-zinc-800 [&>*]:bg-purple-600 dark:[&>*]:bg-purple-500"
                />{" "}
                {/* Cor customizada para destaque */}
              </div>

              {/* Grid de Cards das Avaliações Principais */}
              <div className="grid gap-6 md:grid-cols-3">
                {/* Card: Avaliação de Lógica */}
                <Card className="bg-background shadow-sm dark:bg-zinc-900 border border-purple-200/80 dark:border-purple-800/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* Ícone com fundo colorido */}
                        <div className="rounded-full bg-purple-100 p-1.5 dark:bg-purple-900/30">
                          <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <CardTitle className="text-lg text-gray-900 dark:text-white">
                          Avaliação de Lógica
                        </CardTitle>
                      </div>
                      {/* Badge de Status */}
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400">
                        Concluído
                      </Badge>
                    </div>
                    <CardDescription className="dark:text-gray-400">
                      Resolução de problemas e pensamento analítico
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Sua Pontuação
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {logicScore}%
                      </span>
                    </div>
                    {/* Barra de progresso da pontuação */}
                    <Progress
                      value={logicScore}
                      className="h-2 [&>div]:bg-purple-600 dark:[&>div]:bg-purple-500"
                    />

                    {/* Detalhes da Pontuação (Exemplo) */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground dark:text-gray-400">
                          Reconhecimento de Padrões
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          95%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground dark:text-gray-400">
                          Raciocínio Lógico
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          90%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground dark:text-gray-400">
                          Resolução de Problemas
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          92%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    {/* Botão com estilo dark */}
                    <Button
                      variant="outline"
                      className="w-full dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                    >
                      Ver Detalhes
                    </Button>
                  </CardFooter>
                </Card>

                {/* Card: Fit Cultural */}
                <Card className="bg-background shadow-sm dark:bg-zinc-900 border border-indigo-200/80 dark:border-indigo-800/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-indigo-100 p-1.5 dark:bg-indigo-900/30">
                          <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <CardTitle className="text-lg text-gray-900 dark:text-white">
                          Fit Cultural
                        </CardTitle>
                      </div>
                      {/* Badge de Status */}
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400">
                        Concluído
                      </Badge>
                    </div>
                    <CardDescription className="dark:text-gray-400">
                      Preferências de trabalho e dinâmica de equipe
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Seu Perfil
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Completo
                      </span>
                    </div>
                    <Progress
                      value={100}
                      className="h-2 [&>div]:bg-indigo-600 dark:[&>div]:bg-indigo-500"
                    />

                    {/* Detalhes do Perfil (Exemplo) */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground dark:text-gray-400">
                          Estilo de Trabalho
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Colaborativo
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground dark:text-gray-400">
                          Comunicação
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Direta
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground dark:text-gray-400">
                          Ambiente
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Flexível
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                    >
                      Ver Detalhes
                    </Button>
                  </CardFooter>
                </Card>

                {/* Card: Habilidades Técnicas */}
                <Card className="bg-background shadow-sm dark:bg-zinc-900 border border-violet-200/80 dark:border-violet-800/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-violet-100 p-1.5 dark:bg-violet-900/30">
                          <FileCheck className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                        </div>
                        <CardTitle className="text-lg text-gray-900 dark:text-white">
                          Habilidades Técnicas
                        </CardTitle>
                      </div>
                      {/* Badge de Status */}
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400">
                        Em Progresso
                      </Badge>
                    </div>
                    <CardDescription className="dark:text-gray-400">
                      Codificação e conhecimento técnico
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Progresso
                      </span>
                      {/* Idealmente, esses números viriam da lógica */}
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        1 de 3 concluídas
                      </span>
                    </div>
                    <Progress
                      value={technicalProgress}
                      className="h-2 [&>div]:bg-violet-600 dark:[&>div]:bg-violet-500"
                    />

                    {/* Detalhes do Progresso (Exemplo) */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground dark:text-gray-400">
                          Desenvolvimento Frontend
                        </span>
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                          <span className="text-green-700 dark:text-green-400">
                            Concluído
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground dark:text-gray-400">
                          Desenvolvimento Backend
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                          <span className="text-yellow-700 dark:text-yellow-400">
                            Não iniciado
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground dark:text-gray-400">
                          Design de Sistemas
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                          <span className="text-yellow-700 dark:text-yellow-400">
                            Não iniciado
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    {/* Botão principal com estilo dark */}
                    <Button className="w-full gap-1 bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                      <Play className="h-4 w-4" />
                      <span>Continuar Avaliação</span>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Card: Avaliações Recomendadas */}
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">
                    Avaliações Recomendadas
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Complete estas avaliações adicionais para aprimorar seu
                    perfil
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    {/* Avaliação Recomendada 1 */}
                    {/* Item com hover e estilo dark */}
                    <div className="flex items-center p-4 border rounded-lg hover:bg-gray-100 dark:border-zinc-700 dark:hover:bg-zinc-700/50 transition-colors">
                      <div className="mr-4">
                        <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/30">
                          <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          Resolução Avançada de Problemas
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Desafios e quebra-cabeças algorítmicos complexos
                        </p>
                      </div>
                      <div>
                        <Button
                          size="sm"
                          className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                        >
                          Iniciar
                        </Button>
                      </div>
                    </div>

                    {/* Avaliação Recomendada 2 */}
                    <div className="flex items-center p-4 border rounded-lg hover:bg-gray-100 dark:border-zinc-700 dark:hover:bg-zinc-700/50 transition-colors">
                      <div className="mr-4">
                        <div className="rounded-full bg-indigo-100 p-2 dark:bg-indigo-900/30">
                          <FileCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          Arquitetura de Nuvem
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Avaliação de conhecimento em AWS, Azure e GCP
                        </p>
                      </div>
                      <div>
                        <Button
                          size="sm"
                          className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                        >
                          Iniciar
                        </Button>
                      </div>
                    </div>

                    {/* Avaliação Recomendada 3 */}
                    <div className="flex items-center p-4 border rounded-lg hover:bg-gray-100 dark:border-zinc-700 dark:hover:bg-zinc-700/50 transition-colors">
                      <div className="mr-4">
                        <div className="rounded-full bg-violet-100 p-2 dark:bg-violet-900/30">
                          <Users className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          Potencial de Liderança
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Avaliação de habilidades de gestão e liderança
                        </p>
                      </div>
                      <div>
                        <Button
                          size="sm"
                          className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                        >
                          Iniciar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card: Insights das Avaliações (Placeholder) */}
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">
                    Insights das Avaliações
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Como seus resultados se comparam a outros candidatos
                  </CardDescription>
                </CardHeader>
                {/* Placeholder para visualização de gráfico */}
                <CardContent className="h-[300px] flex flex-col items-center justify-center text-center p-6">
                  <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/20 mb-4">
                    {/* Usando um ícone genérico para o placeholder */}
                    <Brain className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-muted-foreground dark:text-gray-400 max-w-md">
                    Visualização de gráfico apareceria aqui, mostrando o
                    desempenho da avaliação em comparação com outros candidatos.
                  </p>
                  {/* Opcional: Botão para ver relatório completo */}
                  {/* <Button variant="link" className="mt-4">Ver Relatório Completo</Button> */}
                </CardContent>
              </Card>
            </div>
            {/* ================================================================== */}
            {/* FIM DO CONTEÚDO ESPECÍFICO DA PÁGINA DE AVALIAÇÕES                */}
            {/* ================================================================== */}
          </main>
          {/* Rodapé */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
