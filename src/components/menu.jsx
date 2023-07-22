import { MagnifyingGlass } from "phosphor-react";
import { CaretDown } from "phosphor-react"
import { User } from "phosphor-react"
import { WarningCircle } from "phosphor-react"
import { Heart } from "phosphor-react"
import { Bag } from "phosphor-react"
import { CaretUp } from "phosphor-react"
import { CaretRight } from "phosphor-react"
import { List } from "phosphor-react"
import React from "react";
import Slider from "react-slick";
const Menu = () => {
    let flag = true
    function ChooseLang() {
        if (flag === true) {
            document.getElementById('Lang').style.display = 'flex'
            flag = false
        } else {
            document.getElementById('Lang').style.display = 'none'
            flag = true

        }
    }

    function Recproducts() {
        document.getElementById('rec').style.display = 'flex'
    }
    function Recproducts_mob() {
        document.getElementById('reco').style.display = 'flex'
    }
    function Close_recproductsMob() {
        document.getElementById('reco').style.display = 'none'
    }
    function Close_recproducts() {
        document.getElementById('rec').style.display = 'none'
    }

    return (
        <header className="w-full  h-[150px] fixed bg-[white] z-10">
            <nav className="w-full h-full flex flex-wrap relative">
                <HamMenu />
                <div onClick={Close_recproductsMob} className="w-full h-[80px] lg:h-[110px] flex">
                    <section className="hidden lg:flex lg:w-[33.333%]  items-center">
                        <div className="w-[100%] h-[45px] relative ">
                            <MagnifyingGlass size={24} className="absolute top-[22%] right-[40%] cursor-pointer hover:text-[gray] duration-500" />
                            <input onClick={Recproducts} className="w-[54%] h-[45px]  ml-12 pl-4 focus:outline-none text-[14px] border" type="text" placeholder="Search" />
                            <Search_Recommend />
                        </div>
                    </section>
                    <section className="w-[40%] lg:w-[33.333%] ">
                        <figure className="w-full h-full flex lg:justify-center items-center">
                            <img className='w-[100px] h-[25px] md:w-[143px] md:h-[33px] ml-3 lg:ml-0' src='https://shoplogos.trustedshops.eu/CLUSE-com_74343.jpeg' alt="Cluse" />
                        </figure>
                    </section>
                    <section className="w-[60%] lg:w-[33.333%]  flex items-center justify-end">
                        <div className="w-[100%] md:w-[80%]  flex justify-end ">
                            <section onClick={ChooseLang} className=" w-[20%] md:flex cursor-pointer  items-center hidden relative"><span className="text-[14px] pr-1">English</span><CaretDown size={17} className="pt-[7px]" />
                                <Language />
                            </section>
                            <section className=" md:w-[20%] flex justify-center flex-wrap cursor-pointer"> <User size={32} /> <span className="w-full text-center text-[14px]">Sign in</span></section>
                            <section id="info" className=" w-[20%] md:flex justify-center flex-wrap cursor-pointer hidden relative "><WarningCircle size={32} /> <span className="w-full text-center text-[14px]">Info</span>
                                <Info />
                            </section>
                            <section className=" md:w-[20%] flex justify-center flex-wrap cursor-pointer"> <Heart size={32} /> <span className="w-full text-center text-[14px]">Wishlist</span></section>
                            <section className=" md:w-[20%] flex justify-center flex-wrap cursor-pointer"> <Bag size={32} /> <span className="w-full text-center text-[14px]">Bag</span></section>
                        </div>
                    </section>
                </div>
                <div onClick={Close_recproducts} className="w-full h-[60px] lg:h-[40px]  bg-[white] lg:bg-[#c6c6c6] relative">
                    <ul className="lg:flex justify-center items-center flex-wrap h-full hidden">
                        <li className="womenWatch font-sans font-semibold text-[17px] px-4 cursor-pointer">WOMEN'S WATCHES
                            <WomenWatches_Mega />
                        </li>
                        <li className="menWatch font-sans font-semibold text-[17px] px-4 cursor-pointer">MEN'S WATCHES
                            <MenWatches_Mega />
                        </li>
                        <li className="font-sans font-semibold text-[17px] px-4 cursor-pointer">WATCH STRAPS</li>
                        <li className="font-sans font-semibold text-[17px] px-4 cursor-pointer">BACKPACKS</li>
                        <li className="jewelery font-sans font-semibold text-[17px] px-4 cursor-pointer">JEWELLERY
                            <Jewelery_Mega />
                        </li>
                        <li className="giftshop font-sans font-semibold text-[17px] px-4 cursor-pointer">GIFT SHOP
                            < GiftShop_Mega />
                        </li>
                        <li className="font-sans font-semibold text-[17px] px-4 cursor-pointer">BUNDLE DEALS</li>
                    </ul>
                    <div className="w-full h-full flex lg:hidden border-b">
                        <section onClick={() => {
                            document.getElementById('ham').style.height = '400px'
                            document.getElementById('ham').style.opacity = '1'
                            document.getElementById('ham').style.visibility = 'visible'
                        }} className="w-[10%] flex justify-center flex-wrap items-center cursor-pointer">
                            <List size={32} className="" />
                            <span className="text-[11px] text-center w-full">Menu</span>
                        </section>
                        <section className="w-[90%] flex justify-center items-center relative">
                            <input onClick={Recproducts_mob} type="text" className="w-[95%] h-[45px] text-[14px] focus:outline-none pl-4 border" placeholder="search" />
                            <MagnifyingGlass size={24} className="absolute right-[20px] cursor-pointer duration-500 hover:text-[gray] " />
                            <Search_Recommend_mobile />
                        </section>
                    </div>
                </div>
            </nav>
        </header>
    )
}

