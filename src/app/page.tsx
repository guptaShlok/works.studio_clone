"use client";
import React, { useEffect } from "react";
import Loader from "./components/Loader/Loader";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";
import FourthFooter from "./components/FourthPage/FourthFooter";
import "../../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
const Page: React.FC = () => {
  useEffect(() => {
    const initLocomotiveScroll = async () => {
      try {
        const { default: LocomotiveScroll } = await import("locomotive-scroll");

        const scrollContainer = document.querySelector(
          "[data-scroll-container]"
        ) as HTMLElement | null;

        if (scrollContainer) {
          const locomotiveScroll = new LocomotiveScroll({
            el: scrollContainer,
            smooth: true,
          });

          // Optional: Enable Locomotive Scroll
          locomotiveScroll.init();

          return () => {
            locomotiveScroll.destroy();
          };
        } else {
          console.warn("No .loco-container found in the DOM.");
        }
      } catch (error) {
        console.error("Error loading Locomotive Scroll:", error);
      }
    };

    initLocomotiveScroll();
  }, []);

  return (
    <>
      <Loader />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthFooter />
    </>
  );
};

export default Page;
