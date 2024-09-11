import React from "react";

function ProfileCard({
  name = "SARDAR TAVINDER SINGH KOHLI",
  img = "https://ieeegnitc.org/assets/chairman-O_-voKGM.webp",
  desc = "CHAIRMAN",
}) {
  return (
    <div className="max-w-sm rounded-xl border  overflow-hidden shadow-lg p-6 px-14 h-80 bg-neutral-50">
      <img
        className=" m-2 border-2 border-orange-700 w-44 h-44 rounded-full mx-auto"
        src={img}
        alt={name}
      />
      <div className="text-center mt-4">
        <h3 className="text-xl  font-semibold">{name}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
