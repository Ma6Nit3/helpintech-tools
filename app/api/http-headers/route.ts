import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    const response = await fetch(url);

    return NextResponse.json({
      headers: Object.fromEntries(
        response.headers.entries()
      ),
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch headers" },
      { status: 500 }
    );
  }
}