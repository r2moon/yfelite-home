import React from "react";
import logo from '../../images/logo.png'
import './navigation.css'
import {FaTelegramPlane, FaDiscord, AiOutlineTwitter} from "react-icons/all";

export default function Navigation() {
    return (
        <div className="row mt-4">
            <div className="col-xl-4 col-lg-4 col-md-6 col-6">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="navbar-brand">
                    <img src={logo} className="logo" alt="Logo"/><span
                    className='logo-text text-white'>&nbsp;&nbsp;YFELITE</span>
                </a>
            </div>

            <div
                className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex justify-content-lg-end justify-content-md-end justify-content-center">
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a target={'_blank'} href="https://discord.gg/g37gT2s">
                    <FaDiscord className="social-icon mx-1"/>
                </a>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a target={'_blank'} href="https://www.twitter.com/YFElite">
                    <AiOutlineTwitter className="social-icon mx-1 "/>
                </a>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a target={'_blank'} href="https://www.t.me/YFElite">
                    <FaTelegramPlane className="social-icon mx-1"/>
                </a>
            </div>

            <div
                className="col-lg-5 col-xl-5  col-md-12 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-md-4 mt-4">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <button href="https://app.defielite.finance" target="__blank" className='btn mt-lg-0 btn-1 font-weight-bold mx-2  btn-width'>
                    Launch App V1
                </button>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <button href="https://app.uniswap.org/#/swap" target="__blank"
                   className='btn mt-lg-0 btn-2 font-weight-bold text-white  mx-1 btn-width'>
                    Buy Token
                </button>
            </div>

        </div>
    )
}