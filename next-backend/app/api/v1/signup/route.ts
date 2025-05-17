import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient()

export async function POST(req: NextRequest){
    const body = await req.json()

    const respoonse = await client.user.create({
        data:{
            name: body.name,
            password:body.password
        }
    })

    return NextResponse.json({
        message :"User Added"
    })


}