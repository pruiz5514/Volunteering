import { HttpClient } from "@/app/infrastructure/utils/client-http";
import { NextResponse } from "next/server";


const url = `${process.env.NEXT_PUBLIC_BACK_HOST}/projects`

const useHttpClient = new HttpClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    const headers = await useHttpClient.getHeader();
    const response = await fetch(`${url}/${id}`, {
        method: 'GET',
        headers: headers
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    const headers = await useHttpClient.getHeader();

    await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: headers
    });
}

export async function PATCH(request: Request, {params} : {params:{id:string}}){
    const {id} = params;
    const headers = await useHttpClient.getHeader();
    const body = await request.json();

    const response = await fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(body)
    })

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}
