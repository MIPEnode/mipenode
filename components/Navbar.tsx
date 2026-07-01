import Image from "next/image";
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#070b1c]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3"
        >
          <Image
            src="/123.png"
            alt="MIPEnode"
            width={42}
            height={42}
            className="rounded-full border border-white/10 shadow-[0_0_15px_rgba(59,130,246,.25)]"
          />

          <span className="text-4xl font-extrabold tracking-tight text-white">
            MIPEnode
          </span>
        </a>

        {/* Menu */}
        <nav className="flex items-center gap-8 text-[16px] font-medium text-gray-300">

          <a
            href="#"
            className="transition hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#networks"
            className="transition hover:text-blue-400"
          >
            Networks
          </a>

          <a
            href="#services"
            className="transition hover:text-blue-400"
          >
            Services
          </a>

          <a
            href="#about"
            className="transition hover:text-blue-400"
          >
            About
          </a>

        </nav>
      </div>
    </header>
  );
}