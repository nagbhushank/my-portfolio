import React from "react";
import "./DownloadResumeButton.css";
import { downloadResume } from "../utils/utils";
import resume from "../Assets/Resume.pdf";

const DownloadResumeButton = () => {
  //const resumeLink = process.env.REACT_APP_RESUME_LINK;

  return (
    <div className="download-resume">
      <a
        href={resume}
        download
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Ensures security
        className="btn"
      >
        {downloadResume}
        <i className="fas fa-solid fa-download fa-lg"></i>
      </a>
    </div>
  );
};

export default DownloadResumeButton;
