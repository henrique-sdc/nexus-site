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
import { ArrowLeft } from "lucide-react";

// Tipagem para os dados do formulário de recuperação de senha
type ForgotPasswordFormData = {
  email: string;
};

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>();

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = (data) => {
    console.log("Email para redefinição:", data);
    // Aqui você pode implementar o envio de instruções para redefinição da senha
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-12 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-black dark:to-gray-900">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-zinc-500 dark:text-white dark:hover:text-zinc-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Início
          </Link>

          <div className="mt-12"></div>
          <div className="mx-auto max-w-md">
            <Card className="shadow-sm dark:text-white">
              <CardHeader>
                <CardTitle className="text-center text-3xl font-bold">
                  Esqueceu a Senha?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground dark:text-stone-200">
                  Para redefinir a sua senha, primeiramente insira seu e-mail.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu e-mail"
                      {...register("email", {
                        required: "O e-mail é obrigatório",
                      })}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <p className="text-center text-muted-foreground text-neutral-800 dark:text-slate-300">
                    Certifique-se de que o e-mail é o mesmo utilizado nos
                    processos seletivos.
                  </p>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="mx-auto bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                    >
                      Continuar
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-center text-muted-foreground">
                  Lembrou a senha?{" "}
                  <Link
                    to="/login"
                    className="underline underline-offset-2 hover:text-zinc-400 transition-all duration-75"
                  >
                    Faça login
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
