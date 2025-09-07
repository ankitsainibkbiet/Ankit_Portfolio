function Skills() {

    const skills = [
        {
            name: "React.js",
            image: "/Images/react.jpg"
        },
        {
            name: "HTML",
            image: "/html.png"
        },
        {
            name: "JavaScript",
            image: "/Images/javascript.png"
        },
        {
            name: "CSS",
            image: "/Images/css.png"
        },
        {
            name: "CPP",
            image: "/Images/cpp.png"
        },
        {
            name: "MongoDB   ",
            image: "/Images/mongodb.png"
        },
        {
            name: "C",
            image: "/Images/c.png"
        },
        {
            name: "Tailwind",
            image: "/Images/tailwind.png"
        },
        {
            name: "Express.js",
            image: "/Images/express.png"
        },
        {
            name: "SQL",
            image: "/Images/sql.png"
        },
        {
            name: "Postman",
            image: "/Images/postman.png"
        },
        {
            name: "RazerPay",
            image: "/Images/razerpay.png"
        },
        {
            name: "MYSQL",
            image: "/Images/mysql.png"
        },
        {
            name: "Render",
            image: "/Images/render.png"
        },
        {
            name: "Node.js",
            image: "/Images/nodejs.png"
        },
        {
            name: "Vercel",
            image: "/Images/vercel.png"
        },
        {
            name: "DSA",
            image: "/Images/dsa.png"
        },
        {
            name: "Git",
            image: "/Images/git.png"
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