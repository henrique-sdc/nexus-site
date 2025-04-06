import React from "react";
import { PatternFormat, PatternFormatProps } from "react-number-format";
import { Input } from "src/components/ui/input";

// Criei o tipo dos props omitindo a propriedade "format"
type CPFInputProps = Omit<PatternFormatProps, "format">;

// Componente CPFInput usando react-number-format (PatternFormat) e encaminhando a ref
export const CPFInput = React.forwardRef<HTMLInputElement, CPFInputProps>(
  (props, ref) => (
    <PatternFormat
      {...props}
      format="###.###.###-##" // Formato fixo para CPF
      mask="_" // Caractere de máscara
      customInput={Input} // Utiliza o Input do seu design system
      getInputRef={ref} // Encaminha a ref para o Input interno
      placeholder="000.000.000-00" // Exemplo de CPF
    />
  )
);

CPFInput.displayName = "CPFInput";
export default CPFInput;
