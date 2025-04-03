export enum ProjectId {
  FLIGHT_CENTRE = "FLIGHT_CENTER",
  MIUU_NOTE = "MIUU_NOTE",
  HOTEL_REDESIGN = "HOTEL_REDESIGN",
  VISUAL_DESIGN = "VISUAL_DESIGN",
  HUG_MUG = "HUG_MUG",
  ECYCLE = "ECYCLE",
  PARK_YOUR_PHONE = "PARK_YOUR_PHONE",
  SIGN = "SIGN",
  TIKTOK = "TIKTOK",
  SAVE_MY_FRIDGE = "SAVE_MY_FRIDGE",
  ANDROID_3D = "ANDROID_3D",
  VISUAL_SHAPE = "VISUAL_SHAPE",
}

export function getAllProjects(): Array<Project> {
  return [
    {
      id: ProjectId.MIUU_NOTE,
      title: "Miuu Note",
      description:
        "Discover the joy of journaling by personalizing your diary with Miuu Note's fun stickers and background!",
      startYear: "2022",
      endYear: "Present",
      tags: ["Mobile native app", "UX/UI", "Branding"],
      thumbnail: "",
      route: "miuu-note",
      role: ["UX/UI Design Solo", "Identity & Branding"],
      team: ["1 Engineer"],
      duration: "On Going Project",
      tool: "Figma",
    },
    {
      id: ProjectId.HOTEL_REDESIGN,
      title: "Melon - Hotel Rate Display Redesign",
      description:
        "Empowering travelers to make confident hotel room choices with an intuitive and optimized room display redesign",
      startYear: "2021",
      endYear: "2022",
      tags: ["Responsive web", "UX/UI"],
      thumbnail: "",
      route: "hotel-redesign",
      role: ["UX/UI Design Solo"],
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "5 Months",
      tool: "Figma",
    },
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
      role: ["UX/UI Design Solo"],
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
  ];
}

export function getAllVisualProjects(): Array<Project> {
  return [
    {
      id: ProjectId.HUG_MUG,
      title: "HUG MUG Brand Book Design",
      description: "Branding & Layout | 2020",
      startYear: "2022", //not used
      endYear: "2023", //not used
      tags: ["Responsive web", "UX/UI"], //not used
      thumbnail: "", //not used
      route: "/projects/hug-mug.html",
      role: ["UX/UI Design Solo"],
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
    {
      id: ProjectId.ECYCLE,
      title: "eCycle Mobile App Design",
      description: "UX/UI Case Study | 2020",
      startYear: "2022", //not used
      endYear: "2023", //not used
      tags: ["Responsive web", "UX/UI"], //not used
      thumbnail: "", //not used
      route: "/projects/project.html",
      role: ["UX/UI Design Solo"],
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
    {
      id: ProjectId.PARK_YOUR_PHONE,
      title: "Park Your Phone",
      description: "Graphic & Motion Design | 2020",
      startYear: "2022", //not used
      endYear: "2023", //not used
      tags: ["Responsive web", "UX/UI"], //not used
      thumbnail: "", //not used
      route: "/projects/when-you-drive.html",
      role: ["UX/UI Design Solo"],
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
    {
      id: ProjectId.SIGN,
      title: "Signage Design @ Fastsigns",
      description: "Graphic & Print Design | 2016-2018",
      startYear: "2022", //not used
      endYear: "2023", //not used
      tags: ["Responsive web", "UX/UI"], //not used
      thumbnail: "", //not used
      route: "/projects/signage.html",
      role: ["UX/UI Design Solo"],
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
    {
      id: ProjectId.TIKTOK,
      title: "Tiktok Logo Reveal",
      description: "Video Editing & Motion Design | 2020",
      startYear: "2022", //not used
      endYear: "2023", //not used
      tags: ["Responsive web", "UX/UI"], //not used
      thumbnail: "", //not used
      route: "/projects/tiktok-logo-reveal.html",
      role: ["UX/UI Design Solo"],
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
    {
      id: ProjectId.SAVE_MY_FRIDGE,
      title: "Save My Fridge Mobile App Design",
      description: "UX/UI Case Study | 2020",
      startYear: "2022", //not used
      endYear: "2023", //not used
      tags: ["Responsive web", "UX/UI"], //not used
      thumbnail: "", //not used
      route: "/projects/save-my-fridge.html",
      role: ["UX/UI Design Solo"],
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
    {
      id: ProjectId.ANDROID_3D,
      title: "Android 3D Modeling",
      description: "3D & Animation | 2020",
      startYear: "2022", //not used
      endYear: "2023", //not used
      tags: ["Responsive web", "UX/UI"], //not used
      thumbnail: "", //not used
      route: "/projects/Android-3d.html",
      role: ["UX/UI Design Solo"],
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
    {
      id: ProjectId.VISUAL_SHAPE,
      title: "Visual Rhetoric Shape Morph",
      description: "Motion Graphic | 2020",
      startYear: "2022", //not used
      endYear: "2023", //not used
      tags: ["Responsive web", "UX/UI"], //not used
      thumbnail: "", //not used
      route: "/projects/visual-rhetoric.html",
      role: ["UX/UI Design Solo"],
      team: ["1 Product Manager", "4 Engineers", "1 UX Researcher"],
      duration: "7 Months",
      tool: "Figma",
    },
  ];
}
