
import { getServerSession } from "next-auth";
import { authOptions } from "./nextAuthConfig";

const defaultBaseUrl = process.env.NEXT_PUBLIC_BACK_HOST ?? '';

export class HttpClient {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || defaultBaseUrl;
  }

  async get<T>(url: string, searchParams?: { order: string }): Promise<T> {
    const headers = await this.getHeader({searchParams});
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "GET",
      cache: "no-store"
    });

    return this.handleResponse(response);
  }

  async getReport(url: string) {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: "GET",
      cache: "no-store"
    });

    return response;
  }

  async delete(url: string) {
    await fetch(`${this.baseUrl}/${url}`, {
      method: "DELETE",
    });
  }

  async post<T, B>(url:string, body: B): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: "POST",
      headers: {
        'Content-Type' : 'Application/json'
      },
      body: JSON.stringify(body),
    });

    return this.handleResponse(response);
  }

  async postBinary<T>(url:string, body: FormData): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: "POST",
      body:body,
    });

    return this.handleResponse(response);
  }

  async put <T, B> (url:string, body:B): Promise<T>{
    const response = await fetch(`${this.baseUrl}/${url}`,{
        method:"PUT",
        body: JSON.stringify(body)
    });

    return this.handleResponse(response)
  }

  async patch <T, B> (url:string, body:B): Promise<T>{
    const response = await fetch(`${this.baseUrl}/${url}`,{
        method:"PATCH",
        body: JSON.stringify(body)
    });

    return this.handleResponse(response)
  }

  async getHeader({searchParams}: {searchParams?: {order:string}}={}) {
    const session = await getServerSession(authOptions);


    const headers:HeadersInit = {
      "Content-Type" : "application/json"
    };

    if(session && session.user?.token){
      headers['Authorization'] = `Bearer ${session.user?.token}`
    }

    if(searchParams){
      const order = searchParams.order;
      if(order){
        headers['sortType'] = order
      }
    }
    
    return headers
    
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    return await response.json();
  }
}