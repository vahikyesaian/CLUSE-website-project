import { CaretRight } from "phosphor-react"
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'

const Shopbycategory = () => {
    return (
        <section className="w-full mt-5 flex flex-wrap justify-center">
            <h1 className="text-center font-semibold text-[35px] font-serif">Shop by category</h1>
            <div className="w-[100%] my-8 flex justify-evenly flex-wrap">
                <figure className="w-[95%] md:w-[23%] flex flex-wrap justify-center">
                    <img src={img1} />
                    <figcaption className="text-[18px] font-medium flex mt-4 mb-10">Watches <CaretRight className="ml-1 mt-2" size={14} /> </figcaption>
                </figure>
                <figure className="w-[95%] md:w-[23%] flex flex-wrap justify-center">
                    <img src={img2} />
                    <figcaption className="text-[18px] font-medium flex mt-4 mb-10">Backpacks <CaretRight className="ml-1 mt-2"  size={14}/> </figcaption>
                </figure>
                <figure className="w-[95%] md:w-[23%] flex flex-wrap justify-center">
                    <img src={img3} />
                    <figcaption className="text-[18px] font-medium flex mt-4 mb-10">Straps <CaretRight className="ml-1 mt-2" size={14} /> </figcaption>
                </figure>
                <figure className="w-[95%] md:w-[23%] flex flex-wrap justify-center">
                    <img src={img4} />
                    <figcaption className="text-[18px] font-medium flex mt-4 mb-10">Jewellery <CaretRight className="ml-1 mt-2"  size={14}/> </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Shopbycategory