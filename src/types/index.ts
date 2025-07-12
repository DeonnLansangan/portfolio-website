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
  endDate: Date | "Present";
  description: string;
}