function HamMenu() {
    return (
        <section id="ham" className="w-full absolute top-[150px] border bg-white lg:hidden h-0 opacity-0 duration-500 overflow-y-scroll">
            <div className="flex items-center justify-between my-5 cursor-pointer  pl-[15px]">
                <p className="flex items-center">English <CaretDown size={14} className="mt-1 ml-2 " /></p>
                <div onClick={()=>{
                    document.getElementById('ham').style.height='0'
                    document.getElementById('ham').style.opacity='0'
                    document.getElementById('ham').style.visibility='hidden'
                }} className="mr-3 flex flex-wrap justify-center">
                    <span className=" text-[25px]"><i class="bi bi-x-lg"></i></span>
                    <p className="w-full text-center">close</p>
                </div>

            </div>
            <section className="flex flex-wrap justify-between items-center py-2 cursor-pointer">
                <h2 className="lg:pb-8 text-[17px] font-semibold pl-[15px]">WOMEN'S WATCHES</h2>
                <span className="mr-[20px]"><CaretDown size={20} className="block lg:hidden" /></span>
                <div className="w-full min-h-[20px] flex justify-center items-end">
                    <span className="w-[95%] h-[2px] bg-[#dcdcdc3f]"></span>
                </div>
            </section>
            <section className="flex flex-wrap justify-between items-center py-2 cursor-pointer">
                <h2 className="lg:pb-8 text-[17px] font-semibold pl-[15px]">MEN'S WATCHES</h2>
                <span className="mr-[20px]"><CaretDown size={20} className="block lg:hidden" /></span>
                <div className="w-full min-h-[20px] flex justify-center items-end">
                    <span className="w-[95%] h-[2px] bg-[#dcdcdc3f]"></span>
                </div>
            </section>
            <section className="flex flex-wrap justify-between items-center py-2 cursor-pointer">
                <h2 className="lg:pb-8 text-[17px] font-semibold pl-[15px]">WATCH STRAPS</h2>
                <div className="w-full min-h-[20px] flex justify-center items-end">
                    <span className="w-[95%] h-[2px] bg-[#dcdcdc3f]"></span>
                </div>
            </section>
            <section className="flex flex-wrap justify-between items-center py-2 cursor-pointer">
                <h2 className="lg:pb-8 text-[17px] font-semibold pl-[15px]">BACKPACKS</h2>
                <div className="w-full min-h-[20px] flex justify-center items-end">
                    <span className="w-[95%] h-[2px] bg-[#dcdcdc3f]"></span>
                </div>
            </section>
            <section className="flex flex-wrap justify-between items-center py-2 cursor-pointer">
                <h2 className="lg:pb-8 text-[17px] font-semibold pl-[15px]">JEWELLERY</h2>
                <span className="mr-[20px]"><CaretDown size={20} className="block lg:hidden" /></span>
                <div className="w-full min-h-[20px] flex justify-center items-end">
                    <span className="w-[95%] h-[2px] bg-[#dcdcdc3f]"></span>
                </div>
            </section>
            <section className="flex flex-wrap justify-between items-center py-2 cursor-pointer">
                <h2 className="lg:pb-8 text-[17px] font-semibold pl-[15px]">GIFT SHOP</h2>
                <span className="mr-[20px]"><CaretDown size={20} className="block lg:hidden" /></span>
                <div className="w-full min-h-[20px] flex justify-center items-end">
                    <span className="w-[95%] h-[2px] bg-[#dcdcdc3f]"></span>
                </div>
            </section>
            <section className="flex flex-wrap justify-between items-center py-2 cursor-pointer">
                <h2 className="lg:pb-8 text-[17px] font-semibold pl-[15px] pb-3">BUNDLE DEALS</h2>
            </section>
            <section className="flex flex-wrap justify-between items-center py-4 bg-[#EEEEEE] cursor-pointer">
                <h2 className="lg:pb-8 text-[17px] font-semibold pl-[35px] flex items-center"><i className="text-[20px] bi bi-exclamation-circle pr-1"></i> Help</h2>
                <span className="mr-[20px]"><CaretDown size={20} className="block lg:hidden" /></span>
            </section>
        </section>
    )
}


