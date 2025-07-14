export interface Skill {
  id: number;
  name: string;
  path: string;
  category: string[];
}

export interface Member {
  id: number;
  name: string;
  username: string;
  profilePicture: string;
  description: string;
  email: string | null;
  linkedIn: string | null;
  skills: MemberSkill[];
  experience: MemberExperience[];
}

export interface MemberSkill {
  skillId: number;
  order: number;
}

export interface MemberExperience {
  title: string;
  company: string | null;
  startDate: Date;
  endDate: Date | string;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  logo: string;
  description: string;
  color: "primary" | "secondary" | "maroon";
  priority: boolean;
  createdBy: number[];
}
