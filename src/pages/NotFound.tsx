import React from "react";
import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button";
import { Frown } from "lucide-react";
import NavBar from "src/components/NavBar/NavBar";
import Footer from "src/components/Footer/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
        <div className="max-w-2xl mx-auto p-8 text-center">
          {/* Ícone Triste */}
          <Frown className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />{" "}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            404
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Desculpe-nos, a página que você estava tentando acessar neste
            endereço não foi encontrada.
          </p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8">
            Talvez você tenha digitado o endereço errado ou a página tenha sido
            movida.
          </p>
          <Button asChild>
            <Link
              to="/"
              className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-200 px-6 py-3 rounded-md font-semibold"
            >
              Voltar para a página inicial
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
