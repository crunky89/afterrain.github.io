import {Link, Routes, Route} from 'react-router-dom';
import Profile from './Profile';


const Home = () => {
  return (
    <>
      <div>
        <h1>홈</h1>
        <p>첫 페이지!</p>
        <Link to="/about?detail=true&mode=1">소개</Link>
        <br/>
        {/* <Routes>
          <Route path="/profile">
            <Route path=":name" element={<Profile/>} />
          </Route>
        </Routes> */}
        <Link to="/profile/react">react 프로필</Link>
        <br/>
        <Link to="/profile/hong">hong 프로필</Link>
        <br/>
        <Link to="/profile/noname">noname 프로필</Link>
        <br/>
      </div>
    </>
  )
}

export default Home;