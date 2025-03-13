import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


export default function Footer() {
  const [isOpen, setIsOpen] = useState({
    explore: false,
    help: false,
    partner: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-10">
          <section>
            <h6 className="text-lg text-primary-brand-color">Getir'i indir!</h6>
            <nav className="grid grid-cols-1 gap-y-4">
              <a href="https://apps.apple.com">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt="App Store"
                />
              </a>
              <a href="https://play.google.com">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt="Google Play"
                />
              </a>
              <a href="https://appgallery.huawei.com">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt="Huawei AppGallery"
                />
              </a>
            </nav>
          </section>

          <section className="md:block">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("explore")}
            >
              <h6 className="text-lg text-primary-brand-color">
                Getir'i keşfet
              </h6>

              <div className="md:hidden">
                {isOpen.explore ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {(isOpen.explore || window.innerWidth >= 768) && (
              <nav className="grid grid-cols-1 gap-y-2 mt-4">
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  Hakkımızda
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  Kariyer
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  İletişim
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  Teknoloji Kariyerleri
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  Sosyal Sorumluluk Projeleri
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  Basın Bültenleri
                </a>
              </nav>
            )}
          </section>

          <section className="md:block">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("help")}
            >
              <h6 className="text-lg text-primary-brand-color">
                Yardıma mı ihtiyacın var?
              </h6>

              <div className="md:hidden">
                {isOpen.explore ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {(isOpen.help || window.innerWidth >= 768) && (
              <nav className="grid grid-cols-1 gap-y-2 mt-4">
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  Sıkça Sorulan Sorular
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  Kişisel Verilerin Korunması
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  İletişim
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  Gizlilik Politikası
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  Kullanım Koşulları
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  Çerez Politikası
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  İşlem Rehberi
                </a>
              </nav>
            )}
          </section>

          <section className="md:block">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("partner")}
            >
              <h6 className="text-lg text-primary-brand-color">
                İş Ortağımız Ol
              </h6>

              <div className="md:hidden">
                {isOpen.explore ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {(isOpen.partner || window.innerWidth >= 768) && (
              <nav className="grid grid-cols-1 gap-y-2 mt-4">
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  Bayimiz Olun
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-gray-400"
                >
                  Deponu Kirala
                </a>
                <a
                  href="https://getir.com"
                  className="block hover:text-primary-brand-color"
                >
                  Zincir Restoranlar
                </a>
              </nav>
            )}
          </section>

          <section>
            <nav>
              <img
                src="https://cdn.getir.com/getirweb-images/common/etbis.png"
                alt="E-Ticaret"
              />
            </nav>
          </section>
       
        </div>
      </div>
    </div>
  );
}
