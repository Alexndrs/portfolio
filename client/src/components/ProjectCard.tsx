export function ProjectCard({ name, description, startDate, endDate, tags, githubLink, liveLink }: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    tags: string[];
    githubLink?: string;
    liveLink?: string;
}) {

    return <div className="flex w-full bg-transparent hover:bg-black/2 dark:hover:bg-white/1 p-4 rounded-xl transition-colors duration-200 flex-col md:flex-row">
        <div className="w-24 flex flex-shrink-0 text-xs">{startDate}{endDate ? ' - ' + endDate : ''}</div>
        <div className="flex flex-col flex-1">
            <div className="highlight flex items-center">
                {name}
                {githubLink ? (<> -<a className="ml-4 hightlight underline" href={githubLink}>Github</a></>) : ''}
                {liveLink ? (
                    <div className="ml-4 bg-green-500/20 dark:bg-green-600/20 px-2 py-[2px] rounded-full flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 dark:text-green-400">
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                        <a className="text-xs text-green-600 dark:text-green-400" href={liveLink}>Live here</a>
                    </div>
                ) : ''}
            </div>
            <div className="text-xs mt-2">{description}</div>
            {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 px-2 py-1 rounded-full text-xs cursor-default transition-colors duration-200">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </div>;
}