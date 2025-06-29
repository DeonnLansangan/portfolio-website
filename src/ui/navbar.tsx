"use client";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Burger, Drawer, Flex, NavLink, Progress, Text } from "@mantine/core";
import {
  ChevronRightIcon,
  EnvelopeIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Home", href: "/", icon: <HomeIcon className="size-6" /> },
  {
    label: "About",
    href: "/aboutUs",
    icon: <UserGroupIcon className="size-6" />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <EnvelopeIcon className="size-6" />,
  },
];

function AnimatedProgress({
  transitionDuration = 300,
}: {
  transitionDuration?: number;
}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setValue(100), 10);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Progress size="xs" value={value} transitionDuration={transitionDuration} />
  );
}

export default function NavBar() {
  const [isOpen, { toggle }] = useDisclosure();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useMediaQuery("(max-width: 30em)");

  return (
    <header className="bg-white w-full shadow-sm top-0 z-40 mx-auto px-4 md:px-10 lg:px-18 xl:px-24 py-1 md:py-2">
      <Flex align="center" justify="space-between">
        <div className="cursor-pointer relative">
          <Link href="/">
            <Flex align="center">
              <div className="relative w-20 h-20 m-2">
                <Image
                  src="/logos/website-logo.png"
                  alt="Portfolio Website Logo"
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
              key={link.href}
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
              key={link.href}
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
