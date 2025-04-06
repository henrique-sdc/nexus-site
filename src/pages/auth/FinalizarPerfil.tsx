import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "src/components/ui/button";
import { cn } from "src/lib/utils";
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
import { Textarea } from "src/components/ui/textarea";
import { Progress } from "src/components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Plus,
  Upload,
} from "lucide-react";
import { Badge } from "src/components/ui/badge";

// Definindo a ordem das abas para navegação
const tabOrder = ["basic", "resume", "experience", "education", "skills"];

const ProfileCompletion: React.FC = () => {
  // --- Estado ---
  const [activeTab, setActiveTab] = useState<string>(tabOrder[0]);

  // Hook para navegação programática
  const navigate = useNavigate();

  // --- Cálculos Derivados do Estado ---
  const currentTabIndex = tabOrder.indexOf(activeTab);
  const completedSections = currentTabIndex; // Seções completas são as *antes* da atual
  const totalSections = tabOrder.length;
  const progressPercentage = Math.round(
    (completedSections / totalSections) * 100
  );

  // Verifica se uma aba específica foi completada
  const isTabCompleted = (tabValue: string) => {
    return tabOrder.indexOf(tabValue) < currentTabIndex;
  };
  // Verifica se a aba é a atualmente ativa
  const isTabActive = (tabValue: string) => {
    return tabValue === activeTab;
  };

  // --- Handlers ---
  const handleNext = () => {
    if (currentTabIndex < totalSections - 1) {
      const nextTab = tabOrder[currentTabIndex + 1];
      setActiveTab(nextTab);
    } else {
      console.log(
        "Perfil completo! Submetendo e navegando para o dashboard..."
      );
      // ADICIONE A LÓGICA DE SUBMISSÃO DOS DADOS AQUI
      navigate("/dashboard/candidato");
    }
  };

  const handlePrevious = () => {
    if (currentTabIndex > 0) {
      const previousTab = tabOrder[currentTabIndex - 1];
      setActiveTab(previousTab);
    }
  };

  const handleSkip = () => {
    console.log("Pulando preenchimento...");
    navigate("/dashboard/candidato");
  };

  const handleTabChange = (value: string) => {
    // Permite navegar para qualquer aba clicada (mais flexível)
    setActiveTab(value);
  };

  return (
    // Container principal: Fundo gradiente escuro (inspirado no Register)
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-black dark:to-gray-900 py-8 dark:text-white">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Cabeçalho: Títulos e descrições com cores dark mode */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">
            Complete Seu Perfil
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto dark:text-gray-300">
            Ajude-nos a encontrar as oportunidades perfeitas para você,
            fornecendo mais informações sobre suas habilidades e experiência.
            Você sempre pode voltar e completar isso mais tarde.
          </p>
        </div>

        {/* Barra de Progresso: Textos com cores dark mode */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Progresso do Perfil</span>
              <span className="text-sm text-muted-foreground dark:text-gray-400">
                {completedSections} de {totalSections} seções preenchidas
              </span>
            </div>
            <span className="text-sm font-medium">{progressPercentage}%</span>
          </div>
          {/* Progress: Estilo padrão ShadCN deve funcionar bem com dark mode */}
          <Progress
            value={progressPercentage}
            className="h-2 bg-zinc-200 dark:bg-zinc-800 [&>*]:bg-purple-600 dark:[&>*]:bg-purple-500"
          />
        </div>

        {/* Sistema de Abas */}
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          {/* Container principal para Abas e botão Pular */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            {/* Container Visual das Abas: w-full (padrão), sm:w-auto (desktop) */}
            <div className="w-full sm:w-auto bg-gray-200/50 dark:bg-gray-800/60 p-1 rounded-lg">
              {/* Lista de Abas: flex, w-full (para preencher container), gap-1 */}
              <TabsList className="flex w-full gap-1 dark:bg-transparent">
                {tabOrder.map((tabValue) => (
                  <TabsTrigger
                    key={tabValue}
                    value={tabValue}
                    // Estilo base: flex-1, centralizado. Padding/Gap responsivo
                    className={cn(
                      `flex flex-1 items-center justify-center rounded-md transition-colors duration-200 ease-in-out`,
                      `gap-1 px-2 py-1.5 pl-0.5`, // Padding/Gap base (menor)
                      `text-xs sm:text-sm sm:px-3 sm:gap-1.5`, // Aumenta padding/gap e texto em SM+
                      isTabActive(tabValue) // Estilos Ativo/Inativo
                        ? "bg-purple-300/40 text-gray-900 dark:bg-purple-900/50 dark:text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                    )}
                  >
                    {/* Ícone da aba */}
                    {isTabCompleted(tabValue) ? (
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400" />
                    ) : (
                      <Clock
                        className={`h-4 w-4 flex-shrink-0 ${
                          isTabActive(tabValue)
                            ? "text-purple-600 dark:text-purple-400"
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      />
                    )}
                    {/* Texto da Aba (Mobile) */}
                    <span className="sm:hidden capitalize">
                      {
                        {
                          basic: "Info",
                          resume: "CV",
                          experience: "Exp",
                          education: "Edu",
                          skills: "Skills",
                        }[tabValue]
                      }
                    </span>
                    {/* Texto da Aba (Desktop) */}
                    <span className="hidden sm:inline capitalize">
                      {
                        {
                          basic: "Básicas",
                          resume: "Currículo",
                          experience: "Experiência",
                          education: "Educação",
                          skills: "Habilidades",
                        }[tabValue]
                      }
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Botão Pular: w-full (padrão), sm:w-auto (desktop) */}
            <Button
              variant="ghost"
              onClick={handleSkip}
              className="w-full sm:w-auto flex-shrink-0 hover:bg-gray-200/50 dark:hover:bg-gray-700/50" // Adicionado flex-shrink-0 por segurança
            >
              Pular por enquanto
            </Button>
          </div>

          {/* --- Conteúdo da Aba: Informações Básicas --- */}
          <TabsContent value="basic">
            {/* Card: Fundo escuro sutil, borda temática */}
            <Card className="border-purple-200/50 dark:border-purple-800/50 shadow-sm bg-white dark:bg-gray-800/40">
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Suas informações básicas foram adicionadas no cadastro. Você
                  pode revisá-las e atualizá-las aqui.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
                  {/* Labels: Cor clara no dark mode */}
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="dark:text-gray-300">
                      Nome Completo
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="Digite seu nome"
                      defaultValue="Jane Santos da Silva"
                      readOnly
                      className="bg-gray-100 text-gray-500 border-gray-300 placeholder-gray-400 cursor-not-allowed dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600 dark:placeholder-gray-500"
                    />
                  </div>
                  {/* <div className="space-y-2">
                      <Label htmlFor="last-name" className="dark:text-gray-300">
                        Sobrenome
                      </Label>
                      <Input
                        id="last-name"
                        placeholder="Digite seu sobrenome"
                        defaultValue="Doe"
                        className="dark:placeholder-gray-500"
                      />
                    </div> */}
                  {/* </div> */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="dark:text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu endereço de email"
                      defaultValue="jane.doe@example.com"
                      readOnly
                      className="bg-gray-100 text-gray-500 border-gray-300 placeholder-gray-400 cursor-not-allowed dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600 dark:placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf" className="dark:text-gray-300">
                      CPF
                    </Label>
                    <Input
                      id="cpf"
                      placeholder="Digite seu CPF"
                      defaultValue="385.089.123-45"
                      readOnly
                      className="bg-gray-100 text-gray-500 border-gray-300 placeholder-gray-400 cursor-not-allowed dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600 dark:placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="dark:text-gray-300">
                      Número de Telefone
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Digite seu telefone"
                      defaultValue="(55) 91234-5678"
                      className="dark:placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="dark:text-gray-300">
                      Localização
                    </Label>
                    <Input
                      id="location"
                      placeholder="Cidade, Estado, País"
                      defaultValue="São Paulo, SP, Brasil"
                      className="dark:placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300">
                      Título Profissional
                    </Label>
                    <Input
                      placeholder="Ex: Engenheiro(a) de Software Sênior"
                      defaultValue="Engenheiro(a) de Software"
                      className="dark:placeholder-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="dark:text-gray-300">
                    Resumo Profissional
                  </Label>
                  {/* Textarea: placeholder escuro */}
                  <Textarea
                    placeholder="Descreva brevemente sua trajetória profissional e objetivos de carreira"
                    className="min-h-[100px] dark:placeholder-gray-500"
                    defaultValue="Engenheira de software experiente..."
                  />
                </div>
                <div className="space-y-2">
                  <Label className="dark:text-gray-300">Perfis Sociais</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="URL do LinkedIn"
                      defaultValue="https://linkedin.com/in/janedoe"
                      className="dark:placeholder-gray-500"
                    />
                    <Input
                      placeholder="URL do GitHub (opcional)"
                      defaultValue="https://github.com/janedoe"
                      className="dark:placeholder-gray-500"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                {/* Botão primário: Estilo dark mode */}
                <Button
                  onClick={handleNext}
                  className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 text-white"
                >
                  Próximo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* --- Conteúdo da Aba: Upload de Currículo --- */}
          <TabsContent value="resume">
            <Card className="border-purple-200/50 dark:border-purple-800/50 shadow-sm bg-white dark:bg-gray-800/40">
              <CardHeader>
                <CardTitle>Upload de Currículo/CV</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Faça o upload do seu currículo ou CV...
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="dark:text-gray-300">Currículo/CV</Label>
                  {/* Área de Upload: Cores dark mode ajustadas */}
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="resume-upload"
                      className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-10 h-10 mb-3 text-gray-400 dark:text-gray-500" />
                        <p className="mb-2 text-xs sm:text-sm text-center text-gray-500 dark:text-gray-400 px-2">
                          <span className="font-semibold">
                            Clique para fazer upload
                          </span>{" "}
                          ou arraste e solte
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                          PDF, DOCX (MAX. 5MB)
                        </p>
                        {/* Botão interno de seleção */}
                        <Button
                          size="sm"
                          type="button"
                          variant="outline"
                          className="dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                        >
                          Selecionar Arquivo
                        </Button>
                      </div>
                      <Input
                        id="resume-upload"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="dark:text-gray-300">
                      Ou preencha manualmente
                    </Label>
                    <span className="text-xs text-muted-foreground dark:text-gray-400">
                      Você também pode inserir suas informações...
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {/* Botão Outline: Estilo dark mode */}
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                {/* Botão primário: Estilo dark mode */}
                <Button
                  onClick={handleNext}
                  className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 text-white"
                >
                  Próximo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* --- Conteúdo da Aba: Experiência Profissional --- */}
          <TabsContent value="experience">
            <Card className="border-purple-200/50 dark:border-purple-800/50 shadow-sm bg-white dark:bg-gray-800/40">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
                <div>
                  <CardTitle>Experiência Profissional</CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Adicione sua experiência profissional...
                  </CardDescription>
                </div>
                {/* Botão Add: Outline com cores dark mode */}
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1 w-full sm:w-auto dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  <Plus className="h-4 w-4" />
                  Adicionar Experiência
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {/* Item Experiência: Fundo, borda e textos escuros */}
                  <div className="border rounded-lg p-4 bg-white dark:bg-gray-700/60 dark:border-gray-600/80">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                      <div>
                        <h3 className="font-medium">
                          Engenheiro(a) de Software Sênior
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          TechCorp Inc.
                        </p>
                      </div>
                      {/* Badge: Estilo padrão ShadCN */}
                      <div className="text-white bg-purple-600 rounded-full pb-0.5">
                        <Badge className="whitespace-nowrap">Atual</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-2 gap-y-1 mb-3 text-sm text-muted-foreground dark:text-white">
                      <span>Jan 2022 - Presente</span>
                      <span className="hidden sm:inline text-xs">•</span>
                      <span>São Francisco, CA (Remoto)</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 dark:text-gray-300">
                      Liderei o desenvolvimento...
                    </p>
                    {/* Badges Outline: Cores dark mode */}
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        React
                      </Badge>
                      <Badge
                        variant="outline"
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        TypeScript
                      </Badge>
                      <Badge
                        variant="outline"
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        Node.js
                      </Badge>
                      <Badge
                        variant="outline"
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        AWS
                      </Badge>
                    </div>
                    {/* Botão Editar: Ghost com hover dark */}
                    <div className="flex justify-end mt-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 dark:hover:bg-gray-600/50"
                      >
                        Editar
                      </Button>
                    </div>
                  </div>
                  {/* Outro Item Experiência (Aplicar mesmos estilos dark) */}
                  <div className="border rounded-lg p-4 bg-white dark:bg-gray-700/60 dark:border-gray-600/80">
                    {/* ... conteúdo ... */}
                    <p className="text-sm text-muted-foreground mb-3 dark:text-gray-300">
                      Desenvolvi e mantive aplicações web...
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        JavaScript
                      </Badge>
                      <Badge
                        variant="outline"
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        React
                      </Badge>
                      <Badge
                        variant="outline"
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        CSS
                      </Badge>
                      <Badge
                        variant="outline"
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        MongoDB
                      </Badge>
                    </div>
                    <div className="flex justify-end mt-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 dark:hover:bg-gray-600/50"
                      >
                        Editar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 text-white"
                >
                  Próximo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* --- Conteúdo da Aba: Educação --- */}
          <TabsContent value="education">
            <Card className="border-purple-200/50 dark:border-purple-800/50 shadow-sm bg-white dark:bg-gray-800/40">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
                <div>
                  <CardTitle>Educação</CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Adicione sua formação acadêmica...
                  </CardDescription>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1 w-full sm:w-auto dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  <Plus className="h-4 w-4" />
                  Adicionar Formação
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {/* Item Educação: Fundo, borda e textos escuros */}
                  <div className="border rounded-lg p-4 bg-white dark:bg-gray-700/60 dark:border-gray-600/80">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium">
                          Mestrado em Ciência da Computação
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Universidade de Stanford
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-2 gap-y-1 mb-3 text-sm text-muted-foreground dark:text-white">
                      <span>2017 - 2019</span>
                      <span className="hidden sm:inline text-xs">•</span>
                      <span>Média: 3.8/4.0</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 dark:text-gray-300">
                      Especialização em Inteligência Artificial...
                    </p>
                    <div className="flex justify-end mt-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 dark:hover:bg-gray-600/50"
                      >
                        Editar
                      </Button>
                    </div>
                  </div>
                  {/* Outro Item Educação (Aplicar mesmos estilos dark) */}
                  <div className="border rounded-lg p-4 bg-white dark:bg-gray-700/60 dark:border-gray-600/80">
                    {/* ... conteúdo ... */}
                    <p className="text-sm text-muted-foreground mb-3 dark:text-gray-300">
                      Lista do Reitor em todos os semestres...
                    </p>
                    <div className="flex justify-end mt-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 dark:hover:bg-gray-600/50"
                      >
                        Editar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 text-white"
                >
                  Próximo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* --- Conteúdo da Aba: Habilidades e Preferências --- */}
          <TabsContent value="skills">
            <Card className="border-purple-200/50 dark:border-purple-800/50 shadow-sm bg-white dark:bg-gray-800/40">
              <CardHeader>
                <CardTitle>Habilidades & Preferências</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Adicione suas habilidades e preferências...
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {/* Container Skills: Fundo, borda dark */}
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300">
                      Habilidades Técnicas (Skills)
                    </Label>
                    <div className="flex flex-wrap gap-2 p-3 border rounded-md bg-white dark:bg-gray-700/60 dark:border-gray-600/80">
                      {/* Badges Primários: Estilo padrão ShadCN */}
                      <Badge className="px-3 py-1 h-7 text-white bg-purple-600 rounded-full">
                        React
                      </Badge>
                      <Badge className="px-3 py-1 h-7 text-white bg-purple-600 rounded-full">
                        TypeScript
                      </Badge>
                      {/* ... outros badges ... */}
                      {/* Botão Add Skill: Outline dark */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-3 py-1 h-7 gap-1 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        <Plus className="h-3 w-3" />
                        Adicionar Skill
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300">
                      Habilidades Interpessoais (Soft Skills)
                    </Label>
                    <div className="flex flex-wrap gap-2 p-3 border rounded-md bg-white dark:bg-gray-700/60 dark:border-gray-600/80">
                      <Badge className="px-3 py-1 h-7 text-white bg-purple-600 rounded-full">
                        Comunicação
                      </Badge>
                      {/* ... outros badges ... */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-3 py-1 h-7 gap-1 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        <Plus className="h-3 w-3" />
                        Adicionar Skill
                      </Button>
                    </div>
                  </div>
                  {/* Selects: Estilo dark mode para trigger e content (ShadCN geralmente trata) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="job-type" className="dark:text-gray-300">
                        Tipo de Vaga Preferido
                      </Label>
                      <Select defaultValue="full-time">
                        <SelectTrigger
                          id="job-type"
                          className="bg-white dark:bg-gray-700/60 dark:border-gray-600 w-full"
                        >
                          <SelectValue placeholder="Selecione o tipo de vaga" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                          <SelectItem
                            value="full-time"
                            className="cursor-pointer"
                          >
                            Tempo Integral
                          </SelectItem>
                          {/* ... outras opções */}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="work-model"
                        className="dark:text-gray-300"
                      >
                        Modelo de Trabalho Preferido
                      </Label>
                      <Select defaultValue="remote">
                        <SelectTrigger
                          id="work-model"
                          className="bg-white dark:bg-gray-700/60 dark:border-gray-600 w-full"
                        >
                          <SelectValue placeholder="Selecione o modelo" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                          <SelectItem value="onsite" className="cursor-pointer">
                            Presencial
                          </SelectItem>
                          <SelectItem value="remote" className="cursor-pointer">
                            Remoto
                          </SelectItem>
                          {/* ... outras opções */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {/* ... outros selects com estilos dark aplicados ... */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="experience-level"
                        className="dark:text-gray-300"
                      >
                        Nível de Experiência
                      </Label>
                      <Select defaultValue="mid-level">
                        <SelectTrigger
                          id="experience-level"
                          className="bg-white dark:bg-gray-700/60 dark:border-gray-600 w-full"
                        >
                          <SelectValue placeholder="Selecione o nível" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                          <SelectItem
                            value="entry-level"
                            className="cursor-pointer"
                          >
                            Júnior (0-2 anos)
                          </SelectItem>
                          <SelectItem
                            value="mid-level"
                            className="cursor-pointer"
                          >
                            Pleno (3-5 anos)
                          </SelectItem>
                          <SelectItem value="senior" className="cursor-pointer">
                            Sênior (6-9 anos)
                          </SelectItem>
                          <SelectItem value="lead" className="cursor-pointer">
                            Lead/Principal (10+ anos)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="salary-expectation"
                        className="dark:text-gray-300"
                      >
                        Expectativa Salarial (BRL/mês)
                      </Label>
                      <Select defaultValue="8k-12k">
                        <SelectTrigger
                          id="salary-expectation"
                          className="bg-white dark:bg-gray-700/60 dark:border-gray-600 w-full"
                        >
                          <SelectValue placeholder="Selecione a faixa salarial" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                          <SelectItem value="4k-6k" className="cursor-pointer">
                            R$ 4.000 - R$ 6.000
                          </SelectItem>
                          <SelectItem value="6k-8k" className="cursor-pointer">
                            R$ 6.000 - R$ 8.000
                          </SelectItem>
                          <SelectItem value="8k-12k" className="cursor-pointer">
                            R$ 8.000 - R$ 12.000
                          </SelectItem>
                          <SelectItem
                            value="12k-16k"
                            className="cursor-pointer"
                          >
                            R$ 12.000 - R$ 16.000
                          </SelectItem>
                          <SelectItem
                            value="16k-plus"
                            className="cursor-pointer"
                          >
                            R$ 16.000+
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300">
                      Indústrias Preferidas
                    </Label>
                    <div className="flex flex-wrap gap-2 p-3 border rounded-md bg-white dark:bg-gray-700/60 dark:border-gray-600/80">
                      <Badge className="px-3 py-1 h-7 text-white bg-purple-600 rounded-full">
                        Tecnologia
                      </Badge>
                      {/* ... outros badges ... */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-3 py-1 h-7 gap-1 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        <Plus className="h-3 w-3" />
                        Adicionar Indústria
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                {/* Botão Finalizar: Primário com estilo dark */}
                <Button
                  onClick={handleNext}
                  className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 text-white"
                >
                  Completar Perfil
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Rodapé: Texto e botão com cores dark mode */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4 dark:text-gray-400">
            Você sempre pode atualizar as informações...
          </p>
          {/* Botão Outline asChild com Link: Estilo dark */}
          <Button
            variant="outline"
            asChild
            className="bg-white hover:bg-gray-100 dark:text-black dark:border-gray-600 dark:hover:bg-gray-300"
          >
            <Link to="/dashboard/candidato">
              Ir para o Painel
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;
