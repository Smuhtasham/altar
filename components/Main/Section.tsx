export const Section = () => {
    return (
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          fontSize: "3.5vw",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#faf8f0",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          paddingBottom: "10vh",
        }}
      >
        <div className="w-[70%] flex justify-between m-auto">
          <img src="elle.png" className="w-[30%]" alt="" />
          <img src="architectural-digest.png" className="w-[30%]" alt="" />
        </div>
      </div>
    );
  };