function Language() {
    return (
        <div id="Lang" className="w-[110px] absolute top-[45px] bg-[white] hidden z-10">
            <ul>
                <li className="py-2 pl-2 font-semibold mt-4">English</li>
                <li className="py-2 pl-2 text-[gray] hover:text-[black] font-semibold">Français</li>
                <li className="py-2 pl-2 text-[gray] hover:text-[black] font-semibold">Deustsch</li>
                <li className="py-2 pl-2 text-[gray] hover:text-[black] font-semibold">Nederlands</li>
                <li className="py-2 pl-2 text-[gray] hover:text-[black] font-semibold">¥ Japanese</li>
            </ul>
        </div>
    )
}
function Info() {
    return (
        <div className="info w-[250px] border border-[gray] bg-white absolute top-[80px] opacity-0 invisible duration-500 z-10">
            <CaretUp size={32} className="text-[gray] absolute top-[-21px] left-[45%]" />
            <ul>
                <li className="py-3 pt-4 text-[25px] font-semibold font-serif text-center">Info</li>
                <li className="pt-2 text-center">Customer Service</li>
                <li className="pt-2 text-center">FAQ</li>
                <li className="pt-2 text-center">Shipping Information</li>
                <li className="pt-2 pb-7 text-center">Return portal</li>
            </ul>
        </div>
    )
}

function Search_Recommend() {
    return (
        <div id="rec" className="w-[100%] h-[280px] absolute ml-12 flex z-10 bg-[white] rounded shadow hidden">
            <section className="w-[40%] ">
                <ul className="h-full">
                    <li className="font-medium pb-3 text-[14px] pl-4 pt-4">POPULAR SEARCHES</li>
                    <li className="pb-1 font-medium text-[13px] cursor-pointer text-[gray] hover:bg-[whitesmoke] pl-4 ">Féroce mini</li>
                    <li className="pb-1 font-medium text-[13px] cursor-pointer text-[gray] hover:bg-[whitesmoke] pl-4 pt-1">La Tétragone</li>
                    <li className="pb-1 font-medium text-[13px] cursor-pointer text-[gray] hover:bg-[whitesmoke] pl-4 pt-1">Minuit</li>
                    <li className="pb-1 font-medium text-[13px] cursor-pointer text-[gray] hover:bg-[whitesmoke] pl-4 pt-1">Fluette</li>
                    <li className="pb-1 font-medium text-[13px] cursor-pointer text-[gray] hover:bg-[whitesmoke] pl-4 pt-1">bag</li>
                </ul>
            </section>
            <section className="w-[60%] ">
                <p className="font-medium pb-3 text-[14px] pl-4 pt-4">TRENDING PRODUCTS</p>
                <section className=" w-full">
                    <SearchRec_slider />
                </section>

            </section>
        </div>
    )
}

