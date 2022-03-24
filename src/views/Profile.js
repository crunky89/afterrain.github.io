/* 
URL 파라미터 :: /quest1/quest2
쿼리 스트링 :: /articles?page=1&keyword=react
*/
import { useParams } from "react-router-dom";

const data = {
  react : {
    name : '리액트',
    description : "리액트 하는 중..",
  },
  hong : {
    name : "홍홍홍",
    description : "호호홍홍홍",
  }
};

const Profile = () => {
  const parmas = useParams();
  console.log(parmas);
  const profile = data[parmas.username];

  return (
    <>
      <div>
        <h1>사용자 프로필</h1>
        {profile ? (
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
          </div>
        ) : (
          <p>존재하지 않는 프로필입니다</p>
        )}
      </div>
    </>
  )
}

export default Profile;