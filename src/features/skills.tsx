import { SkillsCard, TitleLabel } from '../components';
import { BiShapeTriangle } from 'react-icons/bi';
import { SkillsModel } from '../model/skill';

const Skills = () => {
  return (
    <div className="my-16 lg:my-40 about-section" id="skills">
      <TitleLabel>
        <BiShapeTriangle className="text-lg" /> MY SKILLS
      </TitleLabel>

      <h1
        data-aos="fade-up"
        data-aos-duration="2500"
        className="mt-10 text-4xl lg:text-5xl w-full lg:w-[80%] font-light leading-10 lg:leading-[60px]"
      >
        My <span className="text-lightBlue">Advantages</span>
      </h1>
      <div className="grid w-full grid-cols-2 gap-5 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {SkillsModel.map((skill) => (
          <SkillsCard skillProp={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
