import React from "react";
import Slider from "react-slick";
import { CaretRight } from "phosphor-react"


const Bestsellers = () => {
    return (
        <>
            <div>
                <section className="mt-[80px] md:mt-[110px] flex flex-wrap justify-center">
                    <h1 className="w-full text-center font-semibold text-[35px] font-serif">Bestsellers</h1>
                    <span className="w-[45px] h-[2px] bg-[black] block mt-1"></span>
                </section>
            </div>
            <section className="w-full flex justify-center mt-10 flex-wrap overflow-x-hidden">
                <BestsellerSlider />
                <button className=" py-2 px-7 flex border-2 border-[#c6c6c6] justify-center font-semibold my-10 hover:bg-[#c6c6c6] duration-500">SHOP ALL BESTSELLERS <CaretRight size={14} className="mt-[5px] ml-1"/></button>
            </section>
        </>
    )
}

function BestsellerSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
    };
    return (
        <section className="w-[90%]">
            <Slider {...settings}>
                <div className="div1">
                    <figure className="w-[100%] cursor-pointer flex justify-center relative flex-wrap">
                        <img className="w-[80%]" src="//cdn.shopify.com/s/files/1/2717/7540/products/CX03505_side2_500x.jpg?v=1658232984 500w, //cdn.shopify.com/s/files/1/2717/7540/products/CX03505_side2_720x.jpg?v=1658232984 720w" />
                        <img className="w-[80%] absolute opacity-0 duration-500" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CX03505_side_500x.jpg?v=1658232984" />
                        <figcaption className="w-full text-[#BBBCBC] text-[15px] font-semibold text-center font-serif">CX03505</figcaption>
                        <p className="w-[80%] leading-[18px] text-[14px] font-light text-center mt-2">Le Réversible Backpack, Dark Green Moss, Gold Colour</p>
                        <span className="star w-full flex justify-center items-center mt-1">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <p className="text-[13px] text-[#BBBCBC] font-semibold">(6)</p>
                        </span>
                        <p className="mt-1 font-medium">€ 89,95</p>
                    </figure>
                </div>
                <div className="div2">
                    <figure className="w-[100%] cursor-pointer flex justify-center relative flex-wrap">
                        <img className="w-[80%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CW11801_frontal_500x.jpg?v=1670257026" />
                        <img className="w-[80%] absolute opacity-0 duration-500" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CW11801-1400x1400_500x.jpg?v=1672909275" />
                        <figcaption className="w-full text-[#BBBCBC] text-[15px] font-semibold text-center font-serif">24 mm -CW11801</figcaption>
                        <p className="w-[80%]  text-[14px] font-light text-center mt-2">Gracieuse Petite Watch Steel, Bicolour</p>
                        <span className="star w-full flex justify-center items-center xl:mt-4">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <p className="text-[13px] text-[#BBBCBC] font-semibold">(6)</p>
                        </span>
                        <p className="mt-1 font-medium">€ 109,95</p>
                    </figure>
                </div>
                <div>
                    <figure className="w-[100%] cursor-pointer flex justify-center relative flex-wrap">
                        <img className="w-[80%]" src="	https://cdn.shopify.com/s/files/1/2717/7540/products/CX03502_side_500x.jpg?v=1658411100" />
                        <img className="w-[80%] absolute opacity-0 duration-500" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CX03502_side2_500x.jpg?v=1658411100" />
                        <figcaption className="w-full text-[#BBBCBC] text-[15px] font-semibold text-center font-serif">CX03502</figcaption>
                        <p className="w-[80%] leading-[18px] text-[14px] font-light text-center mt-2">Le Réversible Backpack, Dark Blue Caramel, Silver Colour</p>
                        <span className="star w-full flex justify-center items-center mt-1">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <p className="text-[13px] text-[#BBBCBC] font-semibold">(10)</p>
                        </span>
                        <p className="mt-1 font-medium">€ 89,95</p>
                    </figure>
                </div>
                <div>
                    <figure className="w-[100%] cursor-pointer flex justify-center relative flex-wrap">
                        <img className="w-[80%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CX03501_side2_500x.jpg?v=1658411286" />
                        <img className="w-[80%] absolute opacity-0 duration-500" src="	https://cdn.shopify.com/s/files/1/2717/7540/products/CX03501_side_500x.jpg?v=1658411286" />
                        <figcaption className="w-full text-[#BBBCBC] text-[15px] font-semibold text-center font-serif">CX03501</figcaption>
                        <p className="w-[80%] leading-[18px] text-[14px] font-light text-center mt-2">Le Réversible Backpack, Black Grey, Gold Colour</p>
                        <span className="star w-full flex justify-center items-center 2xl:mt-5">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <p className="text-[13px] text-[#BBBCBC] font-semibold">(6)</p>
                        </span>
                        <p className="mt-1 font-medium">€ 89,95</p>
                    </figure>
                </div>
                <div>
                    <figure className="w-[100%] cursor-pointer flex justify-center relative flex-wrap">
                        <img className="w-[80%]" src="//cdn.shopify.com/s/files/1/2717/7540/products/CG10117_1_500x.jpg?v=1634641136 500w, //cdn.shopify.com/s/files/1/2717/7540/products/CG10117_1_720x.jpg?v=1634641136 720w" />
                        <img className="w-[80%] absolute opacity-0 duration-500" src="	https://cdn.shopify.com/s/files/1/2717/7540/products/CG10117_wristshot_1400x1400_490eee57-d67b-43e5-ae26-e6e674d9dcf5_720x.jpg?v=1635518673" />
                        <figcaption className="w-full text-[#BBBCBC] text-[15px] font-semibold text-center font-serif">30,6 mm -CG10117</figcaption>
                        <p className="w-[80%] leading-[18px] text-[14px] font-light text-center mt-2">Gift Box Fluette Watch and Bracelet, Gold Colour</p>
                        <span className="star w-full flex justify-center items-center 2xl:mt-5">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <p className="text-[13px] text-[#BBBCBC] font-semibold">(5)</p>
                        </span>
                        <p className="mt-2 font-medium line-through text-[13px] text-[#BBBCBC]">€ 129,95</p>
                        <p className="mt-1 font-medium ml-2 text-[#961B0D]">€ 103,96</p>
                    </figure>
                </div>
                <div>
                    <figure className="w-[100%] cursor-pointer flex justify-center relative flex-wrap">
                        <img className="w-[80%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CW11802_frontal_500x.jpg?v=1670257019" />
                        <img className="w-[80%] absolute opacity-0 duration-500" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CW11802-1400x1400_720x.jpg?v=1672909351" />
                        <figcaption className="w-full text-[#BBBCBC] text-[15px] font-semibold text-center font-serif">24 mm -CW11802</figcaption>
                        <p className="w-[80%] leading-[18px] text-[14px] font-light text-center mt-2">Gracieuse Petite Watch Steel, Gold Colour</p>
                        <span className="star w-full flex justify-center items-center 2xl:mt-5">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <p className="text-[13px] text-[#BBBCBC] font-semibold">(2)</p>
                        </span>
                        <p className="mt-1 font-medium">€ 109,95</p>
                    </figure>
                </div>
                <div>
                    <figure className="w-[100%] cursor-pointer flex justify-center relative flex-wrap">
                        <img className="w-[80%]" src="https://cdn.shopify.com/s/files/1/2717/7540/products/CB13309_500x.jpg?v=1619701906" />
                        <img className="w-[80%] absolute opacity-0 duration-500" src="https://cdn.shopify.com/s/files/1/2717/7540/products/wristshot_CB13309_1400x1400_622eecdf-80d6-4045-9efb-d4f154f2a5f2_500x.jpg?v=1619701906" />
                        <figcaption className="w-full text-[#BBBCBC] text-[15px] font-semibold text-center font-serif">30,6 mm -CW11507</figcaption>
                        <p className="w-[80%] leading-[18px] text-[14px] font-light text-center mt-2">Fluette bracelet, Full Gold Colour</p>
                        <span className="star w-full flex justify-center items-center 2xl:mt-5">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <p className="text-[13px] text-[#BBBCBC] font-semibold">(3)</p>
                        </span>
                        <p className="mt-1 font-medium">€ 99,95</p>
                    </figure>
                </div>
                <div>
                    <figure className="w-[100%] cursor-pointer flex justify-center relative flex-wrap">
                        <img className="w-[80%]" src="	https://cdn.shopify.com/s/files/1/2717/7540/products/CW11507_frontal_1_500x.jpg?v=1658241649" />
                        <img className="w-[80%] absolute opacity-0 duration-500" src="https://cdn.shopify.com/s/files/1/2717/7540/products/wristshot_CW11507withcolour_1400x1400_1_500x.jpg?v=1658241646" />
                        <figcaption className="w-full text-[#BBBCBC] text-[15px] font-semibold text-center font-serif">30,6 mm -CW11507</figcaption>
                        <p className="w-[80%] leading-[18px] text-[14px] font-light text-center mt-2">Fluette Steel, Full Gold Colour</p>
                        <span className="star w-full flex justify-center items-center 2xl:mt-5">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <p className="text-[13px] text-[#BBBCBC] font-semibold">(3)</p>
                        </span>
                        <p className="mt-1 font-medium">€ 99,95</p>
                    </figure>
                </div>
            </Slider>
        </section>
    );
}

export default Bestsellers