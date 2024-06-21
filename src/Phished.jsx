import PhishedImage from "./assets/phished.svg";
import { IoWarningOutline } from "react-icons/io5";
import './phished.css';

const Phished = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={PhishedImage} alt="" className="phished-image"/>
      </div>
      <div className="content-container">
        <div className="warning-container">
          <div className="warning-icon">
            <IoWarningOutline size={90} />
          </div>
          <p className="warning-text">
            You have been phished
          </p>
        </div>
        <hr className="divider" />
        <div className="message-container">
          <div className="message-content">
            <p>Hello You,</p>
            <p>
              This is a follow-up to the recent email you received. It was a
              simulated phishing test authorized by ethnos.com.ng. While it was
              just a training exercise, clicking on such emails can have serious
              consequences.
            </p>
            <p>
              Cybercriminals send phishing emails daily, hoping to steal sensitive
              information or spread malware. Thankfully, in this case, none of
              your information was compromised.
            </p>
            <p>
              Learning to identify phishing attempts is crucial in protecting our
              organization from real hackers.
            </p>
            <p>
              Ready to be a pro at spotting phishing emails? Click the button
              below to get started!
            </p>
            <p>Get Started</p>
            <div className="button-container">
              <button className="cta-button">Lets Go</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phished;
