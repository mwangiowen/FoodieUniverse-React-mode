import React from 'react';

function SplashScreen() {
  return (
    <div className="splash-screen">
      <main className="main">
        <a href="http://www.elastique.nl" className="icon">
          <div className="loader">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="93 220.9 781 400"
              enableBackground="new 0 0 781 400"
              xmlSpace="preserve"
            >
              <path
                className="dash"
                stroke="#1C1E21"
                d="M93,315.3h89.2c0,0,40.6,3,40.6,42.1v126.2c0,36.7-35.9,41.6-35.9,41.6H93v95.7h781V446.1L677.5,446l-0.2,35.6c0,1.7,2,37.2-38.3,43.2c-42,0-180.4-0.2-180.4-0.2l-0.2-50l176.6,0.3V369.8l-176.4-0.2l0.2-53h182.5c0,0,36.8,4.7,36.4,46.3c0,24.6,0.2,32.5,0.2,32.5l196-0.2V220.9H93V315.3z"
              ></path>
            </svg>
          </div>
        </a>
        <div className="icon icon_grow"></div>
      </main>
    </div>
  );
}

export default SplashScreen;
