import Link from "next/link";

interface ToolLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ToolLayout({
  title,
  description,
  children,
}: ToolLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f7ff] via-[#fbfcff] to-[#eef4ff]">

      <main className="max-w-5xl mx-auto px-6 py-20">

        <div className="max-w-3xl">

          <Link
            href="/"
            className="inline-flex items-center px-5 py-2 rounded-full border border-violet-200 bg-white/80 text-sm text-violet-700 shadow-sm backdrop-blur hover:bg-white transition duration-200"
          >
            ← Back to Home
          </Link>

          <h1 className="mt-8 text-5xl md:text-6xl font-black tracking-tight leading-tight">

            <span className="bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {title}
            </span>

          </h1>

          <p className="mt-6 text-xl leading-relaxed text-zinc-700">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              ✓ Free
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              ✓ Browser Based
            </span>

            <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium">
              ✓ No Data Stored
            </span>

          </div>

        </div>

        <div className="mt-16 rounded-[36px] border border-white/60 bg-white/80 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

          {children}

        </div>

      </main>

    </div>
  );
}