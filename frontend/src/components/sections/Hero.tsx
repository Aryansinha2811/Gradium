export default function Hero() {
    return (
        <section className="hidden md:block relative top-8">
            <div className="mx-auto max-w-7xl px-6 pt-32 pb-28">

                {/* Centered Content */}
                <div className="flex flex-col items-center text-center">

                    {/* Heading */}
                    <h1 className="text-6xl font-semibold leading-tight text-white max-w-3xl ">
                        Turn Your Skills <br />
                        Into{" "}
                        <span className="relative inline-block text-blue-400">
                            Real Opportunities
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="mt-6 text-[16px] font-semibold font-sans text-white/90 max-w-2xl">
                        Gradium connects college students with real-world projects.
                        Build experience, earn  
                        <span className="text-green-400 ml-1">Money</span>, and grow — all while 
                        <span className="ml-1 text-orange-500">Studying.</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex items-center gap-3">
                        <button className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 transition">
                            Get Started
                        </button>

                        <button className="rounded-lg border border-white/20 px-6 py-3 text-sm text-white/80 hover:text-white hover:border-white/40 transition">
                            How it Works
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
