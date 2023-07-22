import { CaretRight } from "phosphor-react"

const Header = () => {
    function Close_recproducts() {
        document.getElementById('rec').style.display = 'none'
    }
    return (
        <>
            <div onClick={Close_recproducts} className="h-[100vh] sm:h-[100vh] md:h-[70vh] lg:h-[80vh] hero flex justify-center md:justify-start items-end lg:items-center flex-wrap ">
                <section className="min-h-[50px] sm:w-[80%] md:w-[60%] xl:w-[40%] md:pl-10 flex justify-center md:justify-start flex-wrap mb-[50px] ">
                    <h2 className="w-full md:w-auto font-serif text-[25px] md:text-[35px] font-semibold py-3 text-center md:text-start">Busy making memories</h2>
                    <h3 className="w-full font-sans text-[25px] font-semibold pb-3 hidden md:block">The must-have summer peices</h3>
                    <button className="flex justify-center items-center w-[45%] md:w-[37%] bg-[black] text-[white] h-[43px] uppercase text-[15px] font-medium mt-1 hover:bg-[white] hover:text-[black] duration-500">shop backpacks <CaretRight size={14} className="ml-2 " /> </button>
                </section>
            </div>
            <div className="w-full min-h-[50px] flex flex-wrap block md:hidden">
                <section className="border-t w-full flex items-center pl-5 py-6">
                    <p className=" uppercase text-[14px] font-semibold"> <a href="https://cluse.com/collections/all-watches">Watches</a></p>
                    <CaretRight size={14} className="ml-2 " />
                </section>
                <section className="border-t w-full flex items-center pl-5 py-6">
                    <p className=" uppercase text-[14px] font-semibold"> <a href="https://cluse.com/pages/watches-straps">Watche starps</a></p>
                    <CaretRight size={14} className="ml-2 " />
                </section>
                <section className="border-t w-full flex items-center pl-5 py-6">
                    <p className=" uppercase text-[14px] font-semibold"> <a href="https://cluse.com/collections/backpacks">backpacks</a></p>
                    <CaretRight size={14} className="ml-2 " />
                </section>
                <section className="border-t w-full flex items-center pl-5 py-6 border-b">
                    <p className=" uppercase text-[14px] font-semibold"> <a href="https://cluse.com/collections/giftboxes">gift boxes</a></p>
                    <CaretRight size={14} className="ml-2 " />
                </section>
            </div>
        </>
    )
}

export default Header