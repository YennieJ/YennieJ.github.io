import React from "react";

const Introduce = () => {
  <b className="text-lg"> 리액트</b>;
  return (
    <div className="p-10">
      <h2 className="pb-10 text-4xl leading-relaxed">Introduce</h2>
      <div className="text-base font-normal">
        <div>
          <b className="text-lg"> 리액트</b> 기반의 웹 프론트엔드 개발을
          좋아합니다.
        </div>
        <br />
        <div>
          프로젝트를 진행하며
          <b className="text-lg"> 재사용 가능한 컴포넌트 설계</b>에 대한 고민을
          하고
          <b className="text-lg"> 타입스크립트</b>를 활용하여 컴파일 과정에서
          오류를 잡아내어 더 안전한 개발 환경을 구축하기 위해 노력했습니다.
        </div>
        <br />
        <div>
          여러가지 CSS 툴을 사용해보았고 레이아웃을 보고 소스로 구현하여 다양한
          디바이스에 대응하는 <b className="text-lg"> 반응형 디자인</b>을
          고려합니다.
        </div>
        <br />
        <div>
          주어진 상황과
          <b className="text-lg"> 우선순의 중요성</b> 을 빠르게 파악하여 필요한
          일에 집중하며 빠른 시간안에 결과물을 도출하며 이를 통해 지식과 역량을
          넓히고자 합니다.
        </div>
      </div>
    </div>
  );
};

export default Introduce;
