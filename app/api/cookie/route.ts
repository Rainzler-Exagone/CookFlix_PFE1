import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
     const userId = req.cookies.get

     return new Response(JSON.stringify(userId))
}