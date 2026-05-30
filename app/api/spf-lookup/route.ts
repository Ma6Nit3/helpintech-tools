import { NextRequest, NextResponse } from "next/server";
import dns from "dns/promises";

export async function POST(req: NextRequest) {
  try {
    const { domain } = await req.json();

    const records = await dns.resolveTxt(domain);

    const spf = records
      .flat()
      .filter((record) =>
        record.toLowerCase().startsWith("v=spf1")
      );

    return NextResponse.json({
      domain,
      records: spf,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to lookup SPF" },
      { status: 500 }
    );
  }
}