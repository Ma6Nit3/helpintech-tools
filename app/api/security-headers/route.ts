import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    const targetUrl = url.startsWith("http")
      ? url
      : `https://${url}`;

    const response = await fetch(targetUrl, {
      method: "GET",
      redirect: "follow",
      headers: {
        "User-Agent": "HelpInTech Security Headers Checker",
      },
    });

    const headers = Object.fromEntries(
      response.headers.entries()
    );

    return NextResponse.json({
      success: true,
      headers,
      status: response.status,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to fetch headers",
      },
      {
        status: 500,
      }
    );
  }
}