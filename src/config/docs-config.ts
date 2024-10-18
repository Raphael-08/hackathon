export type DocsConfig = {
  title: string;
  path?: string;
  pages?: DocsConfig[];
};

export const Pages: DocsConfig[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Courses",
    path: "/courses",
  },
  {
    title: "Faculty",
    path: "/faculty",
  },
];

export const docsConfig: DocsConfig[] = [
  {
    title: "Pacfully",
    pages: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Courses",
        path: "/courses",
      },
      {
        title: "Faculty",
        path: "/faculty",
      },
    ],
  },
];
