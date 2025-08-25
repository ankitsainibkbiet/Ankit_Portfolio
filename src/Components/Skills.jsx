function Skills() {

    const skills = [
        {
            name: "React.js",
            image: "/react.jpg"
        },
        {
            name: "HTML",
            image: "/html.png"
        },
        {
            name: "JavaScript",
            image: "/javascript.png"
        },
        {
            name: "CSS",
            image: "/css.png"
        },
        {
            name: "CPP",
            image: "/cpp.png"
        },
        {
            name: "MongoDB   ",
            image: "/mongodb.png"
        },
        {
            name: "C",
            image: "/c.png"
        },
        {
            name: "Tailwind",
            image: "/tailwind.png"
        },
        {
            name: "Express.js",
            image: "/express.png"
        },
        {
            name: "SQL",
            image: "/sql.png"
        },
        {
            name: "Postman",
            image: "/postman.png"
        },
        {
            name: "RazerPay",
            image: "/razerpay.png"
        },
        {
            name: "MYSQL",
            image: "/mysql.png"
        },
        {
            name: "Render",
            image: "/render.png"
        },
        {
            name: "Node.js",
            image: "/nodejs.png"
        },
        {
            name: "Vercel",
            image: "/vercel.png"
        },
        {
            name: "DSA",
            image: "/dsa.png"
        },
        {
            name: "Git",
            image: "/git.png"
        },
    ]

    return (
        <>
            <div id="skills" className="mb-20">
                <div className="[font-family:'Syne'] text-8xl lg:text-9xl font-bold mb-10">Skills</div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {skills.map((items) => (
                        <div
                            key={items.name}
                            className="border flex flex-col space-y-3 bg-white/20 rounded-xl p-5 hover:bg-amber-100 transition-all duration-300 hover:text-black max-h-52"
                        >
                            <img src={items.image} alt={items.name} className="h-[65%] mx-auto" />
                            <p className="text-center text-2xl md:text-3xl">
                                {items.name}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Skills