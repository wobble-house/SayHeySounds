import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return (
        <div className={`fixed w-full flex bg-transparent mx-auto justify-center py-2 z-50 -mt-12 `}>
        <div className="flex flex-row justify-center gap-4 text-black-50 mx-auto">
            <Link
                href={'https://www.instagram.com/rossalanford/'}
                className={`Instagram social`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Link>
            <Link
                href={'https://www.linkedin.com/in/rossaford/'}
                className={`Linkedin social`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
            <Link
                href={'https://github.com/wobble-house'}
                className={`Github social`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
        </div>
    </div>
    )
}