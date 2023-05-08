import React, { useState } from "react";
import FreresLogo from "../../Assets/Logos/FreresLogo.jpg";
import "./Newsletter.scss";
import { verifyEmail, uploadEmail } from "../../Services/newsletter";

const Newsletter = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [isSuscribed, setIsSuscribed] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const handleSetUserEmail = (e: any) => {
    setUserEmail(e.target.value);
  };

  const handleSubmitUserEmail = async (e: any) => {
    try {
      e.preventDefault();
      setLoader(true);
      const isSuscribed: any = await verifyEmail(userEmail);

      if (!isSuscribed.empty) {
        const response = await uploadEmail(userEmail);

        localStorage.setItem("alreadySuscribed", JSON.stringify(true));
        setIsSuscribed(false);
      } else {
        setIsSuscribed(true);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
    setLoader(false);
  };

  if (loader) {
    return (
      <div className="newsletterLoader">
        <img className="newsletterLoader_img" src={FreresLogo} alt="loader" />
      </div>
    );
  }

  return (
    <div className="newsletter">
      <h3 className="newsletter_h3">ÚNETE A NUESTRA TRIBU</h3>
      <p className="newsletter_p">
        SUSCRÍBETE PARA RECIBIR DESCUENTOS, NOVEDADES Y BENEFICIOS EXCLUSIVOS
      </p>
      {isSuscribed ? (
        <div className="newsletter_suscribed">
          <p className="newsletter_suscribed_p">
            HAS SIDO SUSCRITO A NUESTRO NEWSLETTER
          </p>
        </div>
      ) : (
        <div className="newsletter_div">
          <form
            className="newsletter_div_form"
            onSubmit={(e: any) => handleSubmitUserEmail(e)}
          >
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={userEmail}
              className="newsletter_div_form_input"
              onChange={(e) => handleSetUserEmail(e)}
            />
            <button
              type="submit"
              className={`newsletter_div_form_button ${
                !userEmail && "disabled"
              }`}
              disabled={!userEmail}
            >
              UNIRME
            </button>
          </form>
          {errorMessage && (
            <p className="newsletter_error">YA TE ENCUENTRAS SUSCRITO.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Newsletter;
