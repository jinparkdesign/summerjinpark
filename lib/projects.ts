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
      title: "FCM - Split Ticketing",
      description:
        "Combine various airlines or fares in one seamless itinerary with the new enhanced air shopping capabilities  -  split ticketing! ",
      startYear: "2022",
      endYear: "2023",
      tags: ["Responsive web", "UX/UI"],
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
      id: "hotelRedesign",
      title: "Hotel Redesign",
      description:
        "A business travel management booking platform that makes business travel easier.",
      startYear: "2021",
      endYear: "2022",
      tags: ["Responsive web", "UX/UI"],
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
