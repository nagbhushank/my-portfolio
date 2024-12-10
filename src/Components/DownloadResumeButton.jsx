import React from "react";
import "./DownloadResumeButton.css";

const DownloadResumeButton = () => {
  const resumeLink = process.env.REACT_APP_RESUME_LINK;

  return (
    <div className="download-resume">
      <a
        href={resumeLink}
        download
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Ensures security
        className="btn"
      >
        Download my resume
        <i className="fas fa-solid fa-download fa-lg"></i>
      </a>
    </div>
  );
};

export default DownloadResumeButton;
