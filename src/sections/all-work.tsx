
import WorkCard from "@/components/common/work-card";
import { Separator } from "@/components/ui/separator";
import { latestProjects } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const AllWork = () => {
    return (
        <section className=" relative flex flex-col">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" flex flex-col items-center px-4 md:px-10 pt-40 md:pt-48 pb-20 md:pb-40">
                <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                    <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                    <div className=" h-4 ml-2">
                        <Separator orientation="vertical" />
                    </div>
                    <span className=" ml-2 text-sm md:text-base">All Works</span>
                </div>
                <h2 className=" mt-2 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter text-center capitalize">
                    All Case Studies
                </h2>

                <p className="opacity-70 max-w-prose mx-auto text-center text-balance mt-2 text-sm md:text-base">
                    Explore our portfolio of exceptional web design and custom Webflow websites that drive results for businesses worldwide.
                </p>

                <div className=" w-full max-w-6xl mx-auto grid grid-cols-2 gap-x-6 gap-y-0 mt-8 md:mt-12 relative z-20">

                    <div className=" col-span-2 w-full flex flex-col items-start">
                        {latestProjects.map((project, index) => (
                            <Link key={index} href={project.link}>
                                <div className=" w-full grid grid-cols-1 md:grid-cols-2 mb-6 h-fit md:h-[52vh] bg-white overflow-hidden rounded-lg md:rounded-xl border hover:shadow">
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className=' flex flex-col justify-between px-4 py-4 md:px-8 md:py-8 w-full'>
                                                <div>
                                                    <Image
                                                        width={project.width}
                                                        height={project.height}
                                                        src={`/assets/${project.logo}`}
                                                        className="object-contain -ml-2 md:-ml-0 scale-90 md:scale-100"
                                                        alt="Logo"
                                                    />
                                                    <h4 className="text-lg md:text-xl tracking-tight leading-tight md:pr-20 font-medium mt-2">{project.result}</h4>

                                                    {project.category && (
                                                        <ul className=" flex flex-wrap gap-1.5 mt-4">
                                                            {project.category.map((item) => (
                                                                <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-sm md:text-[15px]" key={item}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>

                                                <div>
                                                    <Separator orientation='horizontal' className=' w-full mt-6 md:mt-0' />

                                                    <div className='inline-flex gap-2 items-baseline mt-4'>
                                                        <span className=' font-medium text-2xl tracking-tighter text-foreground'>{project.metric}</span>
                                                        <p>{project.metricDescription}</p>
                                                    </div>
                                                    {project.services && (
                                                        <ul className=" flex flex-wrap gap-1.5 mt-2">
                                                            {project.services.map((item) => (
                                                                <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-sm md:text-[15px]" key={item}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>

                                            <div className=' w-full h-[340px] md:h-full p-4'>
                                                <div className="w-full h-full relative flex items-center justify-center">
                                                    <div className=" w-[80%] h-[80%] relative z-20 rounded-md overflow-clip">
                                                        <Image fill className="object-cover object-top" src={`/assets/${project.previewImage}`} alt="Project preview" />
                                                    </div>
                                                    <div className=" inset-0 absolute top-0 left-0 right-0 bottom-0 rounded-lg overflow-clip">
                                                        <Image
                                                            fill
                                                            src={`/assets/${project.coverImage}`}
                                                            alt="image"
                                                            priority
                                                            quality={50}
                                                            className='object-cover'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className=' w-full h-[340px] md:h-full p-4'>
                                                <div className="w-full h-full relative flex items-center justify-center">
                                                    <div className=" w-[80%] h-[80%] relative z-20 rounded-md overflow-clip">
                                                        <Image fill className="object-cover object-top" src={`/assets/${project.previewImage}`} alt="Project preview" />
                                                    </div>
                                                    <div className=" inset-0 absolute top-0 left-0 right-0 bottom-0 rounded-lg overflow-clip">
                                                        <Image
                                                            fill
                                                            src={`/assets/${project.coverImage}`}
                                                            alt="image"
                                                            priority
                                                            quality={50}
                                                            className='object-cover'
                                                        />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className=' flex flex-col justify-between px-4 py-4 md:px-8 md:py-8 w-full'>
                                                <div>
                                                    <Image
                                                        width={project.width}
                                                        height={project.height}
                                                        src={`/assets/${project.logo}`}
                                                        className="object-contain -ml-2 md:-ml-0 scale-90 md:scale-100"
                                                        alt="Logo"
                                                    />
                                                    <h4 className="text-lg md:text-xl tracking-tight leading-tight md:pr-20 font-medium mt-2">{project.result}</h4>

                                                    {project.category && (
                                                        <ul className=" flex flex-wrap gap-1.5 mt-4">
                                                            {project.category.map((item) => (
                                                                <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-sm md:text-[15px]" key={item}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>

                                                <div>
                                                    <Separator orientation='horizontal' className=' w-full mt-6 md:mt-0' />

                                                    <div className='inline-flex gap-2 items-baseline mt-4'>
                                                        <span className=' font-medium text-2xl tracking-tighter text-foreground'>{project.metric}</span>
                                                        <p>{project.metricDescription}</p>
                                                    </div>
                                                    {project.services && (
                                                        <ul className=" flex flex-wrap gap-1.5 mt-2">
                                                            {project.services.map((item) => (
                                                                <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-sm md:text-[15px]" key={item}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className=" col-span-2 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-6 md:gap-y-6">
                        <WorkCard color="#877CF3" icon="/assets/lexos-favicon.png" image="/assets/lexos-showcase.png" title="Lexos" description="AI-powered platform for moving companies to efficiently handle inventory management and streamline operations." industry={["AI", "Logistics", "SaaS"]} link="https://www.golexos.com" />
                        <WorkCard color="#F3294D" icon="/assets/skillura-favicon.png" image="/assets/skillura-showcase.png" title="Skillura" description="SaaS platform that helps companies train and manage employees with comprehensive learning management tools." industry={["SaaS", "HR Tech", "E-Learning"]} link="https://www.skillura.com" />
                        <WorkCard color="#49ADFF" icon="/assets/meetingiq-favicon.png" image="/assets/meetingiq-showcase.png" title="Meeting IQ" description="Helps sales teams prepare for meetings with key insights delivered exactly when they need it for better outcomes." industry={["Sales Tech", "AI", "SaaS"]} link="https://www.meetingiq.com" />
                        <WorkCard color="#055FFC" icon="/assets/onlytool-favicon.png" image="/assets/onlytool-showcase.png" title="Onlytool" description="AI-powered automation platform for OnlyFans creators to manage fan interactions and conversations efficiently." industry={["AI", "Automation", "Social Media"]} link="https://www.onlytool.ai" />
                        <WorkCard color="#AECE2A" icon="/assets/stakenet-favicon.png" image="/assets/stakenet-showcase.png" title="Stakenet" description="AI-powered sports betting platform that helps users win more bets with data-driven insights and predictions." industry={["AI", "Sports", "Analytics"]} link="https://www.stakenet.app" />
                        <WorkCard color="#822BD3" icon="/assets/fetchtalent-favicon.png" image="/assets/fetchtalent-showcase.png" title="Fetchtalent AI" description="AI-powered recruitment platform that helps teams hire better and faster with intelligent candidate matching." industry={["AI", "HR Tech", "Recruitment"]} link="https://www.fetchtalent.ai" />
                        <WorkCard color="#EE8840" icon="/assets/ifs-favicon.png" image="/assets/infosignal-showcase.png" title="InfoSignal Inc." description="Real-time visibility and powerful insights, transforming the industrial workplace into a digital wonderland." industry={["Industrial Tech", "IoT", "Analytics"]} link="https://www.infosignal.com" />
                        <WorkCard color="#57AEFF" icon="/assets/textbooklm-favicon.png" image="/assets/textbooklm-showcase.png" title="TextbookLM" description="AI platform that turns any textbook into engaging podcasts, revolutionizing how students learn and consume content." industry={["AI", "Education", "Content"]} link="https://www.textbooklm.co" />
                        <WorkCard color="#B8835A" icon="/assets/toonlyai-favicon.png" image="/assets/toonlyai-showcase.png" title="Toonly AI" description="AI-powered platform that transforms photos into stunning cartoon styles, pixel art, and various artistic formats." industry={["AI", "Creative", "Image Processing"]} link="https://www.toonly.ai" />
                        <WorkCard color="#EE8840" icon="/assets/ifs-favicon.png" image="/assets/infoboard-showcase.png" title="InfoBoard" description="Advanced dashboard and analytics platform providing comprehensive business intelligence and data visualization." industry={["Analytics", "Dashboard", "B2B SaaS"]} link="https://www.ifs-infoboard.com" />
                        <WorkCard color="#B4D336" icon="/assets/geny-favicon.png" image="/assets/geny-showcase.png" title="Gen Y Solutions" description="AI digital agency providing comprehensive services across multiple industries with cutting-edge technology solutions." industry={["AI", "Digital Agency", "Consulting"]} link="https://www.genysolutions.tech" />
                        <WorkCard color="#560A2B" icon="/assets/nick-favicon.png" image="/assets/nick-showcase.png" title="Intero Properties" description="Professional real estate website for a San Francisco-based agent showcasing premium properties and market expertise." industry={["Real Estate", "Local Business", "Professional Services"]} link="https://www.nickwemyssrealestate.com" />
                        <WorkCard color="#AC91F1" icon="/assets/phcareers-favicon.png" image="/assets/phcareers-showcase.png" title="PH Careers" description="Job platform specifically designed to help people in the Philippines find employment opportunities and career advancement." industry={["Job Board", "Philippines Market", "Career"]} link="https://www.philippine.careers" />
                        <WorkCard color="#F67765" icon="/assets/fontsnatcher-favicon.png" image="/assets/fontsnatcher-showcase.png" title="Font Snatcher" description="Web tool that helps designers and developers discover and identify fonts used on websites across the internet." industry={["Design Tools", "Web Tools", "Typography"]} link="https://www.fontsnatcher.co" />
                        <WorkCard color="#E6AB1A" icon="/assets/midas-favicon.png" image="/assets/midas-showcase.png" title="Midas" description="Chrome extension that simplifies payments for people in Ghana, making financial transactions easier and more accessible." industry={["FinTech", "Ghana Market", "Browser Extension"]} link="https://www.usemidas.app" />
                        <WorkCard color="#8E55FC" icon="/assets/lancer-favicon.png" image="/assets/lancer-showcase.png" title="Lancershout" description="Award-winning marketing agency delivering business growth through innovative PPC strategies and proven Google Ads campaigns that drive measurable results." industry={["Marketing Agency", "PPC", "Google Ads"]} link="https://www.lancershout.com" />
                        <WorkCard color="#FB3F00" icon="/assets/zel-favicon.png" image="/assets/zel-showcase.png" title="Zel Designs" description="Personal portfolio website for a talented UX designer showcasing creative design projects and user experience expertise." industry={["Portfolio", "UX Design", "Creative"]} link="https://www.zeldesigns.com" />
                        <WorkCard color="#2451F5" icon="/assets/arete-favicon.png" image="/assets/arete-showcase.png" title="Arete Codes" description="Creative developer portfolio showcasing innovative web development projects and cutting-edge digital experiences." industry={["Portfolio", "Web Development", "Creative"]} link="https://www.arete.codes" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AllWork;