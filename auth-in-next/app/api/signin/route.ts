import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
export function POST(req: NextRequest) {

    const userid = 1;

    const token = jwt.sign({ userId: userid }, "SECRET")

    return NextResponse.json({
        token
    })
}