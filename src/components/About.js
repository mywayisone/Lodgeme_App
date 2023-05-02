import ScrollAnimation from 'react-animate-on-scroll'

export default function About(){
    return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Oluwasegun.
            <br className="hidden lg:inline-block" /> I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a full-stack developer with over 6 years of experience in building web applications and services. My expertise lies in PHP, Golang, ReactJS, Laravel, and AWS. I have worked on a variety of projects ranging from e-commerce websites to enterprise-level applications, and I am passionate about creating scalable, maintainable, and efficient solutions.
          </p>
          <p className="mb-8 leading-relaxed">
            My journey as a developer began in college, where I studied computer science and fell in love with programming. I started working as a software engineer shortly after graduation and have been honing my skills ever since. Over the years, I have gained experience in various areas of web development, including front-end development, back-end development, and cloud computing.
          </p>
          <p className="mb-8 leading-relaxed">
            My proficiency in PHP, Golang, ReactJS, Laravel, and AWS enables me to build complex and robust web applications. PHP is my go-to language for server-side scripting, while Golang is my preferred language for building high-performance, concurrent applications. ReactJS is my favorite front-end framework, and I enjoy using it to create interactive user interfaces. Laravel is my preferred PHP framework, and I love how it simplifies web development tasks. AWS is my preferred cloud computing platform, and I have experience working with various AWS services such as EC2, S3, and RDS.
          </p>
          <p className="mb-8 leading-relaxed">
            Apart from my technical skills, I am also a team player, a good communicator, and a problem solver. I enjoy collaborating with other developers, designers, and stakeholders to create innovative and efficient solutions that meet business objectives. I believe in continuous learning and improvement and stay updated with the latest trends and technologies in web development.
          </p>
          <p className="mb-8 leading-relaxed">
            In conclusion, as a full-stack developer, I am passionate about creating scalable and efficient web applications and have a track record of delivering high-quality solutions. If you have a project that requires my expertise, feel free to get in touch. Thank you for reading!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <ScrollAnimation duration={100} animateIn="BounceInRight">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./linkedinPic2.jpeg"
          />
        </div>
        </ScrollAnimation>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover opacity-0  transition-opacity duration-1000 hover:opacity-100 object-center rounded-full"
            alt="hero"
            src="./linkedinPic2.jpeg"
          />
        </div> */}
       
      </div>
    </section>
  );
}
