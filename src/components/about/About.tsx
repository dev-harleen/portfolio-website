import { Badge, Container, Image, Stack } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import skills from "./Skills.json";

export const About = () => {
  const getImageUrl = (path: string) => {
    return new URL(`../../assets/${path}`, import.meta.url).href;
  };

  const chunkArray = (arr: any[], size: number) =>
    arr.reduce(
      (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
      []
    );

  const skillRows = chunkArray(skills, 8); 

  return (
    <section>
      <Container className="mt-5 ml-auto justify-content-center">
        <h1 className="text-center">About me</h1>
        <h2>A bit about me</h2>
        <p className="mt-4">
          I'm a full stack web developer and Mobile App Developer with
          experience in implementation of wireframes and design flows into high
          performance software applications. I take into consideration the user
          experience while writing reusable and efficient code. I passionately
          combine good design, technology, and innovation in all my projects,
          which I like to accompany from the first idea to release.
        </p>
        <h2>Technologies and Tools</h2>
        <p>
          Using a combination of cutting-edge technologies and reliable
          open-source software I build user-focused, performant apps and
          websites for smartphones, tablets, and desktops.
        </p>

        {/* Animate each row separately as it is scrolled into view */}
        <div className="p-4">
          {skillRows.map((row, rowIndex) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              margin: "-50px 0px",
              once: false,
            });

            return (
              <motion.div
                ref={ref}
                key={rowIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: rowIndex * 0.3, 
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
                className="mb-3">
                <Stack gap={4} direction="horizontal" className="flex-wrap">
                  {row.map((skill, id) => (
                    <Badge
                      key={id}
                      className="p-3 align-items-center bg-white border text-dark"
                      bg="secondary">
                      <Image
                        src={getImageUrl(skill.imageSrc)}
                        width={24}
                        height={24}
                        className="me-2"
                      />
                      {skill.title}
                    </Badge>
                  ))}
                </Stack>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
