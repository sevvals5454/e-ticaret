import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase";

function Modal({ isOpen, closeModal }) {
  const [selected, setSelected] = useState("TR");
  const [phone, setPhone] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };

  if (!isOpen) return null;

  const sendOtp = async () => {
    const phoneNumber = `${phones[selected]}${phone}`;
    const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
      callback: (response) => {
        console.log("reCAPTCHA başarılı:", response);
      },
    });
    getAuth().settings.appVerificationDisabledForTesting = true;

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      window.confirmationResult = confirmationResult;
      setIsOtpSent(true);
      console.log("OTP gönderildi!");
    } catch (error) {
      console.error("OTP gönderme hatası:", error);
    }

  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="modal-content bg-white p-6 rounded-lg w-full md:w-[400px] relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <h2 className="text-center text-2xl font-semibold text-primary-brand-color">
          {isSignUp ? "Kayıt Ol" : "Giriş Yap"}
        </h2>

        <div className="w-full">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            {isSignUp ? "Hesap Oluştur" : "Giriş yap veya kayıt ol"}
          </h4>

          <div className="grid gap-y-4">
            <div className="flex gap-x-2 items-center">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative group block cursor-pointer">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="peer w-full h-14 px-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-brand-color"
                />
                <span className="absolute top-0 left-0 h-full px-6 flex items-center text-md text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-sm">
                  Telefon Numarası
                </span>
              </label>
            </div>

            {isSignUp && (
              <>
                <label className="flex-1 relative group block cursor-pointer">
                  <input
                    required
                    className="peer w-full h-14 px-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-brand-color"
                  />
                  <span className="absolute top-0 left-0 h-full px-6 flex items-center text-md text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-sm">
                    Ad Soyad
                  </span>
                </label>

                <label className="flex-1 relative group block cursor-pointer">
                  <input
                    required
                    className="peer w-full h-14 px-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-brand-color"
                  />
                  <span className="absolute top-0 left-0 h-full px-6 flex items-center text-md text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-sm">
                    E-Posta
                  </span>
                </label>
              </>
            )}

            <button
              onClick={sendOtp}
              className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold mt-4"
            >
              {isOtpSent
                ? "Kodu Doğrula"
                : isSignUp
                ? "Kayıt Ol"
                : "Giriş Yap"}
            </button>

            <div className="mt-4 text-gray-500 text-center">
              {isSignUp ? (
                <p>
                  Zaten hesabınız var mı?{" "}
                  <button
                    onClick={() => setIsSignUp(false)}
                    className="text-primary-brand-color font-semibold"
                  >
                    Giriş yapın
                  </button>
                </p>
              ) : (
                <p>
                  Hala kayıt olmadın mı?{" "}
                  <button
                    onClick={() => setIsSignUp(true)}
                    className="text-primary-brand-color font-semibold"
                  >
                    Kayıt ol
                  </button>
                </p>
              )}
            </div>

            <hr className="h-[1px] bg-gray-300 my-2" />
            <div id="recaptcha-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
