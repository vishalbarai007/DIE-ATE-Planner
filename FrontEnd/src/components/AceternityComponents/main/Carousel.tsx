import { Splide, SplideSlide, SplideProps } from '@splidejs/react-splide'; 
import '@splidejs/splide/css';
import { BackgroundBeamsDemo } from './Background-Beams';

const Carousel = () => {
    const options: SplideProps['options'] = {
        perPage: 1,
        gap: '1rem'
    }
    return (
        <div className='h-screen w-full text-white'>
            <Splide options={options}>
                <SplideSlide>
                    <BackgroundBeamsDemo />
                    <h1 className="w-full text-white absolute z-10 top-60 h-screen flex justify-center text-5xl font-bold">What is your age?</h1>
                    <div className='w-full flex justify-center absolute z-10 top-80'>
                        <input type='number' name='age' id='age' placeholder='Age' className="rounded-lg border text-xl pl-5 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-28 mt-4 bg-neutral-950 placeholder:text-neutral-700" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <BackgroundBeamsDemo />
                    <h1 className="w-full text-white absolute z-10 top-60 h-screen flex justify-center text-5xl font-bold">Select your gender?</h1>
                    <div className='w-full flex justify-center absolute z-10 top-80'>
                        <div className='flex'>
                            <label className='m-8 text-2xl'><input type='radio' name='gender' id='gender' value='male' className="rounded-lg border w-5 h-5 text-2xl mr-5 pl-5 border-neutral-800 focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700" />Male</label>
                            <label className='m-8 text-2xl'><input type='radio' name='gender' id='gender' value='female' className="rounded-lg border w-5 h-5 text-2xl mr-5 pl-5 border-neutral-800 focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700" />Female</label>
                            <label className='m-8 text-2xl'><input type='radio' name='gender' id='gender' value='female' className="rounded-lg border w-5 h-5 text-2xl mr-5 pl-5 border-neutral-800 focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700" />Others</label>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <BackgroundBeamsDemo />
                    <h1 className="w-full text-white relative top-60 h-screen flex justify-center text-5xl font-bold">Do you have any chronic conditions (eg. diabetes, hypertension)?</h1>
                    <div className='w-full flex justify-center absolute z-10 top-80'>
                        <div className='flex'>
                            <label className='m-8 text-2xl'><input type='radio' name='gender' id='gender' value='male' className="rounded-2xl border w-5 h-5 mr-5 pl-10 border-neutral-800 focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700" />Yes</label>
                            <label className='m-8 text-2xl'><input type='radio' name='gender' id='gender' value='female' className="rounded-2xl border w-5 h-5 mr-5 pl-10 border-neutral-800 focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700" />No</label>                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Carousel
