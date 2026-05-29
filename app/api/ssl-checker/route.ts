import { NextRequest, NextResponse } from "next/server";
import tls from "tls";

export async function POST(req: NextRequest) {
  try {
    const { domain } = await req.json();

    if (!domain || !domain.trim()) {
      return NextResponse.json(
        { error: "Domain is required" },
        { status: 400 }
      );
    }

    const certData = await new Promise((resolve, reject) => {
      const socket = tls.connect(
        {
          host: domain.trim(),
          port: 443,
          servername: domain.trim(),
          rejectUnauthorized: false,
        },
        () => {
          const cert = socket.getPeerCertificate();

          if (!cert || Object.keys(cert).length === 0) {
            reject(new Error("No certificate found"));
            return;
          }

          const expiryDate = new Date(cert.valid_to);

          const daysRemaining = Math.ceil(
            (expiryDate.getTime() - Date.now()) /
              (1000 * 60 * 60 * 24)
          );

          resolve({
            subject: cert.subject?.CN || "Unknown",
            issuer: cert.issuer?.CN || "Unknown",
            validFrom: cert.valid_from,
            validTo: cert.valid_to,
            daysRemaining,
            expired: daysRemaining < 0,
          });

          socket.end();
        }
      );

      socket.setTimeout(10000);

      socket.on("timeout", () => {
        socket.destroy();
        reject(new Error("Connection timeout"));
      });

      socket.on("error", reject);
    });

    return NextResponse.json(certData);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Unable to retrieve SSL certificate. Please check the domain name.",
      },
      { status: 500 }
    );
  }
}