export default function FeaturedProfiles() {
    return (
        <section className="hidden md:block relative opacity-100 top-0">
            <div className="mx-auto max-w-7xl px-6 py-24">

                {/* Centered Headline */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-5xl font-semibold text-white">
                        Talented Students. <span className="text-blue-400">Real Skills.</span>
                    </h2>
                    <p className="mt-4 text-[15px] text-white/90">
                        Discover students who are already building real-world projects
                        and delivering value to clients.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="mt-16 grid grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <ProfileCard
                        name="Aryan Sinha"
                        role="Frontend Developer"
                        skills={["React", "JavaScript", "Node.js", "APIs"]}
                        projects="12+"
                        rating="4.8"
                    />

                    {/* Card 2 */}
                    <ProfileCard
                        name="Ansal Pandey"
                        role="Backend Developer"
                        skills={["Node.js", "Express", "MongoDB"]}
                        projects="9+"
                        rating="4.9"
                    />

                    {/* Card 3 */}
                    <ProfileCard
                        name="Aman"
                        role="UI / UX Designer"
                        skills={["Figma", "UI Design", "Prototyping"]}
                        projects="15+"
                        rating="4.4"
                    />

                </div>
            </div>
        </section>
    )
}

/* ---------------------------------- */
/* Profile Card Component              */
/* ---------------------------------- */

function ProfileCard({
    name,
    role,
    skills,
    projects,
    rating,
}: {
    name: string
    role: string
    skills: string[]
    projects: string
    rating: string
}) {
    return (
        <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-2xl bg-blue-500/10 blur-2xl" />

            {/* Card */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition hover:border-white/20">
                <div className="space-y-5">

                    {/* Header */}
                    <div className="flex justify-center">
                        <h3 className="text-2xl font-semibold text-white">{name}
                            
                        </h3>
                        
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-md bg-blue-500/20 px-2 py-1 text-xs text-blue-400"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid-cols-2 gap-14 pt-2 flex justify-center">
                        <div>
                            <p className="text-xs text-white/50">Projects</p>
                            <p className="text-sm font-medium text-white">{projects}</p>
                        </div>
                        <div>
                            <p className="text-xs text-white/50">Rating</p>
                            <p className="text-sm font-medium text-white">⭐ {rating}</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 flex gap-3">
                        <button className="flex-1 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition">
                            View Profile
                        </button>
                        <button className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/40 transition">
                            Hire
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
