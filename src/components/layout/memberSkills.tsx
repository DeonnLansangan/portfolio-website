"use client";

import Head from "../ui/head";
import { useMemberStore } from "@/store/memberStore";
import { skillList } from "@/data/skillList";
import Skill from "../ui/skill";
import { Tabs } from "@mantine/core";

const getGridColsClass = (count: number) => {
  const cols = Math.ceil(count / 2);
  return `md:grid-cols-${Math.min(cols, 6)}`;
};

export default function MemberSkills() {
  const member = useMemberStore((state) => state.member);
  if (!member) return null;

  const skillsWithMeta = member.skills
    .map((userSkill) => {
      const matchedSkill = skillList.find(
        (skill) => skill.id === userSkill.skillId
      );
      if (!matchedSkill) return null;
      return {
        ...matchedSkill,
        order: userSkill.order,
      };
    })
    .filter((skill): skill is NonNullable<typeof skill> => skill !== null);

  const sortedSkills = skillsWithMeta.sort((a, b) => a.order - b.order);

  const uniqueCategories = Array.from(
    new Set(
      sortedSkills
        .flatMap((skill) => skill.category)
        .filter((category): category is string => typeof category === "string")
    )
  );

  return (
    <section
      id="skills"
      className="flex flex-col items-center bg-gray-200 pt-8"
    >
      <Head>Skills</Head>

      <Tabs color="blue" defaultValue="all">
        <div className="mb-4">
          <Tabs.List justify="center">
            <Tabs.Tab value="all">All</Tabs.Tab>
            {uniqueCategories.map((category) => (
              <Tabs.Tab key={category} value={category}>
                {category}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </div>

        <Tabs.Panel value="all">
          <div
            className={`grid grid-cols-1 place-items-center md:gap-x-2 lg:gap-x-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`}
          >
            {sortedSkills.map((skill) => (
              <Skill key={skill.id} name={skill.name} path={skill.path} />
            ))}
          </div>
        </Tabs.Panel>

        {uniqueCategories.map((category) => (
          <Tabs.Panel key={category} value={category}>
            <div className="grid grid-cols-1 place-items-center md:gap-x-2 lg:gap-x-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {sortedSkills
                .filter((skill) => skill.category.includes(category))
                .map((skill) => (
                  <Skill key={skill.id} name={skill.name} path={skill.path} />
                ))}
            </div>
          </Tabs.Panel>
        ))}
      </Tabs>
    </section>
  );
}
