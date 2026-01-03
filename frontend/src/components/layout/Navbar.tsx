import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-5 z-50 w-full">
            {/* Full-width transparent layer */}
            <div className="w-full">
                {/* Centered content */}
                <div className="mx-auto max-w-10xl px-6">
                    <div className="flex h-16 items-center justify-between">

                        {/* Logo */}
                        <div className="text-xl font-bold text-white">
                            Grad<span className="text-blue-500">ium</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8 text-[16px] text-white/80 font-medium">
                            <a href="#how-it-works" className="hover:text-white transition">
                                How it Works
                            </a>
                            <a href="#gigs" className="hover:text-white transition">
                                Explore Gigs
                            </a>
                            <a href="#students" className="hover:text-white transition">
                                For Students
                            </a>
                            <a href="#clients" className="hover:text-white transition">
                                For Clients
                            </a>
                            <a href="#community" className="hover:text-white transition">
                                Community
                            </a>
                        </nav>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-3">
                            <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden text-white"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (still readable) */}
            {open && (
                <div className="md:hidden w-full border-t border-white/10 bg-black/40">
                    <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4 text-sm text-white/80">
                        <a href="#how-it-works" onClick={() => setOpen(false)}>How it Works</a>
                        <a href="#gigs" onClick={() => setOpen(false)}>Explore Gigs</a>
                        <a href="#students" onClick={() => setOpen(false)}>For Students</a>
                        <a href="#clients" onClick={() => setOpen(false)}>For Clients</a>
                        <a href="#community" onClick={() => setOpen(false)}>Community</a>

                        <button className="rounded-lg bg-blue-500 py-2 font-medium text-white">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
