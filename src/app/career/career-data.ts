export type CareerId = 'it' | 'construction';

export interface Role {
  title: string;
  period: string;
}

export interface WorkItem {
  company: string;
  description?: string;
  roles: Role[];
}

export interface EducationLink {
  name: string;
  url?: string;
}

export interface EducationItem {
  title: string;
  links: EducationLink[];
  period: string;
}

export interface Skill {
  name: string;
  /** Path under /public or a URL. If omitted, the first letter is shown instead. */
  icon?: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export interface CertificateLink {
  title: string;
  url: string;
  icon: string;
}

export interface Career {
  id: CareerId;
  /** Label on the switcher button. */
  label: string;
  /** Job title under the name in the header. */
  headline: string;
  summary: string;
  work: WorkItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  certificates?: { text: string; links: CertificateLink[] };
}

const UACG: EducationItem = {
  title: 'Transport Construction – Transport Facilities',
  links: [
    {
      name: 'University of Architecture, Civil Engineering and Geodesy',
      url: 'https://uacg.bg/',
    },
  ],
  period: '09/2012 - 10/2018',
};

export const CAREERS: Career[] = [
  {
    id: 'it',
    label: 'Software Development',
    headline: 'Software Developer',
    summary:
      'Enthusiastic about writing clean, efficient code and solving complex challenges. ' +
      'I focus on improving my technical skills every day and learning new technologies. ' +
      'I`m particularly interested in DevOps automation and Cybersecurity best practices.',
    work: [
      {
        company: 'PaySafe',
        description:
          'Building and maintaining backend services for the payments platform. ' +
          'Working on new features, fixing bugs and improving reliability, together ' +
          'with code reviews, automated tests and CI/CD pipelines.',
        roles: [{ title: 'Junior Software Engineer', period: '02/2026 - Present' }],
      },
      {
        company: 'Amadeus IT Group',
        description:
          'Investigation of customer cases. Customers report something unexpected ' +
          "and tech support can't answer the question, the tickets come to our team " +
          'and we investigate. Sometimes it really turns out to be a problem and we ' +
          'create a bug and implement a fix, but sometimes just explain to support ' +
          'what the cause of this behavior is. Most of the time was spent on ' +
          'debugging the code.',
        roles: [
          { title: 'Software Development Engineer', period: '12/2024 - 01/2026' },
          { title: 'Associate Software Developer', period: '12/2023 - 12/2024' },
          { title: 'Junior Java Developer', period: '03/2023 - 12/2023' },
          { title: 'Intern', period: '11/2022 - 03/2023' },
        ],
      },
    ],
    education: [
      {
        title: 'Udemy & Code with Mosh courses',
        links: [
          { name: 'Udemy', url: 'https://udemy.com/' },
          { name: 'Code with Mosh', url: 'https://codewithmosh.com' },
        ],
        period: '10/2024 - Present',
      },
      {
        title: 'Java Web',
        links: [{ name: 'SoftUni', url: 'https://softuni.bg/' }],
        period: '09/2021 - 09/2024',
      },
      UACG,
    ],
    skills: [
      {
        title: 'Technologies and Libraries',
        items: [
          { name: 'Java', icon: 'Skills/Java.svg' },
          { name: 'Spring', icon: 'Skills/Spring.svg' },
          { name: 'Thymeleaf', icon: 'Skills/Thymeleaf.png' },
          { name: 'Bootstrap', icon: 'Skills/Bootstrap.png' },
          { name: 'Angular', icon: 'Skills/Angular.svg' },
          { name: 'Typescript', icon: 'Skills/TypeScript.svg' },
          { name: 'JavaScript', icon: 'Skills/JavaScript.svg' },
          { name: 'Html', icon: 'Skills/HTML.svg' },
          { name: 'CSS', icon: 'Skills/CSS.svg' },
          { name: 'Tailwind', icon: 'Skills/TailWind.svg' },
        ],
      },
      {
        title: 'Database',
        items: [
          { name: 'Oracle', icon: 'Skills/Oracle.svg' },
          { name: 'Mysql', icon: 'Skills/MySQL.svg' },
        ],
      },
      {
        title: 'VCS',
        items: [
          { name: 'Git', icon: 'Skills/Git.svg' },
          { name: 'Github', icon: 'Skills/Github.svg' },
          { name: 'Github Actions', icon: 'Skills/GitHubActions.svg' },
          { name: 'Gitlab', icon: 'Skills/GitLab.svg' },
          { name: 'Bitbucket', icon: 'Skills/BitBucket.svg' },
        ],
      },
      {
        title: 'IDE',
        items: [
          { name: 'Visual Studio Code', icon: 'Skills/VSCode.svg' },
          { name: 'InteliJIdea', icon: 'Skills/Idea.svg' },
        ],
      },
      {
        title: 'Utilities',
        items: [
          { name: 'Jira', icon: 'Skills/Jira.svg' },
          { name: 'Splunk', icon: 'Skills/Splunk.png' },
          { name: 'Sonarqube', icon: 'Skills/SonarQube.svg' },
          { name: 'Chatgpt', icon: 'Skills/ChatGPT.svg' },
          { name: 'Bash', icon: 'Skills/Bash.svg' },
          { name: 'Linux', icon: 'Skills/Linux.svg' },
          { name: 'Swagger', icon: 'Skills/Swagger.png' },
        ],
      },
      {
        title: 'Build & Package',
        items: [
          { name: 'Maven', icon: 'Skills/Maven.svg' },
          { name: 'Gradle', icon: 'Skills/Gradle.svg' },
          { name: 'Jenkins', icon: 'Skills/Jenkins.svg' },
          { name: 'Docker', icon: 'Skills/Docker.svg' },
        ],
      },
    ],
    certificates: {
      text: 'Certificates in Cloud (10/2021 - Present)',
      links: [
        {
          title: 'ICloud',
          url: 'https://www.icloud.com/iclouddrive/02bTdSb9zw4P3g6Ik266t8E0Q#Certificates',
          icon: 'https://skillicons.dev/icons?i=apple&theme=light',
        },
      ],
    },
  },

  {
    id: 'construction',
    label: 'Civil Engineering',
    headline: 'Road Engineer',
    summary:
      'Transport construction engineer and qualified surveyor with experience in road ' +
      'construction and road infrastructure administration. That background taught me precision, ' +
      'responsibility and working against real deadlines – qualities I now bring into software development.',
    work: [
      {
        company: 'Road Infrastructure Agency',
        roles: [{ title: 'Chief Expert', period: '2022' }],
      },
      {
        company: 'Avtomagistrali EAD',
        roles: [{ title: 'Road Engineer', period: '2019 - 2021' }],
      },
    ],
    education: [
      UACG,
      {
        title: 'Surveyor (3rd degree of professional qualification)',
        links: [
          {
            name: 'Professional High School of Construction, Architecture and Geodesy "Lubor Bayer", Stara Zagora',
          },
        ],
        period: '2007 - 2012',
      },
    ],
    skills: [
      {
        title: 'Design & CAD',
        items: [
          { name: 'AutoCAD', icon: 'Skills/AutoCAD.svg' },
          { name: 'AutoCAD Civil 3D', icon: 'Skills/Civil3D.svg' },
        ],
      },
      {
        title: 'Office',
        items: [
          { name: 'Excel', icon: 'Skills/Excel.svg' },
          { name: 'Word', icon: 'Skills/Word.svg' },
        ],
      },
    ],
  },
];