function SearchRec_slider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div className="cursor-pointer">
                <figure className="flex justify-center flex-wrap">
                    <img className="w-[90%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CW11507_frontal_1_500x500.jpg?v=1661326490" />
                    <figcaption className="text-center text-[13px] pt-1">Fluette Steel, Full Gold Colour</figcaption>
                </figure>
            </div>
            <div className="cursor-pointer">
                <figure className="flex justify-center flex-wrap">
                    <img className="w-[90%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CW11504_frontal_500x500.jpg?v=1661421072" />
                    <figcaption className="text-center text-[13px] pt-1">Fluette Leather Black Lizard, Gold Colour</figcaption>
                </figure>
            </div>
            <div className="cursor-pointer">
                <figure className="flex justify-center flex-wrap">
                    <img className="w-[90%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CW11502_frontal_500x500.jpg?v=1661787168" />
                    <figcaption className="text-center text-[13px] pt-1">Fluette Steel Green, Gold Colour</figcaption>
                </figure>
            </div>
            <div className="cursor-pointer">
                <figure className="flex justify-center flex-wrap">
                    <img className="w-[90%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CW11207_frontal_1_500x500.jpg?v=1668688383" />
                    <figcaption className="text-center text-[13px] pt-1">Féroce Petite Steel Bicolour</figcaption>
                </figure>
            </div>
            <div className="cursor-pointer">
                <figure className="flex justify-center flex-wrap">
                    <img className="w-[90%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CW10501_9a7b59ef-ab93-443b-83a9-9c0343cca191_500x500.jpg?v=1624368343" />
                    <figcaption className="text-center text-[13px] pt-1">Boho Chic Petite Crystals Mesh Grey, Gold Colour</figcaption>
                </figure>
            </div>
            <div className="cursor-pointer">
                <figure className="flex justify-center flex-wrap">
                    <img className="w-[90%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/1_19_500x500.jpg?v=1611053250" />
                    <figcaption className="text-center text-[13px] pt-1">Vigoureux Steel Petrol Blue, Silver Colour</figcaption>
                </figure>
            </div>
            <div className="cursor-pointer">
                <figure className="flex justify-center flex-wrap">
                    <img className="w-[90%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CW11208_frontal_500x500.jpg?v=1650978448" />
                    <figcaption className="text-center text-[13px] pt-1">Féroce Petite Steel Black, Gold Colour</figcaption>
                </figure>
            </div>
            <div className="cursor-pointer">
                <figure className="flex justify-center flex-wrap">
                    <img className="w-[90%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CW11201_frontal_500x500.jpg?v=1667919521" />
                    <figcaption className="text-center text-[13px] pt-1">Féroce Petite Steel Pink Gold Colour</figcaption>
                </figure>
            </div>
            <div className="cursor-pointer">
                <figure className="flex justify-center flex-wrap">
                    <img className="w-[90%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CW0101212004_frontal_500x500.jpg?v=1664452799" />
                    <figcaption className="text-center text-[13px] pt-1">Féroce Steel Bicolour</figcaption>
                </figure>
            </div>
            <div className="cursor-pointer">
                <figure className="flex justify-center flex-wrap">
                    <img className="w-[90%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CG1519201003_box_top_d2ed56e5-f8d8-402e-ab42-736acb14b3f9_1_500x500.jpg?v=1661256632" />
                    <figcaption className="text-center text-[13px] pt-1">Gift Box Boho Chic Mesh Watch and Strap Rose Gold Colour</figcaption>
                </figure>
            </div>

        </Slider>
    );
}
function Search_Recommend_mobile() {
    return (
        <div id="reco" className="w-[80%] lg:w-[100%] lg:h-[280px] top-[90px] right-[70px] absolute ml-12 flex z-10 bg-[white] rounded shadow flex-wrap hidden">
            <section className="w-[100%] lg:w-[40%] ">
                <ul className="h-full">
                    <li className="font-medium pb-3 text-[14px] pl-4 pt-4">POPULAR SEARCHES</li>
                    <li className="pb-1 font-medium text-[13px] cursor-pointer text-[gray] hover:bg-[whitesmoke] pl-4 ">Féroce mini</li>
                    <li className="pb-1 font-medium text-[13px] cursor-pointer text-[gray] hover:bg-[whitesmoke] pl-4 pt-1">La Tétragone</li>
                    <li className="pb-1 font-medium text-[13px] cursor-pointer text-[gray] hover:bg-[whitesmoke] pl-4 pt-1">Minuit</li>
                    <li className="pb-1 font-medium text-[13px] cursor-pointer text-[gray] hover:bg-[whitesmoke] pl-4 pt-1">Fluette</li>
                    <li className="pb-1 font-medium text-[13px] cursor-pointer text-[gray] hover:bg-[whitesmoke] pl-4 pt-1">bag</li>
                </ul>
            </section>
            <section className="w-[100%] lg:w-[60%] ">
                <p className="font-medium pb-3 text-[14px] pl-4 pt-4">TRENDING PRODUCTS</p>
                <section className=" w-full">
                    <SearchRec_slider />
                </section>

            </section>
        </div>
    )
}



