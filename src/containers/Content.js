import React from "react";
import styled from "styled-components";

const StyleContent = styled.div`
  /*공통 스타일*/
  padding: 0 32px;

  .nav {
    display: flex;
    justify-content: space-between;
    h3 {
      padding: 0;
      margin: 0;
      font-size: 48px;
    }
    a {
      display: block;
      height: 61px;
      border: 1px solid red;
      color: #666;
      font-size: 28px;

      &:active {
        color: #666;
      }
    }
  }
`;

function Content() {
  return (
    <StyleContent>
      <div className="nav">
        <h3>금융추천 상품</h3>
        <a href="https://app.zeplin.io/project/628c6ce61fb1d6be055ac792/screen/628d81934fe57dbbd2d25cfb">
          <p>상품 전체보기 </p>
        </a>
      </div>
    </StyleContent>
  );
}

export default Content;
