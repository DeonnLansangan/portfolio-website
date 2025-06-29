"use client";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Burger, Drawer, Flex, NavLink, Text } from "@mantine/core";
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

export default function Header() {
  const [isOpen, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 30em)");
  return (
    <header className="bg-white dark:bg-blue-jay w-full shadow-sm top-0 z-40 mx-auto px-4 md:px-10 lg:px-18 xl:px-24 py-1 md:py-2">
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
                <span className="text-blue-jay dark:text-white">Portfolio</span>
              </Text>
            </Flex>
          </Link>
        </div>

        <Flex columnGap="xl" visibleFrom="md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-blue-jay dark:text-white transition duration-300 hover:text-blue-500"
            >
              {link.label}
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
