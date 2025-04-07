import React, { useState } from "react";
import { SidebarProvider } from "src/components/ui/sidebar";
import { Sheet, SheetContent } from "src/components/ui/sheet";
import { cn } from "src/lib/utils";
import { DashboardNavbar } from "src/components/Dashboards/DashboardNavbar";
import { CandidatoSidebar } from "src/components/Dashboards/Candidatos/CandidatoSidebar";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Badge } from "src/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  Send,
  Eye,
  Trash2,
} from "lucide-react";
import Footer from "src/components/Footer/Footer";

/**
 * Página "Vagas Salvas" do Dashboard do Candidato.
 * Lista as vagas que o candidato salvou para visualização posterior.
 * Utiliza a estrutura de layout padrão do dashboard.
 */
export default function VagasSalvas() {
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

  // --- Dados de Exemplo das Vagas Salvas (Substituir por dados reais da API/Contexto) ---
  // Em uma aplicação real, isso viria de um estado preenchido por uma API call
  const savedJobs = [
    {
      id: 1,
      title: "Desenvolvedor Frontend Sênior",
      company: "TechCorp Inc.",
      location: "São Francisco, CA (Remoto)",
      type: "Tempo Integral",
      savedDate: "2 dias atrás",
      match: 95,
      skills: ["React", "TypeScript", "Tailwind CSS"],
      logoFallback: "TC",
      logoSrc: "", // Deixar vazio para usar fallback
    },
    {
      id: 2,
      title: "Engenheiro Full Stack",
      company: "InnovateLabs",
      location: "Nova York, NY (Híbrido)",
      type: "Tempo Integral",
      savedDate: "5 dias atrás",
      match: 88,
      skills: ["Node.js", "React", "Java"],
      logoFallback: "IL",
      logoSrc: "",
    },
    // Adicione mais vagas salvas aqui se necessário para testes
  ];

  // --- Estado para busca (Opcional, para funcionalidade real) ---
  const [searchTerm, setSearchTerm] = useState("");

  // --- Lógica de Filtro (Opcional, para funcionalidade real) ---
  const filteredJobs = savedJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Função para remover vaga salva
  const handleRemoveSavedJob = (jobId: number) => {
    console.log("Remover vaga salva com id:", jobId);
  };

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
            activePage="vagas-salvas" // **IMPORTANTE**: Define a página ativa
          />
        </div>

        {/* --- Sidebar Mobile (Sheet - Estrutura padrão) --- */}
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetContent
            side="left"
            className={cn(
              "p-0 w-64 lg:hidden border-r dark:border-zinc-700",
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
              activePage="vagas-salvas" // **IMPORTANTE**: Define a página ativa
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
          <main className="flex-1 p-4 md:p-6 bg-gray-50/50 dark:bg-black overflow-x-hidden">
            {/* ================================================================== */}
            {/* INÍCIO DO CONTEÚDO ESPECÍFICO DA PÁGINA DE VAGAS SALVAS           */}
            {/* ================================================================== */}
            <div className="space-y-6">
              {/* Cabeçalho da Página */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Vagas Salvas
                  </h1>
                  <p className="text-muted-foreground dark:text-gray-400">
                    Vagas que você salvou para considerar mais tarde
                  </p>
                </div>
                {/* Barra de Busca */}
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground dark:text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Buscar vagas salvas..."
                    className="pl-8 bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Card Principal com a Lista */}
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">
                    Suas Vagas Salvas
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    {/* Contagem dinâmica ou placeholder */}
                    Você tem {filteredJobs.length}{" "}
                    {filteredJobs.length === 1 ? "vaga salva" : "vagas salvas"}.
                    Revise e candidate-se quando estiver pronto.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Lista de Vagas Salvas */}
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                      // Item Individual de Vaga Salva
                      <div
                        key={job.id}
                        className="border rounded-lg p-4 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-700/50 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          {/* Avatar da Empresa */}
                          <Avatar className="h-12 w-12 border dark:border-zinc-600 flex-shrink-0">
                            {/* Se tiver a URL da imagem, use AvatarImage */}
                            {job.logoSrc && (
                              <AvatarImage
                                src={job.logoSrc}
                                alt={job.company}
                              />
                            )}
                            <AvatarFallback className="bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300">
                              {job.logoFallback}
                            </AvatarFallback>
                          </Avatar>

                          {/* Detalhes da Vaga */}
                          <div className="flex-1 space-y-2 min-w-0">
                            {" "}
                            {/* min-w-0 previne overflow */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                                {job.title}
                              </h3>
                              {/* Badge de Match */}
                              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 w-fit text-xs px-2 py-0.5 flex-shrink-0">
                                {job.match}% Compatível
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground dark:text-gray-400 truncate">
                              {job.company}
                            </p>
                            {/* Informações Rápidas (Local, Tipo, Data) */}
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4 flex-shrink-0" />
                                <span>{job.type}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4 flex-shrink-0" />
                                <span>Salva há {job.savedDate}</span>
                              </div>
                            </div>
                            {/* Badges de Habilidades */}
                            <div className="flex flex-wrap gap-1 pt-1">
                              {job.skills.map((skill) => (
                                <Badge
                                  key={skill}
                                  variant="outline"
                                  className="text-xs px-1.5 py-0.5 dark:border-gray-600 dark:text-gray-400"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Botões de Ação */}
                          <div className="flex flex-col items-stretch sm:items-center sm:flex-row gap-2 mt-2 md:mt-0 md:ml-4 flex-shrink-0">
                            <Button
                              size="sm"
                              variant="outline"
                              className="gap-1 w-full sm:w-auto dark:text-white dark:border-zinc-600 hover:bg-zinc-200/70 hover:dark:bg-zinc-700"
                            >
                              <Eye className="h-4 w-4" />
                              <span className="sm:inline">Detalhes</span>{" "}
                              {/* Mostrar texto se houver espaço */}
                            </Button>
                            <Button
                              size="sm"
                              className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200 gap-1 w-full sm:w-auto"
                            >
                              <Send className="h-4 w-4" />
                              <span className="sm:inline">Aplicar</span>{" "}
                              {/* Mostrar texto se houver espaço */}
                            </Button>
                            {/* ----- BOTÃO DE REMOVER ADICIONADO ----- */}
                            <Button
                              variant="ghost" // Aparência sutil
                              size="icon" // Tamanho apenas para o ícone
                              className="text-red-600 hover:bg-red-100 dark:text-red-500 dark:hover:bg-red-900/20 w-full sm:h-8 sm:w-8" // Cores destrutivas e ajuste de tamanho mobile/desktop
                              aria-label="Remover vaga salva" // Acessibilidade
                              onClick={() => handleRemoveSavedJob(job.id)} // Chama a função de remover
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                            {/* ----- FIM DO BOTÃO DE REMOVER ----- */}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Mensagem se não houver vagas salvas ou resultados de busca
                    <div className="text-center py-10 text-muted-foreground dark:text-gray-500">
                      {searchTerm
                        ? "Nenhuma vaga salva encontrada para sua busca."
                        : "Você ainda não salvou nenhuma vaga."}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            {/* ================================================================== */}
            {/* FIM DO CONTEÚDO ESPECÍFICO DA PÁGINA DE VAGAS SALVAS              */}
            {/* ================================================================== */}
          </main>
          {/* Rodapé */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
