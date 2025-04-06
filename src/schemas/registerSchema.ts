import * as yup from "yup";

/**
 * Schema de validação para o cadastro de candidato.
 *
 * Valida:
 * - fullName: Deve ser uma string preenchida com pelo menos duas palavras.
 * - email: Deve ser um email válido e preenchido.
 * - password: Deve ter pelo menos 8 caracteres, conter letras minúsculas, maiúsculas e números.
 * - phone: Campo obrigatório.
 * - cpf: Campo obrigatório.
 */
export const candidateSchema = yup.object({
  fullName: yup
    .string()
    .required("Nome completo é obrigatório")
    .test("fullName", "Insira pelo menos duas palavras", (value) =>
      value ? value.trim().split(/\s+/).length >= 2 : false
    ),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(/[a-z]/, "A senha deve conter uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter uma letra maiúscula")
    .matches(/[0-9]/, "A senha deve conter um número"),
  phone: yup.string().required("Telefone é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório"),
});

/**
 * Schema de validação para o cadastro de empresa.
 *
 * Valida:
 * - companyName: Nome da empresa, campo obrigatório.
 * - representativeName: Nome do representante, campo obrigatório.
 * - companyEmail: Deve ser um email válido e preenchido.
 * - companyPassword: Deve ter pelo menos 8 caracteres, conter letras minúsculas, maiúsculas e números.
 * - message: Deve ser preenchido com pelo menos um caractere.
 */
export const companySchema = yup.object({
  companyName: yup.string().required("O nome da empresa é obrigatório"),
  representativeName: yup
    .string()
    .required("O nome do representante é obrigatório"),
  companyEmail: yup
    .string()
    .email("Insira um email válido")
    .required("Email da empresa é obrigatório"),
  companyPassword: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(/[a-z]/, "A senha deve conter uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter uma letra maiúscula")
    .matches(/[0-9]/, "A senha deve conter um número"),
  message: yup
    .string()
    .required("A mensagem é obrigatória")
    .min(1, "Escreva pelo menos um caractere"),
});
