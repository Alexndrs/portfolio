import { ProjectCard } from "../components/ProjectCard";

export default function Home() {
    return <div className="max-w-[900px] mx-auto flex flex-col px-10">

        <div className="mb-30 pb-5 border-b border-black/10 dark:border-white/10 flex flex-col w-full">

            <p className="mb-4">
                Hey there ! I'm <span className="highlight bold">Alexandre Dréan</span> — a Software Engineer student who loves <span className="highlight italic">building</span> things.
            </p>
            <p className="mb-4">
                I'm wrapping up my <span className="highlight bold">Master's in Computer Science</span> and have spent the past few years crafting full-stack apps, diving into machine learning.
            </p>
            <p>
                I thrive on shipping, solving real-world problems, and <span className="highlight italic">turning ideas into useful, elegant products</span>.
            </p>
        </div>



        <div className="mb-30 pb-5 flex flex-col w-full">
            <div className="highlight bold">My last Projects</div>
            <div className="flex flex-col gap-10 mt-5">
                <ProjectCard
                    name="Portfolio"
                    description="This portfolio website, built with React and TypeScript, showcases my projects and skills."
                    startDate="2025"
                    endDate="2025"
                    tags={["React", "TypeScript", "Tailwind CSS"]}
                    githubLink="https://github.com/Alexndrs/portfolio"
                    liveLink=""
                />
                <ProjectCard
                    name="chatbotHub"
                    description="A full-stack application for using chatbot from multiple providers with a unified interface."
                    startDate="2025"
                    endDate=""
                    tags={["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "SQLite", "API providers"]}
                    githubLink="https://github.com/Alexndrs/multi-chatBot"
                    liveLink="https://chatbothub.org"
                />
                <ProjectCard
                    name="Pokemon generator"
                    description="A re-implementation of the DDPM model from scratch in PyTorch for generating Pokémon images, trained on the a Pokémon dataset collected from the pokeAPI website"
                    startDate="2025"
                    endDate=""
                    tags={["Python", "PyTorch", "Diffusion Models", "Unet Architecture"]}
                    githubLink="https://github.com/Alexndrs/pokemon-generator"
                    liveLink=""
                />
            </div>
        </div>
    </div>;
}
