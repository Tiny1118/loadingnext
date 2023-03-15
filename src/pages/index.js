import Image from 'next/image'
import React, { useState } from 'react';
import s from '../styles/Home.module.scss'
import { BsFillPlayFill } from "react-icons/bs"
import { CgMusicNote } from "react-icons/cg"
import { FiPlay } from "react-icons/fi"
import { BiVolumeLow } from "react-icons/bi"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { BsRocket } from "react-icons/bs"
import { BsDownload } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import headerImg from "../img/header.png"
import right from "../img/app.png"
import card1 from "../img/bb.png"
import card2 from "../img/Geo.png"
import card3 from "../img/albert.png"
import card4 from "../img/ram_2.png"
import card5 from "../img/mark.png"
import logo from "../img/logo12.png"
import bd from "../img/light.svg"
import list1 from "../img/hyper.svg"
import list2 from "../img/signum-capital-logo_transparent.svg"
import list3 from "../img/ybb.svg"
import list4 from "../img/hashkey.svg"
import logoNav from "../img/logoNav.svg"


export default function Home() {
  const [modal, setModal] = useState(false)
  const [accordion, setAccordion] = useState(3)

  function modalChange() {
    setModal(true)
    document.querySelector(".modal").classList.toggle("db")

  }
  return (
    <>
      <div className='body'>

        <div className={s.navbar}>
          <Image src={logoNav} className={s.logonav} />

          <div className={s.nav_middle}>
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">FAQ</a>
            <button>Sign Up</button>
          </div>

          <HiOutlineMenuAlt4 className={s.burger} onClick={() => modalChange()} />

          <div className="modal">
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">FAQ</a>
            <button>Sign Up</button>
          </div>

        </div>

        <header className={s.header}>

          <div className={s.header_left}>
            <h1 className={s.title}>Buy copyrights for future world hits and earn money with the artists!</h1>
            <p className={s.header_info}>By buying the rights, you help musicians to promote their tracks and become world stars.</p>
            <button className={s.header_btn}><BsFillPlayFill className={s.headerIcon} /> View offers</button>
          </div>

          <div className={s.header_right}>
            <Image src={headerImg} className={s.headerImg} />
          </div>

        </header>

        <section className={s.brend}>

          <div className={s.brend_list}>
            <Image src={list1} className={s.list_img} />
          </div>
          <div className={s.brend_list}>
            <Image src={list2} className={s.list_img} />
          </div>
          <div className={s.brend_list}>
            <Image src={list3} className={s.list_img} />
          </div>
          <div className={s.brend_list}>
            <Image src={list4} className={s.list_img} />
          </div>

        </section>

         <section className={s.cards}>

          <div className={s.card}>
            <CgMusicNote className={s.card_icon} />
            <h4>Buy part of the <br /> copyright for tracks</h4>
          </div>

          <div className={s.card}>
            <FiPlay className={s.card_icon} />
            <h4>Follow <br />
              their progress</h4>
          </div>

          <div className={s.card}>
            <BiVolumeLow className={s.card_icon} />
            <h4>Earn royalties and share <br />
              the success of artists</h4>
          </div>

        </section>

        <section className={s.approach}>

          <div className={s.approach_left}>
            <h2 className={s.approach_title}>New approach and new opportunities</h2>

            <div className={s.accordion}>

              <div onClick={() => { setAccordion(0) }} className={s.accrodion_list}>
                <h4>For listeners</h4>
                {accordion == 0 ? (<AiOutlineMinus className={s.accordion_icon} />) : (<AiOutlinePlus className={s.accordion_icon} />)}
              </div>
              {accordion == 0 ? (<p>Get financial support and influencer marketing to quickly grow your music's popularity. Get financial support and influencer marketing to quickly grow your music's popularity</p>) : (<p></p>)}
              <div className={s.accrodion_list} onClick={() => { setAccordion(1) }}>
                <h4>For artists</h4>
                {accordion == 1 ? (<AiOutlineMinus className={s.accordion_icon} />) : (<AiOutlinePlus className={s.accordion_icon} />)}
              </div>
              {accordion == 1 ? (<p>Get financial support and influencer marketing to quickly grow your music's popularity. Get financial support and influencer marketing to quickly grow your music's popularity</p>) : (<p></p>)}
              <div onClick={() => { setAccordion(2) }} className={s.accrodion_list}>
                <h4>For lables</h4>
                {accordion == 2 ? (<AiOutlineMinus className={s.accordion_icon} />) : (<AiOutlinePlus className={s.accordion_icon} />)}
              </div>
              {accordion == 2 ? (<p>Get financial support and influencer marketing to quickly grow your music's popularity. Get financial support and influencer marketing to quickly grow your music's popularity</p>) : (<p></p>)}
            </div>

          </div>

          <div className={s.approach_right}>
            <Image src={right} className={s.app_img} />
          </div>

        </section>

        <section className={s.bg}>

          <div className={s.bg_body}>
            <h2>Together with Demuso, the greatest producers
              and future stars, you create a new history</h2>
            <p>World producers will work with the artists you choose</p>
            <button className={s.bg_btn}><BsFillPlayFill className={s.i} /> See artists</button>
          </div>

        </section>

        <section className={s.work}>
          <h2 className={s.work_title}>How it work</h2>

          <div className={s.work_body}>

            <div className={s.work_card}>
              <h3>01</h3>
              <h5>Share size</h5>
              <p>Demuso offers to buy part of the copyright for the artist's track</p>
            </div>

            <div className={s.work_card}>
              <h3>02</h3>
              <h5>Promotion</h5>
              <p>After the sale of the rights, a professional team of producers is involved to promote the track. The track is sent to distribution</p>
            </div>

            <div className={s.work_card}>
              <h3>03</h3>
              <h5>Reporting</h5>
              <p>On the Demuso platform, users see reports for all tracks</p>
            </div>

            <div className={s.work_card}>
              <h3>04</h3>
              <h5>WinWin</h5>
              <p>All the parties get tracks' distribution income and emotions</p>
            </div>

          </div>

        </section>

        <section className={s.deals}>

          <div className={s.deals_left}>
            <div className={s.left_body}>
              <BsRocket className={s.left_icon} />
              <h2>You may use crypto for deals</h2>
              <p>The platform makes it possible to use not only fiat, but also cryptocurrency for transactions</p>
              <button className={s.deals_btn}>Try it</button>
            </div>
          </div>

          <div className={s.deals_right}>
            <div className={s.right_body}>
              <Image src={bd} />
              <h5>Presentation</h5>
              <button className={s.download_btn}><BsDownload className={s.icon} />Download</button>
            </div>
          </div>

        </section>

        <section className={s.team}>
          <h2 className={s.team_title}>Team</h2>

          <div className={s.team_cards}>

            <div className={s.team_card}>
              <Image src={card1} className={s.team_img} />
              <h3>Ramil Kharisov</h3>
              <h4>CTO</h4>
              <p>Lead developer in
                TOP 5 fintech corporation.
                14 years of software
                development experience.</p>
            </div>

            <div className={s.team_card}>
              <Image src={card2} className={s.team_img} />
              <h3>Georgy Noskov</h3>
              <h4>Chief Blockchain Officer</h4>
              <p>Founder of solutions in the field of distributed,
                decentralized and security systems.</p>
            </div>

            <div className={s.team_card}>
              <Image src={card3} className={s.team_img} />
              <h3>Albert Musaev</h3>
              <h4>CPO</h4>
              <p>Product management lead,
                10 years of practice in IT.
                Developed a wallet for Telegram.</p>
            </div>

            <div className={s.team_card}>
              <Image src={card4} className={s.team_img} />
              <h3>Ramil Kharisov</h3>
              <h4>CTO</h4>
              <p>Lead developer in
                TOP 5 fintech corporation.
                14 years of software
                development experience.</p>
            </div>

            <div className={s.team_card}>
              <Image src={card5} className={s.team_img} />
              <h3>Mark Feldman</h3>
              <h4>Advisor</h4>
              <p>CEO Standard Capital Group, Ambassador for
                Everscale Network.
                Co-founder EverX Labs.</p>
            </div>

          </div>

        </section>

        <footer className={s.footer}>
          <Image src={logo} />

          <div className={s.footer_right}>

            <div className={s.footer_icons}>
              <div className={s.footer_box}>
                <FaTelegramPlane className={s.footer_icon} />
              </div>

              <div className={s.footer_box}>
                <FaFacebookF className={s.footer_icon} />
              </div>

              <div className={s.footer_box}>
                <BsTwitter className={s.footer_icon} />
              </div>

              <div className={s.footer_box}>
                <BsInstagram className={s.footer_icon} />
              </div>
            </div>

            <button className={s.footer_btn}>See listing</button>
          </div>
        </footer> 

      </div></>
  )
}