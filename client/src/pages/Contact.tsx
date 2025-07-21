export default function Contact() {
    return <div className="max-w-[900px] mx-auto flex flex-col px-10">
        <p>
            I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.
        </p>
        <div className="flex flex-col gap-3 mt-5 border-l-10 border-black/2 dark:border-white/1 pl-5">
            <div>

                @
                <a href="mailto:alexandred56700@gmail.com" className="ml-2 highlight">
                    alexandred56700@gmail.com
                </a>
            </div>
            <div>
                {'>'}
                <a href="https://www.linkedin.com/in/alexandre-drean/" className="ml-2 highlight">LinkedIn</a>
            </div>
            <div>
                {'>'}
                <a href="https://github.com/Alexndrs" className="ml-2 highlight">Github</a>
            </div>
        </div>
    </div>
}
