import { ScrollToProject, TitleLabel } from '../components';
import { AiOutlineHome } from 'react-icons/ai';

const Introduction = () => {
  return (
    <div className="pt-10 introduction" id="introduction">
      <TitleLabel>
        <AiOutlineHome className="text-lg" /> INTRODUCTION
      </TitleLabel>

      <h1 className="text-[60px] lg:text-[78px] font-light mt-14 leading-tight">
        <span className="my-name">Damilare Adepoju</span>
      </h1>
      <h2>Full-stack Developer</h2>

      <p className="mt-10 w-full lg:w-[60%]">
        Contributing to a better world through code!
      </p>

      <ScrollToProject />
    </div>
  );
};

export default Introduction;
