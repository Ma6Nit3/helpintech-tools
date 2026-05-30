import { NextRequest, NextResponse } from "next/server";
import dns from "dns/promises";

export async function POST(req: NextRequest) {
  try {
    const { domain } = await req.json();

    const records = await dns.resolveTxt(
      `_dmarc.${domain}`
    );

    return NextResponse.json({
      domain,
      records: records.flat(),
    });
  } catch {
    return NextResponse.json(
      { error: "DMARC record not found" },
      { status: 404 }
    );
  }
}