import { NextRequest, NextResponse } from "next/server";
import dns from "dns/promises";

export async function POST(req: NextRequest) {
  try {
    const { domain, selector } =
      await req.json();

    const records = await dns.resolveTxt(
      `${selector}._domainkey.${domain}`
    );

    return NextResponse.json({
      selector,
      domain,
      records: records.flat(),
    });
  } catch {
    return NextResponse.json(
      { error: "DKIM record not found" },
      { status: 404 }
    );
  }
}