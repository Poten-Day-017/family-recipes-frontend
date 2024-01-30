import React from "react";

const RecipeForm = () => {
  return (
    <form>
      <label htmlFor="title">레시피 제목</label>
      <input type="text" id="title" />

      <label htmlFor="description">레시피 소개</label>
      <input type="text" id="description" />

      <label htmlFor="owner">레시피 주인</label>
      <input type="text" id="owner" />

      <label htmlFor="main-image">대표 사진을 등록해주세요</label>
      <input type="file" id="main-image" />

      <label htmlFor="video">영상을 등록해주세요</label>
      <input type="file" id="video" />

      <label htmlFor="episode">레시피 에피소드</label>
      <input type="textArea" id="episode" />

      <label htmlFor="serving-size">몇 인분 용</label>
      <input type="textArea" id="serving-size" />
    </form>
  );
};

export default RecipeForm;
