import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-10">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <Image
            src="/123.png"
            alt="MIPEnode"
            width={42}
            height={42}
            className="rounded-full border border-white/10"
          />

          <span className="text-3xl font-bold text-white">
            MIPEnode
          </span>

        </div>

        <p className="mt-4 text-center text-gray-400">
          Professional Blockchain Validator Infrastructure
        </p>

        {/* Social */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">

          <a
            href="https://github.com/MIPEnode"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://x.com/MIPEnode"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            X (Twitter)
          </a>

          <a
            href="https://discord.gg/MIPEnode_9140"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            Discord
          </a>

          <a
            href="https://anphat1686@gmail.com"
            className="transition hover:text-blue-400"
          >
            Email
          </a>

        </div>

        <div className="mt-8 h-px w-full bg-white/10" />

        <p className="mt-6 text-center text-sm text-gray-500">
          © 2026 MIPEnode. All rights reserved.
        </p>

      </div>
    </footer>
  );
}