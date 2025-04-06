import React, { useState } from "react";

// --- Importações Essenciais (Layout Padrão - COM EmpresaSidebar CORRETA) ---
import { SidebarProvider } from "src/components/ui/sidebar";
import { Sheet, SheetContent } from "src/components/ui/sheet";
import { cn } from "src/lib/utils";
import { DashboardNavbar } from "src/components/Dashboards/DashboardNavbar";
import { EmpresaSidebar } from "src/components/Dashboards/Empresas/EmpresaSidebar"; // Caminho correto

// --- Importações dos Componentes UI para o conteúdo ---
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { Badge } from "src/components/ui/badge";

// --- Importações dos Ícones ---
import {
  Building2,
  Clock,
  Edit,
  Eye,
  FileText,
  Plus,
  Trash2,
  Users,
} from "lucide-react";
import Footer from "src/components/Footer/Footer";

// --- Importações para Navegação (Opcional) ---
// import { useNavigate } from 'react-router-dom';

/**
 * Página "Gerenciar Vagas" do Dashboard da Empresa.
 * Permite visualizar e gerenciar as vagas publicadas.
 * Utiliza a estrutura de layout padrão com EmpresaSidebar.
 */
export default function GerenciarVagas() {
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

  // --- Dados de Exemplo da Empresa (Usando a estrutura fornecida) ---
  const empresaData = {
    name: "TechCorp Inc.", // Usado em 'empresaName'
    accountType: "Conta de Administrador", // Usado em 'empresaAccountType'
    initials: "TC", // Usado em 'empresaInitials'
    logoSrc: "https://github.com/shadcn.png", // Usado em 'empresaAvatarSrc' e Navbar
    messageCount: 4, // Usado em 'messageCount'
    notificationCount: 7, // Usado na Navbar
  };

  // --- Dados de Exemplo das Vagas (Substituir por API) ---
  const vagasAtivas = [
    {
      id: "vaga1",
      titulo: "Desenvolvedor Frontend Sênior",
      local: "São Francisco, CA (Remoto)",
      tipo: "Tempo Integral",
      candidatos: 42,
      skills: ["React", "TypeScript", "Tailwind CSS", "5+ anos"],
      dataPostagem: "15 de Março de 2025",
      expiraEm: 20, // dias
    },
    {
      id: "vaga2",
      titulo: "Gerente de Produto",
      local: "Nova York, NY (Híbrido)",
      tipo: "Tempo Integral",
      candidatos: 28,
      skills: ["Estratégia de Produto", "Agile", "SaaS", "3+ anos"],
      dataPostagem: "10 de Março de 2025",
      expiraEm: 15,
    },
    {
      id: "vaga3",
      titulo: "Designer UX/UI",
      local: "Austin, TX (Presencial)",
      tipo: "Tempo Integral",
      candidatos: 15,
      skills: ["Figma", "UI Design", "Pesquisa de Usuário", "2+ anos"],
      dataPostagem: "5 de Março de 2025",
      expiraEm: 10,
    },
  ];

  // --- Dados de Exemplo - Estatísticas (Substituir por API) ---
  const stats = {
    vagasAtivas: 8,
    novasVagasMes: "+2",
    totalCandidaturas: 156,
    novasCandidaturasSemana: "+34",
    entrevistasAgendadas: 12,
    novasEntrevistasSemana: "+3",
    tempoMedioContratacao: "18 dias",
    variacaoTempoContratacao: "-2 dias",
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
            "bg-background dark:bg-gray-900", // Fundo Sidebar mantido gray-900 (igual referência do CandidatoSidebar)
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
            activePage="gerenciar-vagas"
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
              onNavigate={navigateTo}
              activePage="gerenciar-vagas"
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
            {/* INÍCIO DO CONTEÚDO ESPECÍFICO DA PÁGINA GERENCIAR VAGAS           */}
            {/* ================================================================== */}
            <div className="space-y-6">
              {/* Cabeçalho da Página - CORES TEXTO/BOTÃO PADRÃO */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {" "}
                    {/* COR TEXTO PADRÃO */}
                    Gerenciar Vagas
                  </h1>
                  <p className="text-muted-foreground dark:text-gray-400">
                    {" "}
                    {/* COR TEXTO MUTED PADRÃO */}
                    Gerencie as publicações de vagas da sua empresa
                  </p>
                </div>
                {/* Mantendo botão azul como primário aqui */}
                <Button className="gap-1 bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                  <Plus className="h-4 w-4" />
                  <span>Criar Nova Vaga</span>
                </Button>
              </div>

              {/* Cards de Estatísticas - COR CARD PADRONIZADA */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* COR PADRONIZADA: Card BG/Borda */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      {" "}
                      {/* COR PADRONIZADA: Title Muted */}
                      Vagas Ativas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {" "}
                      {/* COR TEXTO PADRÃO */}
                      {stats.vagasAtivas}
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                      {" "}
                      {/* COR TEXTO MUTED PADRÃO */}
                      {stats.novasVagasMes} este mês
                    </p>
                  </CardContent>
                </Card>
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
                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                      {" "}
                      {/* COR TEXTO MUTED PADRÃO */}
                      {stats.novasCandidaturasSemana} esta semana
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* COR PADRONIZADA: Card BG/Borda */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      {" "}
                      {/* COR PADRONIZADA: Title Muted */}
                      Entrevistas Agendadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {" "}
                      {/* COR TEXTO PADRÃO */}
                      {stats.entrevistasAgendadas}
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                      {" "}
                      {/* COR TEXTO MUTED PADRÃO */}
                      {stats.novasEntrevistasSemana} esta semana
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                  {" "}
                  {/* COR PADRONIZADA: Card BG/Borda */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      {" "}
                      {/* COR PADRONIZADA: Title Muted */}
                      Tempo Médio para Contratar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {" "}
                      {/* COR TEXTO PADRÃO */}
                      {stats.tempoMedioContratacao}
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                      {" "}
                      {/* COR TEXTO MUTED PADRÃO */}
                      {stats.variacaoTempoContratacao} desde mês passado
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Abas de Status das Vagas - COR TABS PADRONIZADA */}
              <Tabs defaultValue="ativas" className="w-full">
                <TabsList className="bg-gray-100 dark:bg-zinc-800 rounded-md p-1 flex gap-1 w-9/12 max-w-full overflow-hidden">
                  <TabsTrigger
                    value="ativas"
                    className="w-1/3 sm:w-auto text-[0.7rem] sm:text-sm px-2 py-1 flex items-center justify-center data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                  >
                    Ativas
                  </TabsTrigger>
                  <TabsTrigger
                    value="rascunho"
                    className="w-1/3 sm:w-auto text-[0.7rem] sm:text-sm px-2 py-1 flex items-center justify-center data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                  >
                    Rascunho
                  </TabsTrigger>
                  <TabsTrigger
                    value="fechadas"
                    className="w-1/3 sm:w-auto text-[0.7rem] sm:text-sm px-2 py-1 flex items-center justify-center data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                  >
                    Fechadas
                  </TabsTrigger>
                </TabsList>

                {/* Conteúdo Aba: Ativas - COR CARD/BADGE PADRONIZADA */}
                <TabsContent value="ativas" className="mt-4">
                  <div className="grid gap-4">
                    {vagasAtivas.map((vaga) => (
                      <Card
                        key={vaga.id}
                        className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700" // COR PADRONIZADA: Card BG/Borda
                      >
                        <div className="p-4 md:p-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="space-y-3 flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white truncate">
                                  {" "}
                                  {/* COR TEXTO PADRÃO */}
                                  {vaga.titulo}
                                </h3>
                                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 text-xs px-2 py-0.5">
                                  {" "}
                                  {/* Cor Badge Status Mantida */}
                                  Ativa
                                </Badge>
                              </div>
                              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                <div className="flex items-center gap-1">
                                  <Building2 className="h-4 w-4 flex-shrink-0" />
                                  <span>{vaga.local}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4 flex-shrink-0" />
                                  <span>{vaga.tipo}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4 flex-shrink-0" />
                                  <span>{vaga.candidatos} candidatos</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-1 pt-1">
                                {vaga.skills.map((skill) => (
                                  <Badge
                                    key={skill}
                                    variant="outline"
                                    className="text-xs px-1.5 py-0.5 dark:border-zinc-500 dark:text-gray-400" // COR PADRONIZADA: Badge Outline
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground dark:text-gray-400 pt-1">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Postada em {vaga.dataPostagem} • Expira em{" "}
                                {vaga.expiraEm} dias
                              </p>
                            </div>
                            <div className="flex flex-col gap-2 mt-2 md:mt-0 md:ml-4 flex-shrink-0">
                              {/* Botões Outline Padronizados */}
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-1 w-full dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                              >
                                <Eye className="h-4 w-4" />
                                <span>Ver</span>
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-1 w-full dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                              >
                                <Edit className="h-4 w-4" />
                                <span>Editar</span>
                              </Button>
                              {/* Botão Destrutivo Padronizado */}
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-1 w-full text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                              >
                                <Trash2 className="h-4 w-4" />
                                <span>Excluir</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                    {vagasAtivas.length === 0 && (
                      <div className="text-center py-10 text-muted-foreground dark:text-gray-400 col-span-full">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO (ajustado para gray-400) */}
                        Nenhuma vaga ativa no momento.
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Conteúdo Aba: Rascunho - COR CARD/BOTÃO PADRONIZADA */}
                <TabsContent value="rascunho" className="mt-4">
                  <Card className="p-6 bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card BG/Borda */}
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/20 mb-4">
                        {" "}
                        {/* Cor Ícone Mantida */}
                        <FileText className="h-10 w-10 text-purple-600 dark:text-purple-400" />{" "}
                        {/* Cor Ícone Mantida */}
                      </div>
                      <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Vagas em Rascunho
                      </h3>
                      <p className="text-muted-foreground dark:text-gray-400 max-w-md mx-auto mb-4">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Você tem 2 vagas salvas como rascunho. Continue
                        editando-as ou crie uma nova vaga.
                      </p>
                      <div className="flex gap-2 flex-wrap justify-center">
                        <Button
                          variant="outline"
                          className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                        >
                          Ver Rascunhos
                        </Button>
                        {/* Botão Primário Azul Mantido */}
                        <Button className="gap-1 bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                          <Plus className="h-4 w-4" />
                          <span>Criar Nova Vaga</span>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                {/* Conteúdo Aba: Fechadas - COR CARD/BOTÃO PADRONIZADA */}
                <TabsContent value="fechadas" className="mt-4">
                  <Card className="p-6 bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card BG/Borda */}
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-900/20 mb-4">
                        {" "}
                        {/* Cor Ícone Mantida */}
                        <Clock className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />{" "}
                        {/* Cor Ícone Mantida */}
                      </div>
                      <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Vagas Fechadas
                      </h3>
                      <p className="text-muted-foreground dark:text-gray-400 max-w-md mx-auto mb-4">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Você tem 5 vagas fechadas. Você pode visualizá-las ou
                        republicá-las com informações atualizadas.
                      </p>
                      <Button
                        variant="outline"
                        className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                      >
                        Ver Vagas Fechadas
                      </Button>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Paginação (Placeholder) - COR BORDA/BOTÃO PADRONIZADA */}
              <div className="flex items-center justify-between pt-4 border-t dark:border-zinc-700">
                {" "}
                {/* COR PADRONIZADA: border-t */}
                <div className="text-sm text-muted-foreground dark:text-gray-400">
                  {" "}
                  {/* COR TEXTO MUTED PADRÃO */}
                  Mostrando{" "}
                  <strong>
                    1-{vagasAtivas.length > 3 ? 3 : vagasAtivas.length}
                  </strong>{" "}
                  de <strong>{vagasAtivas.length}</strong> vagas ativas
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="disabled:opacity-50 dark:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800" // COR PADRONIZADA: Botão Disabled
                  >
                    Anterior
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    // Assumindo que este é o botão ativo da paginação
                    className={cn(
                      "w-8 p-0 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800",
                      "bg-zinc-100 dark:bg-zinc-800" // Estilo ativo
                    )}
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                  >
                    Próxima
                  </Button>
                </div>
              </div>
            </div>
            {/* ================================================================== */}
            {/* FIM DO CONTEÚDO ESPECÍFICO DA PÁGINA GERENCIAR VAGAS             */}
            {/* ================================================================== */}
          </main>
          {/* Rodapé */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
