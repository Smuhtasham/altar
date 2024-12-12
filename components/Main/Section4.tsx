"use client"
export const Section4 = () => {
    return (
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          backgroundImage: "url('/01.png')",
          zIndex: 3,
        }}
      >
        <div className="flex absolute lg:left-[22%] left-[12%] top-[50%] lg:top-[32%] gap-6 flex-col lg:w-[60%] justify-center items-center">
          <h2 className="text-[40px] lg:text-[80px] font-semibold">
            ALTAR TULUM
          </h2>
          <div>
            <button
              className="px-2 py-1 lg:px-8 lg:py-2 text-[18px] font-semibold lg:text-base rounded-sm cursor-pointer"
              style={{
                border: `1px solid white`,
                transition: "border-color 1s ease",
              }}
              onClick={() =>
                (window.location.href =
                  "https://www.airbnb.com/rooms/589202359470803966")
              }
            >
              RESERVATIONS
            </button>
          </div>
        </div>
      </div>
    );
  };