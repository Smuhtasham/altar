import React from "react";

const Main = () => {
  return (
    <>
      <div className="h-screen w-full relative"
      style={{ backgroundImage: "url(/22.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <p className="absolute text-center font-semibold text-[18px] bottom-6 left-1/2 transform -translate-x-1/2 md:text-[22px] lg:text-[28px]">
          ALTAR TULUM
        </p>
      </div>
    </>
  );
};

export default Main;