import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { ip } = await req.json();

    const response = await fetch(
      `https://ipinfo.io/${ip}/json`
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to lookup IP",
      },
      {
        status: 500,
      }
    );
  }
}