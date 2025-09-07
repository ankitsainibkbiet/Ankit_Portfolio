import { useState } from "react";

function Work() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const projects = [
        {
            name: "Trending Eyes",
            link: "https://www.trendingeyes.com/",
            img: "/Images/trending-eyes.png",
        },
        {
            name: "Cafeteria Website",
            link: "https://csir-ceeri-cafeteria.vercel.app/",
            img: "/Images/cafeteria.png",
        },
        {
            name: "Xblogger'S",
            link: "https://blogging-website-appwrite.vercel.app/",
            img: "/Images/blog.png",
        },
    ];

    const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    return (
        <div id="works" className="[font-family:'Syne'] mb-40 relative">
            <div className="text-7xl md:text-9xl font-bold mb-10">Works</div>

            <div className="flex flex-col text-5xl">
                {projects.map((project, idx) => (
                    <div key={idx} className="flex flex-col border-b border-gray-600 my-5 md:flex-none md:border-none md:my-0">
                        <img src={project.img} alt={project.name} className="md:hidden"/>
                        <a
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
                    </div>
                ))}
            </div>

            {/* Floating Image Preview */}
            {hoveredProject && (
                <img
                    src={hoveredProject.img}
                    alt={hoveredProject.name}
                    className="hidden md:block fixed w-96 rounded-xl shadow-lg pointer-events-none transition-opacity duration-300"
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
