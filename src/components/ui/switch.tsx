import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "src/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // --- Estilos Base ---
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        // --- TAMANHO AJUSTADO ---
        "h-6 w-11", // Aumentado: h-6 (24px), w-11 (44px) - Ajuste w- conforme necessário
        // --- Cores de Fundo (MANUAIS) ---
        "data-[state=unchecked]:bg-zinc-200", // Light Mode Unchecked
        "dark:data-[state=unchecked]:bg-zinc-800", // Dark Mode Unchecked
        "data-[state=checked]:bg-purple-700", // Light & Dark Mode Checked
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          // --- Estilos Base ---
          "pointer-events-none block rounded-full shadow-lg ring-0 transition-transform",
          // --- TAMANHO AJUSTADO ---
          "size-5", // Aumentado: size-5 (20px)
          // --- Cores do Thumb (MANUAIS) ---
          "data-[state=unchecked]:bg-white", // Light Mode Unchecked (branco)
          "dark:data-[state=unchecked]:bg-black", // Dark Mode Unchecked (cinza claro)
          "data-[state=checked]:bg-white", // Light Mode Checked (branco)
          "dark:data-[state=checked]:bg-black", // Dark Mode Checked (preto)
          // --- Posicionamento (AJUSTADO PARA NOVO TAMANHO) ---
          "data-[state=unchecked]:translate-x-0.5", // Pequeno offset inicial
          "data-[state=checked]:translate-x-5" // Ajustado para w-11 e size-5
          // "data-[state=checked]:translate-x-[calc(100%-2px)]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
