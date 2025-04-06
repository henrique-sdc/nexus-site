import React from "react";
import { PatternFormat, PatternFormatProps } from "react-number-format";
import { Input } from "src/components/ui/input";

// Criei o tipo dos props omitindo a propriedade "format"
type TelefoneInputProps = Omit<PatternFormatProps, "format">;

// Componente TelefoneInput usando react-number-format (PatternFormat) e encaminhando a ref
export const TelefoneInput = React.forwardRef<
  HTMLInputElement,
  TelefoneInputProps
>((props, ref) => (
  <PatternFormat
    {...props}
    format="(##) #####-####" // Formato fixo para telefone
    mask="_" // Caractere de máscara
    customInput={Input} // Utiliza o Input do seu design system
    getInputRef={ref} // Encaminha a ref para o Input interno
    placeholder="(99) 99999-9999" // Exemplo de telefone
  />
));

TelefoneInput.displayName = "TelefoneInput";
export default TelefoneInput;
