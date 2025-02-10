const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://the-portfolio-lac.vercel.app";

export const siteConfig = {
  name: "Shreyas Shirwadkar | Full Stack Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a full stack developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    twitter: "https://x.com/ShreyasShir",
    github: "https://github.com/shreyasshirwadkar",
  },
  mailSupport: "shreyas.shirwadkar@gmail.com",
};
