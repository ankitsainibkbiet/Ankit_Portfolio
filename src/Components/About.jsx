function About() {
  return (
    <div id="about" className="mt-40 mb-28 md:mb-0">
      <div className="[font-family:'Syne'] text-6xl md:text-8xl font-bold mb-10">
        About Me
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-20">
        <div className="w-full text-xl md:w-[45%] md:text-3xl font-sans">
          <p>
            Hi! I'm Ankit Saini, a passionate Full Stack Developer. I love
            building modern and responsive web applications, learning new
            technologies, and turning ideas into functional products. My
            expertise includes React, Node.js, MongoDB, Tailwind CSS, and more.
          </p>
          <a
            href="https://drive.google.com/file/d/1fUnNOjKkMMJaEu7eldwGWJnzsA7Pfi-H/view?usp=sharing"
            target="_blank"
            className="my-8 block border w-fit p-1 px-3 text-3xl [font-family:'Royal'] bg-white text-black font-bold rounded-xl"
          >
            Resume
          </a>
        </div>
        <div className="md:w-[55%] mt-[-5%]">
          <img
            src="/MyImg.jpg"
            alt="AboutImg-404"
            className="max-h-[70%] hover:scale-105 transition-all duration-300 md:ml-10"
          />
        </div>
      </div>
    </div>
  );
}

export default About;


