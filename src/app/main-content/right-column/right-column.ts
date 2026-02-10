import { Component } from '@angular/core';

@Component({
  selector: 'app-right-column',
  imports: [],
  templateUrl: './right-column.html',
  styleUrl: './right-column.css',
})
export class RightColumn {
  skills = [
    {
      title: 'Technologies and Libraries',
      items: [
        {
          name: 'Java',
          icon: 'Skills/Java.svg',
        },
        {
          name: 'Spring',
          icon: 'Skills/Spring.svg',
        },
        {
          name: 'Thymeleaf',
          icon: 'Skills/Thymeleaf.png',
        },
        {
          name: 'Bootstrap',
          icon: 'Skills/Bootstrap.png',
        },
        {
          name: 'Angular',
          icon: 'Skills/Angular.svg',
        },
        {
          name: 'Typescript',
          icon: 'Skills/TypeScript.svg',
        },
        {
          name: 'JavaScript',
          icon: 'Skills/JavaScript.svg',
        },
        {
          name: 'Html',
          icon: 'Skills/HTML.svg',
        },
        {
          name: 'CSS',
          icon: 'Skills/CSS.svg',
        },
        {
          name: 'Tailwind',
          icon: 'Skills/TailWind.svg',
        },
      ],
    },
    {
      title: 'Database',
      items: [
        {
          name: 'Oracle',
          icon: 'Skills/Oracle.svg',
        },
        {
          name: 'Mysql',
          icon: 'Skills/MySQL.svg',
        },
      ],
    },
    {
      title: 'VCS',
      items: [
        {
          name: 'Git',
          icon: 'Skills/Git.svg',
        },
        {
          name: 'Github',
          icon: 'Skills/Github.svg',
        },
        {
          name: 'Github Actions',
          icon: 'Skills/GitHubActions.svg',
        },
        {
          name: 'Gitlab',
          icon: 'Skills/GitLab.svg',
        },
        {
          name: 'Bitbucket',
          icon: 'Skills/BitBucket.svg',
        },
      ],
    },
    {
      title: 'IDE',
      items: [
        {
          name: 'Visual Studio Code',
          icon: 'Skills/VSCode.svg',
        },
        {
          name: 'InteliJIdea',
          icon: 'Skills/Idea.svg',
        },
      ],
    },
    {
      title: 'Utilities',
      items: [
        {
          name: 'Jira',
          icon: 'Skills/Jira.svg',
        },
        {
          name: 'Splunk',
          icon: 'Skills/Splunk.png',
        },
        {
          name: 'Sonarqube',
          icon: 'Skills/SonarQube.svg',
        },
        {
          name: 'Chatgpt',
          icon: 'Skills/ChatGPT.svg',
        },
        {
          name: 'Bash',
          icon: 'Skills/Bash.svg',
        },
        {
          name: 'Linux',
          icon: 'Skills/Linux.svg',
        },
        {
          name: 'Swagger',
          icon: 'Skills/Swagger.png',
        },
      ],
    },
    {
      title: 'Build & Package',
      items: [
        {
          name: 'Maven',
          icon: 'Skills/Maven.svg',
        },
        {
          name: 'Gradle',
          icon: 'Skills/Gradle.svg',
        },
        {
          name: 'Jenkins',
          icon: 'Skills/Jenkins.svg',
        },
        {
          name: 'Docker',
          icon: 'Skills/Docker.svg',
        },
      ],
    },
  ];

  sports = [
    {
      title: 'Running',
    },
    {
      title: 'Volleyball',
    },
    {
      title: 'Boxing',
    },
    {
      title: 'Swimming',
    },
  ];
}
