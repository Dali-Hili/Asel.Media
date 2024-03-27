import React from "react";
import {
  FaExclamation,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaAngleRight,
  FaExpandAlt,
  FaRegUser,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagramSquare,
  FaInstagram,
} from "react-icons/fa";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { BsTelephoneFill, BsFillMegaphoneFill } from "react-icons/bs";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerTopWrapper">
          <div className="item">
            <div className="title">
              <h2 className="h4">À PROPOS DE NOUS</h2>
              <FaExclamation
                style={{ fontSize: "18px" }}
                className="titleIcon"
              />
            </div>
            <div className="about">
              <div className="content">
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium laborum et dolorum fuga.
                </p>
              </div>
              <div className="action">
                <a className="btn-link">
                  En savoir plus
                  <TfiAngleDoubleRight style={{ fontSize: "12px" }} />
                </a>
              </div>
              <ul>
                <li>
                  <FaMapMarkerAlt
                    style={{ fontSize: "15px" }}
                    className="icon"
                  />
                  <span>Manar 2, Tunis</span>
                </li>
                <li>
                  <FaRegEnvelope
                    style={{ fontSize: "15px" }}
                    className="icon"
                  />
                  <a>example@example.com</a>
                </li>
                <li>
                  <BsTelephoneFill
                    style={{ fontSize: "15px" }}
                    className="icon"
                  />
                  <a>+216 47 001 001</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="item">
            <div class="title">
              <h2 class="h4">LIENS D'INFOS UTILES</h2>
              <FaExpandAlt style={{ fontSize: "18px" }} className="titleIcon" />
            </div>
            <div class="links">
              <ul class="nav">
                <li>
                  <a>
                    <FaAngleRight />
                    L'Info en continu
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight /> L'Instant ASEL
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Diaspora
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Tech & Co
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Sports
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="item">
            <div class="title">
              <h2 class="h4">ANNONCES</h2>
              <BsFillMegaphoneFill
                style={{ fontSize: "18px" }}
                className="titleIcon"
              />
            </div>
            <div class="links">
              <ul class="nav">
                <li>
                  <a>
                    <FaAngleRight />
                    Post an Add
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Adds Renew
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Price of Advertisements
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Adds Closed
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Monthly or Yearly
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Trial Adds
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Add Making
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div class="item">
            <div class="title">
              <h2 class="h4">Career</h2>
              <FaRegUser style={{ fontSize: "18px" }} />
            </div>
            <div class="links">
              <ul class="nav">
                <li>
                  <a>
                    <FaAngleRight />
                    Available Post
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Career Details
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    How to Apply?
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Freelence Job
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Be a Member
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Apply Now
                  </a>
                </li>
                <li>
                  <a>
                    <FaAngleRight />
                    Send Your Resume
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerBottomWrapper">
          <div className="left">
            <p>
              &copy; 2024 <a>ASEL MEDIA</a>. All rights reserved
            </p>
          </div>
          <div className="right">
            {/* <ul className="nav1">
              <li>
                <a>Accueil</a>
              </li>
              <li>
                <a>Diaspora</a>
              </li>
              <li>
                <a>Sports</a>
              </li>
            </ul> */}
            <ul className="nav2">
              <li>
                <a>
                  <FaFacebookF style={{ fontSize: "16px" }} />
                </a>
              </li>
              <li>
                <a>
                  <FaLinkedinIn style={{ fontSize: "16px" }} />
                </a>
              </li>
              <li>
                <a>
                  <FaYoutube style={{ fontSize: "16px" }} />
                </a>
              </li>
              <li>
                <a>
                  <FaInstagram style={{ fontSize: "16px" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
