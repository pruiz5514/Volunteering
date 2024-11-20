import { IProjectsResponse } from "../dto/dashboard/projects/get-projects-response.dto"
import { IProjectsPostResponse } from "../dto/dashboard/projects/post-projects-response.dto"
import { IProjectsPost } from "../dto/dashboard/projects/post-projects.dto"

export interface PProjects {
    /**
   * Get all projects
   * @returns {Promise<IProjectsResponse>} - Get all projects response
   */
    findAllProjects(url: string): Promise<IProjectsResponse>

     /**
   * Post a project
   *  @param {string} - project url
   *  @param {IProjectPost} - project body
   *  @returns {Promise<IProjectsPostResponse>} - Post project response 
   */
     postProjects(url:string, body:IProjectsPost): Promise<IProjectsPostResponse>

     /**
   * Delete a project
   *  @param {string} - project url
   *  @param {string} - project id
   *  @returns {Promise<void>} 
   */
     deleteProject(url:string,id:number): Promise<void>

     /**
   * edit a project
   *  @param {string} - project url
   *  @param {number} - project id
   *  @param {IProjectsPost} - Service body
   *  @returns {Promise<IProjectsPostResponse>} - Edit service response 
   */
     editProject(url:string, id:number, body: IProjectsPost): Promise<IProjectsPostResponse>
}