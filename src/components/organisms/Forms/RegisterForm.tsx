"use client";

import { ILoginRequest } from '@/app/core/application/dto/auth/login-request.dto';
import { IUsersPost } from '@/app/core/application/dto/register/post-users.dto';
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

const MAX_FILE_SIZE = (102400); // 500KB

const validFileExtensions: { [key: string]: string[] } = {
  image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp']
};

const useRegisterService = new RegisterService('/api');

function isValidFileType(fileName: string | undefined, fileType: keyof typeof validFileExtensions): boolean {
  return (
    !!fileName &&
    validFileExtensions[fileType].includes(fileName.split('.').pop() || '')
  );
}

const PostUserSchema = yup.object()
    .shape({
        email: yup
            .string().email()
            .required("El email del cliente es obligatorio"),
        password: yup
            .string()
            .required('La contreseña es obligatoria'),
        name: yup
            .string()
            .required('El nombre del usuario es obligatorio'),
        role: yup 
            .string()
            .required('El rol es obligatorio'),
        photo: yup
        .mixed<File>()
        // .test("is-valid-type", "Not a valid image type",
        // value => isValidFileType(value && value.name.toLowerCase(), "image"))
        // .test("is-valid-size", "Max allowed size is 100KB",
        // value => console.log(value?.size))
            
    })

    

const RegisterForm = () => {

  const {
    control,
    handleSubmit,
    // setError,
    setValue,
    getValues,
    formState: {errors}
  } = useForm<IUsersPost>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(PostUserSchema),
  })

//   const router = useRouter();

  const handleSignUp = async (data:IUsersPost)=>{
    const formData = new FormData();
    console.log(data);

  

    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('name', data.name);
    formData.append('role', data.role);
    
    if (getValues('photo')) {
      formData.append("photo", getValues('photo')!) ;
    }
    


    const response = await useRegisterService.postClient('register', formData);
    console.log(response);
    
    
  }

  const onChange = (e: any)=> {
    if(e.target.files[0]){
      setValue('photo',e.target.files[0])
    }
  } 
  

  return (
    <Form id='register-form' onSubmit={handleSubmit(handleSignUp)}>
        <H1>Crear una cuenta</H1>
        <FormFiled<IUsersPost>
            type='text'
            label='Correo electronico'
            name = 'email'
            placeholder='juan@example.com'
            error={errors.email}
            control={control}              
        />
       <FormFiled<IUsersPost>
            type='password'
            label='Contraseña'
            name = 'password'
            placeholder='*************'
            error={errors.password}
            control={control}              
        />
        
        <FormFiled<IUsersPost>
            type='text'
            label='Nombre'
            name = 'name'
            placeholder='Juan Suarez'
            error={errors.name}
            control={control}              
        />
        <FormFiled<IUsersPost>
            type='text'
            label='Rol'
            name = 'role'
            error={errors.role}
            control={control}              
        />
        <input type="file" onChange={onChange} />
        

        <Button className='dark-button' type='submit'> Iniciar sesión</Button>
    </Form>
    
  )
}

export default RegisterForm