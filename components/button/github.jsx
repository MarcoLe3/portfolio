import React from "react";


function GithubButton({ url }) {
  return (
    <div className="">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[600px] p-4 border border-black hover:bg-black hover:text-white rounded-full"
      >
        <span className="">GitHub</span>
      </a>
    </div>
  );
}

export default GithubButton;
