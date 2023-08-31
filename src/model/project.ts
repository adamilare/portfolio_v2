export type ProjectType = {
  name: string;
  description: string;
  image: string;
  gitHub_link: string;
  live_demo: string;
  tech_stacks: string[];
  screenshots: string[];
};

export const PersonalProjects: ProjectType[] = [
  {
    name: 'E-Tracka',
    description:
      'A real estate data and property management platform. it provides a complementary suite of marketing software and technology solutions to help real estate professionals maximize business opportunities and connect with consumers.',
    image:
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692110369/etracka-home_iias3e.png',
    gitHub_link: '#',
    live_demo: 'https://e-tracka-frontend.vercel.app/',
    tech_stacks: ['ReactJS', 'NodeJS', 'TypeScript', 'MongoDB', 'Git'],
    screenshots: [
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692110369/etracka-home_iias3e.png',
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692110369/etracka-services_to9sot.png',
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692110369/etracka-mobile_cu7vrs.png',
    ],
  },
  {
    name: 'CycleCruise',
    description:
      'CycleCruise is a web application for booking appointment to test-drive motorcycles. It was developed using React and Ruby on Rails that aims to provide music enthusiasts with a comprehensive platform to discover, explore, and book tickets for their favourite concerts and live music events. The application brings together a user-friendly interface, personalized recommendations, and seamless concert booking functionalities to enhance the concert-going experience for users.',
    image:
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692115358/mobile_mvfgbl.png',
    gitHub_link: 'https://github.com/c00p75/appointment-app-frontend',
    live_demo: 'https://cycle-cruise.onrender.com/',
    tech_stacks: ['ReactJS', 'Ruby on Rails', 'Postgres', 'Git'],
    screenshots: [
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692115358/mobile_mvfgbl.png',
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692115604/mobile_4_cqgjhr.png',
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692115358/mobile_6_aipt3o.png',
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692115358/mobile_7_qvxrlu.png',
    ],
  },

  {
    name: 'MovieVerse',
    description:
      'Movieverse curates movies for movie lovers; they can see, search, comment, and see ratings of their favourite movies. A fully responsive website developed using Webpack and ES6 Syntax',
    image:
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692113052/mobile_4_cilkap.png',
    gitHub_link: 'https://github.com/adamilare/movieverse',
    live_demo: 'https://adamilare.github.io/movieverse/dist/',
    tech_stacks: ['Javascript', 'Webpack', 'Bootstrap', 'HTML', 'CSS'],
    screenshots: [
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692113052/mobile_4_cilkap.png',
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692113051/mobile_5_bu3npb.png',
    ],
  },
  {
    name: 'SpendLog',
    description:
      'A web application for management of your expenses. The application groups related transactions under categories for ease of visualizing. It was specifically designed for mobile display',
    image:
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692116828/spendlog_ym6hvs.jpg',
    gitHub_link: 'https://github.com/adamilare/spendlog',
    live_demo: 'https://spendlog.onrender.com/',
    tech_stacks: ['Ruby on Rails', 'Postgres', 'CSS'],
    screenshots: [
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692116828/spendlog_ym6hvs.jpg',
    ],
  },
  {
    name: 'Cryptollar',
    description:
      'CRYPTOLLAR - is a simple website for presenting prices of cryptocurrencies. It is part of Microverserse software training challeneges; a capstone project demonstrating use of React and Redux packages for frontend development',
    image:
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692117416/cryptollar_iv4v7v.jpg',
    gitHub_link: 'https://github.com/adamilare/cryptollar',
    live_demo: 'https://cryptollar.onrender.com/',
    tech_stacks: ['React', 'Redux', 'CSS', 'Git'],
    screenshots: [
      'https://res.cloudinary.com/df8ypatol/image/upload/v1692117416/cryptollar_iv4v7v.jpg',
    ],
  },
];
