import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiGlobe } from 'react-icons/bi';

export default function BottomFooter() {
  return (
    <div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 mt-6 py-6">
          <div className="text-sm text-gray-700 flex gap-x-8 mb-4 md:mb-0">
            &copy; 2025 Getir clone SvvlUz
            <a
              href="https://getir.com"
              className="text-primary-brand-color hover:underline relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-4 gap-y-2 md:gap-y-0 justify-center md:justify-end">
            <a
              href="https://facebook.com"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center"
            >
              <FaFacebook size={21} />
            </a>
            <a
              href="https://twitter.com"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center"
            >
              <FaSquareXTwitter size={21} />
            </a>
            <a
              href="https://instagram.com"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center"
            >
              <FaInstagram size={21} />
            </a>
            <a
              href="https://getir.com"
              className="h-8 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent flex items-center px-2 text-sm gap-x-2 rounded text-gray-500 border border-gray-100"
            >
              <BiGlobe size={18} /> Türkçe (TR)
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
}