function WomenWatches_Mega() {
    return (
        <ul className="Mega1 w-full absolute top-[40px] left-0 opacity-0 invisible duration-500">
            <li className="w-full h-full bg-[white] flex">
                <section className="w-[25%] relative">
                    <i className="bi bi-caret-up-fill absolute top-[-23px] md:right-[33%] lg:right-[30%] xl:right-[13%] 2xl:right-[5%] text-[white] text-[30px]"></i>
                    <span className="w-[1px] h-[90%] border block absolute right-0 top-[30px]"></span>
                    <ul className="pl-[40px] xl:pl-[60px] pt-6">
                        <li className="font-sans text-[17px] pt-2">ALL WOMEN'S WATCHES</li>
                        <li className="font-sans text-[17px] pt-2">BESTSELLERS</li>
                        <li className="font-sans text-[17px] pt-2">GIFT BOXES</li>
                        <li className="font-sans text-[17px] pt-2">WATCH STARPS</li>
                        <li className="font-sans text-[17px] pt-2">INSPIRATION</li>
                    </ul>
                </section>
                <section className="w-[25%] ">
                    <ul className="pl-8 pt-6">
                        <li className="font-sans text-[17px] py-2">COLLECTIONS</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">La Tétragone</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Fluette</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Gracieuse Petite</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Minuit</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Boho Chic</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Boho Chic Petite</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Féroce</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Féroce Petite</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Féroce Mini</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Pavane Petite</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Triomphe</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1 pb-4">Vigoureux</li>
                    </ul>
                </section>
                <section className="w-[25%] relative">
                    <span className="w-[1px] h-[90%] border block absolute left-0 top-[30px]"></span>
                    <p className="pt-6 font-sans text-[17px] py-2 pl-8 w-full">SHOP BY COLOUR</p>
                    <div className="w-[85%]  ml-7 mb-8">
                        <section className="flex mt-5">
                            <div className="Choosebycolor w-[50%]  flex items-center">
                                <img className="w-[30%]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-gold_180x.jpg?v=18099790610865596565" />
                                <p className="font-sans pl-3 text-[17px] font-normal">Gold</p>
                            </div>
                            <div className="Choosebycolor w-[50%]  flex items-center">
                                <img className="w-[30%]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-rose-gold_180x.jpg?v=16724469460901084809" />
                                <p className="font-sans pl-3 text-[17px] font-normal">Rose Gold</p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[85%]  ml-7 mb-8">
                        <section className="flex ">
                            <div className="Choosebycolor w-[50%]  flex items-center">
                                <img className="w-[30%]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-silver_180x.jpg?v=8409036808219416234" />
                                <p className="font-sans pl-3 text-[17px] font-normal">Silver</p>
                            </div>
                            <div className="Choosebycolor w-[50%]  flex items-center">
                                <img className="w-[30%]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-black_180x.jpg?v=11298224777584381162" />
                                <p className="font-sans pl-3 text-[17px] font-normal">Black</p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[85%]  ml-7 mb-8">
                        <section className="flex ">
                            <div className="Choosebycolor w-[50%]  flex items-center">
                                <img className="w-[30%]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-white_180x.jpg?v=3955146116943632937" />
                                <p className="font-sans pl-3 text-[17px] font-normal">White</p>
                            </div>
                            <div className="Choosebycolor w-[50%]  flex items-center">
                                <img className="w-[30%]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-grey_180x.jpg?v=10135783739069753210" />
                                <p className="font-sans pl-3 text-[17px] font-normal">Grey</p>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="w-[25%] relative">
                    <span className="w-[1px] h-[90%] border block absolute left-0 top-[30px]"></span>
                    <img className="w-[95%] p-6" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-gift-inspiration_360x.jpg?v=13115542059560477673" />
                    <div className="w-full flex items-center justify-center hover:underline">
                        <p className="pr-1 font-sans text-[18px]">GIFT INSPIRATION </p>
                        <CaretRight size={14} />
                    </div>
                </section>
            </li>
        </ul>
    )
}


