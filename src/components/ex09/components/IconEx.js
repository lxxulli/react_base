import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconEx = () => {
  return (
    <>
      <h3>메뉴버튼</h3>
      <FontAwesomeIcon
        icon={faBars}
        style={{
          color: "red",
          fontSize: "30px",
        }}
      />
      <br />
      <br />

      <h3>유저아이콘</h3>
      <FontAwesomeIcon icon={faFaceSmile} />
      {/* <i class="fa-solid fa-face-smile"></i> 중에 뒤에 거를 적기 */}
      {/* 레귤러인지 솔리드인지 위에 임폴트 경로 잘 보기 */}
    </>
  );
};
