import { ScrollToProject, TitleLabel } from '../components';
import { AiOutlineHome } from 'react-icons/ai';

const Introduction = () => {
  return (
    <div className="pt-10 introduction" id="introduction">
      <TitleLabel>
        <AiOutlineHome className="text-lg" /> INTRODUCTION
      </TitleLabel>

      <h1 className="text-[58px] lg:text-[64px] font-light mt-14 leading-tight">
        Hi, welcome to my page <br />I am <span className="my-name">Dami</span>
      </h1>
      <h2 className="text-[40px] text-gray-500">a software developer</h2>

      <p className="mt-10 w-full lg:w-[60%]">
        I love contributing to a better world through code! It would be my
        pleasure to be the solution to your software related innovations.
        <br />
        <br />
        Let's work together!
      </p>

      <ScrollToProject />
    </div>
  );
};

export default Introduction;
