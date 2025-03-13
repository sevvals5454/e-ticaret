import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  EmailAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  collection,
} from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Firebase yapılandırması (güncel bilgiler Firebase Console’dan alınmalı)
const firebaseConfig = {
  apiKey: "AIzaSyAUY_FLTATDNO5jjE4tB6hwkUt3Wv-B3OE",
  authDomain: "e-ticaret-7471e.firebaseapp.com",
  projectId: "e-ticaret-7471e",
  storageBucket: "e-ticaret-7471e.firebasestorage.app",
  messagingSenderId: "232828084804",
  appId: "1:232828084804:web:91335863107a46d394d211",
  measurementId: "G-VM4DDE2L6X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Kullanıcı verisini işleyen yardımcı fonksiyon (herhangi bir UI güncellemesi yapabilirsiniz)
const userHandle = (data) => {
  console.log("Kullanıcı verisi:", data);
};

// Tek bir onAuthStateChanged dinleyicisi: kullanıcı giriş/çıkış durumunu izler,
// eğer kullanıcı giriş yaptıysa Firestore'da yoksa ekler.
onAuthStateChanged(auth, async (user) => {
  if (user) {
    try {
      const userDocRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userDocRef);
      if (!userSnap.exists()) {
        await setDoc(userDocRef, {
          uid: user.uid,
          fullName: user.displayName || "",
          email: user.email || "",
          phoneNumber: user.phoneNumber || "",
          createdAt: new Date(),
        });
        console.log("Yeni kullanıcı Firestore'a eklendi.");
      } else {
        console.log("Kullanıcı Firestore'da zaten var:", userSnap.data());
      }
      userHandle({
        uid: user.uid,
        fullName: user.displayName,
        email: user.email,
        ...userSnap.data(),
      });
    } catch (err) {
      console.error("Kullanıcı bilgisi alınırken hata:", err);
    }
  } else {
    userHandle(false);
  }
});

// reCAPTCHA doğrulayıcısı için global değişken
let recaptchaVerifier;

// reCAPTCHA'yı başlatan yardımcı fonksiyon
const initRecaptcha = async () => {
  if (!recaptchaVerifier) {
    recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container", // HTML'de bu ID'ye sahip bir div olmalı
      {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA başarılı!", response);
        },
        "expired-callback": () => {
          console.warn("reCAPTCHA süresi doldu. Yeniden oluşturuluyor...");
          recaptchaVerifier.clear();
          recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
              size: "invisible",
              callback: (response) => {
                console.log("reCAPTCHA başarılı!", response);
              },
              "expired-callback": () => {
                console.warn("reCAPTCHA süresi tekrar doldu.");
              },
            },
            auth
          );
          recaptchaVerifier.render();
        },
      },
      auth
    );
    await recaptchaVerifier.render();
  }
};

// Telefon ile giriş işlemi için fonksiyon
export const login = async (phoneNumber) => {
  try {
    await initRecaptcha();
    // Telefon numarası ile giriş yap ve OTP gönderimi başlat
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier
    );
    console.log("OTP gönderildi!");
    return confirmationResult;
  } catch (err) {
    console.error("Giriş hatası:", err);
    toast.error("Telefon numarası hatalı veya doğrulama başarısız!");
  }
};

// Kullanıcı bilgilerini alma işlemi (kullanıcı adı üzerinden)
export const getUserInfo = async (uname) => {
  const usernameSnap = await getDoc(doc(db, "usernames", uname));
  if (usernameSnap.exists()) {
    const userSnap = await getDoc(doc(db, "users", usernameSnap.data().user_id));
    return userSnap.data();
  } else {
    toast.error("Kullanıcı bulunamadı!");
    throw new Error("Kullanıcı bulunamadı!");
  }
};

export {
  auth,
  db,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  EmailAuthProvider,
  getDoc,
  setDoc,
  collection,
};
