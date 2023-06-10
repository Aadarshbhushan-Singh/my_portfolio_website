import React from "react";
import resume from '../../Assets/Aadarshbhushan_Singh_Resume.pdf';
const resume_link = "https://drive.google.com/file/d/1eyjFPmJMPPn6a1qLpBod3iR8cifcWIQ_/view?usp=drivesdk";
function CTA () {
      return<>
            <div className="cta">
                  <a className="btn" href={resume} download={"Aadarshbhushan_Singh_Resume.pdf"} target="_blank">Download RESUME</a>
                  <a className="btn btn-primary" href="#contact">Let's Talk</a>
                  
            </div>
      </>
}

export default CTA;