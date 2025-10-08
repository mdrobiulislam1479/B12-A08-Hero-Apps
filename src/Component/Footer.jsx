import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#001931] text-white">
      <div className="max-w-[1440px] mx-auto my-9 space-y-5 px-6 2xl:px-0 sm:flex justify-between border-b-1 border-gray-600">
        <div>
          <Link to={"/"} className="flex gap-2 items-center">
            <img src={Logo} alt="main-logo" className="w-10 h-10" />
            <p className="font-bold">HERO.IO</p>
          </Link>
          <p className="sm:max-w-[200px] xl:max-w-[400px] mt-3">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div className="flex flex-col mb-4">
          <h6 className="footer-title">Social Links</h6>
          <div className="flex gap-5">
            <a className="link">
              <FaSquareXTwitter className="w-5 h-5" />
            </a>
            <a className="link">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a className="link">
              <FaFacebookSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mb-6">Copyright © 2025 - All right reserved</p>
    </div>
  );
};

export default Footer;
