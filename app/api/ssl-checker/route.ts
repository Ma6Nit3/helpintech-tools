import { NextRequest, NextResponse } from "next/server";
import tls from "tls";

export async function POST(req: NextRequest) {
  try {
    const { domain } = await req.json();

    if (!domain) {
      return NextResponse.json(
        { error: "Domain is required" },
        { status: 400 }
      );
    }

    const certData = await new Promise((resolve, reject) => {
      const socket = tls.connect(
        {
          host: domain,
          port: 443,
          servername: domain,
          rejectUnauthorized: false,
        },
        () => {
          const cert = socket.getPeerCertificate();

          resolve({
            subject: cert.subject?.CN || "Unknown",
            issuer: cert.issuer?.CN || "Unknown",
            validFrom: cert.valid_from,
            validTo: cert.valid_to,
          });

          socket.end();
        }
      );

      socket.on("error", reject);
    });

    return NextResponse.json(certData);
  } catch {
    return NextResponse.json(
      { error: "Unable to check SSL" },
      { status: 500 }
    );
  }
}