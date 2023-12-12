import { RiSuitcase2Line } from 'react-icons/ri';
import { TitleLabel } from '../components';
import { Timeline } from 'primereact/timeline';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { BiChevronsRight } from 'react-icons/bi';

type experienceType = {
  startdate: string;
  enddate: string;
  location: string;
  company: string;
  companyUrl: string;
  role: string;
};

type educationType = {
  startdate: string;
  enddate: string;
  certification: string;
  school: string;
  schoolUrl: string;
};

const Resume = () => {
  const experiences = [
    {
      startdate: 'Sept 2023',
      enddate: 'Dec 2023',
      location: 'Remote',
      company: 'Torre',
      companyUrl: 'https://torre.ai/damilareadepoju',
      role: 'Software Engineer Intern',
    },
    {
      startdate: 'Jan 2016',
      enddate: 'Present',
      location: 'Lagos, Nigeria',
      company: 'RotMount Ltd',
      companyUrl: '#',
      role: 'Team Lead',
    },
    {
      startdate: 'April 2023',
      enddate: 'June 2023',
      location: 'Lagos, Nigeria',
      company: 'E-Tracka',
      companyUrl: 'https://e-tracka-frontend.vercel.app/',
      role: 'Full-stack Developer',
    },
    {
      startdate: 'Feb 2023',
      enddate: 'Present',
      location: 'Remote',
      company: 'Microverse',
      companyUrl: 'https://www.microverse.org/',
      role: 'Mentor',
    },
  ];

  const educations = [
    {
      startdate: 'January 2023',
      enddate: 'August 2023',
      certification: 'Full-stack Web Developer',
      school: 'Microverse',
      schoolUrl: 'https://www.microverse.org/',
    },
    {
      startdate: 'June 2008',
      enddate: 'July 2014',
      certification: 'BSc., Mechanical Engineering',
      school: 'OBAFEMI AWOLOWO UNIVERSITY',
      schoolUrl: 'https://oauife.edu.ng/',
    },
  ];

  const renderExperience = (experience: experienceType) => {
    return (
      <div className="pb-10 pl-4 card hover:cursor-pointer resume-info">
        <span className="block text-sm time-period">
          {experience.startdate} - {experience.enddate}
        </span>

        <h1 className="mt-4 text-[1.6rem]">{experience.role}</h1>
        <a
          href={experience.companyUrl}
          target="_blank"
          className="flex items-center gap-2 mt-3 text-sm"
        >
          <BsFillBuildingsFill /> {experience.company}
        </a>
        <span className="flex items-center gap-1 mt-2">
          <FaMapMarkerAlt /> {experience.location}
        </span>
      </div>
    );
  };

  const renderEducation = (education: educationType) => {
    return (
      <div className="pb-10 pl-4 card hover:cursor-pointer resume-info">
        <span className="block text-sm text-gray-500 time-period">
          {education.startdate} - {education.enddate}
        </span>

        <h1 className="mt-4 text-[1.6rem]">{education.certification}</h1>
        <a
          href={education.schoolUrl}
          target="_blank"
          className="flex items-center gap-2 mt-3 text-sm text-gray-500"
        >
          <BsFillBuildingsFill /> {education.school}
        </a>
      </div>
    );
  };
  return (
    <div
      className="my-16 lg:my-40 about-section"
      id="resume"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <TitleLabel>
        <RiSuitcase2Line className="text-lg" /> RESUME
      </TitleLabel>

      <section data-aos="fade-up" data-aos-duration="2500">
        <h1 className="mt-10 text-4xl lg:text-5xl w-full lg:w-[80%] font-light leading-10 lg:leading-[60px]">
          My <span className="text-lightBlue">Experience</span>
        </h1>
        <div
          className="mt-6 w-full lg:w-[70%]"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <Timeline
            value={experiences}
            content={(experience) => renderExperience(experience)}
          />
        </div>
      </section>

      <section data-aos="fade-up" data-aos-duration="2500">
        <h1 className="mt-6 text-4xl lg:text-5xl w-full lg:w-[80%] font-light leading-10 lg:leading-[60px]">
          My <span className="text-lightBlue">Education</span>
        </h1>
        <div
          className="mt-6 w-full lg:w-[70%]"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <Timeline
            value={educations}
            content={(education) => renderEducation(education)}
          />
        </div>
        <div>
          <a
            className="w-full lg:w-[70%] my-name italic font-bold flex items-center"
            data-aos="fade-up"
            data-aos-duration="3000"
            href="./damilare_resume.pdf"
          >
            <h2>
              View Full Résumé
              <BiChevronsRight className="text-lg inline-block animate-swing" />
            </h2>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resume;
