export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61dfcdcf7bcadad81705ed38",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-hwno8ya6",
                  apiId: "6af27664-f6f8-4170-a773-bef89190c01c",
                },
                {
                  buildHookId: "61dfcdd0cca441f2bd7ee03f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-7psbqusp",
                  apiId: "65fdde36-10a2-42fb-afe0-e658a41be950",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/nagasai369/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-7psbqusp.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
