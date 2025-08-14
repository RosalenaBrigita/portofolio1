import user_image from './user-image.png';
import user_img from './user-img.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import profile from './profile.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import unity from './unity.png';
import postman from './postman.png';
import mysql from './mysql.png';

export const assets = {
    user_image,
    user_img,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    profile,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    unity,
    postman,
    mysql
};

export const workData = [
  {
    id: 1,
    title: "Historical RPG with Branching Narrative",
    category: "Game Dev",
    bgImage: "/work-historical-rpg.png",
    link: "https://github.com/RosalenaBrigita/DonBosco",
    description: "2D historical RPG with Ink-based branching dialogue and hybrid save system."
  },
  {
    id: 2,
    title: "Culinary RPG Shooter",
    category: "Game Dev",
    bgImage: "/work-culinary-rpg.png",
    link: "https://fullowid.itch.io/journey-to-become-master-chef",
    description: "3D top-down shooter RPG with crafting, cooking minigames, and companion system."
  },
  {
    id: 3,
    title: "Mobile Recipe App",
    category: "Mobile App",
    bgImage: "/work-recipe-app.png",
    link: "https://github.com/RosalenaBrigita/RecipeApp-UAS-Mobile",
    description: "Recipe app with bookmarks, search, and centralized database."
  },
  {
    id: 4,
    title: "Mobile Music App",
    category: "Mobile App",
    bgImage: "/work-music-app.png",
    link: "https://github.com/RosalenaBrigita/Mobile-Music-App/tree/master",
    description: "Music mobile app with Home, Explore, and Library sections."
  },
  {
    id: 5,
    title: "Website Laundry",
    category: "Web Dev",
    bgImage: "/work-laundry.png",
    link: "https://github.com/NandaSyarlaHariyanti/FP_Laundry",
    description: "Full-stack laundry web app with role-based access and CRUD."
  },
  {
    id: 6,
    title: "3D Navigation Map DPR RI",
    category: "Other",
    bgImage: "/work-navigation-map.png",
    link: "#",
    description: "3D navigation map with route paths, travel time, and step counts."
  },
  {
    id: 7,
    title: "License Plate Recognition System",
    category: "Other",
    bgImage: "/work-plate-recognition.png",
    link: "#",
    description: "YOLO-based license plate detection with dataset preprocessing."
  }
];

export const serviceData = [
    { icon: assets.web_icon, title: 'Game Developer', description: 'Design and develop engaging games using Unity and C#...', link: '' },
    { icon: assets.web_icon, title: 'Web Developer', description: 'Build responsive and interactive websites using modern web technologies...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'Design intuitive user interfaces and seamless experiences for apps and websites...', link: '' }
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'C#, CSS, JavaScript, PHP, Python' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Computer Science GPA 3.90' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'University', description: 'Universitas Pembangunan Nasional "Veteran" Jawa Timur' }
];

export const toolsData = [
    assets.vscode, assets.unity, assets.mysql, assets.figma, assets.git
];