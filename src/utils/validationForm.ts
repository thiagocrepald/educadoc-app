import * as yup from 'yup'

//Cadastro [SOBRE VOCÊ]
export const schemaMy = yup.object().shape({
    name: yup.string().required('Informe o seu nome completo*'),
    cpf: yup.string().min(11, "CPF inválido").required("Informe seu CPF*"),
    dateNasc: yup.string().required("Informe sua data de nascimento*")
})
//Cadastro [DADOS DO MÉDICO]
export const schemaDoctor = yup.object({
    crm: yup.string().required('Preencha*'),
    estadocrm: yup.string().required("Insira o número e o estado do seu CRM*"),
    dataFormatura: yup.string().required("Informe a data da sua formatura*")
})
//Cadastro [DADOS DE ACESSO]
export const schemaAcess = yup.object({
    celular: yup.string().min(10, "Celular inválido").required("Informe seu celular*"),
    email: yup.string().email('E-mail inválido*').required('Informe o seu e-mail*'),
    senha: yup.string().min(6, "Sua senha precisa ter no minímo 6 digitos*").required("Informe a senha*"),
    confirm_senha: yup.string().oneOf([yup.ref("senha"), null], "A senha não confere*")
})
// Validação [BUSCAR EMAIL]
export const schemaForgout = yup.object({
    email: yup.string().email('E-mail inválido*').required('Informe o seu e-mail*'),
})
// Validação [RESET SENHA]
export const schemaResetSenha = yup.object({
    senha: yup.string().min(6, "Sua senha precisa ter no minímo 6 digitos*").required("Informe sua nova senha*"),
    confirm_senha: yup.string().oneOf([yup.ref("senha"), null], "A senha não confere*")
})