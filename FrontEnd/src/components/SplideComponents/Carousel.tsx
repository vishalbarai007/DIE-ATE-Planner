import { Splide, SplideSlide, SplideProps } from '../../../node_modules/@splidejs/react-splide';
import { BackgroundLines } from '../AceternityComponents/support/background-lines';
import { Input } from '../AceternityComponents/support/input';
// import BackgroundLines from '../AceternityComponents/main/BackgroundLines';

// import '@splidejs/splide/css';
// import BackgroundLines from '../AceternityComponents/main/BackgroundLines';


const Carousel = () => {
    const options: SplideProps['options'] = {
        perPage: 1,
        gap: '1rem'
    }
    return (
        <div className='h-screen w-full text-white'>
            <Splide options={options}>
                <SplideSlide>
                    <div className="relative h-full w-full flex flex-col items-center justify-center">
                        <BackgroundLines>
                            <div className="h-fit w-fit flex flex-col justify-center z-50 items-center">
                                <h1 className="text-white text-5xl font-bold mb-4">
                                    Enter your age?
                                </h1>
                                {/* <input
                                    type="number"
                                    name="age"
                                    id="age"
                                    placeholder="Age"
                                    className="rounded-lg border text-xl pl-5 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-28 bg-neutral-950 placeholder:text-neutral-700"
                                /> */}
                                <Input type="number"
                                    name="age"
                                    id="age"
                                    placeholder="Age" />
                                
                                
                            </div>
                        </BackgroundLines>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="relative h-full w-full flex flex-col items-center justify-center">
                        <BackgroundLines>
                            <div className="h-fit w-fit flex flex-col justify-center z-50 items-center">
                                <h1 className="text-white text-5xl font-bold mb-4">Select your gender?</h1>
                                {/* <div className='w-full flex justify-center absolute z-10 top-80'> */}
                                <div className='flex'>
                                    <label className='m-8 text-2xl'><input type='radio' name='gender' id='gender' value='male' className="rounded-lg border w-5 h-5 text-2xl mr-5 pl-5 border-neutral-800 focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700" />Male</label>
                                    <label className='m-8 text-2xl'><input type='radio' name='gender' id='gender' value='female' className="rounded-lg border w-5 h-5 text-2xl mr-5 pl-5 border-neutral-800 focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700" />Female</label>
                                    <label className='m-8 text-2xl'><input type='radio' name='gender' id='gender' value='female' className="rounded-lg border w-5 h-5 text-2xl mr-5 pl-5 border-neutral-800 focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700" />Others</label>
                                </div>
                                {/* </div> */}
                            </div>
                        </BackgroundLines>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="relative h-full w-full flex flex-col items-center justify-center">
                        <BackgroundLines>
                            <div className="h-fit w-fit flex flex-col justify-center z-50 items-center">
                                <h1 className="text-white text-5xl font-bold mb-4">Do you have any chronic conditions (eg. diabetes, hypertension)?</h1>
                                {/* <div className='w-full flex justify-center absolute z-10 top-80'> */}
                                <div className='flex'>
                                    <div className='flex'>
                                        <label className='m-8 text-2xl'><input type='radio' name='gender' id='gender' value='male' className="rounded-2xl border w-5 h-5 mr-5 pl-10 border-neutral-800 focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700" />Yes</label>
                                        <label className='m-8 text-2xl'><input type='radio' name='gender' id='gender' value='female' className="rounded-2xl border w-5 h-5 mr-5 pl-10 border-neutral-800 focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700" />No</label>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </BackgroundLines>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Carousel
