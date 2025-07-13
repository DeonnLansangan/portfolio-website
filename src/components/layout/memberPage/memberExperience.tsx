"use client";
import Head from "../../ui/head";
import { Fragment } from "react";
import { Timeline } from "@mantine/core";
import { useMemberStore } from "@/store/memberStore";
import { getMonthFromDate } from "@/utils/helpers";

export default function MemberExperience() {
  const member = useMemberStore((state) => state.member);
  if (!member) return null;

  return (
    <section
      id="experience"
      className="flex flex-col items-center bg-gray-100 pt-8 pb-32"
    >
      <div className="w-full max-w-2xl px-4">
        <Head>Experience</Head>
        <Timeline
          active={member.experience.length}
          lineWidth={6}
          bulletSize={50}
          className="mt-8"
        >
          {member.experience.map((experience) => {
            const startDate = experience.startDate;
            const endDate = experience.endDate;
            return (
              <Timeline.Item
                bullet={startDate.getFullYear()}
                title={
                  <h3 className="text-2xl font-bold text-gray-800 -mb-2">
                    {experience.title}
                  </h3>
                }
              >
                {experience.company && (
                  <p className="text-base/6 font-medium">
                    {experience.company}
                  </p>
                )}
                <p className="text-base mb-2 font-medium">
                  {getMonthFromDate(startDate)} {startDate.getFullYear()} -{" "}
                  {typeof endDate === "string"
                    ? endDate
                    : getMonthFromDate(endDate) + " " + endDate.getFullYear()}
                </p>
                <p className="text-sm/6">
                  {experience.description.split("\n").map((line, index) => (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
                </p>
              </Timeline.Item>
            );
          })}
          <Timeline.Item></Timeline.Item>
        </Timeline>
      </div>
    </section>
  );
}
