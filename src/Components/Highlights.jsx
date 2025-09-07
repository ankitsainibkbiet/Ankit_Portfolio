function Highlights() {

    const experiences = [
        {
            title: "Web Developer Intern",
            company: "Birla Institute of Technology and Science (BITS), Pilani",
            duration: "June 2025 – Aug 2025",
            image: "/Images/web1.png",
            details: [
                "Handled and updated the frontend of BITS Convocation website",
                "Assisted in hostel allocation for student families and registration process in Convocation",
                "Created a hostel management module by modifying the existing IT service system"
            ]
        },
        {
            title: "Freelance Full Stack Web Developer",
            company: "TrendingEyes News Portal (Remote)",
            duration: "Jan 2025 – March 2025",
            image: "/Images/web2.jpg",
            details: [
                "Migrated an existing WordPress news site to a scalable MERN stack web application",
                "Built an admin dashboard enabling creation, editing, and deletion of news items",
                "Enhanced website performance, SEO, and customization flexibility",
            ],
            Live:"www.trendingeyes.com"
        },
        {
            title: "FullStack Web Developer Intern",
            company: "CSIR – Central Electronics Engineering Research Institute (CEERI), Pilani",
            duration: "June 2024 – Aug 2024",
            image: "/Images/web3.jpg",
            details: [
                "Revamped outdated cafeteria website UI with React and Tailwind CSS",
                "Integrated Razorpay payment gateway for secure online payments",
                "Solved issues of bad user interface and lack of digital transactions",
            ],
            Live:"csir-ceeri-cafeteria.vercel.app"
        }
    ];

    return (
        <div id="highlights" className="my-20 mt-40">
            <div className="[font-family:'Syne'] text-[55px] md:text-9xl font-bold mb-10">HighLights</div>
            <div className="flex flex-col md:flex-row gap-10">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border border-gray-600 rounded-2xl p-6 transition-all duration-300 hover:scale-[102%] hover:shadow-lg hover:shadow-amber-100 space-y-3 md:max-w-[30%] hover:bg-white/20"
                    >
                        <h3 className="text-xl mb-1">{exp.title}</h3>
                        <p className="mb-1">{exp.company}</p>
                        <p className="mb-4 text-sm">{exp.duration}</p>
                        <img src={exp.image} alt={exp.company} className="max-h-80 object-cover"/>
                        <ul className="list-disc space-y-1 p-6 font-sans">
                            {exp.details.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Highlights