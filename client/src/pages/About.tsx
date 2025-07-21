import { ProjectCard } from "../components/ProjectCard"

export default function About() {
    return <div className="max-w-[900px] mx-auto flex flex-col px-10">
        <div className="mb-30 pb-5 flex flex-col w-full">
            <div className="flex flex-col gap-5 mt-5">
                <div className="highlight bold">Education</div>
                <ProjectCard
                    name="Polytechnique Montréal"
                    description="M.Eng in Comp Sci - that was easy lol"
                    startDate="2024"
                    endDate="2026"
                    tags={[]}
                    githubLink=""
                    liveLink=""
                />
                <ProjectCard
                    name="ENSTA PARIS"
                    description="Engineering Degree - that was easy lol"
                    startDate="2024"
                    endDate="2022"
                    tags={[]}
                    githubLink=""
                    liveLink=""
                />
                <ProjectCard
                    name="Lycée Clemenceau Nantes"
                    description="Preparatory Class MPSI/MP* - that was definitely not easy"
                    startDate="2020-2022"
                    endDate=""
                    tags={[]}
                    githubLink=""
                    liveLink=""
                />
            </div>
            <div className="flex flex-col gap-5 mt-5">
                <div className="highlight bold">Volunteering</div>
                <ProjectCard
                    name="Forum Aster"
                    description="That was a great experience, I was in charge of the website and the social media accounts"
                    startDate="2022"
                    endDate="2023"
                    tags={["HTML", "CSS", "JavaScript", "Community Management"]}
                    githubLink=""
                    liveLink=""
                />
                <ProjectCard
                    name="Un Quart de Plus"
                    description="A beautiful association that helps disabled people to enjoy running"
                    startDate=""
                    endDate=""
                    tags={["Running", "Hiking"]}
                    githubLink=""
                    liveLink=""
                />
            </div>
        </div>
    </div>
}