function MenWatches_Mega() {
    return (
        <ul className="Mega1 w-full absolute top-[40px] left-0 opacity-0 invisible duration-500">
            <li className="w-full h-full bg-[white] flex">
                <section className="w-[25%] relative">
                    <span className="w-[1px] h-[90%] border block absolute right-0 top-[30px]"></span>
                    <ul className="pl-[40px] xl:pl-[60px] pt-6">
                        <li className="font-sans text-[17px] pt-2">ALL MEN'S WATCHES</li>
                        <li className="font-sans text-[17px] pt-2">BESTSELLERS</li>
                        <li className="font-sans text-[17px] pt-2">CHRONOGRAPH WATCHES</li>
                        <li className="font-sans text-[17px] pt-2">LEATHER WATCHES</li>
                        <li className="font-sans text-[17px] pt-2">STAINLES STEEL WATCHES</li>
                        <li className="font-sans text-[17px] pt-2">GIFT BOXES</li>
                        <li className="font-sans text-[17px] pt-2">WATCH STRAPS</li>
                        <li className="font-sans text-[17px] pt-2">INSPIRATION</li>
                    </ul>
                </section>
                <section className="w-[25%] relative ">
                    <i className="bi bi-caret-up-fill absolute top-[-23px] md:left-[40%] lg:left-[15%] xl:left-[23%] 2xl:left-[35%] text-[white] text-[30px]"></i>
                    <ul className="pl-8 pt-6">
                        <li className="font-sans text-[17px] py-2">COLLECTIONS</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1 ">Vigoureux</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Aravis</li>
                    </ul>
                </section>
                <section className="w-[25%] relative">
                    <span className="w-[1px] h-[90%] border block absolute left-0 top-[30px]"></span>
                    <p className="pt-6 font-sans text-[17px] py-2 pl-8 w-full">SHOP BY COLOUR</p>
                    <div className="w-[85%]  ml-7 mb-8">
                        <section className="flex mt-5">
                            <div className="Choosebycolor w-[50%]  flex items-center">
                                <img className="w-[30%]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-silver_180x.jpg?v=8409036808219416234" />
                                <p className="font-sans pl-3 text-[17px] font-normal">Silver</p>
                            </div>
                            <div className="Choosebycolor w-[50%]  flex items-center">
                                <img className="w-[30%]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-black_180x.jpg?v=11298224777584381162" />
                                <p className="font-sans pl-3 text-[17px] font-normal">Black</p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[85%]  ml-7 mb-8">
                        <section className="flex mt-5">
                            <div className="Choosebycolor w-[50%]  flex items-center">
                                <img className="w-[30%]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-gold_180x.jpg?v=18099790610865596565" />
                                <p className="font-sans pl-3 text-[17px] font-normal">Gold</p>
                            </div>
                            <div className="Choosebycolor w-[50%]  flex items-center">
                                <img className="w-[30%]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-rose-gold_180x.jpg?v=16724469460901084809" />
                                <p className="font-sans pl-3 text-[17px] font-normal">Rose Gold</p>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="w-[25%] relative">
                    <span className="w-[1px] h-[90%] border block absolute left-0 top-[30px]"></span>
                    <img className="w-[95%] p-6" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-gift-inspiration-men_360x.jpg?v=11859393974812572829" />
                    <div className="w-full flex items-center justify-center hover:underline mb-5">
                        <p className="pr-1 font-sans text-[18px]">GIFT INSPIRATION MEN </p>
                        <CaretRight size={14} />
                    </div>
                </section>
            </li>
        </ul>
    )
}


