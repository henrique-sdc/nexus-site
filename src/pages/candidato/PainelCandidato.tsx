import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  Edit,
  FileCheck,
  MessageSquare,
  Search,
  Star,
  Users,
} from "lucide-react";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Progress } from "src/components/ui/progress";
import { Badge } from "src/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Sheet, SheetContent } from "src/components/ui/sheet";
import { SidebarProvider } from "src/components/ui/sidebar";
import { cn } from "src/lib/utils";

import { DashboardNavbar } from "src/components/Dashboards/DashboardNavbar";
import { CandidatoSidebar } from "src/components/Dashboards/Candidatos/CandidatoSidebar";
import Footer from "src/components/Footer/Footer";

const CandidatoDashboard: React.FC = () => {
  // --- Estado ---
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  // --- Dados de Exemplo ---
  const userData = {
    name: "Ana Silva",
    title: "Engenheira de Software",
    initials: "JD",
    avatarSrc: "https://github.com/shadcn.png",
    messageCount: 3,
    notificationCount: 5,
  };

  // --- Handlers ---
  const toggleDesktopSidebar = () => setIsDesktopSidebarOpen((prev) => !prev);
  const openMobileSheet = () => setIsMobileSheetOpen(true);

  return (
    <SidebarProvider>
      {/* Container principal */}
      <div className="flex min-h-screen bg-gray-100/50 dark:bg-gray-950 dark:text-white">
        {/* --- Sidebar Desktop (Fixa/Recolhida) --- */}
        <div
          className={cn(
            "hidden lg:flex h-screen sticky top-0 transition-all duration-300 ease-in-out border-r dark:border-zinc-800",
            "bg-background dark:bg-gray-900", // Fundo explícito
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
            activePage="dashboard"
          />
        </div>
        {/* --- Sidebar Mobile (Sheet) --- */}
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetContent
            side="left"
            className={cn(
              "p-0 w-64 lg:hidden border-r dark:border-gray-800",
              "bg-white dark:bg-gray-900" // Fundo explícito
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
              activePage="dashboard"
            />
          </SheetContent>
        </Sheet>
        {/* --- Área de Conteúdo Principal --- */}
        {/* Adicionado 'min-w-0' para permitir que o container flex encolha corretamente em telas menores */}
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
          {/* Adicionado overflow-x-hidden para evitar scroll horizontal indesejado no <main> se algo vazar */}
          <main className="flex-1 p-4 md:p-6 grid grid-cols-1 gap-6 bg-gray-50/50 dark:bg-black overflow-x-hidden">
            {/* Cabeçalho do Conteúdo */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight dark:text-white">
                  Bem-vinda de volta, {userData.name.split(" ")[0]}!
                </h1>
                <p className="text-muted-foreground dark:text-gray-400">
                  Veja o que está acontecendo com sua busca por emprego.
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800"
                >
                  <Edit className="h-3.5 w-3.5" />
                  <span>Editar Perfil</span>
                </Button>
                <Button
                  size="sm"
                  className="h-8 bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                >
                  <Search className="h-3.5 w-3.5 mr-1" />
                  Encontrar Vagas
                </Button>
              </div>
            </div>

            {/* Card: Progresso do Perfil */}
            <Card className="dark:bg-zinc-900 dark:border-zinc-700 shadow-sm dark:shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="dark:text-white">
                  {" "}
                  Progresso do Perfil{" "}
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {" "}
                  Complete seu perfil para aumentar sua visibilidade.{" "}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium dark:text-white">
                      {" "}
                      Progresso Geral{" "}
                    </span>
                    <span className="text-sm font-medium dark:text-white">
                      {" "}
                      75%{" "}
                    </span>
                  </div>
                  <Progress
                    value={75}
                    className="h-2 bg-zinc-200 dark:bg-zinc-800 [&>*]:bg-purple-600 dark:[&>*]:bg-purple-500"
                  />
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                    {" "}
                    {/* Ajuste para empilhar em telas muito pequenas */}
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30 flex-shrink-0">
                        {" "}
                        <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400" />{" "}
                      </div>
                      <div>
                        {" "}
                        <p className="text-sm font-medium dark:text-white">
                          {" "}
                          Informações Básicas{" "}
                        </p>{" "}
                        <p className="text-xs text-muted-foreground dark:text-gray-400">
                          {" "}
                          Completo{" "}
                        </p>{" "}
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30 flex-shrink-0">
                        {" "}
                        <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400" />{" "}
                      </div>
                      <div>
                        {" "}
                        <p className="text-sm font-medium dark:text-white">
                          {" "}
                          Experiência Profissional{" "}
                        </p>{" "}
                        <p className="text-xs text-muted-foreground dark:text-gray-400">
                          {" "}
                          Completo{" "}
                        </p>{" "}
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center dark:bg-yellow-900/30 flex-shrink-0">
                        {" "}
                        <Clock className="h-3 w-3 text-yellow-600 dark:text-yellow-400" />{" "}
                      </div>
                      <div>
                        {" "}
                        <p className="text-sm font-medium dark:text-white">
                          {" "}
                          Avaliação de Habilidades{" "}
                        </p>{" "}
                        <p className="text-xs text-muted-foreground dark:text-gray-400">
                          {" "}
                          1 de 3 completados{" "}
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                {" "}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                >
                  {" "}
                  Completar Seu Perfil{" "}
                </Button>{" "}
              </CardFooter>
            </Card>

            {/* Grid para Avaliações e Vagas */}
            {/* Alterado para grid-cols-1 em telas pequenas e md:grid-cols-2 para melhor responsividade */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {/* Card: Status das Avaliações */}
              <Card className="dark:bg-zinc-900 dark:border-zinc-700 shadow-sm dark:shadow-none">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    {" "}
                    Status das Avaliações{" "}
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    {" "}
                    Complete as avaliações para maximizar suas chances.{" "}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Avaliação 1 */}
                    <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/10 rounded-md gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium dark:text-white">
                          {" "}
                          Avaliação de Lógica{" "}
                        </h3>
                        <p className="text-xs text-muted-foreground dark:text-gray-400">
                          {" "}
                          Completado em 15 de Março de 2025{" "}
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 flex-shrink-0">
                        {" "}
                        92%{" "}
                      </Badge>
                    </div>
                    {/* Avaliação 2 */}
                    <div className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/10 rounded-md gap-3">
                      <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium dark:text-white">
                          {" "}
                          Avaliação de Adequação Cultural{" "}
                        </h3>
                        <p className="text-xs text-muted-foreground dark:text-gray-400">
                          {" "}
                          Em progresso{" "}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 bg-white dark:bg-zinc-900 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs flex-shrink-0"
                      >
                        {" "}
                        Continuar{" "}
                      </Button>
                    </div>
                    {/* Avaliação 3 */}
                    <div className="flex items-center p-3 bg-background rounded-md border dark:border-zinc-700 gap-3">
                      <Brain className="h-5 w-5 text-muted-foreground dark:text-gray-400 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium dark:text-white">
                          {" "}
                          Avaliação de Habilidades Técnicas{" "}
                        </h3>
                        <p className="text-xs text-muted-foreground dark:text-gray-400">
                          {" "}
                          Não iniciado{" "}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 bg-purple-800 text-white hover:bg-purple-900 text-xs flex-shrink-0"
                      >
                        {" "}
                        Começar{" "}
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  {" "}
                  <Link
                    to="/dashboard/candidato/testes"
                    className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    {" "}
                    Ver todas as avaliações{" "}
                  </Link>{" "}
                </CardFooter>
              </Card>

              {/* Card: Vagas Compatíveis */}
              <Card className="dark:bg-zinc-900 dark:border-zinc-700 shadow-sm dark:shadow-none">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    {" "}
                    {/* Ajuste responsivo */}
                    <div>
                      <CardTitle className="dark:text-white">
                        {" "}
                        Vagas Compatíveis{" "}
                      </CardTitle>
                      <CardDescription className="dark:text-gray-300">
                        {" "}
                        Baseado no seu perfil e avaliações{" "}
                      </CardDescription>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 flex-shrink-0">
                      {" "}
                      12 Novas{" "}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Vaga 1 */}
                    <div className="flex items-start p-3 bg-background rounded-md border hover:border-purple-300 dark:hover:border-purple-700 transition-colors cursor-pointer dark:border-zinc-700 gap-3">
                      <Avatar className="h-8 w-8 flex-shrink-0 mt-1">
                        {" "}
                        <AvatarImage
                          src="/https://github.com/shadcn.png"
                          alt="TC"
                        />{" "}
                        <AvatarFallback>TC</AvatarFallback>{" "}
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        {" "}
                        {/* min-w-0 para permitir quebra de texto */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                          <h3 className="text-sm font-medium dark:text-white truncate">
                            {" "}
                            Desenvolvedor Frontend Sênior{" "}
                          </h3>
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 text-nowrap flex-shrink-0">
                            {" "}
                            95% Compatível{" "}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground dark:text-gray-400 truncate">
                          {" "}
                          TechCorp Inc. • San Francisco, CA (Remoto){" "}
                        </p>
                        <div className="flex gap-1.5 mt-1 flex-wrap">
                          {" "}
                          {/* flex-wrap para badges */}
                          <Badge
                            variant="outline"
                            className="text-xs h-5 px-1.5"
                          >
                            {" "}
                            React{" "}
                          </Badge>{" "}
                          <Badge
                            variant="outline"
                            className="text-xs h-5 px-1.5"
                          >
                            {" "}
                            TypeScript{" "}
                          </Badge>{" "}
                          <Badge
                            variant="outline"
                            className="text-xs h-5 px-1.5"
                          >
                            {" "}
                            +3{" "}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    {/* Vaga 2 */}
                    <div className="flex items-start p-3 bg-background rounded-md border hover:border-purple-300 dark:hover:border-purple-700 transition-colors cursor-pointer dark:border-zinc-700 gap-3">
                      <Avatar className="h-8 w-8 flex-shrink-0 mt-1">
                        {" "}
                        <AvatarImage
                          src="/https://github.com/shadcn.png"
                          alt="IL"
                        />{" "}
                        <AvatarFallback>IL</AvatarFallback>{" "}
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                          <h3 className="text-sm font-medium dark:text-white truncate">
                            {" "}
                            Engenheiro Full Stack{" "}
                          </h3>
                          <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 text-nowrap flex-shrink-0">
                            {" "}
                            88% Compatível{" "}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground dark:text-gray-400 truncate">
                          {" "}
                          InnovateLabs • Nova York, NY (Híbrido){" "}
                        </p>
                        <div className="flex gap-1.5 mt-1 flex-wrap">
                          <Badge
                            variant="outline"
                            className="text-xs h-5 px-1.5"
                          >
                            {" "}
                            Node.js{" "}
                          </Badge>{" "}
                          <Badge
                            variant="outline"
                            className="text-xs h-5 px-1.5"
                          >
                            {" "}
                            React{" "}
                          </Badge>{" "}
                          <Badge
                            variant="outline"
                            className="text-xs h-5 px-1.5"
                          >
                            {" "}
                            +4{" "}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    {/* Vaga 3 */}
                    <div className="flex items-start p-3 bg-background rounded-md border hover:border-purple-300 dark:hover:border-purple-700 transition-colors cursor-pointer dark:border-zinc-700 gap-3">
                      <Avatar className="h-8 w-8 flex-shrink-0 mt-1">
                        {" "}
                        <AvatarImage
                          src="/https://github.com/shadcn.png"
                          alt="FW"
                        />{" "}
                        <AvatarFallback>FW</AvatarFallback>{" "}
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                          <h3 className="text-sm font-medium dark:text-white truncate">
                            {" "}
                            Desenvolvedor UI/UX{" "}
                          </h3>
                          <Badge className="bg-violet-100 text-violet-800 hover:bg-violet-100 dark:bg-violet-900/30 dark:text-violet-400 text-nowrap flex-shrink-0">
                            {" "}
                            82% Compatível{" "}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground dark:text-gray-400 truncate">
                          {" "}
                          FutureWave • Austin, TX (Presencial){" "}
                        </p>
                        <div className="flex gap-1.5 mt-1 flex-wrap">
                          <Badge
                            variant="outline"
                            className="text-xs h-5 px-1.5"
                          >
                            {" "}
                            Figma{" "}
                          </Badge>{" "}
                          <Badge
                            variant="outline"
                            className="text-xs h-5 px-1.5"
                          >
                            {" "}
                            CSS{" "}
                          </Badge>{" "}
                          <Badge
                            variant="outline"
                            className="text-xs h-5 px-1.5"
                          >
                            {" "}
                            +2{" "}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  {" "}
                  {/* Ajuste responsivo */}
                  <Link
                    to="#"
                    className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    {" "}
                    Ver todas as combinações{" "}
                  </Link>
                  <Button
                    size="sm"
                    className="w-full bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200 sm:w-auto"
                  >
                    {" "}
                    Candidate-se Agora{" "}
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Card: Atividade Recente */}
            <Card className="dark:bg-zinc-900 dark:border-zinc-700 shadow-sm dark:shadow-none">
              <CardHeader>
                {" "}
                <CardTitle className="dark:text-white">
                  {" "}
                  Atividade Recente{" "}
                </CardTitle>{" "}
                <CardDescription className="dark:text-gray-300">
                  {" "}
                  Suas últimas interações e atualizações{" "}
                </CardDescription>{" "}
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-7 w-7 rounded-full bg-purple-100 flex items-center justify-center dark:bg-purple-900/30 flex-shrink-0">
                      {" "}
                      <Building2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />{" "}
                    </div>
                    <div className="min-w-0">
                      {" "}
                      <p className="text-sm dark:text-white truncate">
                        {" "}
                        <span className="font-medium">TechCorp Inc.</span>{" "}
                        visualizou seu perfil{" "}
                      </p>{" "}
                      <p className="text-xs text-muted-foreground dark:text-gray-400">
                        {" "}
                        2 horas atrás{" "}
                      </p>{" "}
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-7 w-7 rounded-full bg-indigo-100 flex items-center justify-center dark:bg-indigo-900/30 flex-shrink-0">
                      {" "}
                      <MessageSquare className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />{" "}
                    </div>
                    <div className="min-w-0">
                      {" "}
                      <p className="text-sm dark:text-white truncate">
                        {" "}
                        <span className="font-medium">
                          {" "}
                          Sarah da InnovateLabs{" "}
                        </span>{" "}
                        enviou uma mensagem{" "}
                      </p>{" "}
                      <p className="text-xs text-muted-foreground dark:text-gray-400">
                        {" "}
                        Ontem às 15:45{" "}
                      </p>{" "}
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-7 w-7 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30 flex-shrink-0">
                      {" "}
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />{" "}
                    </div>
                    <div className="min-w-0">
                      {" "}
                      <p className="text-sm dark:text-white truncate">
                        {" "}
                        Você completou a{" "}
                        <span className="font-medium">
                          Avaliação de Lógica
                        </span>{" "}
                      </p>{" "}
                      <p className="text-xs text-muted-foreground dark:text-gray-400">
                        {" "}
                        15 de Março de 2025{" "}
                      </p>{" "}
                    </div>
                  </div>
                  {/* Item 4 */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-7 w-7 rounded-full bg-violet-100 flex items-center justify-center dark:bg-violet-900/30 flex-shrink-0">
                      {" "}
                      <Star className="h-4 w-4 text-violet-600 dark:text-violet-400" />{" "}
                    </div>
                    <div className="min-w-0">
                      {" "}
                      <p className="text-sm dark:text-white truncate">
                        {" "}
                        Você salvou{" "}
                        <span className="font-medium">
                          {" "}
                          Dev Frontend na CloudTech{" "}
                        </span>{" "}
                      </p>{" "}
                      <p className="text-xs text-muted-foreground dark:text-gray-400">
                        {" "}
                        14 de Março de 2025{" "}
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                {" "}
                <Link
                  to="#"
                  className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  {" "}
                  Ver toda a atividade{" "}
                </Link>{" "}
              </CardFooter>
            </Card>

            {/* Card: Recursos Recomendados */}
            <Card className="dark:bg-zinc-900 dark:border-zinc-700 shadow-sm dark:shadow-none">
              <CardHeader>
                {" "}
                <CardTitle className="dark:text-white">
                  {" "}
                  Recursos Recomendados{" "}
                </CardTitle>{" "}
                <CardDescription className="dark:text-gray-300">
                  {" "}
                  Recursos personalizados para aprimorar suas habilidades.{" "}
                </CardDescription>{" "}
              </CardHeader>
              <CardContent>
                {/* Alterado para grid-cols-1 em telas pequenas e md:grid-cols-2 lg:grid-cols-3 */}
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {/* Recurso 1 */}
                  <div className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-md transition-all dark:border-zinc-700 dark:hover:border-purple-700/50 cursor-pointer">
                    <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all dark:bg-purple-800/20 dark:group-hover:bg-purple-800/40"></div>
                    <div className="p-5 relative z-10">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 flex-shrink-0">
                        {" "}
                        <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />{" "}
                      </div>
                      <h3 className="mb-1 text-sm font-semibold dark:text-white">
                        {" "}
                        Padrões Avançados React{" "}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3 dark:text-gray-400 line-clamp-2">
                        {" "}
                        Aprenda padrões avançados do React para melhorar suas
                        habilidades de dev frontend.{" "}
                      </p>{" "}
                      {/* line-clamp */}
                      <div className="flex items-center justify-between">
                        {" "}
                        <Badge
                          variant="outline"
                          className="text-xs dark:text-gray-300"
                        >
                          {" "}
                          15 Lições{" "}
                        </Badge>{" "}
                        <ChevronRight className="h-4 w-4 text-muted-foreground dark:text-gray-400 group-hover:translate-x-1 transition-transform" />{" "}
                      </div>
                    </div>
                  </div>
                  {/* Recurso 2 */}
                  <div className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-md transition-all dark:border-zinc-700 dark:hover:border-indigo-700/50 cursor-pointer">
                    <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all dark:bg-indigo-800/20 dark:group-hover:bg-indigo-800/40"></div>
                    <div className="p-5 relative z-10">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex-shrink-0">
                        {" "}
                        <FileCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />{" "}
                      </div>
                      <h3 className="mb-1 text-sm font-semibold dark:text-white">
                        {" "}
                        Preparação Entrevista Técnica{" "}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3 dark:text-gray-400 line-clamp-2">
                        {" "}
                        Pratique perguntas comuns de entrevistas de código e
                        desafios de design de sistemas.{" "}
                      </p>
                      <div className="flex items-center justify-between">
                        {" "}
                        <Badge
                          variant="outline"
                          className="text-xs dark:text-gray-300"
                        >
                          {" "}
                          8 Testes{" "}
                        </Badge>{" "}
                        <ChevronRight className="h-4 w-4 text-muted-foreground dark:text-gray-400 group-hover:translate-x-1 transition-transform" />{" "}
                      </div>
                    </div>
                  </div>
                  {/* Recurso 3 */}
                  <div className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-md transition-all dark:border-zinc-700 dark:hover:border-violet-700/50 cursor-pointer">
                    <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all dark:bg-violet-800/20 dark:group-hover:bg-violet-800/40"></div>
                    <div className="p-5 relative z-10">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 flex-shrink-0">
                        {" "}
                        <Users className="h-5 w-5 text-violet-600 dark:text-violet-400" />{" "}
                      </div>
                      <h3 className="mb-1 text-sm font-semibold dark:text-white">
                        {" "}
                        Estratégias Networking{" "}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3 dark:text-gray-400 line-clamp-2">
                        {" "}
                        Aprenda estratégias eficazes de networking para expandir
                        suas conexões profissionais.{" "}
                      </p>
                      <div className="flex items-center justify-between">
                        {" "}
                        <Badge
                          variant="outline"
                          className="text-xs dark:text-gray-300"
                        >
                          {" "}
                          5 Workshops{" "}
                        </Badge>{" "}
                        <ChevronRight className="h-4 w-4 text-muted-foreground dark:text-gray-400 group-hover:translate-x-1 transition-transform" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <Link
                  to="#"
                  className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  {" "}
                  Ver todos os recursos{" "}
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  {" "}
                  Avaliação de Habilidade{" "}
                </Button>
              </CardFooter>
            </Card>
          </main>
          {/* Rodapé */}
          <Footer />
        </div>{" "}
        {/* Fim da área de conteúdo principal */}
      </div>{" "}
      {/* Fim do container flex principal */}
    </SidebarProvider>
  );
};

export default CandidatoDashboard;
