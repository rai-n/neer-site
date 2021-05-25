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
                    "60ad1786bde98800dbf94efc",
                  title: "Sanity Studio",
                  name: "neer-site-studio",
                  apiId: "01931f34-0ba8-4c39-a9cb-7c0edbd8f49a",
                },
                {
                  buildHookId: "60ad1786c336dd00b3febb07",
                  title: "Blog Website",
                  name: "neer-site",
                  apiId: "f43f6437-c10f-4a6d-85cb-1a71e978ce2f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rai-n/neer-site",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://neer-site.netlify.app",
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
