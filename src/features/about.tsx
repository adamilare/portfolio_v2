import { AiOutlineUser } from 'react-icons/ai';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { BiChevronsDown } from 'react-icons/bi';
import { TitleLabel } from '../components';

const About = () => {
  return (
    <div
      className="my-16 lg:my-40 about-section"
      id="about"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <TitleLabel>
        <AiOutlineUser className="text-lg" /> ABOUT
      </TitleLabel>

      <h1 className="mt-10 text-4xl lg:text-5xl w-full lg:w-[80%] font-light leading-10 lg:leading-[60px]">
        Meet Dami
      </h1>
      <p
        className="mt-6 w-full lg:w-[70%]"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        I am delighted to have you here. My name is Damilare (Dami) Adepoju. I
        am a mechanical engineer turned software engineer. I love creating
        innovative products and services, passionate about building products
        that solve real-world problems and make life easier.
      </p>

      <Inplace>
        <InplaceDisplay>
          <p
            className="w-full lg:w-[70%] cursor-pointer my-name italic font-bold flex items-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <BiChevronsDown className="text-lg animate-bounce" />
            You want to know more?
          </p>
        </InplaceDisplay>
        <InplaceContent>
          <p
            className="mt-6 w-full lg:w-[70%]"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            My full-time venture into software development began with
            Microverse, a remote school for software development. While enrolled
            there, I spent over 1200 hours learning and mastering the
            fundamentals of software development, algorithms, data structures,
            and the art of remote pair programming - working with great people
            across cultures and borders. I also had the opportunity to work on
            some awesome projects with Ruby, Rails, JavaScript, React, and
            Redux. It was altogether a breathtaking experience!
          </p>

          <p
            className="mt-6 w-full lg:w-[70%]"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            In my years of experience in the software development industry, I
            have built web and mobile applications from scratch, demonstrating
            my ability to handle the entire development process. These
            experiences have given me a deep understanding of product
            development and the importance of creating software that meets the
            needs of users and is maintainable. I am driven by a commitment to
            excellence, always striving for the highest quality in my work.
          </p>
          <p
            className="mt-6 w-full lg:w-[70%]"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            My enthusiasm for critical thinking frequently leads my teams to
            entrust me with intricate algorithmic challenges. This empowers
            fellow members to leverage their individual expertise, culminating
            in a notable 20% enhancement in team throughput. Alongside this, my
            aptitude for collaboration and adept communication ensures seamless
            teamwork, fostering a positive and high-yielding work environment.
          </p>
        </InplaceContent>
      </Inplace>
    </div>
  );
};

export default About;
