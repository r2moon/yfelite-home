import React from "react";
import hotbit from '../../images/hotbit-logo.png'
import bilaxy from '../../images/bilaxy-logo-1.png'
import uniswapicon from '../../images/uniswap-icon.svg'
import logo from '../../images/logo.png'
import uniswap from '../../images/uniswap-logo.svg'
import digifinex from '../../images/digifinex-logo.svg'
import '../../App.css'
import CountDown from "./countdown";


export default function Body() {
    return (
        <div className='row d-flex flex-row-reverse body-content'>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 row d-flex align-items-center justify-content-center ">
                    <img src={logo} />
                    {/* <CountDown/> */}
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-white mt-lg-0 mt-md-5 mt-5 pt-5">
                    <h4 className='font-weight-bold heading'>The Next Great Community Yield Farm: YFElite</h4>
                    <div className="mt-lg-4 text-justify">
                        <p>Most yield farms have set pools with no community involvement, YFElite will be a community
                            first farm, featuring governance & new pool addition voting.
                            <strong className='ml-2'>
                                YFElite aims to involve the entire community, not just whales.
                            </strong></p>
                    </div>
                    <small className="text-muted">Buy YFElite token on top exchanges:</small>
                    <div>
                        <div className="row mt-2">
                            {/* <div className="col-3">
                                <a target={'_blank'} href="https://www.hotbit.io/exchange?symbol=YFIX_USDT">
                                    <img src={hotbit} className='img-fluid' alt="Hotbit"/>
                                </a>

                            </div>
                            <div className="col-3">
                                <a target={'_blank'} href="https://www.bilaxy.com/trade/YFIX_USDT">
                                    <img src={bilaxy} className='img-fluid' alt="Bilaxy"/>
                                </a>
                            </div> */}
                            <div className="col-3">
                                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                <a href="https://app.uniswap.org/#/swap?inputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&outputCurrency=0x61B10135639885E00bf4D42dE2fE5F2E28abAd75" target="__blank" className="d-inline-flex">
                                    <img src={uniswapicon} className='img-fluid unicornLogo' alt="Uniswap Icon"/>
                                    <img src={uniswap} className='img-fluid h-50 w-75 ml-1 mt-2' alt="Uniswap"/>
                                </a>
                            </div>
                            {/* <div className="col-3">
                                <a target={'_blank'} href="https://www.digifinex.com/en-ww/trade/USDT/YFIX">
                                    <img src={digifinex} className='img-fluid' alt="Digifinex"/>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
        </div>
    )
}