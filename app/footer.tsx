import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faSoundcloud,
    faYoutube,
    faFacebook
  } from "@fortawesome/free-brands-svg-icons";
  import { ThemeToggle } from "@/components/theme-switcher";

export default function Footer(){
    return (
        <div className={`fixed w-full bottom-0 flex flex-col bg-transparent mx-auto justify-center py-2 z-50`}>
            <div className="mx-auto py-3">
                <ThemeToggle mobile={false}/>
            </div>
        <div className="flex flex-row justify-center gap-4 text-black-50 mx-auto">
            <Link
                href={'https://soundcloud.com/user-72251336'}
                className={`Soundcloud link`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSoundcloud} size="2x" className="hover:scale-[1.05]"/>
            </Link>
            <Link
                href={'https://www.youtube.com/channel/UCZ9VWn7-ISrHQJ4ddfGdEhA'}
                className={`YouTube Link`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" className="hover:scale-[1.05]"/>
            </Link>
            <Link
                href={'https://www.instagram.com/sayheysounds/'}
                className={`Instagram social`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:scale-[1.05]"/>
            </Link>
            <Link
                href={'https://www.facebook.com/Sayheysounds-1941637386097126/'}
                className={`Facebook Link`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="hover:scale-[1.05]"/>
            </Link>
        </div>
        <p className="text-center">© 2023 by SayHeySounds</p>
    </div>
    )
}