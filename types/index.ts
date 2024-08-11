export interface Project {
  name: string;
  description: string;
  stacks: {
    name: string;
    icon: string;
  }[];
  link: string;
  repo: string;
  platform: string;
  imgUrl: string;
}

export const projects: Project[] = [
  {
    name: "Trouvaille",
    description:
      "Trouvaille is a hotel booking wishlist web app. I was trying to create a AirBnB clone but with a twist of adding hotels to a wishlist.",
    stacks: [
      {
        name: "Vue",
        icon: "devicon:vuejs",
      },
      {
        name: "Pinia",
        icon: "logos:pinia",
      },
      {
        name: "TailwindCSS",
        icon: "devicon:tailwindcss",
      },
    ],
    link: "https://trouvaille-ke.vercel.app/",
    repo: "https://github.com/DevHumbleChris/trouvaille.git",
    platform: "web",
    imgUrl: "/images/projects/trouvaille.png",
  },
  {
    name: "Nuxt Gmail Clone",
    description:
      "Nuxt Gmail Clone replicates the core functionalities of Gmail, allowing users to send emails to existing users, star emails, mark emails as important, view sent emails, move emails to the trash, and reply to emails in the inbox.",
    stacks: [
      {
        name: "Nuxt",
        icon: "logos:nuxt-icon",
      },
      {
        name: "Pinia",
        icon: "logos:pinia",
      },
      {
        name: "TailwindCSS",
        icon: "devicon:tailwindcss",
      },
      {
        name: "Firebase",
        icon: "logos:firebase",
      },
      {
        name: "Cloudinary",
        icon: "logos:cloudinary-icon",
      },
    ],
    link: "https://nuxt-gmail-clone.vercel.app",
    repo: "https://github.com/DevHumbleChris/nuxt-gmail-clone.git",
    platform: "web",
    imgUrl: "/images/projects/nuxt-gmail-clone.png",
  },
  {
    name: "Nuxt GitHub Clone",
    description:
      "Nuxt GitHub Clone replicates the core functionalities of the GitHub dashboard, achieving everything with using the GitHub API",
    stacks: [
      {
        name: "Nuxt",
        icon: "logos:nuxt-icon",
      },
      {
        name: "Pinia",
        icon: "logos:pinia",
      },
      {
        name: "TailwindCSS",
        icon: "devicon:tailwindcss",
      },
      {
        name: "GitHub API",
        icon: "bi:github",
      },
    ],
    link: "https://nuxt-github-clone-ke.vercel.app",
    repo: "https://github.com/DevHumbleChris/nuxt-github-clone",
    platform: "web",
    imgUrl: "/images/projects/nuxt-github-clone.png",
  },
  {
    name: "Twitter Clone",
    description:
      "Realtime Twitter clone built with Vue that allows users to tweet, retweet, like and comment on tweets.",
    stacks: [
      {
        name: "Vue",
        icon: "devicon:vuejs",
      },
      {
        name: "Pinia",
        icon: "logos:pinia",
      },
      {
        name: "TailwindCSS",
        icon: "devicon:tailwindcss",
      },
      {
        name: "Firebase",
        icon: "logos:firebase",
      },
    ],
    link: "https://vue-twitter-ke.vercel.app",
    repo: "https://github.com/DevHumbleChris/vue-twitter-clone",
    platform: "web",
    imgUrl: "/images/projects/vue-twitter-clone.png",
  },
  {
    name: "SnapEasy",
    description:
      "SnapEasy is web app that offers users the cabality of capturing webpage screenshots with easy😉.",
    stacks: [
      {
        name: "Nuxt",
        icon: "logos:nuxt-icon",
      },
      {
        name: "TailwindCSS",
        icon: "devicon:tailwindcss",
      },
    ],
    link: "https://snapeasy.vercel.app/",
    repo: "https://github.com/DevHumbleChris/snapeasy",
    platform: "web",
    imgUrl: "/images/projects/snapeasy.png",
  },
  {
    name: "Jadoo",
    description: "Jadoo is a travel agency landing page.",
    stacks: [
      {
        name: "Nuxt",
        icon: "logos:nuxt-icon",
      },
      {
        name: "TailwindCSS",
        icon: "devicon:tailwindcss",
      },
    ],
    link: "https://jadoo-ke.vercel.app/",
    repo: "https://github.com/DevHumbleChris/jadoo",
    platform: "web",
    imgUrl: "/images/projects/jadoo.png",
  },
  {
    name: "Hounter",
    description:
      "Hounter is a landing page for people who want to find their dream house.",
    stacks: [
      {
        name: "Nuxt",
        icon: "logos:nuxt-icon",
      },
      {
        name: "TailwindCSS",
        icon: "devicon:tailwindcss",
      },
    ],
    link: "https://hounter-ke.vercel.app/",
    repo: "https://github.com/DevHumbleChris/hounter",
    platform: "web",
    imgUrl: "/images/projects/hounter.png",
  },
];

export const githubUrl = "https://github.com/DevHumbleChris/thecodingmontana";
export const twitterUrl = "https://x.com/AmChrisKE";
