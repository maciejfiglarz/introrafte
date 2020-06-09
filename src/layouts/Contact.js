import React, { useEffect, useState } from "react";
import pl from "../img/pl.svg";
import bg from "../img/bg.svg";
import contact from "../img/contact.svg";
import API from "./../helper/api";

import title from "./../img/contact_last.svg";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isAccept, setIsAccept] = useState(false);
  const [isSuccess, setSuccess] = useState("");
  const [errors, setErrors] = useState({});
  const { t, i18n } = useTranslation();

  let style = {
    width: "100%",
    color: "white",
    textAlign: "center",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    let errors = {};
    if (name.length == 0) {
      errors["name"] = t("Musisz wypełnić imię");
    }
    if (email.length == 0) {
      errors["email"] = t("Musisz wypełnić email");
    }
    if (content.length == 0) {
      errors["content"] = t("Musisz wypełnić treść wiadomości");
    }
    if (isAccept == false) {
      errors["isAccept"] = t("Musisz zaakceptować politykę prywatności");
    }
    setErrors(errors);
    const isValid = Object.keys(errors).length == 0 ? true : false;
    if (isValid) {
      setSuccess(true);
      API.post("http://ssosii.kylos.pl/mail/index.php", {
        name,
        email,
        content,
      });
      setName("");
      setEmail("");
      setContent("");
      setIsAccept(false);
    }
  };

  return (
    <div className="contact__wrap">
      <div className="clients__title">
        <img src={title} />
      </div>
      <div id="contact" className="contact">
        <div className="contact__container container">
          <div className="contact-box">
            <span style={style} className="contact-box__title">
              <b>{t("Masz pytania?")}</b> {t("Skontaktuj sie z nami")}:
            </span>

            {isSuccess && (
              <div className="form-success">Mail wysłany poprawnie</div>
            )}
            <form
              className="form"
              id="contactForm"
              method="post"
              noValidate
              action="send-script.php"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <label for="field-name">{t("Imię")}</label>
                {errors["name"] && (
                  <div className="form-error">{errors["name"]}</div>
                )}
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  name="name"
                  required
                  id="field-name"
                  data-error="Wypełnij to pole"
                  pattern="[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+"
                />
              </div>
              <div className="form-row">
                <label for="field-email">{t("Email")}</label>
                {errors["email"] && (
                  <div className="form-error">{errors["email"]}</div>
                )}
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  name="email"
                  required
                  id="field-email"
                  data-error="Wpisz poprawny email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                />
              </div>
              <div className="form-row">
                <label for="field-message">{t("Wiadomość")}</label>
                {errors["content"] && (
                  <div className="form-error">{errors["content"]}</div>
                )}
                <textarea
                  onChange={(e) => setContent(e.target.value)}
                  name="message"
                  required
                  data-error="Musisz wypełnić pole"
                  id="field-message"
                  pattern=".+"
                  value={content}
                />
              </div>
              <div className="form-row">
                {errors["isAccept"] && (
                  <div className="form-error">{errors["isAccept"]}</div>
                )}

                <label className="checkbox-cnt">
                  <input
                    onChange={(e) => setIsAccept(e.target.value)}
                    type="checkbox"
                    required
                    value={isAccept}
                    data-error="Musisz wypełnić pole"
                    name="regulation"
                    checked={isAccept}
                  />
                  <i className="state" aria-hidden="true"></i>
                  <span>
                    {t(
                      "Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych oraz ogólnym rozporządzeniem o ochronie danych osobowych w związku z realizacją zgłoszenia. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem/am poinformowany/a, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Intro Rafter."
                    )}
                  </span>
                </label>
              </div>
              <div className="form-row">
                <button type="submit" className="submit-btn">
                  {t("Wyślij")}
                </button>
              </div>
            </form>
          </div>

          <div className="contact-box contact-box--destination">
            {/* <div className="contact__info">
            <div className="contact__info-company">Intro Rafter</div>
            <div className="contact__info-phone">tel. 530-858-437</div>
            <div className="contact__info-adress">
              <div>ul. Spokojna 28</div>
              <div>05-140 Serock</div>
            </div>
            <div className="contact__info-mail"></div>
          </div> */}
            <div className="contact-box-pl">
              <div className="contact-box-pl-data">
                <div className="contact-box-pl-cover"></div>
                <div className="contact-box-pl-info">
                  <div className="company">Warszawa</div> <br />
                  {/* <i className="far fa-address-book"></i> ul. Spokojna 28 05-140
                Serock
                <br />
                <i className="far fa-envelope"></i> tel. 999-999-999 <br />
                <i className="far fa-envelope"></i> biuro@intrarafter.pl */}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
