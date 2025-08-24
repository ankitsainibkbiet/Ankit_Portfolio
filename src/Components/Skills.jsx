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
            name: "MongoDB",
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
            <div className="mb-20">
                <div className="[font-family:'Syne'] text-9xl font-bold mb-10">Skills</div>
                <div className="flex flex-wrap space-x-5 space-y-6">
                    {
                        skills.map((items, index) => (
                            <div className="border flex flex-col space-y-3 min-w-[15%] max-w-[15%] max-h-64 bg-white/20 rounded-xl mb-5 p-5 hover:bg-amber-100 transition-all duration-300 hover:text-black">
                                <img src={items.image} alt={items.name} className="h-[65%]" />
                                <p className="text-center text-4xl [font-family:'Royal']">{items.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Skills