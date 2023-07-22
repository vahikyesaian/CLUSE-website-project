import React from "react";
import Slider from "react-slick";
import { ChatCircle, InstagramLogo } from "phosphor-react"



const Shopthelook = () => {
    return (
        <section className="w-full min-h-[50px] mt-10">
            <div className="w-full flex justify-center flex-wrap">
                <h1 className="w-full text-[35px] font-semibold font-serif text-center mt-5">Shop the look</h1>
                <span className="w-[45px] h-[1px] bg-[black] mt-3"></span>
            </div>
            <section className="w-full flex justify-center mt-10 overflow-x-hidden">
                <ShopthelookSlider />

            </section>

        </section>
    )
}



function ShopthelookSlider() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 1345,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 706,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <section className=" w-[93%] my-10">
            <Slider {...settings}>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center flex-wrap relative h-[100%]">
                        <img className="w-[90%]" src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F17862419198945352_1.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0 right-[10px] bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">sannelibregts</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">37</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center cursor-pointer relative">
                        <img className='w-[90%]' src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F18362864809024403_1.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">nadinevegter</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">63</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className=" flex justify-center items-center relative">
                        <img className='w-[90%]' src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F18140248123293986_0.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">willemijnsophia</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">12</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className=" flex justify-center items-center relative">
                        <img className='w-[90%]' src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F18076580470332750_0.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">fleurfalkenburg</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">3</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>

                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className=" flex justify-center items-center relative">
                        <img className='w-[90%]' src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F18361912888049536_1.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">judiithheok</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">100</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className=" flex justify-center items-center relative">
                        <img className='w-[90%]' src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F17900012261710786_1.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">nadinevegter</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">63</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>

                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className=" flex justify-center items-center relative">
                        <img className='w-[90%]' src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F17931434126668029_1.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">nataliaontheway</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">66</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>

                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[90%]" src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F17931434126668029_1.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">nataliaontheway</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">66</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[90%]" src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F17963077031390770_1.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">hiziyaribery7</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">86</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[90%]" src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F17995068013846672_2.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">sannemuyres</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">13</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[90%]" src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F18019355791551647_2.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">ambre_mori_</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">9</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[90%]" src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F18019355791551647_1.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">ambre_mori_</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">9</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[90%]" src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F18335444323068982_0.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">andreabtez</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">27</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[100%]" src="https://m.photoslurp.com/i/fit?width=326&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F17965742006363431_0.jpg" />
                        <span className="w-[100%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">mallisophie</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">8</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[100%]" src="https://m.photoslurp.com/i/fit?width=326&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F17965742006363431_0.jpg" />
                        <span className="w-[100%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">mallisophie</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">8</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[90%]" src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F17969302097250515_0.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">goodelievevanoijen</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">22</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[90%]" src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F18037197184452208_0.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">amaalps</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">1</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[100%]" src="https://m.photoslurp.com/i/fit?width=322&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F18078307048343003_0.jpg" />
                        <span className="w-[100%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">kayabolier</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">1</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[90%]" src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F17951027084373968_1.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">annafindlayy</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">9</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[90%]" src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F17951027084373968_0.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">annafindlayy</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">9</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
                <div className="shopthelookslider">
                    <figure className="flex justify-center items-center relative">
                        <img className="w-[90%]" src="https://m.photoslurp.com/i/fit?width=288&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Finstagram-business%2F18005997712608689_0.jpg" />
                        <span className="w-[90%] h-[100%] block opacity-0 absolute top-0  bg-[#0000008c] duration-500 ">
                            <div className="w-full h-[100%] ">
                                <section className=" h-[80%] flex justify-center items-center flex-wrap">
                                    <section className="w-full">
                                        <p className=" text-[gainsboro] text-center">kayabolier</p>
                                        <div className="w-full min-h-[10px] flex justify-center pt-2">
                                            <span className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#dcdcdc8b]">
                                                <InstagramLogo size={20} />
                                            </span>
                                            <div className="text-[#dcdcdc8b] flex ml-3">
                                                <ChatCircle size={20} className="rotate-[270deg] mt-[2px]" />
                                                <p className="pl-1">6</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                <section className="bg-[black] h-[20%] flex justify-center items-center">
                                    <p className="text-white text-[15px]">VIEW AND SHOP</p>
                                </section>
                            </div>
                        </span>
                    </figure>
                </div>
            </Slider>
        </section>
    );
}

export default Shopthelook