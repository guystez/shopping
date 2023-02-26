import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="nav">
        <ul>
          {/* <li><a href="#">Home</a></li> */}
          {/* <li><a href="#">about</a></li> */}
          {/* <li><a href="#">features</a></li> */}
          {/* <li><button>Request a demo</button></li> */}
        </ul>
      </div>

      <div className="section">
        <h1>404</h1>
        <p className="one">looks like you are</p>
        <p className="two">lost in space</p>
        <img src="http://salehriaz.com/404Page/img/earth.svg" alt="" className="earth" />
        <img src="/rocket.png" alt="" className="rocket" />
        <img src="http://salehriaz.com/404Page/img/moon.svg" alt="" className="moon" />
        <img src="http://salehriaz.com/404Page/img/astronaut.svg" alt="" className="ast" />
        {/* <button href="/" className="three" >go back home</button> */}
        <button className="three" onClick={() => window.location.href = "/"}>go back home</button>

        {/* <NavLink to="/" className="me-auto">Home</NavLink ><br></br> */}
      </div>

      <section className="wrapper">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
    </div>
  );
};

export default NotFoundPage;
