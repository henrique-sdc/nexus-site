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
import { Textarea } from "src/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import NavBar from "src/components/NavBar/NavBar";
import Footer from "src/components/Footer/Footer";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log("Dados do contato:", data);
    // Aqui você pode enviar os dados para sua API ou serviço de e-mail
  };

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      <main className="flex-1 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-black dark:to-gray-900 py-12">
        <div className="container mx-auto px-4">
          {/* Link para voltar à página inicial */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-zinc-500 dark:text-white dark:hover:text-zinc-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para Início
            </Link>
          </div>

          <div className="mx-auto max-w-md">
            {/* Cabeçalho da página de contato */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2 dark:text-white">
                Contato
              </h1>
              <p className="text-muted-foreground dark:text-white">
                Envie uma mensagem para nós e entraremos em contato.
              </p>
            </div>

            <Card className="shadow-sm dark:text-white dark:bg-black/20">
              <CardHeader>
                <CardTitle>Fale Conosco</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Campo Nome */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      placeholder="Digite seu nome"
                      {...register("name", {
                        required: "O nome é obrigatório",
                      })}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  {/* Campo Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu email"
                      {...register("email", {
                        required: "O email é obrigatório",
                      })}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  {/* Campo Assunto */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      placeholder="Digite o assunto"
                      {...register("subject", {
                        required: "O assunto é obrigatório",
                      })}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-600">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                  {/* Campo Mensagem */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Digite sua mensagem"
                      className="min-h-[120px]"
                      {...register("message", {
                        required: "A mensagem é obrigatória",
                      })}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  {/* Botão de envio */}
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="mx-auto bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200"
                    >
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-center text-muted-foreground">
                  Responderemos o mais breve possível.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
