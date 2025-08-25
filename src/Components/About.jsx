function About() {
  return (
    <div id="about" className="mt-40 mb-28">
      <div className="[font-family:'Syne'] text-6xl md:text-8xl font-bold mb-10">
        About Me
      </div>
      <div className="flex flex-col md:flex-row justify-center md:items-center md:space-x-20">
        <div className="w-full text-xl md:w-[45%] md:text-3xl font-sans">
          <p>
            Hi! I'm Ankit Saini, a passionate Full Stack Developer. I love
            building modern and responsive web applications, learning new
            technologies, and turning ideas into functional products. My
            expertise includes React, Node.js, MongoDB, Tailwind CSS, and more.
          </p>
          <a
            href="https://drive.google.com/file/d/1izldZhR1hc-kY1arnaYgryCqij0yK7mn/view?usp=sharing"
            target="_blank"
            className="my-8 block border w-fit p-1 text-3xl [font-family:'Royal'] bg-white text-black font-bold rounded-xl"
          >
            Resume
          </a>
        </div>
        <div className="md:w-[55%] mt-[-5%]">
          <img
            src="/AboutMeImg.png"
            alt="AboutImg-404"
            className="w-fit h-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default About;


