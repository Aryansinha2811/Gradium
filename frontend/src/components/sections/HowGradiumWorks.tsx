export default function HowGradiumWorks() {
    return (
        <section className="hidden md:block relative">
            <div className="mx-auto max-w-7xl px-6 py-32">

                {/* Centered Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-5xl font-bold text-white">
                        How <span className="text-blue-400">Gradium</span> Works
                    </h2>
                    <p className="mt-4 text-white/70">
                        A simple, transparent process designed for students and clients.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="mt-24 grid grid-cols-2 gap-12">

                    <Step
                        step="01"
                        title="Create Your Profile"
                        description="Showcase your skills, projects, and interests in one place so clients can discover you easily."
                    />

                    <Step
                        step="02"
                        title="Get Matched to Projects"
                        description="Gradium intelligently connects you with opportunities that align with your skills and goals."
                    />

                    <Step
                        step="03"
                        title="Collaborate & Deliver"
                        description="Work closely with clients, gain real experience, and deliver meaningful results."
                    />

                    <Step
                        step="04"
                        title="Get Paid Securely"
                        description="Payments are protected and released only after successful approval of your work."
                    />

                </div>
            </div>
        </section>
    )
}

/* ---------------------------------- */
/* Step Card                           */
/* ---------------------------------- */

function Step({
    step,
    title,
    description,
}: {
    step: string
    title: string
    description: string
}) {
    return (
        <div className="relative">

            {/* Subtle Glow */}
            <div className="absolute -inset-6 rounded-3xl bg-blue-500/10 blur-2xl" />

            {/* Card */}
            <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md transition hover:border-white/20">

                {/* Step Number */}
                <p className="text-4xl font-bold text-blue-500">
                    {step}
                </p>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-semibold text-white">
                    {title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-base text-white/70 leading-relaxed max-w-md">
                    {description}
                </p>

            </div>
        </div>
    )
}
