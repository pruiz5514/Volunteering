import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

const url = `${process.env.NEXT_PUBLIC_BACK_HOST}/projects/report/download`


export async function GET (){

    const session = await getServerSession(authOptions);

    const response = await fetch(url,{
        method : 'GET',
        headers: {
            'Authorization' : `Bearer ${session?.user.token}`,
        },

    });
    const data = await response.arrayBuffer() ;
    const res = new NextResponse(data, { status: 200 });

    res.headers.set("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.headers.set("Content-Disposition", "attachment; filename=report.xlsx");

    return res
}