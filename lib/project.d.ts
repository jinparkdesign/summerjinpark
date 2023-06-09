interface Project {
  id: ProjectId;
  title: string;
  description: string;
  startYear: string;
  endYear: string;
  tags: Array<string>;
  thumbnail: string;
  route: string;
  role: Array<string>;
  team: Array<string>;
  duration: string;
  tool: string;
}
