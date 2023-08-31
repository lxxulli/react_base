const intro = [
  {
    id: 0,
    name: "이유리",
    age: 12,
  },
  {
    id: 2,
    name: "이가원",
    age: 12,
  },
  {
    id: 3,
    name: "이현지",
    age: 14,
  },
  {
    id: 4,
    name: "이혜지",
    age: 13,
  },
];

export const MapEx02 = () => {
  return (
    <>
      {intro.map((me) => (
        <div key={me.id}>
          <h3>소개</h3>
          <h4>이름 : {me.name}</h4>
          <h4>나이 : {me.age}</h4>
          <hr />
        </div>
      ))}
    </>
  );
};
