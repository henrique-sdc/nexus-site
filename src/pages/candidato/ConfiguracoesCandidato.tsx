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
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { Switch } from "src/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import {
  Bell,
  Check,
  CreditCard,
  //   Globe,
  //   Mail,
  //   Phone,
  Shield,
  //   Upload,
  User,
} from "lucide-react";
import Footer from "src/components/Footer/Footer";

// --- Importações para Navegação (Opcional) ---
// import { useNavigate } from 'react-router-dom';

/**
 * Página "Configurações" do Dashboard do Candidato.
 * Permite gerenciar informações da conta, notificações, privacidade e cobrança (se aplicável).
 * Utiliza a estrutura de layout padrão do dashboard.
 */
export default function Configuracoes() {
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
    avatarSrc: "https://github.com/shadcn.png", // Usar avatar de exemplo padrão
    messageCount: 3,
    notificationCount: 5,
    // Dados específicos para preencher os campos (substituir por dados reais)
    firstName: "Ana",
    lastName: "Silva",
    email: "ana.silva@exemplo.com",
    phone: "(11) 98765-4321",
    headline: "Engenheira de Software Sênior com 7+ anos de experiência",
    bio: "Engenheira de software apaixonada por construir aplicações web escaláveis e eficientes. Proficiente em React, TypeScript, Node.js e Java.",
    location: "São Paulo, SP",
    website: "https://linkedin.com/in/anasilva-dev", // Exemplo
  };

  // --- Estados para os Switches e Selects (necessário para controle em React) ---
  // Os `defaultChecked` e `defaultValue` do HTML/Next não funcionam diretamente
  // com componentes controlados em React. Você precisaria de `useState` para cada um.
  // Exemplo:
  const [notifications, setNotifications] = useState({
    newJobMatches: true,
    jobApplicationUpdates: true,
    savedJobReminders: true,
    newMessages: true,
    messageReplies: true,
    assessmentInvites: true,
    interviewInvites: true,
    interviewReminders: true,
  });
  const [emailFrequency, setEmailFrequency] = useState("daily");
  const [privacy, setPrivacy] = useState({
    profileVisibility: "all-employers",
    recruiterMessages: true,
    showContactInfo: false, // Exemplo: começa desabilitado
    dataForRecommendations: true,
    anonymousAnalytics: true,
  });

  // Handlers para atualizar os estados (exemplo para um switch)
  const handleSwitchChange = (
    id: keyof typeof notifications,
    checked: boolean
  ) => {
    setNotifications((prev) => ({ ...prev, [id]: checked }));
  };
  const handlePrivacySwitchChange = (
    id: keyof typeof privacy,
    checked: boolean
  ) => {
    // Note que profileVisibility não é boolean, precisa de handler separado ou check
    if (typeof privacy[id] === "boolean") {
      setPrivacy((prev) => ({ ...prev, [id]: checked }));
    }
  };
  const handleSelectChange = (
    id: keyof typeof privacy | string,
    value: string
  ) => {
    if (id === "profileVisibility" || id === "emailFrequency") {
      setPrivacy((prev) => ({ ...prev, profileVisibility: value })); // Ajuste conforme necessário
    }
    if (id === "emailFrequency") {
      setEmailFrequency(value);
    }
  };

  return (
    <SidebarProvider>
      {/* Container principal Flex (Estrutura padrão) - COR EXTERNA PADRONIZADA */}
      <div className="flex min-h-screen bg-gray-100/50 dark:bg-black">
        {/* --- Sidebar Desktop (Estrutura padrão) - COR BORDA PADRONIZADA --- */}
        <div
          className={cn(
            "hidden lg:flex h-screen sticky top-0 transition-all duration-300 ease-in-out border-r dark:border-zinc-800", // COR PADRONIZADA (Borda)
            "bg-background dark:bg-gray-900", // Fundo Sidebar mantido como estava (gray-900)
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
            activePage="configuracoes" // **IMPORTANTE**: Define a página ativa
          />
        </div>

        {/* --- Sidebar Mobile (Sheet - Estrutura padrão) - COR BORDA PADRONIZADA --- */}
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetContent
            side="left"
            className={cn(
              "p-0 w-64 lg:hidden border-r dark:border-zinc-800", // COR PADRONIZADA (Borda)
              "bg-white dark:bg-gray-900" // Fundo Sidebar mantido como estava (gray-900)
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
              activePage="configuracoes" // **IMPORTANTE**: Define a página ativa
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

          {/* Conteúdo Principal (Main) - Layout padrão - COR FUNDO MAIN PADRONIZADA */}
          <main className="flex-1 p-4 md:p-6 bg-gray-50/50 dark:bg-zinc-900/60 overflow-x-hidden">
            {" "}
            {/* COR PADRONIZADA (Fundo Main) */}
            {/* ================================================================== */}
            {/* INÍCIO DO CONTEÚDO ESPECÍFICO DA PÁGINA DE CONFIGURAÇÕES          */}
            {/* ================================================================== */}
            <div className="space-y-6">
              {/* Cabeçalho da Página - CORES TEXTO PADRÃO */}
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {" "}
                  {/* COR TEXTO PADRÃO */}
                  Configurações
                </h1>
                <p className="text-muted-foreground dark:text-gray-400">
                  {" "}
                  {/* COR TEXTO MUTED PADRÃO */}
                  Gerencie as configurações e preferências da sua conta
                </p>
              </div>

              {/* Abas Principais */}
              <Tabs defaultValue="conta" className="w-full">
                {/* Lista de Abas com estilo dark - COR TABS PADRONIZADA */}
                <TabsList className="flex w-full gap-1 bg-gray-200/50 dark:bg-zinc-800 p-1 rounded-lg">
                  {" "}
                  {/* Flex, Gap, BG, Padding, Rounded */}
                  {/* COR PADRONIZADA (TabsList BG) */}
                  {/* Conta Trigger */}
                  <TabsTrigger
                    value="conta"
                    // Estilo base: flex-1 (SEMPRE ocupa espaço igual), centralizado, padding, rounded, etc.
                    className="flex flex-1 items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                    // As classes de cores e estado são mantidas
                  >
                    <User className="h-4 w-4 flex-shrink-0" />{" "}
                    {/* Ícone sempre visível */}
                    {/* Texto visível apenas em telas 'sm' (640px) ou maiores */}
                    <span className="hidden sm:inline">Conta</span>
                  </TabsTrigger>
                  {/* Notificações Trigger */}
                  <TabsTrigger
                    value="notificacoes"
                    // flex-1 aplica a todas as resoluções
                    className="flex flex-1 items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                  >
                    <Bell className="h-4 w-4 flex-shrink-0" />{" "}
                    {/* Ícone sempre visível */}
                    {/* Texto visível apenas em telas 'sm' ou maiores */}
                    <span className="hidden sm:inline">Notificações</span>
                  </TabsTrigger>
                  {/* Privacidade Trigger */}
                  <TabsTrigger
                    value="privacidade"
                    // flex-1 aplica a todas as resoluções
                    className="flex flex-1 items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                  >
                    <Shield className="h-4 w-4 flex-shrink-0" />{" "}
                    {/* Ícone sempre visível */}
                    {/* Texto visível apenas em telas 'sm' ou maiores */}
                    <span className="hidden sm:inline">Privacidade</span>
                  </TabsTrigger>
                  {/* Cobrança Trigger (Opcional) */}
                  <TabsTrigger
                    value="cobranca"
                    // flex-1 aplica a todas as resoluções
                    className="flex flex-1 items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
                  >
                    <CreditCard className="h-4 w-4 flex-shrink-0" />{" "}
                    {/* Ícone sempre visível */}
                    {/* Texto visível apenas em telas 'sm' ou maiores */}
                    <span className="hidden sm:inline">Cobrança</span>
                  </TabsTrigger>
                </TabsList>

                {/* Conteúdo da Aba: Conta */}
                <TabsContent value="conta" className="mt-6 space-y-6">
                  {/* Card: Informações da Conta */}
                  {/* <Card className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        Informações da Conta
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Atualize suas informações pessoais
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center"> */}
                  {/* Avatar e Botão de Upload */}
                  {/* <div className="flex flex-col items-center space-y-2 w-full md:w-auto">
                          <Avatar className="h-24 w-24 border dark:border-gray-600">
                            <AvatarImage
                              src={userData.avatarSrc}
                              alt={userData.name}
                            />
                            <AvatarFallback className="text-2xl bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                              {userData.initials}
                            </AvatarFallback>
                          </Avatar>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1 w-full dark:text-white dark:border-gray-600 hover:dark:bg-gray-700"
                          >
                            <Upload className="h-4 w-4" />
                            <span>Alterar Foto</span>
                          </Button>
                        </div> */}
                  {/* Campos de Informação Pessoal */}
                  {/* <div className="flex-1 space-y-4 w-full">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label
                                htmlFor="first-name"
                                className="dark:text-gray-300"
                              >
                                Nome
                              </Label>
                              <Input
                                id="first-name"
                                defaultValue={userData.firstName}
                                className="bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="last-name"
                                className="dark:text-gray-300"
                              >
                                Sobrenome
                              </Label>
                              <Input
                                id="last-name"
                                defaultValue={userData.lastName}
                                className="bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label
                                htmlFor="email"
                                className="dark:text-gray-300"
                              >
                                Email
                              </Label>
                              <div className="flex">
                                <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100 dark:bg-gray-750 dark:border-gray-600">
                                  <Mail className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                                </div>
                                <Input
                                  id="email"
                                  type="email"
                                  defaultValue={userData.email}
                                  className="rounded-l-none bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="phone"
                                className="dark:text-gray-300"
                              >
                                Telefone
                              </Label>
                              <div className="flex">
                                <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100 dark:bg-gray-750 dark:border-gray-600">
                                  <Phone className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                                </div>
                                <Input
                                  id="phone"
                                  type="tel"
                                  defaultValue={userData.phone}
                                  className="rounded-l-none bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}

                  {/* Título Profissional */}
                  {/* <div className="space-y-2">
                        <Label
                          htmlFor="headline"
                          className="dark:text-gray-300"
                        >
                          Título Profissional
                        </Label>
                        <Input
                          id="headline"
                          defaultValue={userData.headline}
                          className="bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                        />
                      </div> */}

                  {/* Bio */}
                  {/* <div className="space-y-2">
                        <Label htmlFor="bio" className="dark:text-gray-300">
                          Bio
                        </Label>
                        <Textarea
                          id="bio"
                          rows={4}
                          defaultValue={userData.bio}
                          className="min-h-[100px] bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                        />
                      </div> */}

                  {/* Localização e Website */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="location"
                            className="dark:text-gray-300"
                          >
                            Localização
                          </Label>
                          <Input
                            id="location"
                            defaultValue={userData.location}
                            className="bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="website"
                            className="dark:text-gray-300"
                          >
                            Website
                          </Label>
                          <div className="flex">
                            <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100 dark:bg-gray-750 dark:border-gray-600">
                              <Globe className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                            </div>
                            <Input
                              id="website"
                              type="url"
                              defaultValue={userData.website}
                              className="rounded-l-none bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="dark:text-white dark:bg-blue-600 hover:dark:bg-blue-700">
                        Salvar Alterações
                      </Button>
                    </CardFooter>
                  </Card> */}

                  {/* Card: Senha */}
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA (Card BG/Borda) */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Senha
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Atualize sua senha
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="current-password"
                          className="dark:text-gray-300" // COR TEXTO PADRÃO
                        >
                          Senha Atual
                        </Label>
                        <Input
                          id="current-password"
                          type="password"
                          className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA (Input)
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="new-password"
                          className="dark:text-gray-300" // COR TEXTO PADRÃO
                        >
                          Nova Senha
                        </Label>
                        <Input
                          id="new-password"
                          type="password"
                          className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA (Input)
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="confirm-password"
                          className="dark:text-gray-300" // COR TEXTO PADRÃO
                        >
                          Confirmar Nova Senha
                        </Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA (Input)
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                        {" "}
                        {/* COR BOTÃO PRIMÁRIO MANTIDA (Azul) */}
                        Atualizar Senha
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* Conteúdo da Aba: Notificações */}
                <TabsContent value="notificacoes" className="mt-6 space-y-6">
                  {/* Card: Preferências de Notificação - COR CARD/DIVISOR PADRONIZADA */}
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA (Card BG/Borda) */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Preferências de Notificação
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Escolha como você deseja ser notificado
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 divide-y dark:divide-zinc-700">
                      {" "}
                      {/* COR PADRONIZADA (Divisor) */}
                      {/* Seção: Alertas de Vaga */}
                      <div className="space-y-4 pt-6 first:pt-0">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {" "}
                          {/* COR TEXTO PADRÃO */}
                          Alertas de Vaga
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="new-job-matches"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Novas Vagas Compatíveis
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Receber notificações quando novas vagas
                                corresponderem ao seu perfil
                              </p>
                            </div>
                            <Switch
                              id="new-job-matches"
                              checked={notifications.newJobMatches}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("newJobMatches", checked)
                              }
                              // Switch deve adaptar-se ao tema via CSS vars
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="job-application-updates"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Atualizações de Candidatura
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Receber atualizações sobre suas candidaturas
                              </p>
                            </div>
                            <Switch
                              id="job-application-updates"
                              checked={notifications.jobApplicationUpdates}
                              onCheckedChange={(checked) =>
                                handleSwitchChange(
                                  "jobApplicationUpdates",
                                  checked
                                )
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="saved-job-reminders"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Lembretes de Vagas Salvas
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Receber lembretes sobre vagas que você salvou
                              </p>
                            </div>
                            <Switch
                              id="saved-job-reminders"
                              checked={notifications.savedJobReminders}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("savedJobReminders", checked)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* Seção: Mensagens */}
                      <div className="space-y-4 pt-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {" "}
                          {/* COR TEXTO PADRÃO */}
                          Mensagens
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="new-messages"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Novas Mensagens
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Receber notificações para novas mensagens
                              </p>
                            </div>
                            <Switch
                              id="new-messages"
                              checked={notifications.newMessages}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("newMessages", checked)
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="message-replies"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Respostas de Mensagens
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Ser notificado quando alguém responder sua
                                mensagem
                              </p>
                            </div>
                            <Switch
                              id="message-replies"
                              checked={notifications.messageReplies}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("messageReplies", checked)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* Seção: Avaliações e Entrevistas */}
                      <div className="space-y-4 pt-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {" "}
                          {/* COR TEXTO PADRÃO */}
                          Avaliações e Entrevistas
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="assessment-invites"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Convites para Avaliação
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Receber notificações para novos convites de
                                avaliação
                              </p>
                            </div>
                            <Switch
                              id="assessment-invites"
                              checked={notifications.assessmentInvites}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("assessmentInvites", checked)
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="interview-invites"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Convites para Entrevista
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Ser notificado sobre convites para entrevista
                              </p>
                            </div>
                            <Switch
                              id="interview-invites"
                              checked={notifications.interviewInvites}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("interviewInvites", checked)
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="interview-reminders"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Lembretes de Entrevista
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Receber lembretes antes das entrevistas
                                agendadas
                              </p>
                            </div>
                            <Switch
                              id="interview-reminders"
                              checked={notifications.interviewReminders}
                              onCheckedChange={(checked) =>
                                handleSwitchChange(
                                  "interviewReminders",
                                  checked
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                        {" "}
                        {/* COR BOTÃO PRIMÁRIO MANTIDA (Azul) */}
                        Salvar Preferências
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Card: Frequência de Email - COR CARD/SELECT PADRONIZADA */}
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA (Card BG/Borda) */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Frequência de Email
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Controle a frequência com que você recebe emails
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="email-frequency"
                          className="dark:text-gray-300" // COR TEXTO PADRÃO
                        >
                          Frequência do Resumo por Email
                        </Label>
                        <Select
                          value={emailFrequency}
                          onValueChange={(value) =>
                            handleSelectChange("emailFrequency", value)
                          }
                        >
                          {/* Select com estilo dark */}
                          <SelectTrigger
                            id="email-frequency"
                            className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA (Select Trigger)
                          >
                            <SelectValue placeholder="Selecione a frequência" />
                          </SelectTrigger>
                          <SelectContent className="bg-white dark:bg-zinc-900 dark:border-zinc-700">
                            {" "}
                            {/* COR PADRONIZADA (Select Content) */}
                            <SelectItem
                              value="realtime"
                              className="dark:text-gray-300 dark:focus:bg-zinc-700" // COR PADRONIZADA (Select Item)
                            >
                              Tempo Real
                            </SelectItem>
                            <SelectItem
                              value="daily"
                              className="dark:text-gray-300 dark:focus:bg-zinc-700" // COR PADRONIZADA (Select Item)
                            >
                              Resumo Diário
                            </SelectItem>
                            <SelectItem
                              value="weekly"
                              className="dark:text-gray-300 dark:focus:bg-zinc-700" // COR PADRONIZADA (Select Item)
                            >
                              Resumo Semanal
                            </SelectItem>
                            <SelectItem
                              value="never"
                              className="dark:text-gray-300 dark:focus:bg-zinc-700" // COR PADRONIZADA (Select Item)
                            >
                              Nunca
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                        {" "}
                        {/* COR BOTÃO PRIMÁRIO MANTIDA (Azul) */}
                        Salvar Preferências
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* Conteúdo da Aba: Privacidade - COR CARD/SELECT/DIVISOR PADRONIZADA */}
                <TabsContent value="privacidade" className="mt-6 space-y-6">
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA (Card BG/Borda) */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Configurações de Privacidade
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Controle sua privacidade e visibilidade
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 divide-y dark:divide-zinc-700">
                      {" "}
                      {/* COR PADRONIZADA (Divisor) */}
                      {/* Seção: Visibilidade do Perfil */}
                      <div className="space-y-4 pt-6 first:pt-0">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {" "}
                          {/* COR TEXTO PADRÃO */}
                          Visibilidade do Perfil
                        </h3>
                        <div className="space-y-3">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="profile-visibility"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Quem pode ver seu perfil
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Controle quem pode visualizar as informações
                                completas do seu perfil
                              </p>
                            </div>
                            <Select
                              value={privacy.profileVisibility}
                              onValueChange={(value) =>
                                handleSelectChange("profileVisibility", value)
                              }
                            >
                              <SelectTrigger
                                id="profile-visibility"
                                className="w-full sm:w-[220px] bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA (Select Trigger)
                              >
                                <SelectValue placeholder="Selecione a visibilidade" />
                              </SelectTrigger>
                              <SelectContent className="bg-white dark:bg-zinc-900 dark:border-zinc-700">
                                {" "}
                                {/* COR PADRONIZADA (Select Content) */}
                                <SelectItem
                                  value="all-employers"
                                  className="dark:text-gray-300 dark:focus:bg-zinc-700" // COR PADRONIZADA (Select Item)
                                >
                                  Todos os Empregadores
                                </SelectItem>
                                <SelectItem
                                  value="applied-only"
                                  className="dark:text-gray-300 dark:focus:bg-zinc-700" // COR PADRONIZADA (Select Item)
                                >
                                  Apenas Empresas Onde me Candidatei
                                </SelectItem>
                                <SelectItem
                                  value="invited-only"
                                  className="dark:text-gray-300 dark:focus:bg-zinc-700" // COR PADRONIZADA (Select Item)
                                >
                                  Apenas Empresas que me Convidaram
                                </SelectItem>
                                <SelectItem
                                  value="hidden"
                                  className="dark:text-gray-300 dark:focus:bg-zinc-700" // COR PADRONIZADA (Select Item)
                                >
                                  Oculto
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      {/* Seção: Preferências de Contato */}
                      <div className="space-y-4 pt-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {" "}
                          {/* COR TEXTO PADRÃO */}
                          Preferências de Contato
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="recruiter-messages"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Mensagens de Recrutadores
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Permitir que recrutadores enviem mensagens
                                diretas
                              </p>
                            </div>
                            <Switch
                              id="recruiter-messages"
                              checked={privacy.recruiterMessages as boolean}
                              onCheckedChange={(checked) =>
                                handlePrivacySwitchChange(
                                  "recruiterMessages",
                                  checked
                                )
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="show-contact-info"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Mostrar Informações de Contato
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Exibir suas informações de contato no seu perfil
                              </p>
                            </div>
                            <Switch
                              id="show-contact-info"
                              checked={privacy.showContactInfo as boolean}
                              onCheckedChange={(checked) =>
                                handlePrivacySwitchChange(
                                  "showContactInfo",
                                  checked
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* Seção: Dados e Privacidade */}
                      <div className="space-y-4 pt-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {" "}
                          {/* COR TEXTO PADRÃO */}
                          Dados e Privacidade
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="data-for-recommendations"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Usar Dados para Recomendações
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Permitir o uso dos seus dados para melhorar as
                                recomendações de vagas
                              </p>
                            </div>
                            <Switch
                              id="data-for-recommendations"
                              checked={
                                privacy.dataForRecommendations as boolean
                              }
                              onCheckedChange={(checked) =>
                                handlePrivacySwitchChange(
                                  "dataForRecommendations",
                                  checked
                                )
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="anonymous-analytics"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Análises Anônimas
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Compartilhar dados de uso anônimos para ajudar a
                                melhorar nossa plataforma
                              </p>
                            </div>
                            <Switch
                              id="anonymous-analytics"
                              checked={privacy.anonymousAnalytics as boolean}
                              onCheckedChange={(checked) =>
                                handlePrivacySwitchChange(
                                  "anonymousAnalytics",
                                  checked
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start space-y-4 border-t dark:border-zinc-700 pt-6">
                      {" "}
                      {/* COR PADRONIZADA (Footer Borda) */}
                      <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                        {" "}
                        {/* COR BOTÃO PRIMÁRIO MANTIDA (Azul) */}
                        Salvar Configurações de Privacidade
                      </Button>
                      {/* Links com estilo dark - CORES LINKS PADRONIZADAS */}
                      <div className="text-sm text-muted-foreground dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        <p>
                          Você pode{" "}
                          {/* Substituir # por links reais ou actions */}
                          <a
                            href="/baixar-dados"
                            className="text-primary text-blue-400 underline hover:text-blue-300" // COR PADRONIZADA (Link Primário)
                          >
                            baixar seus dados
                          </a>{" "}
                          ou{" "}
                          <a
                            href="/excluir-conta"
                            className="text-destructive text-red-400 underline hover:text-red-300" // COR PADRONIZADA (Link Destrutivo)
                          >
                            excluir sua conta
                          </a>{" "}
                          a qualquer momento.
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* Conteúdo da Aba: Cobrança (Manter ou Remover?) - COR CARD/BOTÃO PADRONIZADA */}
                {/* Esta aba pode não fazer sentido para candidatos. Avalie se deve mantê-la. */}
                <TabsContent value="cobranca" className="mt-6 space-y-6">
                  {/* Card: Plano de Assinatura - COR CARD PADRONIZADA */}
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA (Card BG/Borda) */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Plano de Assinatura
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Gerencie sua assinatura e cobrança (se aplicável)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Detalhes do Plano Atual (Exemplo: Gratuito) - COR INNER CARD PADRONIZADA */}
                      <div className="rounded-lg border dark:border-zinc-700 p-4 bg-gray-50 dark:dark:bg-zinc-800/50">
                        {" "}
                        {/* COR PADRONIZADA (Inner Card BG/Borda) */}
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              Plano Gratuito
                            </h3>
                            <p className="text-sm text-muted-foreground dark:text-gray-400">
                              {" "}
                              {/* COR TEXTO MUTED PADRÃO */}
                              Recursos básicos de busca e candidatura
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              R$ 0
                            </span>
                            <span className="text-sm text-muted-foreground dark:text-gray-400">
                              {" "}
                              {/* COR TEXTO MUTED PADRÃO */}
                              /mês
                            </span>
                          </div>
                        </div>
                        <div className="mt-4">
                          {/* Botão de Upgrade - COR BOTÃO OUTLINE PADRONIZADA */}
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA (Botão Outline)
                          >
                            Fazer Upgrade para Premium
                          </Button>
                        </div>
                      </div>

                      {/* Lista de Recursos Premium - COR CHECKMARK MANTIDA */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {" "}
                          {/* COR TEXTO PADRÃO */}
                          Recursos Premium (Exemplo)
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          {" "}
                          {/* COR TEXTO PADRÃO */}
                          {/* Item de Recurso */}
                          <li className="flex items-center gap-2">
                            {/* Checkmark com fundo - COR MANTIDA (Azul) */}
                            <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                              <Check className="h-3 w-3 text-primary dark:text-blue-400" />{" "}
                              {/* COR MANTIDA (Azul) */}
                            </div>
                            <span>Status prioritário de candidatura</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                              {" "}
                              {/* COR MANTIDA (Azul) */}
                              <Check className="h-3 w-3 text-primary dark:text-blue-400" />{" "}
                              {/* COR MANTIDA (Azul) */}
                            </div>
                            <span>Ver quem visualizou seu perfil</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                              {" "}
                              {/* COR MANTIDA (Azul) */}
                              <Check className="h-3 w-3 text-primary dark:text-blue-400" />{" "}
                              {/* COR MANTIDA (Azul) */}
                            </div>
                            <span>Avaliações de habilidades avançadas</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                              {" "}
                              {/* COR MANTIDA (Azul) */}
                              <Check className="h-3 w-3 text-primary dark:text-blue-400" />{" "}
                              {/* COR MANTIDA (Azul) */}
                            </div>
                            <span>
                              Mensagens diretas com gerentes de contratação
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                              {" "}
                              {/* COR MANTIDA (Azul) */}
                              <Check className="h-3 w-3 text-primary dark:text-blue-400" />{" "}
                              {/* COR MANTIDA (Azul) */}
                            </div>
                            <span>Otimização de currículo por IA</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card: Métodos de Pagamento - COR CARD/BOTÃO PADRONIZADA */}
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA (Card BG/Borda) */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Métodos de Pagamento
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Gerencie seus métodos de pagamento (se aplicável)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Mensagem se não houver métodos */}
                      <p className="text-sm text-muted-foreground dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Nenhum método de pagamento adicionado ainda.
                      </p>
                      <Button
                        variant="outline"
                        className="gap-2 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA (Botão Outline)
                      >
                        <CreditCard className="h-4 w-4" />
                        <span>Adicionar Método de Pagamento</span>
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            {/* ================================================================== */}
            {/* FIM DO CONTEÚDO ESPECÍFICO DA PÁGINA DE CONFIGURAÇÕES             */}
            {/* ================================================================== */}
          </main>
          {/* Rodapé */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
