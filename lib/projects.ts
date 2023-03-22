export function getAllProjects(): Array<Project> {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return [
    {
      id: "flightCentre",
      title: "Flight Centre Travel Group",
      description: "business travel management booking platform",
      startYear: "2021",
      endYear: "2023",
      tags: ["Responsive web", "Product design"],
      thumbnail: "",
    },
    {
      id: "miuuNote",
      title: "Miuu Note",
      description:
        "Express your daily thoughts and mood with adorable stickers",
      startYear: "2022",
      endYear: "Present",
      tags: ["Mobile native app", "Product design"],
      thumbnail: "",
    },
    {
      id: "visualDesign",
      title: "Visual Design Projects",
      description: "My graphic and visual projects",
      startYear: "2015",
      endYear: "2021",
      tags: ["Visual design", "Motion design", "Graphic design"],
      thumbnail: "",
    },
  ];
}
