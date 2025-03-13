import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { useState } from "react";
import Modal from "./modal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    
    <header className="bg-brand-color">
      
      <div className="container px-6 py-6 flex items-center justify-between">
        <div>
          <a href="/">
            <img
              src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
              alt="Getir Logo"
              className="h-14"
            />
          </a>
        </div>

        <div className="relative w-full sm:w-96">
          <input
            type="text"
            placeholder="Ürün, kategori veya marka ara"
            className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkblue-400"
          />
          <FiSearch
            size={20}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          />
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex gap-x-8 text-sm font-semibold">
          <button
            onClick={openLoginModal}
            className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100"
          >
            Giriş yap
            <FaUser size={15} />
          </button>
          <button className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100">
            Favorilerim
            <MdFavorite size={15} />
          </button>
          <button className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100">
            Sepetim
            <FaBasketShopping size={15} />
          </button>
        </nav>
      </div>

      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:hidden bg-brand-color text-white p-4 space-y-4`}
      >
        <button
          onClick={openLoginModal}
          className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100"
        >
          Giriş yap
          <FaUser size={15} />
        </button>
        <button className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100">
          Favorilerim
          <MdFavorite />
        </button>
        <button className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100">
          Sepetim
          <FaBasketShopping />
        </button>
      </div>

      <Modal isOpen={isLoginModalOpen} closeModal={closeLoginModal} />
    </header>
    
  );
}
