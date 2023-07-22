import { useState } from "react"
import { CaretDown } from "phosphor-react"



const Footer = () => {



    return (
        <>
            <section className="main w-full  flex flex-wrap">
                <div className="w-full lg:w-[25%] border py-6 pl-[30px] lg:pl-[50px] cursor-pointer">
                    <ul>
                        <section className="flex justify-between items-center py-2">
                            <h2 className="lg:pb-8 text-[14px] font-semibold">PRODUCTS</h2>
                            <span className="mr-[20px]"><CaretDown size={14} className="block lg:hidden" /></span>
                        </section>
                        <li className="w-full hidden lg:block pb-1 text-[13px]"><a href="">Shop Women's Watches</a></li>
                        <li className="w-full hidden lg:block pb-1 text-[13px]"><a href="">Shop Men's Watches</a></li>
                        <li className="w-full hidden lg:block pb-1 text-[13px]"><a href="">Shop Straps</a></li>
                        <li className="w-full hidden lg:block pb-1 text-[13px]"><a href="">Shop Jewellery</a></li>
                        <li className="w-full hidden lg:block pb-1 text-[13px]"><a href="">Shop Gift boxes</a></li>
                        <li className="w-full hidden lg:block pb-1 text-[13px]"><a href="">Shop Backpacks</a></li>
                        <li className="w-full hidden lg:block pb-1 text-[13px]"><a href="">Watch Guide</a></li>
                        <li className="w-full hidden lg:block pb-1 text-[13px]"><a href="">Battery replacement</a></li>
                        <li className="w-full hidden lg:block pb-1 text-[13px]"><a href="">Jewellery Guide</a></li>
                        <li className="w-full hidden lg:block pb-1 text-[13px]"><a href="">Shop the look</a></li>
                        <li className="w-full hidden lg:block pb-1 text-[13px]"><a href="">New in</a></li>
                    </ul>
                </div>
                <div className="w-full lg:w-[25%] border py-6 pl-[30px] lg:pl-[50px]">
                    <ul className="cursor-pointer">
                        <section className="flex justify-between items-center py-2">
                            <h2 className="lg:pb-8 text-[14px] font-semibold">ABOUT CLUSE</h2>
                            <span className="mr-[20px]"><CaretDown size={14} className="block lg:hidden" /></span>
                        </section>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Stores</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Our story</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Contact</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Ambassadors</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Jobs</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Sustainability</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Trusted Shops certified</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Newsletter subscription</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a target="_blank" href="https://www.google.com/gmail/about/">vahik.yesaian66@gmail.com</a></li>
                    </ul>
                </div>
                <div className="w-full lg:w-[25%] border py-6 pl-[30px] lg:pl-[50px]">
                    <ul className="cursor-pointer">
                        <section className="flex justify-between items-center py-2">
                            <h2 className="lg:pb-8 text-[14px] font-semibold">SUPPORT</h2>
                            <span className="mr-[20px]"><CaretDown size={14} className="block lg:hidden" /></span>
                        </section>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Return Policy</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Shipping policy</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Customer Service</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Terms & Conditions</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Privacy Policy</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">Cookie Policy</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a href="">FAQ</a></li>
                        <li className="pb-1 w-full hidden lg:block text-[13px]"><a target="_blank" href="http://www.vahikysn.com/">vahikysn.com</a></li>
                    </ul>
                </div>
                <div className="w-full lg:w-[25%] border py-6 pl-[30px] lg:pl-[50px] cursor-pointer">
                    <section className="flex justify-between items-center py-2">
                        <p className="lg:pb-8 text-[14px] font-semibold">JOIN THE #CLUSECLUB</p>
                        <span className="mr-[20px]"><CaretDown size={14} className="block lg:hidden" /></span>
                    </section>
                    <section className="w-full flex mt-5 hidden lg:flex">
                        <i className="text-[20px] cursor-pointer bi bi-facebook"></i>
                        <i className="text-[20px] cursor-pointer pl-3 lg:pl-2 xl:pl-3 bi bi-instagram"></i>
                        <i className="text-[20px] cursor-pointer pl-3 lg:pl-2 xl:pl-3 bi bi-pinterest"></i>
                        <i className="text-[20px] cursor-pointer pl-3 lg:pl-2 xl:pl-3 bi bi-youtube"></i>
                        <i className="text-[20px] cursor-pointer pl-3 lg:pl-2 xl:pl-3 bi bi-linkedin"></i>
                        <i className="text-[20px] cursor-pointer pl-3 lg:pl-2 xl:pl-3 bi bi-tiktok"></i>
                        <i className="text-[20px] cursor-pointer pl-3 lg:pl-2 xl:pl-3 bi bi-envelope"></i>
                    </section>
                </div>
            </section>
            <section className="w-full py-4 lg:pl-[50px]">
                <p className="text-[14px] text-center lg:text-start">© 2023 CLUSE ALL RIGHTS RESERVED</p>
            </section>
        </>
    )
}

export default Footer