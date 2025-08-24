import { useState } from "react";

function Work() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const projects = [
        {
            name: "Trending Eyes",
            link: "https://www.trendingeyes.com/", 
            img: "/trending-eyes.png", 
        },
        {
            name: "Cafeteria Website",
            link: "https://csir-ceeri-cafeteria.vercel.app/", 
            img: "/cafeteria.png", 
        },
    ];

    const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className="[font-family:'Syne'] mb-40 relative">
            <div className="text-9xl font-bold">Works</div>

            <div className="flex flex-col text-5xl">
                {projects.map((project, idx) => (
                    <a
                        key={idx}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-gray-800 py-8 flex justify-between items-center cursor-pointer"
                        onMouseEnter={() => setHoveredProject(project)}
                        onMouseLeave={() => setHoveredProject(null)}
                        onMouseMove={handleMouseMove}
                    >
                        <p>{project.name}</p>
                        <i className="fa-regular fa-share-from-square"></i>
                    </a>
                ))}
            </div>

            {/* Floating Image Preview */}
            {hoveredProject && (
                <img
                    src={hoveredProject.img}
                    alt={hoveredProject.name}
                    className="fixed w-96 rounded-xl shadow-lg pointer-events-none transition-opacity duration-300"
                    style={{
                        top: cursorPos.y,
                        left: cursorPos.x,
                    }}
                />
            )}
        </div>
    );
}

export default Work;
