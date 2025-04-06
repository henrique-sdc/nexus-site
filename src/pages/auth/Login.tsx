import React from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import PasswordInput from "src/components/PasswordInput/PasswordInput";
import { ArrowLeft } from "lucide-react";

// Tipagem para os dados do formulário de login
type LoginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  // Configura o formulário com react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  // Função chamada ao submeter o formulário
  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log("Dados de login:", data);
    // Aqui você pode enviar os dados para a API de login
  };

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

        <div className="mb-8 "></div>

        <div className="mx-auto max-w-md">
          {/* Cabeçalho da página de login */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2 dark:text-white">
              Login no Nexus
            </h1>
            <p className="text-muted-foreground dark:text-white">
              Acesse sua conta para continuar.
            </p>
          </div>

          <Card className="border-purple-200/50 dark:border-purple-800/50 shadow-sm dark:text-white">
            <CardHeader>
              <CardTitle>Entre na sua conta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Campo de Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    {...register("email", { required: "Email é obrigatório" })}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                {/* Campo de Senha */}
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <PasswordInput
                    id="password"
                    placeholder="Digite sua senha"
                    {...register("password", {
                      required: "Senha é obrigatória",
                    })}
                  />
                  {errors.password && (
                    <p className="text-xs text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                {/* Link para recuperação de senha */}
                <div className="flex justify-end">
                  <Link
                    to="/recuperar-senha"
                    className="text-sm text-muted-foreground hover:text-zinc-400 transition-all duration-75 dark:text-white"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                {/* Botão de submissão */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="mx-auto bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                  >
                    {/* Link Temporário */}
                    <Link to="/dashboard/candidato">Entrar</Link>
                  </Button>
                </div>
              </form>
              {/* Seção de login via OAuth */}
              <div className="space-y-2">
                <p className="text-center text-sm text-muted-foreground dark:text-white">
                  Ou faça login com:
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
            </CardContent>
            <CardFooter>
              <p className="text-xs text-center text-muted-foreground">
                Ainda não tem uma conta?{" "}
                <Link
                  to="/cadastro"
                  className="underline underline-offset-2 hover:text-zinc-400 transition-all duration-75"
                >
                  Cadastre-se
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
