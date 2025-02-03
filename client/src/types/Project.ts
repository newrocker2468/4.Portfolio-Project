export default interface Project {
  name: string;
  status: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  website: string;
  role?: string;
  timeline?:string,
  ongoingWork?: string[];
  testing?: {
    strategy: string;
    errorHandling: string;
  };
}
