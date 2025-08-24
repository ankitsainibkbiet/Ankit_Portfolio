import Particle from "./Particals"

function Hero() {
    return (
        <div className="relative h-screen w-full bg-gray-950">
            {/* Particles Background */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <Particle />
            </div>

            {/* Hero Content */}
            <div className="relative bottom-20 h-full flex flex-col justify-center items-center ">
                <p className="text-[170px] [font-family:'Syne'] font-bold mt-28">Ankit Saini</p>
                <p className="text-2xl mt-[-2%]">FullStack Engineer blending performance, accessibility & design.</p>
            </div>
        </div>
    );
}

export default Hero;
