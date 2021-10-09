import { useState, useContext } from "react";
import Link from "next/link";
// components
import LanguageDropdown from "components/Dropdowns/LanguageDropdown";
import { LanguageContext } from "lib/language";
import LinkRender from "./LinkRender";
import ResumeModal from "components/Modals/ResumeModal"

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [resumeModalOpen,setResumeModalOpen] = useState(false);
  const lang = useContext(LanguageContext).language;
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg" dir={lang == "english" ? "ltr" : "rtl"}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#"
              >
                <img src="/img/azarshiga/azarshiga.png" style={{ "max-width": "200px" }} />
                <p className="text-center ">azarshiga</p>
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none">
              <li className="flex items-center">
                <Link href="/projects">
                  <a
                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 "
                    href=""
                  >
                    <LinkRender language={lang} enText="Projects" faText="پروژه ها" icon="fas fa-pallet" />
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/calculators">
                  <a
                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 "
                    href=""
                  >
                    <LinkRender language={lang} enText="Tools" faText="ابزارک ها" icon="fas fa-calculator" />
                  </a>
                </Link>
              </li>
            </ul>
            <ul className={`flex flex-col lg:flex-row list-none ${lang == "english" ? "lg:ml-auto" : "lg:mr-auto"}`}>
              <li className="flex items-center">
                <Link href="">
                  <a
                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 "
                    href=""
                  >
                    {/* <i className="inline-block lg:text-blueGray-200 text-blueGray-400 fas fa-flag text-lg leading-lg mr-2" />{" "} */}
                    <div className="inline-block">
                      <LanguageDropdown />
                    </div>
                  </a>
                </Link>
              </li>
              {/* <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://t.me/Azarshiga"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://t.me/Azarshiga"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li> */}

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://t.me/Azarshiga"
                  target="_blank"
                >
                  <LinkRender language={lang} enText="Telegram" faText="تلگرام" icon="fab fa-telegram" />
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setResumeModalOpen(!resumeModalOpen)}
                >
                  <i className="fas fa-arrow-alt-circle-down"></i>
                  <LinkRender language={lang} enText="Resume" faText="رزومه" icon={null} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            {resumeModalOpen && <ResumeModal close={() => setResumeModalOpen(!resumeModalOpen)}/>}
    </>
  );
}
