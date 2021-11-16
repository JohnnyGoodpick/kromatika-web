import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyleRoot } from 'radium';
import React from 'react';

const Hero = ({ bounceInAnimation, executeScroll }) => {
    return (
        <div id="hero">
            <div
                className="container mx-auto px-4 w-full h-full flex flex-col justify-center items-start
							              text-white text-left relative"
            >
                <h1
                    className="text-9xl mb-5 subpixel-antialiased"
                    style={{
                        letterSpacing: '-5px',
                        fontWeight: '500'
                    }}
                >
                    Kromatika DEX Trade
                </h1>
                <p
                    className="text-4xl mb-10 w-3/5 text-regular subpixel-antialiased leading-tight
							                  leading-snug"
                >
                    <br />
                    Next generation DEX crypto trading:
                    <br />
                    <br />
                    NO Swap Fees...
                    <br />
                    <br />
                    NO Front-Running Bots...
                    <br />
                    <br />
                    NO Price Slippage...
                    <br />
                </p>
                <div>
                    <button
                        id="btn-see-demo"
                        className="text-xl font-bold uppercase px-6 py-4 rounded-sm shadow
									                  hover:shadow-xm outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                        type="button"
                        style={{
                            transition: 'all .15s ease'
                        }}
                        onClick={() => {
                            window.open(
                                'https://kromatika-finance.medium.com/kromatika-launching-the-first-decentralized-limit-order-manager-powered-by-uniswap-and-961e0da4d15a',
                                'blank'
                            );
                        }}
                    >
                        READ MORE
                    </button>
                    <button
                        id="btn-read-more"
                        className="bg-gray-900 text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
								                    hover:shadow-xl bg-yellow outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
                        type="button"
                        style={{
                            transition: 'all .15s ease'
                        }}
                        onClick={() => {
                            window.open('https://link.kromatika.finance/buy-krom-eth', 'blank');
                        }}
                    >
                        BUY NOW
                    </button>
                </div>
                <StyleRoot>
                    <div
                        className="container mx-auto flex justify-center item-center absolute bottom-20"
                        style={bounceInAnimation.bounceIn}
                    >
                        <FontAwesomeIcon
                            className="cursor-pointer"
                            id="angleDoubleDown"
                            icon={faAngleDoubleDown}
                            size="3x"
                            onClick={executeScroll}
                        />
                    </div>
                </StyleRoot>
            </div>
        </div>
    );
};

export default Hero;
