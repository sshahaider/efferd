import { FaceBookIcon, YoutubeIcon } from "./icons";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { siteName } from "@/config";
import Link from "next/link";

export const Footer = () => {

  const socialLinks = [
    {
      icon: <InstagramLogoIcon className="size-5" />,
      link: "https://www.instagram.com/efferdhq/"
    },
    {
      icon: <YoutubeIcon className="size-5" />,
      link: "https://www.youtube.com/@efferdhq"
    },
    {
      icon: <FaceBookIcon className="size-5" />,
      link: "https://www.facebook.com/efferdhq/"
    }
  ]

  return (
    <footer className="text-sm py-10 text-center flex items-center justify-center">
      <div className="container">
        <div className="flex justify-center gap-6 mt-6">
          {socialLinks.map((link, i) => (
            <Link key={i} href={link.link}>{link.icon}</Link>
          ))}
        </div>
        <p className="mt-6">&copy; 2024 {siteName}. All rights reserved.</p>
      </div>
    </footer>
  );
};
