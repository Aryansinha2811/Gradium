import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const navItem =
        "transition hover:text-white"

    const active =
        "text-white"

    const inactive =
        "text-white/80"

    return (
        <header className="sticky top-5 z-50 w-full">
            <div className="w-full">
                <div className="mx-auto max-w-10xl px-10">
                    <div className="flex h-16 items-center justify-between">

                        {/* Logo */}
                        <NavLink
                            to="/"
                            className="text-2xl font-bold text-white ml-4"
                        >
                            Grad<span className="text-blue-500">ium</span>
                        </NavLink>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium ml-6">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${navItem} ${isActive ? active : inactive}`
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/gigs"
                                className={({ isActive }) =>
                                    `${navItem} ${isActive ? active : inactive}`
                                }
                            >
                                Explore Gigs
                            </NavLink>

                            <NavLink
                                to="/students"
                                className={({ isActive }) =>
                                    `${navItem} ${isActive ? active : inactive}`
                                }
                            >
                                For Students
                            </NavLink>

                            <NavLink
                                to="/clients"
                                className={({ isActive }) =>
                                    `${navItem} ${isActive ? active : inactive}`
                                }
                            >
                                For Clients
                            </NavLink>
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
                            className="md:hidden text-white text-xl"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden w-full border-t border-white/10 bg-black/40 backdrop-blur">
                    <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4 text-sm">

                        {[
                            { label: "How it Works", to: "/how-it-works" },
                            { label: "Explore Gigs", to: "/gigs" },
                            { label: "For Students", to: "/students" },
                            { label: "For Clients", to: "/clients" },
                        ].map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `transition ${isActive ? "text-white" : "text-white/80"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        <button className="mt-2 rounded-lg bg-blue-500 py-2 font-medium text-white">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
