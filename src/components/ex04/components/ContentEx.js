// import "../css/styleEx2.css";

const conBox = [
  {
    id: 0,
    imgUrl:
      "https://images.unsplash.com/photo-1654359464102-d906f2ef02db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
    title: "film_img",
    txt: "얇은 층이나 막. 비닐이나 코팅지, 그리고 다음 번 목차의 필름도 여기에 포함된다.",
  },
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1648658337061-5814bf6e4f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
    title: "film_img",
    txt: "영화를 의미하기도 한다. 영국에서는 'movie'보다 자주 쓰이는 단어",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1575795325632-377ca781cf78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1732&q=80",
    title: "film_img",
    txt: "사실 '필름'이란 단어는 한국의 외래어 표기법에 따른 표기지 실제 발음은 미묘하게 다르다.",
  },
];

export const ContentEx = () => {
  return (
    <>
      <div className="wrap">
        {conBox.map((a) => (
          <div key={a.id}>
            <div className="con_wrap">
              <div className="imgBox">
                <img src={a.imgUrl}></img>
              </div>
              <div className="title">{a.title}</div>
              <div className="txt">{a.txt}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// export const ContentEx = () => {
//   return (
//     <div className="con_wrap">
//       {conBox.map((con) => (
//         <div className="con" key={con.id}>
//           <div
//             className="bg"
//             style={{
//               background: `url(${con.imgUrl}) no-repeat center / cover`,
//             }}
//           />
//           <h3>{con.title}</h3>
//           <p>{con.txt}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
