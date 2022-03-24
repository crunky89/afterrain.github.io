import { useLocation } from "react-router-dom";


const About = () => {
  const loc = useLocation();

  // const [searchParams, setSearchParams] = useSearchParams();
  // const detail = searchParams.get("detail");
  // const mode = searchParams.get('mode');

  // const onToggleDetail = () => {
  //   setSearchParams({mode , detail : detail === 'true' ? false : true});
  // };

  // const onIncreaseMode = () => {
  //   const nextMode = mode === null ? 1 : parseInt(mode) + 1;
  //   setSearchParams({mode : nextMode, detail});
  // }

  return (
    <>
      <div>
        <h1>소개</h1>
        <p>어바웃 페이지!</p>
        <p>쿼리스트링 : {loc.search}</p>
        {/* <p>detail : {detail}</p>
        <p>mode : {mode}</p> */}
        {/* <button onClick={onToggleDetail}>Toggle detail</button>
        <button onClick={onIncreaseMode}>mode + 1</button> */}
        {/* 
        pathname
        search
        hash
        state
        key
        */}
      </div>
    </>
  )
}

export default About;