function Jewelery_Mega() {
    return (
        <ul className="Mega1 w-full absolute top-[40px] left-0 opacity-0 invisible duration-500">
            <li className="w-full h-full bg-[white] flex">
                <section className="w-[25%] relative">
                    <span className="w-[1px] h-[90%] border block absolute right-0 top-[30px]"></span>
                    <ul className="pl-[40px] xl:pl-[60px] pt-6">
                        <li className="font-sans text-[17px] pt-2">ALL JEWELLERY</li>
                        <li className="font-sans text-[17px] pt-2">BESTSELLERS</li>
                        <li className="font-sans text-[17px] pt-2">BRACELETS</li>
                        <li className="font-sans text-[17px] pt-2">NECKLACES</li>
                        <li className="font-sans text-[17px] pt-2">EARRINGS</li>
                        <li className="font-sans text-[17px] pt-2">ANKLETS</li>
                        <li className="font-sans text-[17px] pt-2">INSPIRATION</li>
                    </ul>
                </section>
                <section className="w-[25%] relative ">
                    <ul className="pl-8 pt-6">
                        <li className="font-sans text-[17px] py-2">COLLECTIONS</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1 ">Essentielle</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Zoé</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Iris Mittenaere</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Natural Brown Stones Jewellery</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Chunky Chain Jewellery</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Pearls Jewellery</li>
                    </ul>
                </section>
                <section className="w-[50%] relative">
                    <i className="bi bi-caret-up-fill absolute top-[-23px] md:left-[50%] lg:left-[28%] xl:left-[25%] 2xl:left-[22%] text-[white] text-[30px]"></i>
                    <span className="w-[1px] h-[90%] border block absolute left-0 top-[30px]"></span>
                    <figure className="w-[90%] xl:w-[80%]  mt-7 ml-[35px] xl:ml-[50px] flex  justify-evenly">
                        <div className="w-[30%]  flex flex-wrap justify-center hover:underline mb-5">
                            <img className="w-[100%] xl:w-[80%] h-[210px]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-gold-jewellery_180x.jpg?v=4631558124933422051" />
                            <p className="font-sans text-[17px] text-center pt-4">GOLD JEWELLERY</p>
                        </div>
                        <div className="w-[30%]  flex flex-wrap justify-center hover:underline mb-5">
                            <img className="w-[100%] xl:w-[80%] h-[210px]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-silver-jewellery_180x.jpg?v=17427948668930079826" />
                            <p className="font-sans text-[17px] text-center pt-4">SILVER JEWELLERY</p>
                        </div>
                        <div className="w-[30%]  flex flex-wrap justify-center hover:underline mb-5">
                            <img className="w-[100%] xl:w-[80%] h-[210px]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-rose-gold-jewellery_180x.jpg?v=2944746738764529359" />
                            <p className=" font-sans text-[17px] text-center pt-4">ROSE GOLD JEWELLERY</p>
                        </div>
                    </figure>
                </section>

            </li>
        </ul>
    )
}


