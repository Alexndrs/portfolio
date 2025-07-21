import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";

export default function Home() {
    return <div className="max-w-[900px] mx-auto flex flex-col px-10">

        <div className="mb-15 pb-5 flex flex-col w-full">

            <p className="mb-6">
                Hey there ! I'm <span className="highlight bold text-lg">Alexandre Dréan</span> — a Software Engineer student who loves <span className="highlight italic">building</span> things.
            </p>
            <p className="mb-6">
                I'm wrapping up my <span className="highlight bold">Master's in Computer Science</span> and have spent the past few years crafting full-stack apps, diving into machine learning.
            </p>
            <p>
                I thrive on shipping, solving real-world problems, and <span className="highlight italic">turning ideas into useful, elegant products</span>.
            </p>
        </div>


        <div className="mb-10 pb-5 flex-col w-full">
            <div className="highlight bold">Selected Projects</div>
            <div className="flex flex-col gap-5 my-5 border-l-10 border-black/2 dark:border-white/1">
                <ProjectCard
                    name="chatbotHub"
                    description="A full-stack application for using chatbot from multiple providers with a unified interface."
                    startDate="2025"
                    endDate=""
                    tags={["React", "TypeScript", "Tailwind CSS", "Node", "Express", "SQLite", "LLMs", "AWS EC2"]}
                    githubLink="https://github.com/Alexndrs/multi-chatBot"
                    liveLink="https://chatbothub.org"
                />
                <ProjectCard
                    name="Pokemon generator"
                    description="A re-implementation of the DDPM model from scratch in PyTorch for generating Pokémon images, trained on the a Pokémon dataset collected from the pokeAPI website"
                    startDate="2025"
                    endDate=""
                    tags={["Python", "PyTorch", "Diffusion Models", "U-NET Architecture"]}
                    githubLink="https://github.com/Alexndrs/pokemon-generator"
                    liveLink=""
                />
            </div>
            <Link to="./work" className="bold underline">See more...</Link>
        </div>
        <div className="mb-10 pb-5 flex flex-col w-full">
            <div className="highlight bold">Quick snapshot</div>
            <div className="flex flex-col gap-5 mt-5 border-l-10 border-black/2 dark:border-white/1 pl-5">
                <p>Machine Learning Research Intern @ <a href="" className="highlight bold italic">LIRIS</a> <br />
                    Worked on Anomaly detection, collaborated with PhD researchers. <br />
                    more details <a className="bold underline" href="">Here</a>
                </p>
                <p>Software engineer freelance @ <a href="" className="highlight bold italic">Funding Quest</a> <br />
                    Worked on full-stack system design, LLM integration, and prompt engineering. <br />
                    more details <a className="bold underline" href="">Here</a>
                </p>
                <p>Engineering degree @ <a href="" className="highlight bold italic">ENSTA Paris</a> + Master's @ <a href="" className="highlight bold italic">Polytechnique Montréal</a> <br />
                    more details <a className="bold underline" href="">Here</a>
                </p>
            </div>
        </div>
        <div className="mb-30 flex flex-col w-full">
            <div className="highlight bold">Let's connect</div>
            <div className="flex flex-col gap-3 mt-5 border-l-10 border-black/2 dark:border-white/1 pl-5">
                <a href="/Alex_resume.pdf">Download my resume</a>
                <Link to="/contact" >Contact me</Link>
                <Link to="/blog" >Read the blog</Link>
            </div>
        </div>
    </div >;
}
