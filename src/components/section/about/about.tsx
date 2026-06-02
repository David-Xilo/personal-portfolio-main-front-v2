export default function About() {
    return (
        <section id="about" className="py-[100px] border-t border-dm-line dark:border-dm-line-dark scroll-mt-16">
            <div className="max-w-[1180px] mx-auto px-6 md:px-16">
                
                {/* Section Header */}
                <div className="flex items-baseline gap-4 mb-16">
                    <span className="font-mono text-xs tracking-wider text-dm-accent dark:text-dm-accent-dark font-medium">01</span>
                    <h2 className="font-serif text-3xl font-normal leading-none tracking-[-0.015em] text-dm-text dark:text-dm-text-dark">
                        Profile &amp; Perspective
                    </h2>
                </div>

                {/* Editorial Two-Column Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-10 lg:gap-[100px]">
                    
                    {/* Left Column: Bold Serif Statement */}
                    <div className="font-serif text-[clamp(24px,3.8vw,36px)] leading-[1.2] font-normal tracking-[-0.015em] text-dm-text dark:text-dm-text-dark">
                        Designing secure systems, shaping high-performance infrastructure, and{' '}
                        <span className="italic text-dm-accent dark:text-dm-accent-dark">bridging technology</span> with finance.
                    </div>

                    {/* Right Column: Bio Paragraphs */}
                    <div className="flex flex-col gap-6 text-[15px] md:text-[15.5px] leading-[1.65] text-dm-text-mut dark:text-dm-text-mut-dark">
                        <p>
                            Senior Engineer with experience designing low-latency, high-throughput systems, building secure backend services, and driving real-time data pipelines.
                            I focus on system integrity, risk control, and reliable data flows in market infrastructure.
                            I enjoy solving the hard problems and turning them into stable, secure solutions.
                        </p>
                        <p>
                            When I’m not working on systems, I enjoy simplifying complexity, designing secure services, and watching data move smoothly.
                            Outside of code, you’ll often find me reading about market trends or learning something new from my personal projects.
                        </p>
                        <p>
                            In my downtime you’ll often find me curled up with a good book on literature or history and then out for a swim or a run to clear my mind and move my body.
                            I believe in balancing the cerebral and the physical so I can bring fresh energy and ideas into everything I do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
