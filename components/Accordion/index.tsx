import React from "react";
import { ReactNode, FC } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";
import { LazyMotion, m } from "framer-motion";
import Center from "@components/Center";

interface AccordionProps {
  children: ReactNode;
  buttonTitle: string;
  title: string;
}
const loadFeatures = () =>
  import("@components/FramerFeatures").then((res) => res.default);

const Accordion: FC<AccordionProps> = (props) => {
  const { children, buttonTitle, title } = props;
  const accordionContainer = {
    enter: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  const [ref, isVisible] = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  };
  return (
    <LazyMotion features={loadFeatures}>
      <m.section className="font-sans" variants={accordionContainer}>
        <div className="ml-auto mr-auto w-full px-4">
          <m.div
            ref={ref}
            variants={variants}
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex w-full pt-2">
              <div className="mx-auto w-full rounded-2xl p-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span className="text-lg">{button}</span>
                        <ChevronDownIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } mt-1 h-5 w-5 text-slate-300`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-slate-200">
                        <div className="mb-4">{title}</div>
                        <div>{children}</div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default Accordion;
