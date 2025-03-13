import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };

  return (
    <div className="bg-brand-purple">
      <div className="xl:container hidden xl:block px-10 py-24 text-white">
        <img
          src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
          alt="Mutluluk simgesi"
        />
        <h3 className="text-6xl mt-16 font-semibold text-white">
          Dakikalar içinde kapınızda
        </h3>

        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6 mt-4 ml-auto">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-4">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />

              <label className="flex-1 relative group block cursor-pointer">
                <input
                  required
                  className="peer w-full h-14 px-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-brand-color"
                />
                <span className="absolute top-0 left-0 h-full px-6 flex items-center text-md text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-sm">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
