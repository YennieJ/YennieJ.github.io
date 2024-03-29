import React, { useState, useRef, useEffect } from "react";

import YenPinImg from "../YenPin/YenPinImg";
import PortfolioImg from "../Portfolio/PortfolioImg";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface ISlider {
  projectName: string;
}

// pages > projects > yenpin
// pages > projects > portfolio

const Slider = ({ projectName }: ISlider) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slideRef = useRef<HTMLDivElement>(null);

  let slideArr: string[] = [];

  if (projectName === "YenPin") {
    slideArr = [...YenPinImg];
  } else if (projectName === "Portfolio") {
    slideArr = [...PortfolioImg];
  }

  const SLIDE_NUM = slideArr.length;

  //기본 배열의 마지막
  const beforeSlide = slideArr[SLIDE_NUM - 1];

  //기본 배열의 처음
  const afterSlide = slideArr[0];

  //무한 슬라이드를 구현하기 위해 새로운 배열
  const copiedArr = [beforeSlide, ...slideArr, afterSlide];

  //무한 슬라이드 사이즈
  const COPIED_NUM = copiedArr.length;

  useEffect(() => {
    if (slideIndex === slideArr.length + 1) {
      setTimeout(() => {
        setSlideIndex(1);
        if (slideRef.current) {
          slideRef.current.style.transition = "";
        }
      }, 200);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 300ms ease-in-out";
        }
      }, 300);
    }

    if (slideIndex === 0) {
      setTimeout(() => {
        setSlideIndex(slideArr.length);
        if (slideRef.current) {
          slideRef.current.style.transition = "";
        }
      }, 200);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 300ms ease-in-out";
        }
      }, 300);
    }
  }, [slideArr.length, slideIndex]);

  const slideHandler = (direction: number) => {
    setSlideIndex((slideIndex) => slideIndex + direction);
  };

  // 몇개의 사진이 있는지, 몇번째 사진을 보고있는지
  const dotArray = new Array(SLIDE_NUM).fill(0);

  return (
    <section className="overflow-hidden text-black pt-6">
      <h4 className="sr-only">{projectName}의 이미지 슬라이드</h4>
      <div
        className="flex border-y-4"
        ref={slideRef}
        style={{
          width: `${100 * COPIED_NUM}%`,
          transition: "all 300ms ease-in-out",
          transform: `translateX(${
            -1 * ((100 / copiedArr.length) * slideIndex)
          }%)`,
        }}
      >
        {copiedArr.map((img, i) => (
          <div key={i} className="relative w-full text-center ">
            <img src={img} alt={projectName} />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-5">
        <AiOutlineLeft
          size="30"
          className="mr-3 cursor-pointer"
          onClick={() => slideHandler(-1)}
        />

        {dotArray.map((v, i) => (
          <div
            key={i}
            className={
              i + 1 === slideIndex
                ? "w-6 h-6 mx-[2px] border-2 rounded-full bg-stone-700"
                : " w-5 h-5 mx-[1px] border-2 rounded-full"
            }
          />
        ))}
        <AiOutlineRight
          size="30"
          className="ml-3 cursor-pointer"
          onClick={() => slideHandler(1)}
        />
      </div>
    </section>
  );
};

export default Slider;
