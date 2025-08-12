"use client";
import ProjectContainer from "./projectContainer";
import Head from "@/components/ui/head";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useProjectStore } from "@/store/projectStore";
import { useState } from "react";

function ScreenshotCarousel({
  images,
  projectName,
  onImageClick,
  initialSlide = 0,
  imageSize = { width: 500, height: 500 },
}: {
  images: string[];
  projectName: string;
  onImageClick?: (index: number) => void;
  initialSlide?: number;
  imageSize?: { width: number; height: number };
}) {
  return (
    <Carousel
      withIndicators
      height="auto"
      initialSlide={initialSlide}
      emblaOptions={{ loop: true }}
    >
      {images.map((image, index) => (
        <Carousel.Slide key={index}>
          <div className="flex justify-center">
            <Image
              src={image}
              alt={`${projectName} screenshot`}
              width={imageSize.width}
              height={imageSize.height}
              className={onImageClick ? "cursor-pointer" : ""}
              onClick={onImageClick ? () => onImageClick(index) : undefined}
            />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default function ProjectScreenshots() {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const project = useProjectStore((state) => state.project);
  if (!project) return;

  const colorClasses = {
    primary: "text-primary",
    maroon: "text-maroon",
  };

  const handleImageClick = (slide: number) => {
    setActiveSlide(slide);
    open();
  };

  return (
    <ProjectContainer>
      <Head>
        Sample <span className={colorClasses[project.color]}>Screenshots</span>
      </Head>
      <ScreenshotCarousel
        images={project.images || []}
        projectName={project.name}
        onImageClick={handleImageClick}
      />

      <Modal.Root opened={opened} onClose={close} size="100%" centered>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <ScreenshotCarousel
              images={project.images || []}
              projectName={project.name}
              initialSlide={activeSlide}
              imageSize={{ width: 1200, height: 1200 }}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </ProjectContainer>
  );
}
