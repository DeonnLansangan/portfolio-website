"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatedProgress } from "@/utils/animatedProgress";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Burger, Drawer, Flex, NavLink, Text } from "@mantine/core";
import { useMemberStore } from "@/store/memberStore";
import {
  BriefcaseIcon,
  ChevronRightIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  HomeIcon,
  PuzzlePieceIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function NavBar() {
  const [isOpen, { toggle }] = useDisclosure();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useMediaQuery("(max-width: 30em)");
  const pathName = usePathname();

  const member = useMemberStore((state) => state.member);
  const username = member?.username;
  const profileLink = `/profile/${username}`;

  const defaultNavLinks = [
    { label: "Home", href: "/", icon: <HomeIcon className="size-6" /> },
    {
      label: "About Us",
      href: "/aboutUs",
      icon: <UserGroupIcon className="size-6" />,
    },
    {
      label: "Contact Us",
      href: "/contact",
      icon: <EnvelopeIcon className="size-6" />,
    },
  ];

  const profileNavLinks = [
    { label: "Home", href: "/", icon: <HomeIcon className="size-6" /> },
    {
      label: "About Me",
      href: `${profileLink}#about`,
      icon: <UserIcon className="size-6" />,
    },
    {
      label: "Skills",
      href: `${profileLink}#skills`,
      icon: <PuzzlePieceIcon className="size-6" />,
    },
    {
      label: "Experience",
      href: `${profileLink}#experience`,
      icon: <BriefcaseIcon className="size-6" />,
    },
    {
      label: "Projects",
      href: `${profileLink}#projects`,
      icon: <DocumentCheckIcon className="size-6" />,
    },
    {
      label: "Contact Me",
      href: `${profileLink}#contact`,
      icon: <EnvelopeIcon className="size-6" />,
    },
  ];

  const navLinks = pathName.includes("/profile")
    ? profileNavLinks
    : defaultNavLinks;

  return (
    <header className="bg-white w-full shadow-sm top-0 z-40 mx-auto px-4 sticky md:px-10 lg:px-18 xl:px-24 py-1 md:py-2">
      <Flex align="center" justify="space-between">
        <div className="cursor-pointer relative">
          <Link href="/">
            <Flex align="center">
              <div className="relative w-20 h-20 m-2">
                <Image
                  src="/logos/website-logo.png"
                  alt="Portfolio Website Logo"
                  sizes="100%"
                  fill
                  className="object-contain"
                />
              </div>
              <Text size="xl" fw={600} visibleFrom="sm">
                <span className="transition duration-300 hover:text-primary-500">
                  Portfolio
                </span>
              </Text>
            </Flex>
          </Link>
        </div>

        <Flex columnGap="xl" visibleFrom="md">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition duration-300 hover:text-primary-500"
              onMouseOver={() => setHoveredIndex(index)}
              onMouseOut={() => setHoveredIndex(null)}
            >
              <Flex direction="column" align="center">
                <span>{link.label}</span>
                <div className="h-1 w-full">
                  {hoveredIndex === index && (
                    <AnimatedProgress transitionDuration={300} />
                  )}
                </div>
              </Flex>
            </Link>
          ))}
        </Flex>

        <Burger
          opened={isOpen}
          onClick={toggle}
          aria-label="Toggle navigation"
          hiddenFrom="md"
        />
        <Drawer
          opened={isOpen}
          onClose={toggle}
          position={isMobile ? "top" : "right"}
          size={isMobile ? "100%" : "sm"}
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          closeButtonProps={{ "aria-label": "Close drawer" }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              component={Link}
              href={link.href}
              label={link.label}
              leftSection={link.icon}
              rightSection={<ChevronRightIcon className="size-6 opacity-75" />}
              onClick={toggle}
            />
          ))}
        </Drawer>
      </Flex>
    </header>
  );
}
