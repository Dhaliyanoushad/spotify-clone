import React from "react";

const SongItem = () => {
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt="" />
      <p className="text-slate-200 text-sm"></p>
    </div>
  );
};

export default SongItem;
