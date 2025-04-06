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
import { Textarea } from "src/components/ui/textarea";
import { Switch } from "src/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
// Select não é usado nesta versão, mas pode ser adicionado se necessário

// --- Importações dos Ícones ---
import {
  Bell, // Notificações
  CreditCard, // Cobrança/Pagamento
  Globe, // Website
  Lock, // Segurança
  Mail, // Email
  // Phone não é usado diretamente, mas pode ser útil para um input mask
  Upload, // Upload
  User, // Perfil/Conta
  Users, // Equipe
} from "lucide-react";

import Footer from "src/components/Footer/Footer";

// --- Importações para Navegação (Opcional) ---
// import { useNavigate } from 'react-router-dom';

/**
 * Página de Configurações do Dashboard da Empresa.
 * Permite gerenciar Perfil, Equipe, Cobrança, Notificações e Segurança.
 * Utiliza a estrutura de layout padrão do dashboard da empresa.
 */
export default function ConfiguracoesEmpresa() {
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

  // --- Dados de Exemplo da Empresa (Estrutura padrão + dados do formulário) ---
  const empresaData = {
    name: "TechCorp Inc.",
    accountType: "Conta de Administrador",
    initials: "TC",
    logoSrc: "https://github.com/shadcn.png", // Logo da empresa ou avatar
    messageCount: 4,
    notificationCount: 7,
    // Dados para preencher os formulários
    industry: "Tecnologia",
    size: "51-200 funcionários",
    founded: "2015",
    website: "https://techcorp.exemplo.com",
    description:
      "TechCorp é uma empresa líder em tecnologia especializada em soluções de software inovadoras para negócios de todos os tamanhos. Nossa missão é capacitar organizações através de tecnologia de ponta e serviço excepcional.",
    location: "São Francisco, CA",
    contactEmail: "rh@techcorp.exemplo.com",
    contactPhone: "(555) 123-4567",
  };

  // --- Dados de Exemplo da Equipe (Substituir por API) ---
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@techcorp.example.com",
      role: "Admin",
      avatarFallback: "JS",
    },
    {
      id: 2,
      name: "Emily Johnson",
      email: "emily.johnson@techcorp.example.com",
      role: "Recrutador",
      avatarFallback: "EJ",
    },
    {
      id: 3,
      name: "David Lee",
      email: "david.lee@techcorp.example.com",
      role: "Gerente Contratante",
      avatarFallback: "DL",
    },
  ];

  // --- Dados de Exemplo de Cobrança (Substituir por API) ---
  const billingHistory = [
    {
      id: "inv3",
      number: "#INV-2025-003",
      date: "1 de Março de 2025",
      amount: "$299.00",
    },
    {
      id: "inv2",
      number: "#INV-2025-002",
      date: "1 de Fevereiro de 2025",
      amount: "$299.00",
    },
    {
      id: "inv1",
      number: "#INV-2025-001",
      date: "1 de Janeiro de 2025",
      amount: "$299.00",
    },
  ];

  // --- Estados para Switches (Necessário para controle em React) ---
  const [notifications, setNotifications] = useState({
    newApplications: true,
    messages: true,
    jobAlerts: true,
    billingUpdates: true,
    productUpdates: true,
  });

  // Handlers para atualizar os estados (exemplo para um switch)
  const handleSwitchChange = (
    id: keyof typeof notifications,
    checked: boolean
  ) => {
    setNotifications((prev) => ({ ...prev, [id]: checked }));
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
            activePage="configuracoes"
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
              activePage="configuracoes"
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
            {/* INÍCIO DO CONTEÚDO ESPECÍFICO DA PÁGINA CONFIGURAÇÕES (EMPRESA)   */}
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
                  Gerencie o perfil e as preferências da sua empresa
                </p>
              </div>

              {/* Abas Principais - RESPONSIVIDADE E CORES PADRONIZADAS */}
              <Tabs defaultValue="perfil" className="w-full">
                {/* Ajustado para flex e cores zinc */}
                {/* Lista de Abas - CORREÇÃO RESPONSIVIDADE */}
                <TabsList className="flex w-full gap-1 bg-gray-200/50 dark:bg-zinc-800 p-1 rounded-lg">
                  {" "}
                  {/* Estrutura Flex, BG, Padding OK */}
                  {/* COR PADRONIZADA (TabsList BG) */}
                  {/* Perfil Trigger */}
                  <TabsTrigger
                    value="perfil"
                    className="flex flex-1 items-center justify-center gap-1.5 px-2 py-1.5 text-xs sm:text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors" // Estilo e Cores Padronizadas
                  >
                    <User className="h-4 w-4 flex-shrink-0" />
                    {/* APENAS este span deve existir para o texto */}
                    <span className="hidden sm:inline">Perfil</span>
                  </TabsTrigger>
                  {/* Equipe Trigger */}
                  <TabsTrigger
                    value="equipe"
                    className="flex flex-1 items-center justify-center gap-1.5 px-2 py-1.5 text-xs sm:text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors" // Estilo e Cores Padronizadas
                  >
                    <Users className="h-4 w-4 flex-shrink-0" />
                    {/* APENAS este span deve existir para o texto */}
                    <span className="hidden sm:inline">Equipe</span>
                  </TabsTrigger>
                  {/* Cobrança Trigger */}
                  <TabsTrigger
                    value="cobranca"
                    className="flex flex-1 items-center justify-center gap-1.5 px-2 py-1.5 text-xs sm:text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors" // Estilo e Cores Padronizadas
                  >
                    <CreditCard className="h-4 w-4 flex-shrink-0" />
                    {/* APENAS este span deve existir para o texto */}
                    <span className="hidden sm:inline">Cobrança</span>
                  </TabsTrigger>
                  {/* Notificações Trigger */}
                  <TabsTrigger
                    value="notificacoes"
                    className="flex flex-1 items-center justify-center gap-1.5 px-2 py-1.5 text-xs sm:text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors" // Estilo e Cores Padronizadas
                  >
                    <Bell className="h-4 w-4 flex-shrink-0" />
                    {/* APENAS este span deve existir para o texto */}
                    <span className="hidden sm:inline">Notificações</span>
                  </TabsTrigger>
                  {/* Segurança Trigger */}
                  <TabsTrigger
                    value="seguranca"
                    className="flex flex-1 items-center justify-center gap-1.5 px-2 py-1.5 text-xs sm:text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors" // Estilo e Cores Padronizadas
                  >
                    <Lock className="h-4 w-4 flex-shrink-0" />
                    {/* APENAS este span deve existir para o texto */}
                    <span className="hidden sm:inline">Segurança</span>
                  </TabsTrigger>
                </TabsList>

                {/* Conteúdo Aba: Perfil - COR CARD/INPUT/BOTÃO PADRONIZADA */}
                <TabsContent value="perfil" className="mt-6 space-y-6">
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Perfil da Empresa
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Atualize as informações e o perfil público da sua
                        empresa
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        {/* Logo e Upload */}
                        <div className="flex flex-col items-center space-y-2 w-full md:w-auto">
                          <Avatar className="h-24 w-24 border dark:border-zinc-700">
                            {" "}
                            {/* COR PADRONIZADA: Avatar Border */}
                            <AvatarImage
                              src={empresaData.logoSrc}
                              alt="Logo da Empresa"
                            />
                            <AvatarFallback className="text-2xl bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                              {" "}
                              {/* Fallback Mantido */}
                              {empresaData.initials}
                            </AvatarFallback>
                          </Avatar>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1 w-full dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                          >
                            <Upload className="h-4 w-4" />
                            <span>Alterar Logo</span>
                          </Button>
                        </div>
                        {/* Campos de Info */}
                        <div className="flex-1 space-y-4 w-full">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label
                                htmlFor="company-name"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Nome da Empresa
                              </Label>
                              <Input
                                id="company-name"
                                defaultValue={empresaData.name}
                                className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA: Input
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="industry"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Setor
                              </Label>
                              <Input
                                id="industry"
                                defaultValue={empresaData.industry}
                                className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA: Input
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label
                                htmlFor="company-size"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Tamanho da Empresa
                              </Label>
                              <Input
                                id="company-size"
                                defaultValue={empresaData.size}
                                className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA: Input
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="founded"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Fundada em
                              </Label>
                              <Input
                                id="founded"
                                defaultValue={empresaData.founded}
                                className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA: Input
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="website-empresa"
                              className="dark:text-gray-300" // COR TEXTO PADRÃO
                            >
                              Website
                            </Label>
                            <div className="flex">
                              <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700">
                                {" "}
                                {/* COR PADRONIZADA: Addon */}
                                <Globe className="h-4 w-4 text-muted-foreground dark:text-gray-400" />{" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                              </div>
                              <Input
                                id="website-empresa"
                                type="url"
                                defaultValue={empresaData.website}
                                className="rounded-l-none bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA: Input
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Descrição da Empresa */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="company-description"
                          className="dark:text-gray-300" // COR TEXTO PADRÃO
                        >
                          Descrição da Empresa
                        </Label>
                        <Textarea
                          id="company-description"
                          className="min-h-[120px] bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA: Textarea
                          defaultValue={empresaData.description}
                        />
                      </div>

                      {/* Localização */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="company-location"
                          className="dark:text-gray-300" // COR TEXTO PADRÃO
                        >
                          Localização da Sede
                        </Label>
                        <Input
                          id="company-location"
                          defaultValue={empresaData.location}
                          className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA: Input
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2 border-t dark:border-zinc-700 pt-6">
                      {" "}
                      {/* COR PADRONIZADA: border-t */}
                      <Button
                        variant="outline"
                        className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                      >
                        Cancelar
                      </Button>
                      {/* Botão Primário Azul Mantido */}
                      <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                        Salvar Alterações
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Card: Informações de Contato */}
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Informações de Contato
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Atualize os detalhes de contato da sua empresa
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="contact-email"
                            className="dark:text-gray-300" // COR TEXTO PADRÃO
                          >
                            Email de Contato
                          </Label>
                          <div className="flex">
                            <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700">
                              {" "}
                              {/* COR PADRONIZADA: Addon */}
                              <Mail className="h-4 w-4 text-muted-foreground dark:text-gray-400" />{" "}
                              {/* COR TEXTO MUTED PADRÃO */}
                            </div>
                            <Input
                              id="contact-email"
                              type="email"
                              defaultValue={empresaData.contactEmail}
                              className="rounded-l-none bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA: Input
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="contact-phone"
                            className="dark:text-gray-300" // COR TEXTO PADRÃO
                          >
                            Telefone de Contato
                          </Label>
                          <Input
                            id="contact-phone"
                            type="tel"
                            defaultValue={empresaData.contactPhone}
                            className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA: Input
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2 border-t dark:border-zinc-700 pt-6">
                      {" "}
                      {/* COR PADRONIZADA: border-t */}
                      <Button
                        variant="outline"
                        className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                      >
                        Cancelar
                      </Button>
                      {/* Botão Primário Azul Mantido */}
                      <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                        Salvar Alterações
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* Conteúdo Aba: Equipe - COR CARD/DIVIDER/BOTÃO PADRONIZADA */}
                <TabsContent value="equipe" className="mt-6 space-y-6">
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Membros da Equipe
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Gerencie sua equipe e suas permissões
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-end">
                          {/* Botão Primário Azul Mantido */}
                          <Button className="gap-1 bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                            <Users className="h-4 w-4" />
                            <span>Convidar Membro</span>
                          </Button>
                        </div>
                        {/* Lista de Membros */}
                        <div className="border rounded-md divide-y dark:border-zinc-700 dark:divide-zinc-700">
                          {" "}
                          {/* COR PADRONIZADA: Border/Divide */}
                          {teamMembers.map((member) => (
                            <div
                              key={member.id}
                              className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                            >
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <Avatar className="h-10 w-10 border dark:border-zinc-700">
                                  {" "}
                                  {/* COR PADRONIZADA: Avatar Border */}
                                  <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                    {" "}
                                    {/* Fallback Mantido */}
                                    {member.avatarFallback}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-medium text-gray-900 dark:text-white truncate">
                                    {" "}
                                    {/* COR TEXTO PADRÃO */}
                                    {member.name}
                                  </h3>
                                  <p className="text-sm text-muted-foreground dark:text-gray-400 truncate">
                                    {" "}
                                    {/* COR TEXTO MUTED PADRÃO */}
                                    {member.email}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0 mt-2 sm:mt-0">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  {" "}
                                  {/* COR TEXTO PADRÃO */}
                                  {member.role}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                                >
                                  Gerenciar
                                </Button>
                              </div>
                            </div>
                          ))}
                          {teamMembers.length === 0 && (
                            <div className="p-4 text-center text-sm text-muted-foreground dark:text-gray-500">
                              {" "}
                              {/* COR PLACEHOLDER PADRÃO */}
                              Nenhum membro na equipe ainda.
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Conteúdo Aba: Cobrança - COR CARD/INNER CARD/BOTÃO PADRONIZADA */}
                <TabsContent value="cobranca" className="mt-6 space-y-6">
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Plano de Assinatura
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Gerencie sua assinatura e informações de cobrança
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Detalhes do Plano Atual */}
                      <div className="p-4 border rounded-md bg-gray-50 dark:bg-zinc-800/50 dark:border-zinc-700">
                        {" "}
                        {/* COR PADRONIZADA: Inner Card */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              Plano Enterprise
                            </h3>
                            <p className="text-sm text-muted-foreground dark:text-gray-400">
                              {" "}
                              {/* COR TEXTO MUTED PADRÃO */}
                              R$ 299/mês, cobrado anualmente
                            </p>
                            <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              {/* ... Lista de Recursos ... */}
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-blue-400 flex-shrink-0"></div>{" "}
                                {/* Cor Mantida */}
                                <span>Publicações de vagas ilimitadas</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-blue-400 flex-shrink-0"></div>{" "}
                                {/* Cor Mantida */}
                                <span>Filtragem avançada de candidatos</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-blue-400 flex-shrink-0"></div>{" "}
                                {/* Cor Mantida */}
                                <span>Correspondência por IA</span>
                              </li>
                            </ul>
                          </div>
                          {/* Botão Primário Azul Mantido */}
                          <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200 w-full md:w-auto">
                            Gerenciar Assinatura
                          </Button>
                        </div>
                      </div>

                      {/* Método de Pagamento */}
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                          {" "}
                          {/* COR TEXTO PADRÃO */}
                          Método de Pagamento
                        </h3>
                        <div className="p-4 border rounded-md flex items-center justify-between dark:border-zinc-700 bg-white dark:bg-zinc-800/50">
                          {" "}
                          {/* COR PADRONIZADA: Inner Card */}
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-16 bg-gray-100 dark:bg-zinc-700 rounded-md flex items-center justify-center flex-shrink-0">
                              {" "}
                              {/* COR PADRONIZADA: Ícone BG */}
                              <CreditCard className="h-6 w-6 text-gray-600 dark:text-gray-400" />{" "}
                              {/* COR TEXTO MUTED PADRÃO */}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {" "}
                                {/* COR TEXTO PADRÃO */}
                                •••• •••• •••• 4242
                              </p>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Expira 12/2025
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                          >
                            Atualizar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card: Histórico de Cobrança */}
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Histórico de Cobrança
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Veja suas faturas recentes e histórico de pagamento
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border rounded-md divide-y dark:border-zinc-700 dark:divide-zinc-700">
                        {" "}
                        {/* COR PADRONIZADA: Border/Divide */}
                        {billingHistory.map((invoice) => (
                          <div
                            key={invoice.id}
                            className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                          >
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {" "}
                                {/* COR TEXTO PADRÃO */}
                                Fatura {invoice.number}
                              </p>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                {invoice.date}
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {" "}
                                {/* COR TEXTO PADRÃO */}
                                {invoice.amount}
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                              >
                                Download
                              </Button>
                            </div>
                          </div>
                        ))}
                        {billingHistory.length === 0 && (
                          <div className="p-4 text-center text-sm text-muted-foreground dark:text-gray-500">
                            {" "}
                            {/* COR PLACEHOLDER PADRÃO */}
                            Nenhum histórico de cobrança disponível.
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Conteúdo Aba: Notificações - COR CARD/DIVIDER/BOTÃO PADRONIZADA */}
                <TabsContent value="notificacoes" className="mt-6 space-y-6">
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Preferências de Notificação
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Gerencie como e quando você recebe notificações
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 divide-y dark:divide-zinc-700">
                      {" "}
                      {/* COR PADRONIZADA: Divide */}
                      {/* Seção: Notificações por Email */}
                      <div className="space-y-4 pt-6 first:pt-0">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {" "}
                          {/* COR TEXTO PADRÃO */}
                          Notificações por Email
                        </h3>
                        <div className="space-y-3">
                          {/* ... Switches ... */}
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="new-applications"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Novas Candidaturas
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Receber notificações quando candidatos se
                                aplicarem às suas vagas
                              </p>
                            </div>
                            <Switch
                              id="new-applications"
                              checked={notifications.newApplications}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("newApplications", checked)
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="messages-empresa"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Mensagens
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Receber notificações quando candidatos enviarem
                                mensagens
                              </p>
                            </div>
                            <Switch
                              id="messages-empresa"
                              checked={notifications.messages}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("messages", checked)
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="job-alerts-empresa"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Alertas de Vaga
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Receber notificações sobre status e expiração de
                                vagas
                              </p>
                            </div>
                            <Switch
                              id="job-alerts-empresa"
                              checked={notifications.jobAlerts}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("jobAlerts", checked)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* Seção: Notificações do Sistema */}
                      <div className="space-y-4 pt-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {" "}
                          {/* COR TEXTO PADRÃO */}
                          Notificações do Sistema
                        </h3>
                        <div className="space-y-3">
                          {/* ... Switches ... */}
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="billing-updates"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Atualizações de Cobrança
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Receber notificações sobre cobrança e alterações
                                na assinatura
                              </p>
                            </div>
                            <Switch
                              id="billing-updates"
                              checked={notifications.billingUpdates}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("billingUpdates", checked)
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="product-updates"
                                className="dark:text-gray-300" // COR TEXTO PADRÃO
                              >
                                Atualizações do Produto
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                {" "}
                                {/* COR TEXTO MUTED PADRÃO */}
                                Receber notificações sobre novos recursos e
                                melhorias
                              </p>
                            </div>
                            <Switch
                              id="product-updates"
                              checked={notifications.productUpdates}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("productUpdates", checked)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2 border-t dark:border-zinc-700 pt-6">
                      {" "}
                      {/* COR PADRONIZADA: border-t */}
                      <Button
                        variant="outline"
                        className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                      >
                        Cancelar
                      </Button>
                      {/* Botão Primário Azul Mantido */}
                      <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                        Salvar Alterações
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* Conteúdo Aba: Segurança - COR CARD/INPUT/BOTÃO PADRONIZADA */}
                <TabsContent value="seguranca" className="mt-6 space-y-6">
                  {/* Card: Senha */}
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Senha
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Atualize a senha da sua conta
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="current-password-empresa"
                          className="dark:text-gray-300" // COR TEXTO PADRÃO
                        >
                          Senha Atual
                        </Label>
                        <Input
                          id="current-password-empresa"
                          type="password"
                          className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA: Input
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="new-password-empresa"
                          className="dark:text-gray-300" // COR TEXTO PADRÃO
                        >
                          Nova Senha
                        </Label>
                        <Input
                          id="new-password-empresa"
                          type="password"
                          className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA: Input
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="confirm-password-empresa"
                          className="dark:text-gray-300" // COR TEXTO PADRÃO
                        >
                          Confirmar Nova Senha
                        </Label>
                        <Input
                          id="confirm-password-empresa"
                          type="password"
                          className="bg-white dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700" // COR PADRONIZADA: Input
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2 border-t dark:border-zinc-700 pt-6">
                      {" "}
                      {/* COR PADRONIZADA: border-t */}
                      <Button
                        variant="outline"
                        className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                      >
                        Cancelar
                      </Button>
                      {/* Botão Primário Azul Mantido */}
                      <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                        Atualizar Senha
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Card: Autenticação de Dois Fatores */}
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Autenticação de Dois Fatores
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Adicione uma camada extra de segurança à sua conta
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {" "}
                            {/* COR TEXTO PADRÃO */}
                            Autenticação de Dois Fatores (2FA)
                          </h3>
                          <p className="text-sm text-muted-foreground dark:text-gray-400">
                            {" "}
                            {/* COR TEXTO MUTED PADRÃO */}
                            Proteja sua conta com uma camada adicional de
                            segurança
                          </p>
                        </div>
                        {/* Botão Primário Azul Mantido */}
                        <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200">
                          Habilitar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card: Sessões Ativas */}
                  <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                    {" "}
                    {/* COR PADRONIZADA: Card */}
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {" "}
                        {/* COR TEXTO PADRÃO */}
                        Sessões
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {" "}
                        {/* COR TEXTO MUTED PADRÃO */}
                        Gerencie suas sessões ativas e dispositivos
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border rounded-md divide-y dark:border-zinc-700 dark:divide-zinc-700">
                        {" "}
                        {/* COR PADRONIZADA: Border/Divide */}
                        {/* Sessão Atual */}
                        <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              Chrome no MacOS
                            </p>
                            <p className="text-sm text-muted-foreground dark:text-gray-400">
                              {" "}
                              {/* COR TEXTO MUTED PADRÃO */}
                              São Paulo, SP • Sessão atual
                            </p>
                          </div>
                          {/* Botão Disabled Padronizado */}
                          <Button
                            variant="outline"
                            size="sm"
                            disabled
                            className="dark:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800" // COR PADRONIZADA: Botão Disabled
                          >
                            Atual
                          </Button>
                        </div>
                        {/* Outra Sessão */}
                        <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {" "}
                              {/* COR TEXTO PADRÃO */}
                              Safari no iPhone
                            </p>
                            <p className="text-sm text-muted-foreground dark:text-gray-400">
                              {" "}
                              {/* COR TEXTO MUTED PADRÃO */}
                              São Paulo, SP • Última ativa há 2 horas
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800" // COR PADRONIZADA: Botão Outline
                          >
                            Deslogar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            {/* ================================================================== */}
            {/* FIM DO CONTEÚDO ESPECÍFICO DA PÁGINA CONFIGURAÇÕES (EMPRESA)     */}
            {/* ================================================================== */}
          </main>
          {/* Rodapé */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