function GiftShop_Mega() {
    return (
        <ul className="Mega1 w-full absolute top-[40px] left-0 opacity-0 invisible duration-500">
            <li className="w-full h-full bg-[white] flex">
                <section className="w-[25%] relative">
                    <span className="w-[1px] h-[90%] border block absolute right-0 top-[30px]"></span>
                    <ul className="pl-[40px] xl:pl-[60px] pt-6">
                        <li className="font-sans text-[17px] pt-2">GIFT BOXES</li>
                        <li className="font-sans text-[17px] pt-2">GIFT INSPIRATION</li>
                        <li className="font-sans text-[17px] pt-2">BESTSELLING GIFTBOXES</li>
                        <li className="font-sans text-[17px] pt-2">BESTSELLING WOMEN'S WATCHES</li>
                        <li className="font-sans text-[17px] pt-2">BESTSELLING MEN'S WATCHES</li>
                        <li className="font-sans text-[17px] pt-2">MIX AND MATCH WITH STRAPS</li>
                    </ul>
                </section>
                <section className="w-[25%] relative ">
                    <ul className="pl-8 pt-6">
                        <li className="font-sans text-[17px] py-2">GIFTS BY PRICE</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1 ">Gifts under 40 EUR</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Gifts from 41-100 EUR</li>
                        <li className="collection font-sans text-[16px] font-sans font-normal pt-1">Gifts above 100 EUR</li>
                    </ul>
                </section>
                <section className="w-[50%] relative">
                    <i className="bi bi-caret-up-fill absolute top-[-23px] md:left-[71%] lg:left-[46%] xl:left-[40%] 2xl:left-[37%] text-[white] text-[30px]"></i>
                    <span className="w-[1px] h-[90%] border block absolute left-0 top-[30px]"></span>
                    <figure className="w-[90%] xl:w-[80%]  mt-7 ml-[35px] xl:ml-[50px] flex  justify-evenly">
                        <div className="w-[30%]  flex flex-wrap justify-center">
                            <img className="w-[100%] xl:w-[80%] h-[210px]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-snake-bracelet_180x.jpg?v=15539551790044682895" />
                            <div className="w-full flex items-center justify-center hover:underline mb-5">
                                <p className="font-sans text-[17px] text-center pt-4 pr-1">SNAKE BRACELET </p>
                                <CaretRight size={14} className="mt-4" />
                            </div>
                        </div>
                        <div className="w-[30%]  flex flex-wrap justify-center">
                            <img className="w-[100%] xl:w-[80%] h-[210px]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-la-tetragone-gift-box_180x.jpg?v=2495433413645158688" />
                            <div className="w-full flex items-center justify-center hover:underline mb-5">
                                <p className="w-[70%] font-sans text-[17px] text-center pt-4 ">LA TÉTRAGONE GIFT BOX  </p>
                                <CaretRight size={14} className="mt-4" />
                            </div>
                        </div>
                        <div className="w-[30%]  flex flex-wrap justify-center">
                            <img className="w-[100%] xl:w-[80%] h-[210px]" src="https://cdn.shopify.com/s/files/1/2717/7540/files/menu-minuit-gift-box_180x.jpg?v=13579148386980536550" />
                            <div className="w-full flex items-center justify-center hover:underline mb-5">
                                <p className="font-sans text-[17px] text-center pt-4 pr-1">MINUIT GIFT BOX  </p>
                                <CaretRight size={14} className="mt-4" />
                            </div>
                        </div>
                    </figure>
                </section>

            </li>
        </ul>
    )
}



export default Menu