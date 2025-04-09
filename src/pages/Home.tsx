// Importações de bibliotecas e componentes
import { Link } from "react-router-dom";
import { cn } from "src/lib/utils";
import { Button } from "src/components/ui/button";
import { FileCheck, Brain, Building2, ArrowRight } from "lucide-react";

// Importação de componentes de layout
import NavBar from "src/components/NavBar/NavBar";
import Footer from "src/components/Footer/Footer";

// Importação de imagens (variáveis em português)
import imagemTelemarketing from "../assets/images/telemarketin.png";
import imagemEmpresa from "../assets/images/empresa.png";

/**
 * Componente Home
 * Página principal da aplicação que exibe o banner, informações sobre a plataforma,
 * seções para candidatos e empresas, e call-to-action final.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Cabeçalho com a NavBar */}
      <NavBar />

      <main className="flex-1">
        {/* Seção do Banner Principal */}
        {/* Fundo para modo claro */}
        <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
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
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-500/30 px-3 py-1 text-sm dark:text-white">
                  Revolucionando o Recrutamento
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
                  Unificando o Recrutamento com{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 pr-0.5">
                    Conexões Potencializadas por IA
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl dark:text-stone-200 max-w-2xl mx-auto lg:mx-0">
                  Um perfil. Uma avaliação. Oportunidades sem fim. Nexus conecta
                  candidatos qualificados com os empregadores ideais por meio de
                  correspondência inteligente.
                </p>
                <div className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center lg:justify-start">
                  <Button
                    className={cn(
                      "bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200",
                      "px-6",
                      "sm:px-8",
                      "lg:px-24"
                    )}
                    size="lg"
                    asChild
                  >
                    <Link to="/cadastro">Comece Agora</Link>
                  </Button>
                  <Button
                    className={cn(
                      "bg-white dark:bg-black dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200",
                      "px-6",
                      "sm:px-8",
                      "lg:px-24"
                    )}
                    size="lg"
                    asChild
                  >
                    <Link to="/para-empresas">Para Empresas</Link>
                  </Button>
                </div>
              </div>

              {/* Imagem do banner */}
              <div className="relative max-w-lg mx-auto lg:max-w-none lg:mx-0">
                {/* Efeito de fundo para a imagem gradiente com blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-700/20 dark:to-indigo-700/20 rounded-full blur-3xl -z-10"></div>
                <div className="relative bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 p-4 sm:p-6 rounded-2xl border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm">
                  <img
                    src={imagemTelemarketing}
                    width={800}
                    height={400}
                    alt="Plataforma Nexus"
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção "Como o Nexus Funciona" */}
        <section className="py-16 md:py-24 dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Como o Nexus Funciona
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed dark:text-stone-100">
                Nossa plataforma simplifica o processo de recrutamento tanto
                para candidatos quanto para empresas.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1: Avaliação Única */}
              <div className="group relative overflow-hidden rounded-lg border bg-background dark:bg-black/90 p-6 hover:shadow-md dark:hover:shadow-[0_4px_10px_rgba(255,255,255,0.2)] transition-all">
                <div
                  className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 
                  bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-2xl 
                  group-hover:bg-purple-500/30 dark:group-hover:bg-purple-500/40 transition-all"
                ></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <FileCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Avaliação Única
                </h3>
                <p className="text-muted-foreground dark:text-stone-100">
                  Realize testes de lógica, adequação cultural e habilidades
                  apenas uma vez e utilize seu perfil em múltiplas candidaturas.
                </p>
              </div>

              {/* Card 2: Correspondência Potencializada por IA */}
              <div className="group relative overflow-hidden rounded-lg border bg-background dark:bg-black/90 p-6 hover:shadow-md dark:hover:shadow-[0_4px_10px_rgba(255,255,255,0.2)] transition-all">
                <div
                  className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 
                  bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full blur-2xl 
                  group-hover:bg-indigo-500/30 dark:group-hover:bg-indigo-500/40 transition-all"
                ></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                  <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Correspondência Potencializada por IA
                </h3>
                <p className="text-muted-foreground dark:text-stone-100">
                  Nosso algoritmo inteligente valida e otimiza os perfis para
                  combinar candidatos com as posições ideais.
                </p>
              </div>

              {/* Card 3: Recrutamento Eficiente */}
              <div className="group relative overflow-hidden rounded-lg border bg-background dark:bg-black/90 p-6 hover:shadow-md dark:hover:shadow-[0_4px_10px_rgba(255,255,255,0.2)] transition-all">
                <div
                  className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 
                  bg-violet-500/20 dark:bg-violet-500/30 rounded-full blur-2xl 
                  group-hover:bg-violet-500/30 dark:group-hover:bg-violet-500/40 transition-all"
                ></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                  <Building2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Recrutamento Eficiente
                </h3>
                <p className="text-muted-foreground dark:text-stone-100">
                  Empresas acessam perfis pré-validados e encontram o candidato
                  ideal de forma rápida e eficiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção para Candidatos */}
        <section className="relative py-16 md:py-24">
          {/* Fundo com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950/60 -z-20"></div>
          {/* Overlay preto semitransparente apenas no dark mode */}
          <div className="hidden dark:block absolute inset-0 bg-black opacity-50 -z-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="flex justify-center">
              <div className="space-y-6 max-w-3xl text-center">
                {/* Rótulo */}
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm dark:text-white">
                  Para Candidatos
                </div>
                {/* Título */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl dark:text-white">
                  Mostre Seu Verdadeiro Potencial
                </h2>
                {/* Parágrafo */}
                <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                  Crie um perfil completo que destaque suas habilidades,
                  experiência e preferências culturais. Realize nossos testes de
                  avaliação{" "}
                  <span className="underline underline-offset-2">
                    uma única vez
                  </span>{" "}
                  e candidate-se a diversas vagas com facilidade.
                </p>
                {/* Lista */}
                <ul className="space-y-2 inline-block text-left">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600 flex-shrink-0"></div>
                    <span className="dark:text-stone-200">
                      Um único perfil para múltiplas candidaturas
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600 flex-shrink-0"></div>
                    <span className="dark:text-stone-200">
                      Avaliação completa de habilidades
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600 flex-shrink-0"></div>
                    <span className="dark:text-stone-200">
                      Correspondência de emprego aprimorada por IA
                    </span>
                  </li>
                </ul>
                {/* Botão */}
                <div className="pt-2"></div>
                <Button
                  asChild
                  className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200 cursor-pointer"
                  size="lg"
                >
                  <Link
                    to="/cadastro"
                    className="inline-flex items-center gap-2"
                  >
                    Crie Seu Perfil <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção para Empresas */}
        <section className="py-16 md:py-24 dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              {/* Imagem ilustrativa para empresas */}
              <div className="relative order-last lg:order-first">
                <div className="relative md:aspect-auto">
                  {/* Fundo de gradiente com blur */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-gray-300/20 dark:from-gray-300/20 dark:to-gray-300/20 rounded-full blur-3xl -z-10"></div>
                  {/* Container da imagem com efeito e borda */}
                  <div className="relative bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-6 rounded-2xl border border-indigo-200/50 dark:border-blue-950/50 backdrop-blur-sm">
                    <img
                      src={imagemEmpresa}
                      width={800}
                      height={400}
                      alt="Empresa"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 text-sm dark:text-white">
                  Para Empresas
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl dark:text-white">
                  Encontre Seus Candidatos Ideais Mais Rápido
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                  Acesse um conjunto de candidatos pré-validados com habilidades
                  verificadas e compatibilidade cultural. Nossa plataforma
                  potencializada por IA ajuda você a identificar a combinação
                  perfeita para sua equipe.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    <span className="dark:text-stone-200">
                      Recursos avançados de filtragem e pesquisa
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    <span className="dark:text-stone-200">
                      Habilidades verificadas e resultados de avaliações
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    <span className="dark:text-stone-200">
                      Processo de recrutamento simplificado
                    </span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200 cursor-pointer"
                  size="lg"
                >
                  <Link
                    to="/cadastro?tab=empresa"
                    className="inline-flex items-center gap-2"
                  >
                    Cadastre-se como Empresa <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Call-to-Action Final */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950/60 -z-20"></div>
          <div className="hidden dark:block absolute inset-0 bg-black opacity-50 -z-10"></div>
          <div className="container mx-auto px-4 relative flex items-center justify-center min-h-[50vh] py-16 md:py-20">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Pronto para Transformar Sua Experiência de Recrutamento?
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Junte-se à Nexus hoje e descubra uma maneira mais inteligente de
                conectar talentos com oportunidades.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                >
                  <Link to="/cadastro">Cadastre-se como Candidato</Link>
                </Button>
                <Button
                  className="bg-white hover:bg-gray-100 dark:hover:bg-zinc-200 dark:text-black transition-all duration-100"
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link to="/cadastro?tab=empresa">
                    Cadastre-se como Empresa
                  </Link>
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
