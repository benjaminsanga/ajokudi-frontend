import * as Yup from 'yup'

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is required')
})