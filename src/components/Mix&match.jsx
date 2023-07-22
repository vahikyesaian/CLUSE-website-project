import { CaretRight } from "phosphor-react"


const MixandMatch = () => {
    return (
        <section className="w-full  min-h-[50px] flex justify-center">
            <div className="w-[95%] lg:w-[90%]  flex flex-wrap lg:mt-8">
                <section className="w-[100%] lg:w-[50%] p-3 mb-4">
                    <div className="">
                        <h1 className="mt-5 mb-10 text-[25px] font-semibold">Mix & Match with straps</h1>
                        <p className="w-[90%] font-normal mt-3 text-[15px]">One watch, endless looks. Our watch straps are easily interchangeable. Twist. Click. Change your strap in a snap to match your look to your current mood.</p>
                        <p className="font-normal my-3 text-[15px]">Use our strap finder to find straps that fit your watch.</p>
                        <div className="w-full flex mt-5">
                            <button className=" bg-[black] text-white flex px-10 py-4 text-[14px] font-semibold hover:bg-[gainsboro] hover:text-[black] duration-300">FIND STRAPS FOR HIM & HER <CaretRight className="ml-2 mt-1"/></button>
                        </div>
                    </div>
                </section>
                <section className="w-[100%] lg:w-[50%]">
                    <figure className="w-full ">
                            <img src="https://cdn.shopify.com/s/files/1/2717/7540/files/WOMEN-MEN-STRAP_CW11802_CS12101_CW0101501001_CS1401101061_LR_704x483_1_1728x.jpg?v=1675325039" />
                    </figure>
                </section>
            </div>
        </section>
    )
}

export default MixandMatch