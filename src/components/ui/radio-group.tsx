import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
// import { CircleIcon } from "lucide-react"; // <<< REMOVIDO CircleIcon

import { cn } from "src/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

// RadioGroupItem (Item - com alterações no Indicator)
function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    // Outer circle styles (mantidos)
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        // Base styles for the outer ring
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        // Added flexbox to center the indicator div
        "flex items-center justify-center",
        className
      )}
      {...props}
    >
      {/* Indicator: This component only renders when the item is checked */}
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        // Classes para o indicador preenchido
        className={cn(
          "block size-2.5 rounded-full", // Tamanho (um pouco menor que size-4) e forma
          "bg-current" // Usa a cor do texto atual (que é 'text-primary' no Item)
        )}
      />
      {/* <<< CircleIcon REMOVIDO daqui */}
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
