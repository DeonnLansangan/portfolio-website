import { IconName } from "@/components/ui/icon";

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
  altName?: string;
  url: string;
  logo: string;
  title: string;
  cardDescription: string;
  pageDescription: string;
  features: Feature[];
  color: "primary" | "maroon";
  priority: boolean;
  createdBy: number[];
}

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}
