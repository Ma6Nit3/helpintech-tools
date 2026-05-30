import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST(req: Request) {
  try {
    const { host } = await req.json();

    const { stdout } =
      await execAsync(`ping -c 4 ${host}`);

    return Response.json({
      result: stdout,
    });
  } catch {
    return Response.json(
      { error: "Ping failed" },
      { status: 500 }
    );
  }
}