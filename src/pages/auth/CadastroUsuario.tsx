import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { candidateSchema, companySchema } from "src/schemas/registerSchema";
import { Button } from "src/components/ui/button";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import PasswordInput from "src/components/PasswordInput/PasswordInput";
import { TelefoneInput } from "src/components/Input-Mask/TelefoneInput";
import { CPFInput } from "src/components/Input-Mask/CPFInput";

// Tipos para os formulários
type CandidateFormData = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
};

type CompanyFormData = {
  companyName: string;
  representativeName: string;
  companyEmail: string;
  companyPassword: string;
  message: string;
};

export default function Register() {
  // Configura o formulário para candidatos utilizando react-hook-form e Yup
  const {
    register: candidateRegister,
    handleSubmit: handleCandidateSubmit,
    formState: { errors: candidateErrors },
  } = useForm<CandidateFormData>({
    resolver: yupResolver(candidateSchema),
  });

  // Configura o formulário para empresas utilizando react-hook-form e Yup
  const {
    register: companyRegister,
    handleSubmit: handleCompanySubmit,
    formState: { errors: companyErrors },
  } = useForm<CompanyFormData>({
    resolver: yupResolver(companySchema),
  });

  // Função chamada ao submeter o formulário de candidato
  const onCandidateSubmit: SubmitHandler<CandidateFormData> = (data) => {
    console.log("Dados do candidato:", data);
    // Enviar os dados para a API
  };

  // Função chamada ao submeter o formulário de empresa
  const onCompanySubmit: SubmitHandler<CompanyFormData> = (data) => {
    console.log("Dados da empresa:", data);
    // Enviar os dados para a API
  };

  // Variáveis para funcionar o CSS dos botões de abas
  const [activeTab, setActiveTab] = useState("candidato");

  // Classes para o botão ativo
  const activeClasses =
    "bg-white text-black dark:bg-black dark:text-white rounded-lg p-1 transition-colors";
  // Classes para o botão inativo
  const inactiveClasses =
    "text-gray-700 dark:text-gray-300 rounded-lg p-1 hover:text-black dark:hover:text-white transition-colors";

  // Hook para pegar a localização da página
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");
    if (tab === "empresa") {
      setActiveTab("empresa");
    }
  }, [location]);

  return (
    // Container principal com fundo gradiente e suporte a dark mode
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-black dark:to-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Link para voltar à página inicial */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-zinc-500 dark:text-white dark:hover:text-zinc-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para Início
        </Link>

        <div className="mb-8"></div>

        <div className="mx-auto max-w-3xl">
          {/* Cabeçalho da página de cadastro */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2 dark:text-white">
              Cadastre-se no Nexus
            </h1>
            <p className="text-muted-foreground dark:text-white">
              Crie sua conta para começar a conectar com melhores oportunidades.
            </p>
          </div>

          {/* Abas para alternar entre cadastro de Candidato e Empresa */}
          <Tabs
            value={activeTab} // Usei value em vez de defaultValue
            onValueChange={(value) => setActiveTab(value)}
            className="w-full"
          >
            <div className="bg-gray-100 dark:bg-purple-800/50 p-[0.04rem] rounded-lg">
              <TabsList className="grid w-full grid-cols-2 dark:text-white">
                <TabsTrigger
                  value="candidato"
                  className={
                    activeTab === "candidato" ? activeClasses : inactiveClasses
                  }
                >
                  Candidato
                </TabsTrigger>
                <TabsTrigger
                  value="empresa"
                  className={
                    activeTab === "empresa" ? activeClasses : inactiveClasses
                  }
                >
                  Empresa
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="mb-8"></div>

            {/* Conteúdo da aba de Cadastro de Candidato */}
            <TabsContent value="candidato">
              <Card className="border-purple-200/50 dark:border-purple-800/50 shadow-sm dark:text-white">
                <CardHeader>
                  <CardTitle>Cadastro de Candidato</CardTitle>
                  <CardDescription>
                    Informe suas informações essenciais para criar sua conta.
                    Você poderá completar seu perfil posteriormente.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Formulário de Dados Pessoais do Candidato */}
                  <form
                    onSubmit={handleCandidateSubmit(onCandidateSubmit)}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="full-name">Nome Completo</Label>
                      <Input
                        id="full-name"
                        placeholder="Digite seu nome completo"
                        {...candidateRegister("fullName")}
                      />
                      {candidateErrors.fullName && (
                        <p className="text-xs text-red-600">
                          {candidateErrors.fullName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Digite seu email"
                        {...candidateRegister("email")}
                      />
                      {candidateErrors.email && (
                        <p className="text-xs text-red-600">
                          {candidateErrors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Senha</Label>
                      <PasswordInput
                        id="password"
                        placeholder="Crie uma senha"
                        {...candidateRegister("password")}
                      />
                      {candidateErrors.password && (
                        <p className="text-xs text-red-600">
                          {candidateErrors.password.message}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <TelefoneInput
                          id="phone"
                          {...candidateRegister("phone")}
                        />
                        {candidateErrors.phone && (
                          <p className="text-xs text-red-600">
                            {candidateErrors.phone.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cpf">CPF</Label>
                        <CPFInput id="cpf" {...candidateRegister("cpf")} />
                        {candidateErrors.cpf && (
                          <p className="text-xs text-red-600">
                            {candidateErrors.cpf.message}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Opções de Cadastro via OAuth */}
                    <div className="space-y-2">
                      <p className="text-center text-sm text-muted-foreground dark:text-white">
                        Ou cadastre-se com:
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Button className="bg-red-600 text-white hover:bg-red-700 transition-colors">
                          Google
                        </Button>
                        <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                      >
                        {/* Link Temporário */}
                        <Link to="/completar-perfil">
                          Criar Conta e Continuar
                        </Link>
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <p className="text-xs text-center text-muted-foreground">
                    Ao criar uma conta, você concorda com nossos{" "}
                    <Link
                      to="/termos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-zinc-400 transition-all duration-75"
                    >
                      Termos de Serviço
                    </Link>{" "}
                    e{" "}
                    <Link
                      to="/politica-de-privacidade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-zinc-400 transition-all duration-75"
                    >
                      Política de Privacidade
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Conteúdo da aba de Cadastro de Empresa */}
            <TabsContent value="empresa">
              <Card className="border-indigo-200/50 dark:border-indigo-800/50 shadow-sm dark:text-white">
                <CardHeader>
                  <CardTitle>Cadastro de Empresa</CardTitle>
                  <CardDescription>
                    Informe os dados básicos da sua empresa para que possamos
                    avaliar e criar sua conta.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Formulário de Dados Básicos da Empresa */}
                  <form
                    onSubmit={handleCompanySubmit(onCompanySubmit)}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Nome da Empresa</Label>
                      <Input
                        id="company-name"
                        placeholder="Digite o nome da sua empresa"
                        {...companyRegister("companyName")}
                      />
                      {companyErrors.companyName && (
                        <p className="text-xs text-red-600">
                          {companyErrors.companyName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="representative-name">
                        Nome do Representante
                      </Label>
                      <Input
                        id="representative-name"
                        placeholder="Digite o nome do representante"
                        {...companyRegister("representativeName")}
                      />
                      {companyErrors.representativeName && (
                        <p className="text-xs text-red-600">
                          {companyErrors.representativeName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-email">Email da Empresa</Label>
                      <Input
                        id="company-email"
                        type="email"
                        placeholder="Digite o email da empresa"
                        {...companyRegister("companyEmail")}
                      />
                      {companyErrors.companyEmail && (
                        <p className="text-xs text-red-600">
                          {companyErrors.companyEmail.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-password">Senha</Label>
                      <PasswordInput
                        id="company-password"
                        placeholder="Crie uma senha"
                        {...companyRegister("companyPassword")}
                      />
                      {companyErrors.companyPassword && (
                        <p className="text-xs text-red-600">
                          {companyErrors.companyPassword.message}
                        </p>
                      )}
                    </div>
                    {/* Seção de Mensagem */}
                    <div className="space-y-2">
                      <Label>Mensagem</Label>
                      <Textarea
                        placeholder="Descreva o que você espera da parceria com o Nexus (ex.: perfil de candidatos, desafios, etc.)"
                        className="min-h-[100px]"
                        {...companyRegister("message")}
                      />
                      {companyErrors.message && (
                        <p className="text-xs text-red-600">
                          {companyErrors.message.message}
                        </p>
                      )}
                    </div>
                    {/* Opções de Cadastro via OAuth para Empresas */}
                    <div className="space-y-2">
                      <p className="text-center text-sm text-muted-foreground dark:text-white">
                        Ou cadastre-se com:
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Button className="bg-red-600 text-white hover:bg-red-700 transition-colors">
                          Google
                        </Button>
                        <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                      >
                        Criar Conta da Empresa
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <p className="text-xs text-center text-muted-foreground">
                    Ao criar uma conta, você concorda com nossos{" "}
                    <Link
                      to="/termos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-zinc-400 transition-all duration-75"
                    >
                      Termos de Serviço
                    </Link>{" "}
                    e{" "}
                    <Link
                      to="/politica-de-privacidade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-zinc-400 transition-all duration-75"
                    >
                      Política de Privacidade
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
