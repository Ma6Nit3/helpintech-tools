import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { domain } = await req.json();

    if (!domain) {
      return NextResponse.json(
        { error: "Domain is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://rdap.org/domain/${domain}`
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Domain not found" },
        { status: 404 }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to fetch RDAP information",
      },
      { status: 500 }
    );
  }
}