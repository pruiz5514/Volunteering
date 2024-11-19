import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ProjectsService } from '@/app/infrastructure/services/projects.service'
import ProjectsTemplate from '@/components/template/dashboard/ProjectsTemplate/ProjectsTemplate'
import { getServerSession } from 'next-auth';
import React from 'react'

const useProjectsService = new ProjectsService();

interface IProps {
  searchParams:{
    page: string;
    size: string;
    order?: string
    name:string;
  }
}

export default async function page({searchParams}:IProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 8;
  const name = searchParams.name ? String(searchParams.name) : '';

  const session = await getServerSession(authOptions);
  console.log(session);
  

  const projects = await useProjectsService.findAllProjects(`projects?page=${page}&size=${size}&name=${name}`)

  return (
    <div>
      <ProjectsTemplate projects={projects}/>
    </div>
  )
}
