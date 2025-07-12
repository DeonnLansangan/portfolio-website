export interface Skill {
  id: number;
  name: string;
  path: string;
  category: string[];
}

export interface UserSkill {
  skillId: number;
  order: number;
}

export interface Member {
  id: number;
  name: string;
  username: string;
  profilePicture: string;
  description: string;
  skills: UserSkill[];
}
