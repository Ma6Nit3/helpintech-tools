import { NextResponse } from "next/server";
import sslChecker from "ssl-checker";

export async function POST(req: Request) {
  try {
    const { domain } = await req.json();

    const result = await sslChecker(domain, {
      method: "GET",
      port: 443,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to fetch SSL certificate" },
      { status: 500 }
    );
  }
}