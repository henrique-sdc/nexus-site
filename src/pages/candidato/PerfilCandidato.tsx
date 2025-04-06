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
import { Label } from "src/components/ui/label";
import { Textarea } from "src/components/ui/textarea";
import { Badge } from "src/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import {
  Building2,
  Calendar,
  Edit,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Plus,
  Trash2,
  Upload,
  User,
  Save, // <--- Importado ícone de Salvar (opcional)
} from "lucide-react";
import Footer from "src/components/Footer/Footer";

// Nome do componente ajustado para corresponder ao nome do arquivo geralmente
const PerfilCandidatoPage: React.FC = () => {
  // --- Estado para Controle da Sidebar (Mantido) ---
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  // --- Handlers para Sidebar/Sheet (Mantidos) ---
  const toggleDesktopSidebar = () => setIsDesktopSidebarOpen((prev) => !prev);
  const openMobileSheet = () => setIsMobileSheetOpen(true);
  const navigateTo = (page: string) => {
    console.log("Navegar para (placeholder):", page);
    setIsMobileSheetOpen(false);
  };

  // --- Dados de Exemplo do Usuário (Mantidos) ---
  const userData = {
    name: "Ana Silva",
    title: "Engenheira de Software Sênior",
    initials: "AS",
    avatarSrc: "https://github.com/shadcn.png",
    messageCount: 3,
    notificationCount: 5,
    firstName: "Ana",
    lastName: "Silva",
    email: "ana.silva@exemplo.com",
    phone: "(11) 98765-4321",
    location: "São Paulo, SP",
    professionalTitle: "Engenheira de Software Sênior",
    summary:
      "Engenheira de software com mais de 7 anos de experiência em desenvolvimento full-stack. Especializada em React, TypeScript e Node.js com foco na construção de aplicações web escaláveis. Apaixonada por código limpo, otimização de performance e criação de experiências de usuário excepcionais.",
    avatarFallback: "AS",
    experiences: [
      {
        id: 1,
        title: "Engenheira de Software Sênior",
        company: "TechCorp Ltda.",
        location: "São Paulo, SP (Remoto)",
        startDate: "Jan 2022",
        endDate: "Atual",
        description:
          "Liderei o desenvolvimento de uma aplicação web baseada em React, melhorando a performance em 40%. Colaborei com equipes multifuncionais para implementar novas funcionalidades e corrigir bugs.",
        skills: ["React", "TypeScript", "Node.js", "AWS"],
        isCurrent: true,
      },
      {
        id: 2,
        title: "Desenvolvedora de Software",
        company: "InovaLabs",
        location: "Rio de Janeiro, RJ",
        startDate: "Mar 2019",
        endDate: "Dez 2021",
        description:
          "Desenvolvi e mantive aplicações web usando React e Node.js. Implementei designs responsivos e melhorei a performance das aplicações.",
        skills: ["JavaScript", "React", "CSS", "MongoDB"],
        isCurrent: false,
      },
    ],
    education: [
      {
        id: 1,
        degree: "Mestrado em Ciência da Computação",
        institution: "Universidade de São Paulo (USP)",
        startDate: "2017",
        endDate: "2019",
        gpa: "3.8/4.0",
        description:
          'Especialização em Inteligência Artificial e Machine Learning. Tese sobre "Redes Neurais para Processamento de Linguagem Natural."',
      },
      {
        id: 2,
        degree: "Bacharelado em Engenharia da Computação",
        institution: "Universidade Estadual de Campinas (UNICAMP)",
        startDate: "2013",
        endDate: "2017",
        gpa: "3.7/4.0",
        description:
          "Lista do Reitor em todos os semestres. Participei de competições de programação ACM e liderei o Clube de Desenvolvimento Web.",
      },
    ],
    technicalSkills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "HTML/CSS",
      "GraphQL",
      "AWS",
      "Git",
      "PostgreSQL",
      "Tailwind",
    ],
    softSkills: [
      "Comunicação",
      "Resolução de Problemas",
      "Trabalho em Equipe",
      "Liderança",
      "Gerenciamento de Tempo",
    ],
    resume: { fileName: "Ana_Silva_CV.pdf", uploadDate: "10 de Março de 2025" },
  };

  // Handler para o botão Salvar (placeholder)
  const handleSaveChanges = () => {
    console.log("Salvando alterações...");
    // Aqui você implementaria a lógica para enviar os dados atualizados para a API
    // Ex: updateProfileData(formData);
  };

  return (
    <SidebarProvider>
      {/* Container principal Flex (Mantido) */}
      <div className="flex min-h-screen bg-gray-100/50 dark:bg-black dark:text-white">
        {/* --- Sidebar Desktop (Mantido) --- */}
        <div
          className={cn(
            "hidden lg:flex h-screen sticky top-0 transition-all duration-300 ease-in-out border-r dark:border-zinc-700",
            "bg-background dark:bg-zinc-900",
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
            activePage="profile"
          />
        </div>
        {/* --- Sidebar Mobile (Sheet - Mantido) --- */}
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetContent
            side="left"
            className={cn(
              "p-0 w-64 lg:hidden border-r dark:border-zinc-700",
              "bg-white dark:bg-zinc-900"
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
              activePage="profile"
            />
          </SheetContent>
        </Sheet>
        {/* --- Área de Conteúdo Principal (Mantido) --- */}
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
          {/* Conteúdo Principal (Main) */}
          <main className="flex-1 p-4 md:p-6 grid gap-6 bg-gray-50/50 dark:bg-zinc-900/60 overflow-x-hidden">
            {/* Cabeçalho do Conteúdo do Perfil */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Meu Perfil
                </h1>
                <p className="text-muted-foreground dark:text-gray-400">
                  Gerencie suas informações pessoais e currículo
                </p>
              </div>
              {/* <<< BOTÃO EDITAR REMOVIDO DAQUI >>> */}
            </div>

            {/* --- Seção: Informações Pessoais --- */}
            {/* O conteúdo desta seção permanece o mesmo */}
            <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border-zinc-700">
              {/* ... CardHeader e CardContent inalterados ... */}
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  Informações Pessoais
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Suas informações básicas visíveis para as empresas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Avatar */}
                  <div className="flex flex-col items-center space-y-2 w-full md:w-auto">
                    <Avatar className="h-24 w-24 border dark:border-zinc-700">
                      <AvatarImage
                        src={userData.avatarSrc}
                        alt={`${userData.firstName} ${userData.lastName}`}
                      />
                      <AvatarFallback className="text-2xl bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                        {userData.avatarFallback}
                      </AvatarFallback>
                    </Avatar>
                    {/* Botão de upload */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 w-full dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-700"
                    >
                      <Upload className="h-4 w-4" />
                      <span>Alterar Foto</span>
                    </Button>
                  </div>
                  {/* Campos de Informação */}
                  <div className="flex-1 space-y-4 w-full">
                    {/* Nome Completo */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="first-name"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Nome Completo
                      </Label>
                      <Input
                        id="first-name"
                        defaultValue={
                          userData.firstName + " " + userData.lastName
                        } // Combinei nome e sobrenome aqui
                        className="bg-gray-100/50 dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700"
                      />
                    </div>
                    {/* Email / Telefone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          E-mail
                        </Label>
                        <div className="flex">
                          <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700">
                            <Mail className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                          </div>
                          <Input
                            id="email"
                            type="email"
                            defaultValue={userData.email}
                            className="rounded-l-none bg-gray-100/50 dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Telefone
                        </Label>
                        <div className="flex">
                          <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700">
                            <Phone className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                          </div>
                          <Input
                            id="phone"
                            type="tel"
                            defaultValue={userData.phone}
                            className="rounded-l-none bg-gray-100/50 dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Localização */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="location"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Localização
                      </Label>
                      <div className="flex">
                        <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700">
                          <MapPin className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                        </div>
                        <Input
                          id="location"
                          defaultValue={userData.location}
                          className="rounded-l-none bg-gray-100/50 dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Título Profissional */}
                <div className="space-y-2">
                  <Label
                    htmlFor="professional-title"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Título Profissional
                  </Label>
                  <Input
                    id="professional-title"
                    defaultValue={userData.professionalTitle}
                    className="bg-gray-100/50 dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700"
                  />
                </div>
                {/* Resumo Profissional */}
                <div className="space-y-2">
                  <Label
                    htmlFor="summary"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Resumo Profissional
                  </Label>
                  <Textarea
                    id="summary"
                    className="min-h-[120px] bg-gray-100/50 dark:bg-zinc-900 dark:text-gray-300 dark:border-zinc-700"
                    defaultValue={userData.summary}
                  />
                </div>
              </CardContent>
              {/* Removido CardFooter daqui se houver, ou mantido se tiver outras ações */}
            </Card>

            {/* --- Seção: Experiência Profissional --- */}
            {/* O conteúdo desta seção permanece o mesmo */}
            <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
              {/* ... CardHeader e CardContent inalterados ... */}
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    Experiência Profissional
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Seu histórico profissional
                  </CardDescription>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1 dark:text-white hover:bg-zinc-100 dark:border-zinc-600 hover:dark:bg-zinc-800"
                >
                  <Plus className="h-4 w-4" />
                  Adicionar Experiência
                </Button>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                {userData.experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="border rounded-lg p-4 bg-gray-50 dark:bg-zinc-900 dark:border-zinc-600 transition-shadow hover:shadow-md dark:hover:border-zinc-500"
                  >
                    {/* Conteúdo do item de experiência */}
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                      <div>
                        <h3 className="font-medium text-base text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                          <p className="text-sm text-muted-foreground dark:text-gray-400">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      {exp.isCurrent && (
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 mt-1 sm:mt-0"
                        >
                          Atual
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="font-normal dark:border-zinc-500 dark:text-gray-400"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-end mt-3">
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 gap-1 text-zinc-600 hover:bg-zinc-200/70 dark:text-gray-400 hover:dark:bg-zinc-700 dark:hover:text-gray-100"
                        >
                          <Edit className="h-3.5 w-3.5" /> <span>Editar</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 gap-1 text-red-600 hover:bg-red-100 dark:text-red-500 hover:dark:bg-red-900/20 dark:hover:text-red-400"
                        >
                          <Trash2 className="h-3.5 w-3.5" />{" "}
                          <span>Excluir</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
              {/* Removido CardFooter daqui se houver */}
            </Card>

            {/* --- Seção: Formação Acadêmica --- */}
            {/* O conteúdo desta seção permanece o mesmo */}
            <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
              {/* ... CardHeader e CardContent inalterados ... */}
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    Formação Acadêmica
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Sua formação educacional
                  </CardDescription>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                >
                  <Plus className="h-4 w-4" /> Adicionar Formação
                </Button>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                {userData.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="border rounded-lg p-4 bg-gray-50 dark:bg-zinc-900 dark:border-zinc-600 transition-shadow hover:shadow-md dark:hover:border-zinc-500"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                      <div>
                        <h3 className="font-medium text-base text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <GraduationCap className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                          <p className="text-sm text-muted-foreground dark:text-gray-400">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </div>
                      {edu.gpa && (
                        <>
                          <span className="hidden sm:inline">•</span>
                          <span className="text-sm">GPA: {edu.gpa}</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {edu.description}
                    </p>
                    <div className="flex justify-end mt-3">
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 gap-1 text-zinc-600 hover:bg-zinc-200/70 dark:text-gray-400 hover:dark:bg-zinc-700 dark:hover:text-gray-100"
                        >
                          <Edit className="h-3.5 w-3.5" /> <span>Editar</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 gap-1 text-red-600 hover:bg-red-100 dark:text-red-500 hover:dark:bg-red-900/20 dark:hover:text-red-400"
                        >
                          <Trash2 className="h-3.5 w-3.5" />{" "}
                          <span>Excluir</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
              {/* Removido CardFooter daqui se houver */}
            </Card>

            {/* --- Seção: Habilidades --- */}
            {/* O conteúdo desta seção permanece o mesmo */}
            <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
              {/* ... CardHeader e CardContent inalterados ... */}
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    Habilidades
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Suas habilidades técnicas e profissionais
                  </CardDescription>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1 dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                >
                  <Plus className="h-4 w-4" /> Adicionar Habilidade
                </Button>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Habilidades Técnicas
                    </Label>
                    <div className="flex flex-wrap gap-2 p-3 border rounded-md bg-gray-50 dark:bg-zinc-900 dark:border-zinc-600">
                      {userData.technicalSkills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="default"
                          className="px-3 py-1 h-auto text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Competências Comportamentais
                    </Label>
                    <div className="flex flex-wrap gap-2 p-3 border rounded-md bg-gray-50 dark:bg-zinc-900 dark:border-zinc-600">
                      {userData.softSkills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 h-auto text-sm font-medium bg-teal-100 text-teal-800 hover:bg-teal-200 dark:bg-teal-900/40 dark:text-teal-300 dark:hover:bg-teal-900/60"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              {/* Removido CardFooter daqui se houver */}
            </Card>

            {/* --- Seção: Currículo/CV --- */}
            <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  Currículo/CV
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Seu currículo ou CV carregado
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Conteúdo inalterado */}
                <div className="border rounded-md p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 dark:bg-zinc-900 dark:border-zinc-600">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-medium text-sm text-gray-900 dark:text-white truncate">
                        {userData.resume.fileName}
                      </p>
                      <p className="text-xs text-muted-foreground dark:text-gray-400">
                        Carregado em {userData.resume.uploadDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto justify-end sm:justify-start">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 sm:flex-none dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-700"
                    >
                      Visualizar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 flex-1 sm:flex-none dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-700"
                    >
                      <Upload className="h-4 w-4" /> <span>Atualizar</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end border-t dark:border-zinc-700 pt-6">
              <Button
                className="gap-1 text-white bg-purple-800 hover:bg-purple-900 transition-all duration-200"
                onClick={handleSaveChanges} // Adiciona o handler de clique
              >
                <Save className="h-4 w-4" /> {/* Ícone Salvar opcional */}
                <span>Salvar Alterações</span>
              </Button>
            </div>

            {/* ================================================================== */}
            {/* FIM DO CONTEÚDO ESPECÍFICO DA PÁGINA DE PERFIL                     */}
            {/* ================================================================== */}
          </main>
          {/* Rodapé */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default PerfilCandidatoPage; // Export nomeado (ajustado)
