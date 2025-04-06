/**
 * Página Sobre Nós
 *
 * Esta página apresenta a Nexus, contando sua história, missão, valores,
 * equipe fundadora, impacto e convidando o usuário a fazer parte da jornada.
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button";
import { Building2, Globe, Lightbulb, Shield, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import NavBar from "src/components/NavBar/NavBar";
import Footer from "src/components/Footer/Footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Cabeçalho: Barra de Navegação */}
      <NavBar />

      <main className="flex-1">
        {/* Seção: Reimaginando o Futuro do Recrutamento */}
        <section className="relative overflow-hidden py-24 md:py-32">
          {/* Fundo para modo claro */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:hidden -z-10"></div>
          {/* Fundo para modo escuro */}
          <div className="absolute inset-0 hidden dark:block -z-10">
            <div className="absolute inset-0 bg-black opacity-100"></div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(128,0,128,0.4) 0%, rgba(75,0,130,0.4) 70%)",
              }}
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="mx-auto max-w-[800px] text-center space-y-6">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm dark:text-white">
                Sobre a Nexus
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl dark:text-white">
                Reimaginando o{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 pr-0.5">
                  Futuro
                </span>{" "}
                do Recrutamento
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-stone-200">
                Estamos em uma missão para transformar a forma como candidatos
                encontram empregos e como empresas encontram talentos, criando
                conexões significativas por meio da tecnologia e do conhecimento
                humano.
              </p>
            </div>
          </div>
        </section>

        {/* Seção: Nossa História */}
        <section className="py-16 md:py-24 dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl blur-3xl -z-10"></div>
                <div className="relative bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 p-6 rounded-2xl border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm">
                  <img
                    src="https://rizzattigestao.com.br/wp-content/uploads/animar-o-equipe.jpg"
                    width={900}
                    height={400}
                    alt="Nexus Team"
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm dark:text-white">
                  Nossa História
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl dark:text-white">
                  Da Ideia à Inovação
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                  A Nexus nasceu de uma simples observação: o processo de
                  recrutamento tradicional é ineficiente tanto para candidatos
                  quanto para empresas. Candidatos gastam inúmeras horas se
                  candidatando e fazendo testes para cada posição, enquanto
                  empresas lutam para identificar candidatos verdadeiramente
                  qualificados.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                  Nossos fundadores, com experiência em IA, recrutamento e
                  recursos humanos, se uniram para criar uma plataforma que
                  simplificaria esse processo, permitindo que candidatos
                  fizessem avaliações uma única vez e que empresas acessassem
                  talentos pré-validados.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                  Hoje, a Nexus está transformando a forma como o mundo conecta
                  talento com oportunidade, tornando o processo de recrutamento
                  mais eficiente, eficaz e equitativo para todos os envolvidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Nossa Missão e Valores */}
        <section className="relative py-16 md:py-24">
          {" "}
          {/* Fundo com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950/60 -z-20"></div>
          {/* Overlay preto semitransparente apenas no dark mode (igual ao da outra seção) */}
          <div className="hidden dark:block absolute inset-0 bg-black opacity-50 -z-10"></div>
          <div className="container mx-auto px-4 relative">
            {" "}
            {/* Título e descrição */}
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                {" "}
                Nossa Missão e Valores
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                {" "}
                Os princípios que guiam tudo o que fazemos{" "}
              </p>
            </div>
            {/* Grid com os cards */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1: Inovação */}
              <Card className="bg-background/80 backdrop-blur-sm bg-white dark:bg-black border-purple-200/50 dark:border-purple-800/50">
                {" "}
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                    {" "}
                    <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />{" "}
                  </div>
                  <CardTitle className="dark:text-white">Inovação</CardTitle>{" "}
                  <CardDescription className="dark:text-stone-200">
                    {" "}
                    Ultrapassando os limites da tecnologia de recrutamento{" "}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    {" "}
                    Inovamos constantemente para criar soluções que tornem o
                    processo de recrutamento mais eficiente, eficaz e agradável
                    para todas as partes envolvidas.{" "}
                  </p>
                </CardContent>
              </Card>

              {/* Card 2: Equidade */}
              <Card className="bg-background/80 backdrop-blur-sm bg-white dark:bg-black border-indigo-200/50 dark:border-indigo-800/50">
                {" "}
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                    {" "}
                    <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />{" "}
                  </div>
                  <CardTitle className="dark:text-white">Equidade</CardTitle>{" "}
                  <CardDescription className="dark:text-stone-200">
                    {" "}
                    Criando oportunidades justas para todos{" "}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    {" "}
                    Estamos comprometidos em criar um campo de atuação
                    equilibrado, onde os candidatos são avaliados com base em
                    suas verdadeiras habilidades e potencial, não apenas em seus
                    currículos.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3: Confiança */}
              <Card className="bg-background/80 backdrop-blur-sm bg-white dark:bg-black border-violet-200/50 dark:border-violet-800/50">
                {" "}
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                    {" "}
                    <Shield className="h-6 w-6 text-violet-600 dark:text-violet-400" />{" "}
                  </div>
                  <CardTitle className="dark:text-white">Confiança</CardTitle>{" "}
                  <CardDescription className="dark:text-stone-200">
                    {" "}
                    Construindo relacionamentos baseados em integridade{" "}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    {" "}
                    Priorizamos a transparência, a segurança de dados e as
                    práticas éticas em tudo o que fazemos, conquistando a
                    confiança de candidatos e empresas que usam nossa
                    plataforma.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção: Nossa Equipe de Liderança */}
        <section className="py-16 md:py-24 dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Nossa Equipe Fundadora
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Conheça os visionários que criaram a Nexus{" "}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Henrique Castro */}
              <div className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Henrique Castro"
                  />
                  <AvatarFallback>HC</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold dark:text-white">
                  Henrique Castro
                </h3>
                <p className="text-sm text-muted-foreground mb-2 dark:text-stone-200">
                  Co-Fundador
                </p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto dark:text-stone-200">
                  Empreendedor em série com experiência em dimensionamento de
                  startups de tecnologia e otimização de operações de negócios.
                </p>
              </div>

              {/* Jordana Ramos */}
              <div className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Jordana Ramos"
                  />
                  <AvatarFallback>JR</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold dark:text-white">
                  Jordana Ramos
                </h3>
                <p className="text-sm text-muted-foreground mb-2 dark:text-stone-200">
                  Co-Fundadora
                </p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto dark:text-stone-200">
                  Empreendedor em série com experiência em dimensionamento de
                  startups de tecnologia e otimização de operações de negócios.
                </p>
              </div>

              {/* Letícia Albuquerque */}
              <div className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Letícia Albuquerque"
                  />
                  <AvatarFallback>LA</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold dark:text-white">
                  Letícia Albuquerque
                </h3>
                <p className="text-sm text-muted-foreground mb-2 dark:text-stone-200">
                  Co-Fundadora
                </p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto dark:text-stone-200">
                  Empreendedor em série com experiência em dimensionamento de
                  startups de tecnologia e otimização de operações de negócios.
                </p>
              </div>

              {/* Maria Bringold */}
              <div className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Maria Bringold"
                  />
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold dark:text-white">
                  Maria Bringold
                </h3>
                <p className="text-sm text-muted-foreground mb-2 dark:text-stone-200">
                  Co-Fundadora
                </p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto dark:text-stone-200">
                  Empreendedor em série com experiência em dimensionamento de
                  startups de tecnologia e otimização de operações de negócios.
                </p>
              </div>

              {/* Mariana Dias */}
              <div className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Mariana Dias"
                  />
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold dark:text-white">
                  Mariana Dias
                </h3>
                <p className="text-sm text-muted-foreground mb-2 dark:text-stone-200">
                  Co-Fundadora
                </p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto dark:text-stone-200">
                  Empreendedor em série com experiência em dimensionamento de
                  startups de tecnologia e otimização de operações de negócios.
                </p>
              </div>

              {/* Pedro Braga */}
              <div className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Pedro Braga"
                  />
                  <AvatarFallback>PB</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold dark:text-white">
                  Pedro Braga
                </h3>
                <p className="text-sm text-muted-foreground mb-2 dark:text-stone-200">
                  Co-Fundador
                </p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto dark:text-stone-200">
                  Empreendedor em série com experiência em dimensionamento de
                  startups de tecnologia e otimização de operações de negócios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Nosso Impacto */}
        <section className="py-16 md:py-24 relative">
          {" "}
          {/* Fundo com gradiente e overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950/60 -z-20"></div>
          <div className="hidden dark:block absolute inset-0 bg-black opacity-50 -z-10"></div>
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm dark:text-white">
                  Nosso Impacto
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl dark:text-white">
                  Fazendo a Diferença
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                  Na Nexus, acreditamos que conectar as pessoas certas com as
                  oportunidades certas cria efeitos positivos em toda a
                  sociedade. Nossa plataforma ajudou:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 mt-0.5">
                      <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-white">
                        Mais de 10.000 Candidatos
                      </h3>
                      <p className="text-muted-foreground dark:text-stone-200">
                        Encontre posições que correspondam às suas habilidades e
                        preferências
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 mt-0.5">
                      <Building2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-white">
                        Mais de 500 Empresas
                      </h3>
                      <p className="text-muted-foreground dark:text-stone-200">
                        Construa equipes mais fortes com candidatos mais bem
                        correspondidos
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 mt-0.5">
                      <Globe className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-white">
                        Alcance Global
                      </h3>
                      <p className="text-muted-foreground dark:text-stone-200">
                        Operando em 15 países e expandindo nosso impacto em todo
                        o mundo
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Coluna da imagem - Ajustes para Dark Mode */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 dark:from-purple-800/20 dark:to-indigo-800/20 rounded-2xl blur-3xl -z-10"></div>
                <div className="relative bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 p-6 rounded-2xl border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm">
                  <img
                    src="https://aterraambiental.com/wp-content/uploads/2022/10/Avaliacao-de-Impacto-Ambiental.png"
                    width={800}
                    height={400}
                    alt="Nexus Impact"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Junte-se à Nossa Jornada */}
        <section className="py-16 md:py-24 dark:bg-black">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-[800px] space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Junte-se à Nossa Jornada
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Estamos apenas começando nossa missão de transformar o
                recrutamento. Se você é um candidato procurando sua próxima
                oportunidade ou uma empresa buscando a adição perfeita à sua
                equipe, nós o convidamos a fazer parte da comunidade Nexus.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                >
                  <Link to="/cadastro">Crie Seu Perfil</Link>
                </Button>
                {/* Botão comentado para uso futuro */}
                {/* <Button
                  className="bg-white hover:bg-gray-200 dark:hover:bg-zinc-400 dark:text-black hover:text-black transition-all duration-100"
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link to="/careers">Junte-se à Nossa Equipe</Link>
                </Button> */}
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
