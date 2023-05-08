import React from "react";
import Socials from "../../Socials/Socials";
import Newsletter from "./NewsletterContent/NewsletterContent";
import NewsletterPopupImage from "../../../Assets/NewsletterPopup/NewsletterPopup.png";
import "./ModalNewsletter.scss";

interface ModalNewsletterProps {
  setActiveModal: (boolean: boolean) => void;
}

const ModalNewsletter = ({ setActiveModal }: ModalNewsletterProps) => {
  return (
    <React.Fragment>
      <div className="modalNewsletter">
        <div className="modalNewsletter_div">
          <p
            className="modalNewsletter_div_p"
            onClick={() => setActiveModal(false)}
          >
            CERRAR
          </p>
          <Newsletter />
          <Socials />
        </div>
        <img
          src={NewsletterPopupImage}
          alt="Newsletter"
          className="modalNewsletter_img"
        />
      </div>
    </React.Fragment>
  );
};

export default ModalNewsletter;
