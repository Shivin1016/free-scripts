import React from "react";

const HeaderPage = () => {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <a href="./">
        <h1 className="font-medium">
          Free <span className="text-blue-400 font-bold">Scripts</span>
        </h1>
      </a>
      <a href="./" className="flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400 text-sm">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </a>
    </header>
  );
};

export default HeaderPage;