/**
 * Página para Empresas
 *
 * Esta página apresenta a plataforma Nexus para empresas, destacando:
 * - Um banner inicial com call-to-action para cadastro da empresa;
 * - Seção "Como Funciona para Empresas" com os passos do processo;
 * - Seção de Benefícios principais para o recrutamento;
 * - Seção de Empresas Parceiras exibindo logos;
 * - Seção final de call-to-action para incentivar o cadastro.
 *
 */

import React from "react";
import { Link } from "react-router-dom";

// Componentes de layout
import NavBar from "src/components/NavBar/NavBar";
import Footer from "src/components/Footer/Footer";

// Componentes de UI
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";

// Ícones utilizados
import {
  Users,
  Filter,
  BarChart3,
  CheckCircle,
  CircleFadingPlus,
} from "lucide-react";

export default function EmpresasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Cabeçalho */}
      <NavBar />

      {/* Seção: Banner Inicial */}
      <main className="flex-1">
        {/* Seção: Recrutamento Inteligente para Empresas Inovadoras */}
        <section className="relative overflow-hidden py-24 md:py-32">
          {/* Fundo para modo claro */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:hidden -z-10"></div>
          {/* Fundo para modo escuro */}
          <div className="absolute inset-0 hidden dark:block -z-10">
            <div className="absolute inset-0 bg-black opacity-100"></div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(75,0,130,0.4) 0%, rgba(128,0,128,0.4) 70%)",
              }}
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col items-center justify-center gap-10 lg:gap-20 text-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-indigo-100 dark:bg-indigo-500/30 px-3 py-1 text-sm dark:text-white">
                  Para Empresas
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl dark:text-white">
                  Recrutamento Inteligente para{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 pr-0.5">
                    Empresas Inovadoras
                  </span>
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-stone-200">
                  Encontre os talentos ideais de forma rápida e eficiente com a
                  plataforma Nexus, que oferece candidatos pré-validados e
                  correspondência aprimorada por IA.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button
                    className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                    size="lg"
                    asChild
                  >
                    <Link to="/cadastro?tab=empresa">Cadastre Sua Empresa</Link>
                  </Button>
                  {/* Botão comentado para uso futuro */}
                  {/* <Button
                    className="bg-white hover:bg-gray-100 hover:text-black transition-all duration-300"
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <Link to="#como-funciona-empresas">
                      Saiba Como Funciona
                    </Link>
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Como Funciona (Para Empresas) */}
        <section
          id="como-funciona-empresas"
          className="py-16 md:py-24 dark:bg-black"
        >
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Como Funciona Para Empresas
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Simplifique seu processo de recrutamento e encontre os
                candidatos perfeitos em poucos passos.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {/* Passo 1: Cadastre Sua Empresa */}
              <div className="relative">
                <div className="absolute top-0 right-0 -z-10 h-24 w-24 rounded-full bg-indigo-100 dark:bg-indigo-700 blur-xl"></div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                  <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    1
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Cadastre Sua Empresa
                </h3>
                <p className="text-muted-foreground dark:text-stone-200">
                  Crie um perfil detalhado da sua empresa, incluindo cultura,
                  valores e requisitos das vagas.
                </p>
              </div>

              {/* Passo 2: Defina Seus Critérios */}
              <div className="relative">
                <div className="absolute top-0 right-0 -z-10 h-24 w-24 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-xl"></div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                    2
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Defina Seus Critérios
                </h3>
                <p className="text-muted-foreground dark:text-stone-200">
                  Especifique as habilidades, experiência e características
                  culturais que você busca em um candidato.
                </p>
              </div>

              {/* Passo 3: Acesse Candidatos Pré-Validados */}
              <div className="relative">
                <div className="absolute top-0 right-0 -z-10 h-24 w-24 rounded-full bg-violet-100 dark:bg-violet-900/20 blur-xl"></div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                  <span className="text-xl font-bold text-violet-600 dark:text-violet-400">
                    3
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Acesse Candidatos Pré-Validados
                </h3>
                <p className="text-muted-foreground dark:text-stone-200">
                  Navegue por perfis de candidatos que já passaram por nossas
                  avaliações rigorosas.
                </p>
              </div>

              {/* Passo 4: Conecte-se e Contrate */}
              <div className="relative">
                <div className="absolute top-0 right-0 -z-10 h-24 w-24 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/20 blur-xl"></div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30">
                  <span className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400">
                    4
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Conecte-se e Contrate
                </h3>
                <p className="text-muted-foreground dark:text-stone-200">
                  Entre em contato com os candidatos ideais, agende entrevistas
                  e contrate os melhores talentos para sua equipe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Principais Benefícios (Para Empresas)*/}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950/60 -z-20"></div>
          <div className="hidden dark:block absolute inset-0 bg-black opacity-50 -z-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Principais Benefícios
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Por que empresas escolhem a Nexus para suas necessidades de
                recrutamento
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1: Candidatos Pré-Validados */}
              <Card className="bg-background/80 backdrop-blur-sm bg-white dark:bg-black border-purple-200/50 dark:border-purple-800/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                    <Filter className="h-6 w-6 text-purple-600 dark:text-purple-400" />{" "}
                  </div>
                  <CardTitle className="dark:text-white">
                    Candidatos Pré-Validados
                  </CardTitle>
                  <CardDescription className="dark:text-stone-200">
                    Acesse candidatos com habilidades verificadas{" "}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    Todos os candidatos em nossa plataforma passaram por
                    avaliações abrangentes para validar suas habilidades,
                    capacidades de resolução de problemas e preferências de
                    trabalho.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2:  Correspondência de Fit Cultural */}
              <Card className="bg-background/80 backdrop-blur-sm bg-white dark:bg-black border-indigo-200/50 dark:border-indigo-800/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                    <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />{" "}
                  </div>
                  <CardTitle className="dark:text-white">
                    Correspondência de Fit Cultural
                  </CardTitle>
                  <CardDescription className="dark:text-stone-200">
                    Encontre candidatos alinhados à cultura da sua empresa{" "}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    Nossa plataforma avalia a adequação cultural para garantir
                    que os candidatos prosperem em seu ambiente de trabalho
                    específico, levando a maior retenção e produtividade.{" "}
                  </p>
                </CardContent>
              </Card>

              {/* Card 3: Eficiência de Tempo e Custo */}
              <Card className="bg-background/80 backdrop-blur-sm bg-white dark:bg-black border-violet-200/50 dark:border-violet-800/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                    <BarChart3 className="h-6 w-6 text-violet-600 dark:text-violet-400" />{" "}
                  </div>
                  <CardTitle className="dark:text-white">
                    Eficiência de Tempo e Custo
                  </CardTitle>
                  <CardDescription className="dark:text-stone-200">
                    Otimize seu processo de recrutamento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    Reduza o tempo de contratação e os custos de recrutamento
                    concentrando-se apenas em candidatos que atendam aos seus
                    requisitos específicos e que foram pré-selecionados.{" "}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção: Planos */}
        <section className="py-16 md:py-24 dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Planos e Preços
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Escolha o plano que melhor se adapta às necessidades da sua
                empresa.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Plano Básico */}
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold dark:text-white">
                    Plano Básico
                  </CardTitle>
                  <CardDescription className="dark:text-stone-200">
                    Para empresas que estão começando
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Grátis
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="dark:text-stone-200">
                        Acesso a candidatos pré-validados
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="dark:text-stone-200">
                        Até 5 vagas publicadas
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="dark:text-stone-200">
                        Suporte por e-mail
                      </span>
                    </li>
                    <li>
                      <div className="pt-6"></div>
                    </li>
                  </ul>
                  <Button
                    className="mt-6 w-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-100"
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <Link to="/cadastro?tab=empresa">Começar</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Plano Premium */}
              <Card className="border-2 border-purple-500 dark:border-purple-400 relative overflow-hidden">
                {/* Badge "Mais Popular" */}
                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <CircleFadingPlus className="h-6 w-6 text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-1" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold dark:text-white">
                    Plano Premium
                  </CardTitle>
                  <CardDescription className="dark:text-stone-200">
                    Para empresas em crescimento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 text-4xl font-extrabold tracking-tight text-purple-600 dark:text-purple-400">
                    R$99/mês
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="dark:text-stone-200">
                        Todos os benefícios do Plano Básico
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="dark:text-stone-200">
                        Vagas ilimitadas
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="dark:text-stone-200">
                        Suporte prioritário 24/7
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="dark:text-stone-200">
                        Relatórios avançados de recrutamento
                      </span>
                    </li>
                  </ul>
                  <Button
                    className="mt-6 w-full bg-purple-600 text-white hover:bg-purple-700"
                    size="lg"
                    asChild
                  >
                    <Link to="/cadastro?tab=empresa">Começar</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Plano Empresarial */}
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold dark:text-white">
                    Plano Empresarial
                  </CardTitle>
                  <CardDescription className="dark:text-stone-200">
                    Para grandes empresas e corporações
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Sob Consulta
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="dark:text-stone-200">
                        Todos os benefícios do Plano Premium
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="dark:text-stone-200">
                        Gerente de contas dedicado
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="dark:text-stone-200">
                        Integrações personalizadas
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="dark:text-stone-200">
                        Consultoria de recrutamento estratégico
                      </span>
                    </li>
                  </ul>
                  <Button
                    className="mt-6 w-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-100"
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <Link to="/cadastro?tab=empresa">Entre em Contato</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção: Empresas Parceiras (Scrolling) */}
        <section className="py-16 md:py-24 dark:bg-black overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Empresas Parceiras
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Algumas das empresas que confiam na Nexus para encontrar os
                melhores talentos.
              </p>
            </div>
            <div className="relative w-full overflow-x-hidden">
              <div className="animate-scroll-left">
                {" "}
                {/* Lista de logos (duplicada para efeito infinito) - SEM o map() */}
                <img
                  src="https://www.siglaseabreviaturas.com/wp-content/uploads/2015/06/logo-espm_alterado.jpg"
                  alt="ESPM"
                  className="h-12 w-auto dark:grayscale hover:grayscale-0 transition-all duration-300 mx-8"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5mYfN6Pm20YkiZqZxONOSuBlvEb5sEFI1Q&s"
                  alt="Insper"
                  className="h-12 w-auto dark:grayscale hover:grayscale-0 transition-all duration-300 mx-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Logo_FGV_-_Funda%C3%A7%C3%A3o_Getulio_Vargas.png/1200px-Logo_FGV_-_Funda%C3%A7%C3%A3o_Getulio_Vargas.png"
                  alt="FGV"
                  className="h-12 w-auto dark:grayscale hover:grayscale-0 transition-all duration-300 mx-8"
                />
                <img
                  src="https://www.intersector.com.br/wp-content/uploads/2020/12/logo-belas-artes.png"
                  alt="Belas Artes"
                  className="h-12 w-auto dark:grayscale hover:grayscale-0 transition-all duration-300 mx-8"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0g2Cngsw7OzAXsDdrEXx4WLu1vWXqzC-jJg&s"
                  alt="USP"
                  className="h-12 w-auto dark:grayscale hover:grayscale-0 transition-all duration-300 mx-8"
                />
                {/* Repetição das logos */}
                <img
                  src="https://www.siglaseabreviaturas.com/wp-content/uploads/2015/06/logo-espm_alterado.jpg"
                  alt="ESPM"
                  className="h-12 w-auto dark:grayscale hover:grayscale-0 transition-all duration-300 mx-8"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5mYfN6Pm20YkiZqZxONOSuBlvEb5sEFI1Q&s"
                  alt="Insper"
                  className="h-12 w-auto dark:grayscale hover:grayscale-0 transition-all duration-300 mx-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Logo_FGV_-_Funda%C3%A7%C3%A3o_Getulio_Vargas.png/1200px-Logo_FGV_-_Funda%C3%A7%C3%A3o_Getulio_Vargas.png"
                  alt="FGV"
                  className="h-12 w-auto dark:grayscale hover:grayscale-0 transition-all duration-300 mx-8"
                />
                <img
                  src="https://www.intersector.com.br/wp-content/uploads/2020/12/logo-belas-artes.png"
                  alt="Belas Artes"
                  className="h-12 w-auto dark:grayscale hover:grayscale-0 transition-all duration-300 mx-8"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0g2Cngsw7OzAXsDdrEXx4WLu1vWXqzC-jJg&s"
                  alt="USP"
                  className="h-12 w-auto dark:grayscale hover:grayscale-0 transition-all duration-300 mx-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Histórias de Sucesso */}
        <section className="py-16 md:py-24 dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Histórias de Sucesso
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Descubra como a Nexus ajudou empresas a encontrar os candidatos
                ideais e otimizar seus processos de recrutamento.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Empresa A */}
              <Card className="bg-background border-indigo-200/50 dark:border-indigo-800/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://placehold.co/50x50"
                        alt="Empresa A"
                      />
                      <AvatarFallback>EA</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg dark:text-white">
                        Empresa A
                      </CardTitle>
                      <CardDescription className="dark:text-stone-200">
                        Setor de Tecnologia
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    "A Nexus transformou nosso processo de recrutamento.
                    Encontramos candidatos altamente qualificados e compatíveis
                    com nossa cultura em tempo recorde."
                  </p>
                </CardContent>
              </Card>

              {/* Card 2: Empresa B */}
              <Card className="bg-background border-purple-200/50 dark:border-purple-800/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://placehold.co/50x50"
                        alt="Empresa B"
                      />
                      <AvatarFallback>EB</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg dark:text-white">
                        Empresa B
                      </CardTitle>
                      <CardDescription className="dark:text-stone-200">
                        Setor Financeiro
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    "Graças à Nexus, reduzimos significativamente nossos custos
                    de recrutamento e aumentamos a qualidade das nossas
                    contratações."
                  </p>
                </CardContent>
              </Card>

              {/* Card 3: Empresa C */}
              <Card className="bg-background border-indigo-200/50 dark:border-indigo-800/50 md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://placehold.co/50x50"
                        alt="Empresa C"
                      />
                      <AvatarFallback>EC</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg dark:text-white">
                        Empresa C
                      </CardTitle>
                      <CardDescription className="dark:text-stone-200">
                        Setor de Saúde
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    "A plataforma Nexus nos permitiu encontrar profissionais de
                    saúde altamente qualificados e com o perfil ideal para nossa
                    equipe."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção: Pronto para Revolucionar Seu Recrutamento? */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950/60 -z-20"></div>
          <div className="hidden dark:block absolute inset-0 bg-black opacity-50 -z-10"></div>
          <div className="container mx-auto px-4 relative flex items-center justify-center min-h-[50vh]">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Pronto para Revolucionar Seu Recrutamento?
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Cadastre sua empresa na Nexus hoje mesmo e descubra uma nova
                forma de encontrar os melhores talentos.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button
                  className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                  size="lg"
                  asChild
                >
                  <Link to="/cadastro?tab=empresa">Cadastre Sua Empresa</Link>
                </Button>
                <Button
                  className="bg-white hover:bg-gray-100 dark:hover:bg-zinc-200 dark:text-black transition-all duration-100"
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link to="/login">Já tem uma conta?</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Rodapé */}
      <Footer />
    </div>
  );
}
