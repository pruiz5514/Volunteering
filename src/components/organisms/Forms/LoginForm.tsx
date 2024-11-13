"use client";

import { ILoginRequest } from '@/app/core/application/dto/auth/login-request.dto';
import { RegisterService } from '@/app/infrastructure/services/register.service';
import Button from '@/components/atoms/Button/Button'
import Form from '@/components/atoms/Form/Form'
import H1 from '@/components/atoms/H1/H1'
import FormFiled from '@/components/molecules/common/FormField/FormField';
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'


const LoginSchema = yup.object()
    .shape({
        email: yup
            .string().email()
            .required("El email del cliente es obligatorio"),
        password: yup
            .string()
            .required('La contreseña es obligatoria'),
    })


const LoginForm = () => {

  const {
    control,
    handleSubmit,
    // setError,
    formState: {errors}
  } = useForm<ILoginRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(LoginSchema),
  })

  const router = useRouter();

  const handleLogin = async (data:ILoginRequest)=>{
    try{
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password
      })
      if(result?.status === 401){
        alert('Credenciales invalidas')
        return
      }
      router.push('/dashboard/projects')
    }catch(error){
      console.log(error)
    }
  }
  

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
        <H1> Iniciar sesión</H1>
        <FormFiled<any>
            type='text'
            label='Correo electronico'
            name = 'email'
            placeholder='juan@example.com'
            error={errors.email}
            control={control}              
        />
       <FormFiled<any>
            type='password'
            label='Contraseña'
            name = 'password'
            placeholder='*************'
            error={errors.password}
            control={control}              
        />

        <Button className='dark-button' type='submit'> Iniciar sesión</Button>
    </Form>
    
  )
}

export default LoginForm