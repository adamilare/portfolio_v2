import { AiFillHtml5 } from 'react-icons/ai';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { TbBrandJavascript, TbBrandReactNative } from 'react-icons/tb';
import {
  SiTailwindcss,
  SiRedux,
  SiRubyonrails,
  SiTypescript,
  SiCss3,
} from 'react-icons/si';

export type SkillType = {
  label: string;
  icon: JSX.Element;
  color: string;
};

export const SkillsModel: SkillType[] = [
  {
    label: 'JavaScript',
    icon: (
      <TbBrandJavascript className="text-[5rem] text-yellow-500"></TbBrandJavascript>
    ),
    color: 'bg-yellow-500',
  },
  {
    label: 'ReactJS',
    icon: <FaReact className="text-[5rem] text-blue-700"></FaReact>,
    color: 'bg-blue-700',
  },
  {
    label: 'React Native',
    icon: (
      <TbBrandReactNative className="text-[5rem] text-blue-700"></TbBrandReactNative>
    ),
    color: 'bg-blue-700',
  },
  {
    label: 'ReactJS',
    icon: <SiRedux className="text-[5rem] text-purple-700"></SiRedux>,
    color: 'bg-purple-700',
  },
  {
    label: 'Ruby on Rails',
    icon: <SiRubyonrails className="text-[5rem] text-red-700"></SiRubyonrails>,
    color: 'bg-red-700',
  },
  {
    label: 'TypeScript',
    icon: <SiTypescript className="text-[5rem] text-cyan-700"></SiTypescript>,
    color: 'bg-cyan-700',
  },
  {
    label: 'HTML 5',
    icon: <AiFillHtml5 className="text-[5rem] text-orange-500"></AiFillHtml5>,
    color: 'bg-orange-500',
  },
  {
    label: 'CSS 3',
    icon: <SiCss3 className="text-[5rem] text-blue-700"></SiCss3>,
    color: 'bg-blue-700',
  },
  {
    label: 'Tailwind',
    icon: <SiTailwindcss className="text-[5rem] text-blue-400"></SiTailwindcss>,
    color: 'bg-blue-400',
  },
  {
    label: 'Bootstrap',
    icon: <FaBootstrap className="text-[5rem] text-violet-800"></FaBootstrap>,
    color: 'bg-violet-800',
  },
];
