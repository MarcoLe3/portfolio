import React from "react";


function GithubButton({ url }) {
  return (
    <div className="">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full p-4 border-2 border-black rounded-xl"
      >
        <span className="font-medium">GitHub</span>
      </a>
    </div>
  );
}

export default GithubButton;
