import { ProjectCard } from "../components/ProjectCard";

export default function Home() {
    return <div className="max-w-[900px] mx-auto flex flex-col px-10">

        <div className="mb-30 pb-5 border-b border-black/10 dark:border-white/10 flex flex-col w-full">

            <p className="mb-4">
                Hey there ! I'm <span className="highlight bold text-lg">Alexandre Dréan</span> — a Software Engineer student who loves <span className="highlight italic">building</span> things.
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
            <div className="flex flex-col gap-5 mt-5">
                <ProjectCard
                    name="Portfolio"
                    description="This portfolio website, built with React and TypeScript, showcases my projects and skills."
                    startDate="2025"
                    endDate=""
                    tags={["React", "TypeScript", "Tailwind CSS"]}
                    githubLink="https://github.com/Alexndrs/portfolio"
                    liveLink=""
                />
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
                <ProjectCard
                    name="Funding Quest"
                    description="A question/answer form application under form of a chat that processes user input to determine if their research project is eligible for funding. I used llama model through Groq API and arxiv API for generating a state of the art, some advice and a custom report."
                    startDate="2025"
                    endDate=""
                    tags={["React", "TypeScript", "CSS", "fastAPI", "Python", "arxiv API", "LLM", "Prompt Engineering", "Azure webApp", "Docker"]}
                    githubLink=""
                    liveLink="https://www.diagcir.fr/"
                />
                <ProjectCard
                    name="Diffusion model for anomalies detection - NDA"
                    description='A diffusion model based framework for detecting anomalies in tabular data inspired of two state of the art methods : Ahmed, Imtiaz, et al. "Graph regularized autoencoder and its application in unsupervised anomaly detection.", Livernoche, Victor, et al. "On diffusion modeling for anomaly detection." -
                    Submitted a paper for ICML 2025 but it got rejected. NDA prevents me from sharing the code and the paper publicly.'
                    startDate="2024"
                    endDate=""
                    tags={["Python", "PyTorch", "anomaly detection", "Diffusion Models", "Graph Neural Networks"]}
                    githubLink=""
                    liveLink=""
                />
                <ProjectCard
                    name="Forum Aster"
                    description='My first website coded while volunteering for the Forum Aster association. It is a website to present an event where student from institut polytechnique meet companies. It is a static website coded in HTML, CSS and JS.'
                    startDate="2022"
                    endDate="2023"
                    tags={["HTML", "CSS", "JavaScript"]}
                    githubLink=""
                    liveLink="https://forumaster.fr/"
                />
            </div>
        </div>
    </div>;
}
