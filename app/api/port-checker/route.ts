import { NextRequest, NextResponse } from "next/server";
import net from "net";

export async function POST(req: NextRequest) {
  try {
    const { host, port } = await req.json();

    const open = await new Promise<boolean>(
      (resolve) => {
        const socket = new net.Socket();

        socket.setTimeout(5000);

        socket.on("connect", () => {
          socket.destroy();
          resolve(true);
        });

        socket.on("error", () => {
          resolve(false);
        });

        socket.on("timeout", () => {
          socket.destroy();
          resolve(false);
        });

        socket.connect(port, host);
      }
    );

    return NextResponse.json({
      host,
      port,
      open,
    });
  } catch {
    return NextResponse.json(
      { error: "Port check failed" },
      { status: 500 }
    );
  }
}