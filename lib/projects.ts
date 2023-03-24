export enum ProjectId {
  FLIGHT_CENTRE = "FLIGHT_CENTER",
  MIUU_NOTE = "MIUU_NOTE",
  HOTEL_REDESIGN = "HOTEL_REDESIGN",
  VISUAL_DESIGN = "VISUAL_DESIGN",
}

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
      id: ProjectId.FLIGHT_CENTRE,
      title: "FCM - Split Ticketing",
      description:
        "Combine various airlines or fares in one seamless itinerary with the new enhanced air shopping capabilities  -  split ticketing! ",
      startYear: "2022",
      endYear: "2023",
      tags: ["Responsive web", "UX/UI"],
      thumbnail: "",
      route: "fcm-split-ticketing",
      role: "UX/UI Design Solo",
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
    {
      id: ProjectId.MIUU_NOTE,
      title: "Miuu Note",
      description:
        "Express your daily thoughts and mood with adorable stickers",
      startYear: "2022",
      endYear: "Present",
      tags: ["Mobile native app", "Product design"],
      thumbnail: "",
      route: "fcm-split-ticketing",
      role: "UX/UI Design Solo",
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
    {
      id: ProjectId.HOTEL_REDESIGN,
      title: "Hotel Redesign",
      description:
        "A business travel management booking platform that makes business travel easier.",
      startYear: "2021",
      endYear: "2022",
      tags: ["Responsive web", "UX/UI"],
      thumbnail: "",
      route: "fcm-split-ticketing",
      role: "UX/UI Design Solo",
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
    {
      id: ProjectId.VISUAL_DESIGN,
      title: "Visual Design Projects",
      description: "My graphic and visual projects",
      startYear: "2015",
      endYear: "2021",
      tags: ["Visual design", "Motion design", "Graphic design"],
      thumbnail: "",
      route: "fcm-split-ticketing",
      role: "UX/UI Design Solo",
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
  ];
}
