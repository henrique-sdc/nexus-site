import React from "react";
import NavBar from "src/components/NavBar/NavBar";
import Footer from "src/components/Footer/Footer";

export default function Privacidade() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      {" "}
      {/* Fundo branco/preto */}
      <NavBar />
      <main className="flex-1">
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold mb-4 text-center dark:text-white">
              {" "}
              {/* Título branco */}
              Aviso de Privacidade do Nexus
            </h1>
            <p className="text-gray-700 md:text-xl mb-8 dark:text-gray-300">
              {" "}
              {/* Texto cinza claro */}A Nexus tem um compromisso sólido com a
              proteção dos seus dados pessoais. Este aviso explica como
              coletamos, usamos e protegemos suas informações quando você
              utiliza a plataforma Nexus.
            </p>

            {/* Seção: Introdução */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                {" "}
                {/* Título branco */}
                Introdução
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {" "}
                {/* Texto cinza claro */}
                Este Aviso de Privacidade descreve as práticas adotadas pela
                Nexus para garantir a segurança e a privacidade dos dados dos
                usuários da nossa plataforma. Ao acessar e utilizar o Nexus,
                você concorda com as práticas aqui descritas.
              </p>
            </section>

            {/* Seção: Definições */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                {" "}
                {/* Título branco */}
                Definições
              </h2>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                {" "}
                {/* Texto cinza claro */}
                <li>
                  <strong>Plataforma Nexus:</strong> O sistema online que
                  conecta candidatos a oportunidades de emprego e empresas.
                </li>
                <li>
                  <strong>Dados Pessoais:</strong> Informações que identificam
                  ou podem identificar uma pessoa, como nome, email, CPF,
                  telefone, entre outros.
                </li>
                <li>
                  <strong>Controlador:</strong> Pessoa ou entidade que determina
                  as finalidades e os meios de tratamento dos seus dados.
                </li>
                <li>
                  <strong>Operador:</strong> Pessoa ou entidade que realiza o
                  tratamento dos dados em nome do controlador.
                </li>
                <li>
                  <strong>LGPD:</strong> Lei Geral de Proteção de Dados (Lei nº
                  13.709/2018).
                </li>
              </ul>
            </section>

            {/* Demais seções, seguindo o mesmo padrão */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Coleta e Uso dos Dados
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Coletamos apenas os dados estritamente necessários para o
                funcionamento da plataforma Nexus. Estes dados podem incluir:
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>
                  Dados de Identificação: nome completo, email, CPF, telefone e
                  data de nascimento.
                </li>
                <li>
                  Dados Profissionais: formação, experiência e interesses
                  profissionais.
                </li>
                <li>
                  Dados de Navegação: informações sobre seu dispositivo,
                  endereço IP e atividade na plataforma.
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Utilizamos esses dados para viabilizar o acesso, personalizar a
                experiência, possibilitar a participação em processos seletivos
                e melhorar continuamente nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Compartilhamento de Dados
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Seus dados podem ser compartilhados com:
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>
                  Empresas que utilizam a plataforma para divulgação de vagas e
                  seleção de candidatos, sempre com o seu consentimento.
                </li>
                <li>
                  Parceiros e fornecedores que prestam serviços de
                  infraestrutura, segurança e análise de dados, em conformidade
                  com a legislação.
                </li>
                <li>
                  Autoridades governamentais, quando exigido por lei ou para a
                  proteção dos direitos da Nexus.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Segurança dos Dados
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Adotamos medidas técnicas, administrativas e organizacionais
                para proteger seus dados contra acesso não autorizado,
                alteração, divulgação ou destruição. Entre essas medidas,
                destacam-se o uso de criptografia, firewalls e controle rigoroso
                de acesso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Retenção e Exclusão de Dados
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Seus dados serão armazenados pelo tempo necessário para cumprir
                as finalidades para as quais foram coletados e para atender
                obrigações legais. Você pode solicitar a exclusão ou correção de
                seus dados a qualquer momento, observando as exceções legais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Seus Direitos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Conforme a LGPD, você tem direitos que incluem:
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Confirmação da existência de tratamento dos seus dados.</li>
                <li>
                  Acesso aos seus dados e informações sobre seu tratamento.
                </li>
                <li>Correção de dados incompletos ou incorretos.</li>
                <li>
                  Solicitação de exclusão de dados desnecessários ou excessivos.
                </li>
                <li>Revogação do consentimento, quando aplicável.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                Atualizações
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Este Aviso de Privacidade pode ser atualizado periodicamente.
                Recomendamos que você verifique esta página regularmente para
                estar ciente de quaisquer mudanças. Alterações relevantes serão
                comunicadas na plataforma.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
