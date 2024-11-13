import { NextResponse } from "next/server";



const url = `https://communnityvolunteering-production.up.railway.app/api/v1/users`


export async function POST (request: Request){
    const client = await request.formData()
    const response = await fetch(url,{
        method : 'POST',
        body: client
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}