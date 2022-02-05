import * as yup from 'yup'

const initialValues = {
    title: '',
    category:'',
    description:'',
    price:'',
    email:'',
    name:'',
    phone:'',
    files:[],
}


const validationSchema = yup.object().shape({
    title: yup.string()
    .min(6,'Escreva um Título Maior')
    .max(100,'Título Muito Grande')
    .required('Campo Obrigatório'),
    category:yup.string().required('Campo Obrigatório'),
    description: yup.string()
    .min(50,'Escreva uma descrição com 50 caracteres.')
    .required('Campo Obrigatório'),
    price: yup.number().required('Campo Obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('Campo Obrigatório'),
    name: yup.string().required('Campo Obrigatório'),
    phone: yup.number().required('Campo Obrigatório'),
    files: yup.array().min(1, 'Envie pelo menos uma foto').required('Campo Obrigatório')
})

export {
    initialValues,
    validationSchema,
}

