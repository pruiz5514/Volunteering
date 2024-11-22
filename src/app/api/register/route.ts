import { NextResponse } from "next/server";



const url = `${process.env.NEXT_PUBLIC_BACK_HOST}/users`


export async function POST (request: Request){
    const client = await request.formData()
    const response = await fetch(url,{
        method : 'POST',
        body: client
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}