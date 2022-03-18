import React from "react";
import Fotter from './Footer';
import Header from './Header';

const Laytout = ( {children} ) => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Fotter/>
    </>
  )
}

export default Laytout;