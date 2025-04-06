import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { Progress } from "src/components/ui/progress";
import { Button } from "src/components/ui/button";
import { RadioGroup, RadioGroupItem } from "src/components/ui/radio-group";
import { Label } from "src/components/ui/label";
import {
  ArrowLeft,
  Clock,
  Brain,
  Users,
  FileCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "src/lib/utils";

const TestsPage: React.FC = () => {
  // 1. Inicializar estados como undefined ou string vazia
  const [selectedLogicOption, setSelectedLogicOption] = useState<
    string | undefined
  >(undefined);
  const [selectedCulturalOption, setSelectedCulturalOption] = useState<
    string | undefined
  >(undefined);

  // Efeito para desabilitar copiar/colar (mantido)
  useEffect(() => {
    const preventActions = (event: Event) => {
      event.preventDefault();
    };
    document.addEventListener("copy", preventActions);
    document.addEventListener("cut", preventActions);
    document.addEventListener("contextmenu", preventActions);
    return () => {
      document.removeEventListener("copy", preventActions);
      document.removeEventListener("cut", preventActions);
      document.removeEventListener("contextmenu", preventActions);
    };
  }, []);

  // Classe helper para o estilo do Label selecionado (padrão roxo)
  const selectedLabelClasses =
    "bg-purple-100/50 border-purple-300 dark:bg-purple-900/20 dark:border-purple-700";
  const hoverLabelClasses = "hover:bg-gray-100 dark:hover:bg-zinc-800"; // Hover padrão
  const baseLabelClasses =
    "flex items-center space-x-3 border p-3 rounded-md transition-colors cursor-pointer dark:border-zinc-700";

  return (
    <div className="min-h-screen bg-gray-100/50 dark:bg-zinc-900/60 p-4 md:p-6 select-none">
      <div className="max-w-5xl mx-auto">
        {/* Barra Superior */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-8">
          {/* ... Link e Tempo inalterados ... */}
          <Link
            to="/dashboard/candidato/avaliacoes"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-zinc-500 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Avaliações
          </Link>
          <div
            className={cn(
              "flex items-center gap-2 text-sm text-muted-foreground dark:text-gray-400",
              "w-full justify-center",
              "sm:w-auto sm:justify-start"
            )}
          >
            <Clock className="h-4 w-4" />
            <span>Tempo Restante: 45:00</span>
          </div>
        </div>

        {/* Conteúdo Centralizado */}
        <div className="space-y-8">
          {/* Cabeçalho e Progresso */}
          {/* ... (inalterados) ... */}
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2 dark:text-white">
              Centro de Avaliação
            </h1>
            <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto sm:mx-0">
              Complete estas avaliações para mostrar suas habilidades e
              preferências.
            </p>
          </div>
          <div className="mb-8 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium dark:text-white">
                  Progresso Geral
                </span>
                <span className="text-sm text-muted-foreground dark:text-gray-400">
                  1 de 3 completado
                </span>
              </div>
              <span className="text-sm font-medium dark:text-white">33%</span>
            </div>
            <Progress
              value={33}
              className="h-2 bg-zinc-200 dark:bg-zinc-800 [&>*]:bg-purple-600 dark:[&>*]:bg-purple-500"
            />
          </div>

          {/* Sistema de Abas */}
          <Tabs defaultValue="logic" className="w-full">
            {/* ... TabsList inalterada ... */}
            <TabsList className="flex w-full gap-1 bg-gray-200/50 dark:bg-zinc-800 p-1 rounded-lg mb-8">
              <TabsTrigger
                value="logic"
                className="flex flex-1 items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
              >
                <Brain className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline">Lógica</span>
              </TabsTrigger>
              <TabsTrigger
                value="cultural"
                className="flex flex-1 items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
              >
                <Users className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline">Fit Cultural</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="flex flex-1 items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors"
              >
                <FileCheck className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline">Habilidades</span>
              </TabsTrigger>
            </TabsList>

            {/* Conteúdo Aba: Lógica */}
            <TabsContent value="logic">
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                <CardHeader>
                  {/* ... Conteúdo Header ... */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="dark:text-white">
                        Avaliação de Raciocínio Lógico
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Teste suas habilidades de resolução de problemas e
                        pensamento analítico
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium dark:text-white mt-2 sm:mt-0 flex-shrink-0">
                      <span>Questão</span>
                      <span className="text-purple-600 dark:text-purple-400">
                        3
                      </span>
                      <span>de</span>
                      <span>10</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                      <p className="font-medium dark:text-white">
                        Se todos os Zorks são Morks, e alguns Morks são Borks,
                        qual das seguintes afirmações deve ser verdadeira?
                      </p>
                    </div>
                    {/* 2. Usar value e onValueChange */}
                    <RadioGroup
                      value={selectedLogicOption}
                      onValueChange={setSelectedLogicOption}
                    >
                      <div className="space-y-3">
                        {/* 3. Aplicar classes condicionais */}
                        <Label
                          htmlFor="option-1"
                          className={cn(
                            baseLabelClasses,
                            selectedLogicOption === "option-1"
                              ? selectedLabelClasses // Aplica estilo roxo se selecionado
                              : hoverLabelClasses // Aplica hover normal se não selecionado
                          )}
                        >
                          <RadioGroupItem
                            value="option-1"
                            id="option-1"
                            className="border-zinc-400"
                          />
                          <span className="flex-1 dark:text-gray-100">
                            Todos os Zorks são Borks
                          </span>
                        </Label>
                        <Label
                          htmlFor="option-2"
                          className={cn(
                            baseLabelClasses,
                            selectedLogicOption === "option-2"
                              ? selectedLabelClasses
                              : hoverLabelClasses
                          )}
                        >
                          <RadioGroupItem
                            value="option-2"
                            id="option-2"
                            className="border-zinc-400"
                          />
                          <span className="flex-1 dark:text-gray-100">
                            Alguns Zorks são Borks
                          </span>
                        </Label>
                        <Label
                          htmlFor="option-3"
                          className={cn(
                            baseLabelClasses,
                            selectedLogicOption === "option-3"
                              ? selectedLabelClasses
                              : hoverLabelClasses
                          )}
                        >
                          <RadioGroupItem
                            value="option-3"
                            id="option-3"
                            className="border-zinc-400"
                          />
                          <span className="flex-1 dark:text-gray-100">
                            Nenhum Zork é Bork
                          </span>
                        </Label>
                        <Label
                          htmlFor="option-4"
                          className={cn(
                            baseLabelClasses,
                            selectedLogicOption === "option-4"
                              ? selectedLabelClasses
                              : hoverLabelClasses
                          )}
                        >
                          <RadioGroupItem
                            value="option-4"
                            id="option-4"
                            className="border-zinc-400"
                          />
                          <span className="flex-1 dark:text-gray-100">
                            Nenhuma das anteriores
                          </span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t dark:border-zinc-700 pt-6">
                  <Button
                    variant="outline"
                    className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                    disabled // Desabilitar botão Anterior se for a primeira questão
                  >
                    Anterior
                  </Button>
                  <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-colors">
                    Próxima Questão
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Conteúdo Aba: Cultural */}
            <TabsContent value="cultural">
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                <CardHeader>
                  {/* ... Conteúdo Header ... */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="dark:text-white">
                        Fit Cultural
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Ajude-nos a entender suas preferências e valores de
                        trabalho
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium dark:text-white mt-2 sm:mt-0 flex-shrink-0">
                      <span>Questão</span>
                      <span className="text-purple-600 dark:text-purple-400">
                        1
                      </span>
                      <span>de</span>
                      <span>15</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                      <p className="font-medium dark:text-white">
                        Ao trabalhar em um projeto em equipe, eu prefiro:
                      </p>
                    </div>
                    {/* 2. Usar value e onValueChange, remover defaultValue */}
                    <RadioGroup
                      value={selectedCulturalOption}
                      onValueChange={setSelectedCulturalOption}
                    >
                      <div className="space-y-3">
                        {/* 3. Aplicar classes condicionais */}
                        <Label
                          htmlFor="cultural-1"
                          className={cn(
                            baseLabelClasses,
                            selectedCulturalOption === "cultural-1"
                              ? selectedLabelClasses // Aplica estilo roxo se selecionado
                              : hoverLabelClasses // Aplica hover normal se não selecionado
                          )}
                        >
                          <RadioGroupItem
                            value="cultural-1"
                            id="cultural-1"
                            className="border-zinc-400"
                          />
                          <span className="flex-1 dark:text-gray-100">
                            Assumir a liderança e delegar tarefas
                          </span>
                        </Label>
                        <Label
                          htmlFor="cultural-2"
                          className={cn(
                            baseLabelClasses,
                            selectedCulturalOption === "cultural-2"
                              ? selectedLabelClasses
                              : hoverLabelClasses
                          )}
                        >
                          <RadioGroupItem
                            value="cultural-2"
                            id="cultural-2"
                            className="border-zinc-400"
                          />
                          <span className="flex-1 dark:text-gray-100">
                            Colaborar de perto com os membros da equipe
                          </span>
                        </Label>
                        <Label
                          htmlFor="cultural-3"
                          className={cn(
                            baseLabelClasses,
                            selectedCulturalOption === "cultural-3"
                              ? selectedLabelClasses
                              : hoverLabelClasses
                          )}
                        >
                          <RadioGroupItem
                            value="cultural-3"
                            id="cultural-3"
                            className="border-zinc-400"
                          />
                          <span className="flex-1 dark:text-gray-100">
                            Focar nas minhas contribuições individuais
                          </span>
                        </Label>
                        <Label
                          htmlFor="cultural-4"
                          className={cn(
                            baseLabelClasses,
                            selectedCulturalOption === "cultural-4"
                              ? selectedLabelClasses
                              : hoverLabelClasses
                          )}
                        >
                          <RadioGroupItem
                            value="cultural-4"
                            id="cultural-4"
                            className="border-zinc-400"
                          />
                          <span className="flex-1 dark:text-gray-100">
                            Adaptar minha abordagem com base nas necessidades do
                            projeto
                          </span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t dark:border-zinc-700 pt-6">
                  {" "}
                  {/* Adicionado justify-between */}
                  <Button
                    variant="outline"
                    className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                    // Lógica para desabilitar se for a primeira questão cultural
                    // disabled={currentCulturalQuestionIndex === 0}
                  >
                    Anterior
                  </Button>
                  <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-colors">
                    Próxima Questão
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Conteúdo Aba: Habilidades */}
            <TabsContent value="skills">
              {/* ... Conteúdo da aba habilidades inalterado ... */}
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    Avaliação de Habilidades
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Complete as seguintes avaliações para mostrar suas
                    habilidades técnicas e profissionais
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center p-4 border rounded-lg dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/30">
                      <div className="mr-4 flex-shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-green-500 dark:text-green-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium dark:text-white">
                          Habilidades de Comunicação
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Avaliação de comunicação escrita e verbal
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <span className="text-sm font-medium text-green-500 dark:text-green-400">
                          Completado
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center p-4 border rounded-lg dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors">
                      <div className="mr-4 flex-shrink-0">
                        <Brain className="h-6 w-6 text-violet-500 dark:text-violet-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium dark:text-white">
                          Habilidades de Programação
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Desafios de código e resolução de problemas
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <Button
                          size="sm"
                          className="bg-purple-800 text-white hover:bg-purple-900 transition-colors"
                        >
                          Começar
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center p-4 border rounded-lg dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors">
                      <div className="mr-4 flex-shrink-0">
                        <FileCheck className="h-6 w-6 text-muted-foreground dark:text-gray-400" />{" "}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium dark:text-white">
                          Análise de Dados
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Pensamento analítico e interpretação de dados
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <Button
                          size="sm"
                          variant="outline"
                          className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                        >
                          Começar
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center p-4 border rounded-lg dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors">
                      <div className="mr-4 flex-shrink-0">
                        <Users className="h-6 w-6 text-muted-foreground dark:text-gray-400" />{" "}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium dark:text-white">
                          Gerenciamento de Projetos
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Habilidades de planejamento, organização e execução
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <Button
                          size="sm"
                          variant="outline"
                          className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                        >
                          Começar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t dark:border-zinc-700 pt-6">
                  <p className="text-sm text-muted-foreground dark:text-gray-400">
                    Complete todas as avaliações para maximizar a visibilidade
                    do seu perfil para empregadores potenciais.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TestsPage;
