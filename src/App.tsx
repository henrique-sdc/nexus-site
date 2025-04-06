import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider"; // Gerenciamento global do tema
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./styles/Animations.css";

import Home from "./pages/Home";
import CadastroUsuarioPage from "./pages/auth/CadastroUsuario";
import LoginPage from "./pages/auth/Login";
import RecuperarSenhaPage from "./pages/auth/RecuperarSenha";
import FinalizarPerfilPage from "./pages/auth/FinalizarPerfil";

import ParaCandidatosPage from "./pages/landing/ParaCandidatos";
import ParaEmpresasPage from "./pages/landing/ParaEmpresas";
import SobreNosPage from "./pages/landing/SobreNos";

import TermosDeServicoPage from "./pages/institucional/TermosDeServico";
import PoliticaDePrivacidadePage from "./pages/institucional/PoliticaDePrivacidade";
import ContatoPage from "./pages/institucional/Contato";
import NotFoundPage from "./pages/NotFound";

import PainelCandidatoPage from "./pages/candidato/PainelCandidato";
import PerfilCandidatoPage from "./pages/candidato/PerfilCandidato";
import VagasCompativeisCandidatoPage from "./pages/candidato/VagasCompativeisCandidato";
import AvaliacoesCandidatoPage from "./pages/candidato/AvaliacoesCandidato";
import VagasSalvasCandidatoPage from "./pages/candidato/VagasSalvasCandidato";
import ConfiguracoesCandidatoPage from "./pages/candidato/ConfiguracoesCandidato";
import TestesCandidatoPage from "./pages/candidato/TestesCandidato";

import PainelEmpresaPage from "./pages/empresa/PainelEmpresa";
import GerenciarVagasEmpresaPage from "./pages/empresa/GerenciarVagasEmpresa";
import MensagensEmpresaPage from "./pages/empresa/MensagensEmpresa";
import EstatisticasEmpresaPage from "./pages/empresa/EstatisticasEmpresa";
import ConfiguracoesEmpresaPage from "./pages/empresa/ConfiguracoesEmpresa";

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        {/* Páginas Gerais */}
        <Route path="/" element={<Home />} />

        {/* Páginas de Autenticação */}
        <Route path="/cadastro" element={<CadastroUsuarioPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recuperar-senha" element={<RecuperarSenhaPage />} />
        <Route path="/completar-perfil" element={<FinalizarPerfilPage />} />

        {/* Páginas de Apresentação (Landing) */}
        <Route path="/para-candidatos" element={<ParaCandidatosPage />} />
        <Route path="/para-empresas" element={<ParaEmpresasPage />} />
        <Route path="/sobre-nos" element={<SobreNosPage />} />

        {/* Páginas Institucionais */}
        <Route path="/termos" element={<TermosDeServicoPage />} />
        <Route
          path="/politica-de-privacidade"
          element={<PoliticaDePrivacidadePage />}
        />
        <Route path="/contato" element={<ContatoPage />} />

        {/* Dashboard do Candidato */}
        <Route path="/dashboard/candidato" element={<PainelCandidatoPage />} />
        <Route
          path="/dashboard/candidato/perfil"
          element={<PerfilCandidatoPage />}
        />
        <Route
          path="/dashboard/candidato/vagas"
          element={<VagasCompativeisCandidatoPage />}
        />
        <Route
          path="/dashboard/candidato/avaliacoes"
          element={<AvaliacoesCandidatoPage />}
        />
        <Route
          path="/dashboard/candidato/vagas-salvas"
          element={<VagasSalvasCandidatoPage />}
        />
        <Route
          path="/dashboard/candidato/configuracoes"
          element={<ConfiguracoesCandidatoPage />}
        />
        <Route
          path="/dashboard/candidato/testes"
          element={<TestesCandidatoPage />}
        />

        {/* Dashboard da Empresa */}
        <Route path="/dashboard/empresa" element={<PainelEmpresaPage />} />
        <Route
          path="/dashboard/empresa/gerenciar-vagas"
          element={<GerenciarVagasEmpresaPage />}
        />
        <Route
          path="/dashboard/empresa/mensagens"
          element={<MensagensEmpresaPage />}
        />
        <Route
          path="/dashboard/empresa/analises"
          element={<EstatisticasEmpresaPage />}
        />
        <Route
          path="/dashboard/empresa/configuracoes"
          element={<ConfiguracoesEmpresaPage />}
        />

        {/* Rota curinga para páginas não encontradas */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
