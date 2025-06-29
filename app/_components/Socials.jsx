import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoGithub,
  BiLogoLinkedin,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/profile.php?id=100018719044462",
  },
  {
    icon: <BiLogoInstagramAlt />,
    path: "https://www.instagram.com/mahmoud_al_hussen0/",
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/mahmoudsamae",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/mahmud-el-hussein-1b6975273/",
  },
];
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} target="_blank" className={iconStyles} key={index} >{item.icon}</Link>
        )
      })}
    </div>
  )
}

export default Socials