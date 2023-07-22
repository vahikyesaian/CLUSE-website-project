import { CaretRight } from "phosphor-react"

const Signup = () => {
    function required() {
        let x= document.getElementById('signupinp')
        if(x.value==''){
            x.focus()
            x.style.boxShadow='-15px 5px 35px black'
        }else{
            x.style.boxShadow=''
        }
    }
    return (
        <>
            <section className="w-full  bg-[#abbdb9]">
                <div className="w-full flex flex-wrap justify-center pt-10">
                    <h1 className="w-[90%] lg:w-full text-[30px] lg:text-[35px] font-serif text-center font-medium">Sign up to our newsletter & get 10% off</h1>
                    <p className="w-[90%] lg:w-full text-[14px] lg:text-[15px] my-3 font-medium text-center">Join the #CLUSEclub for the latest news, inspiration and exclusive offers.</p>
                </div>
                <div className="w-full flex justify-center flex-wrap">
                    <input className="w-[90%] lg:w-[80%] xl:w-[60%] h-[45px] border border-black pl-4 outline-none duration-500" type="email" name="email" placeholder="Email address" id="signupinp"/>
                    <div className="w-full btn mt-4 flex justify-center">
                        <button onClick={required} className="border border-black pl-[10px] pr-[40px] py-2 flex font-semibold text-white text-[18px] justify-center items-center bg-black text-white hover:bg-[gainsboro] hover:text-black duration-500"><i class="text-[20px] bi bi-envelope-fill mr-3"></i> Subscribe <CaretRight className="mt-1 ml-2" size={13} /></button>
                    </div>
                    <p className="w-[90%] lg:w-full text-[14px] my-5 text-center">*By signing up for our newsletter, you agree to receive personalized marketing messages from CLUSE in accordance with our <a href="https://cluse.com/pages/privacy-policy" className="underline" target="_blank">Privacy Policy</a>.</p>

                </div>
            </section>
            <div className=" flex justify-center items-center p-4">
                <img className="w-[17px] h-[17px]" src="https://widgets.trustedshops.com/assets/images/sprite.ce0555cc1bbf340d17e00adb2d201f8dbc02ab01.svg#trustmark" />
                <p className="pl-2 text-[14px] font-semibold">Customer ratings</p>
                <section className=" flex ml-1">
                <i className="pl-1 text-[#7dab86] bi bi-star-fill"></i>
                <i className="pl-1 text-[#7dab86] bi bi-star-fill"></i>
                <i className="pl-1 text-[#7dab86] bi bi-star-fill"></i>
                <i className="pl-1 text-[#7dab86] bi bi-star-fill"></i>
                <i className="pl-1 text-[#7dab86] bi bi-star-fill"></i>
                <p className="pl-2 text-[14px] font-semibold">(4.7/5)</p>
                </section>
            </div>
        </>
    )
}

export default Signup