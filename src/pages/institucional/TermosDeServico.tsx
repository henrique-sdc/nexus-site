import React from "react";
import NavBar from "src/components/NavBar/NavBar";
import Footer from "src/components/Footer/Footer";

export default function Termos() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      {" "}
      {/* Fundo branco/preto */}
      {/* NavBar */}
      <NavBar />
      {/* Conteúdo Principal */}
      <main className="flex-1">
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold mb-4 text-center dark:text-white">
              {" "}
              {/* Texto branco no dark mode */}
              Termos de Uso do Nexus
            </h1>
            <p className="text-gray-700 md:text-xl mb-8 dark:text-gray-300">
              {" "}
              {/* Texto cinza claro no dark mode */}
              Bem-vindo ao Nexus! Estes Termos de Uso (“Termos”) regulam o
              acesso e a utilização da nossa plataforma e dos serviços
              oferecidos pela Nexus, desenvolvedora e proprietária do Nexus. Ao
              utilizar nossos serviços, você concorda com estes termos.
            </p>

            {/* Seção: Visão Geral */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                {" "}
                {/* Texto branco no dark mode */}
                Visão Geral
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {" "}
                {/* Texto cinza claro no dark mode */}
                Estes Termos definem as regras para o uso da plataforma Nexus,
                tanto para Pessoas Candidatas quanto para Empresas. Leia
                atentamente para compreender suas obrigações e direitos.
              </p>
            </section>

            {/* Seção: Definições */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                {" "}
                {/* Texto branco no dark mode */}
                Definições
              </h2>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                {" "}
                {/* Texto cinza claro no dark mode */}
                <li>
                  <strong>Plataforma Nexus:</strong> Sistema online que conecta
                  candidatos a oportunidades de emprego e empresas em busca de
                  talentos.
                </li>
                <li>
                  <strong>Pessoa Candidata:</strong> Usuário que se cadastra na
                  plataforma para buscar oportunidades de emprego.
                </li>
                <li>
                  <strong>Empresa:</strong> Organização que utiliza a plataforma
                  para divulgar vagas e selecionar candidatos.
                </li>
                <li>
                  <strong>Dados Pessoais:</strong> Informações que identificam
                  ou podem identificar uma pessoa.
                </li>
                <li>
                  <strong>Inteligência Artificial:</strong> Sistema
                  computacional que auxilia na combinação entre candidatos e
                  vagas.
                </li>
              </ul>
            </section>

            {/* Demais seções - Repetir o padrão */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Aplicação destes Termos
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Estes Termos aplicam-se a todos os usuários da Plataforma Nexus
                e permanecerão em vigor enquanto sua conta estiver ativa. O uso
                da plataforma implica na aceitação destes termos, que podem ser
                atualizados periodicamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Serviços Oferecidos
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                A Plataforma Nexus oferece um portal de vagas, testes de
                avaliação, correspondência inteligente via IA, e suporte para
                otimizar processos seletivos tanto para Pessoas Candidatas
                quanto para Empresas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Condições de Acesso e Utilização
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Ao se cadastrar na Plataforma Nexus, você se compromete a:
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Fornecer informações verdadeiras e atualizadas;</li>
                <li>
                  Manter a confidencialidade de suas credenciais de acesso;
                </li>
                <li>
                  Utilizar a plataforma para fins legítimos e autorizados;
                </li>
                <li>
                  Não interferir na segurança ou no funcionamento da plataforma.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Propriedade Intelectual
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Todos os direitos sobre a plataforma, seu conteúdo e
                funcionalidades são de propriedade da Nexus. Nenhuma parte do
                conteúdo poderá ser reproduzida sem autorização expressa.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Privacidade e Proteção de Dados
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Seus dados pessoais serão utilizados conforme descrito em nosso
                Aviso de Privacidade. Ao utilizar a plataforma, você consente
                com a coleta, uso e armazenamento dos seus dados para as
                finalidades descritas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Penalidades e Rescisão
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                O descumprimento destes Termos poderá resultar na suspensão ou
                cancelamento do seu cadastro, sem prejuízo das medidas legais
                cabíveis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Alterações, Modificações e Rescisão
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                A Nexus reserva-se o direito de alterar estes Termos a qualquer
                momento. Quaisquer alterações serão publicadas na plataforma e
                entrarão em vigor imediatamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Aceite
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Ao utilizar a Plataforma Nexus, você declara que leu, entendeu e
                concorda com todos os termos aqui estabelecidos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Legislação e Foro
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Estes Termos são regidos pelas leis brasileiras. Qualquer
                disputa será dirimida no foro da comarca de São Paulo, SP.
              </p>
            </section>

            {/* Histórico de Versões */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Histórico de Versões
              </h2>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>23/03/2025 - Versão atual</li>
              </ul>
            </section>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
