"use client";

import { IProjectsData } from '@/app/core/application/dto/dashboard/projects/get-projects-response.dto';
import { IProjectsPost } from '@/app/core/application/dto/dashboard/projects/post-projects.dto';
import { ProjectsService } from '@/app/infrastructure/services/projects.service';
import Button from '@/components/atoms/Button/Button'
import Form from '@/components/atoms/Form/Form'
import H1 from '@/components/atoms/H1/H1'
import FormFiled from '@/components/molecules/common/FormField/FormField';
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'


interface IProjectsForm{
  action:string;
  clientSelected?: IProjectsData;
  propFunction: ()=>void
}

const useProjectsService = new ProjectsService(`${process.env.NEXT_PUBLIC_FRONT_HOST}/api`)

const projectsSchema = yup.object()
    .shape({
        title: yup
            .string()
            .required("El titulo del proyecto es requerido"),
        description: yup
            .string()
            .required("Una breve descripción del proyecto es requerida"),
        startDate: yup
            .date()
            .required("La fecha de inicio del proyecto es requerida")
            .min(new Date(), "La fecha no puede ser anterior a hoy"),
        endDate: yup
            .date()
            .required("La fecha de finalización del proyecto es requerida")
            .min(
                yup.ref('startDate'), 
                "La fecha de fin no puede ser anterior a la fecha de inicio"
              )

    })

const ProjectsForm:React.FC<IProjectsForm> = ({action, clientSelected, propFunction}) => {

  const {
    control,
    handleSubmit,
    // setError,
    formState: {errors}
  } = useForm<IProjectsPost>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(projectsSchema),
    // defaultValues: clientSelected
  })

  const router = useRouter();


  const handlePost = async (data :IProjectsPost)=>{    
    await useProjectsService.postProjects('projects',data);
    propFunction();
    router.refresh();
  } 

//   const handleEdit = async (data:IClientsPost) =>{
//     await useClientsService.editClient('clients',String(clientSelected?.id), data);
//     propFunction();
//     router.refresh();
//   }
  
const onSubmit = action === 'add' ? handlePost : '';

  return (
    <Form onSubmit={handleSubmit(handlePost)}>
        <H1>{action === 'add' ? 'Publicar' : 'Editar'} proyecto</H1>
        <FormFiled<IProjectsPost>
            type='text'
            label='Titulo del proyecto'
            name = 'title'
            placeholder='Plant Seeds'
            error={errors.title}
            control={control}              
        />
       <FormFiled<IProjectsPost>
            type='text'
            label='Descripción del proyecto'
            name = 'description'
            placeholder='A project to clean up the local beach and promote environmental awareness among volunteers.'
            error={errors.description}
            control={control}              
        />
       <FormFiled<IProjectsPost>
            type='date'
            label='Fecha de inicio'
            name = 'startDate'
            error={errors.startDate}
            control={control}              
        />
        <FormFiled<IProjectsPost>
            type='date'
            label='Fecha de finalización'
            name = 'endDate'
            error={errors.endDate}
            control={control}              
        />
        <Button className='dark-button' type='submit'>{action === 'add' ? 'Publicar' : 'Editar'} proyecto</Button>
    </Form>
    
  )
}

export default ProjectsForm