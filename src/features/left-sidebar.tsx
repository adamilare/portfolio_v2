import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { SocialBtn } from '../components';
import profile from '../../public/dp.jpg';

const LeftSidebar = () => {
  const style = {
    backgroundImage: `url(${profile})`,
  };

  const socialLinks: {
    url: string;
    icon: JSX.Element;
  }[] = [
    {
      url: 'https://www.linkedin.com/in/damilareadepoju/',
      icon: <FaLinkedinIn className="text-black text-md"></FaLinkedinIn>,
    },
    {
      url: 'https://github.com/adamilare',
      icon: <AiFillGithub className="text-black text-md"></AiFillGithub>,
    },
  ];
  return (
    <div className="min-h-auto sm:min-h-auto md:min-h-auto lg:min-h-[90vh] profile-summary-section w-[95%] sm:w-[95%] md:w-[95%] lg:w-[24%] mx-auto left-0 sm:left-0 md:left lg:left-[20px] relative sm:relative md:relative lg:fixed top-0 sm:top-0 md:top-0 lg:top-[50%] translate-y-0 sm:translate-y-0 md:translate-y-0 lg:-translate-y-[50%]">
      <div className="flex items-center justify-between top-section">
        <h3 className="relative text-2xl font-extrabold name-logo">Dami</h3>
        <p className="text-sm job-title">Full-stack Developer</p>
      </div>

      <div
        className="profile-image-container w-full min-h-[230px] md:min-h-[500px] lg:min-h-[230px] rounded-[30px] mt-5 mb-8 "
        style={style}
      ></div>

      <a
        href="mailto:adamilarej@gmail.com"
        className="text-base block font-light text-center"
      >
        adamilarej@gmail.com
      </a>
      <p className="text-lg font-light text-center">Lagos, Nigeria</p>

      <ul className="flex items-center justify-center gap-4 mt-5 mb-7 social-icons">
        {socialLinks.map((link, index) => {
          return (
            <li key={index}>
              <SocialBtn link={link}></SocialBtn>
            </li>
          );
        })}
      </ul>

      <a
        data-to-scrollspy-id="contact"
        href="#contact"
        className="flex items-center justify-center w-full gap-2 py-4 tracking-widest text-white rounded-full linear-gradient"
      >
        <HiOutlineEnvelope className="text-lg" /> LET'S CONNECT
      </a>
    </div>
  );
};

export default LeftSidebar;
