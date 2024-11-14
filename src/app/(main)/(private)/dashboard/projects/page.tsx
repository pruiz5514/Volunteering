import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ProjectsService } from '@/app/infrastructure/services/projects.service'
import HeaderPrivate from '@/components/organisms/HeaderPrivate/HeaderPrivate';
import ProjectsTemplate from '@/components/template/dashboard/ProjectsTemplate/ProjectsTemplate'
import { getServerSession } from 'next-auth';
import React from 'react'

const useProjectsService = new ProjectsService();
export default async function page() {

  const session = await getServerSession(authOptions);
  console.log(session?.user);

  const projects = await useProjectsService.findAllProjects('projects')

  return (
    <div>
      <ProjectsTemplate projects={projects.data}/>
    </div>
  )
}
