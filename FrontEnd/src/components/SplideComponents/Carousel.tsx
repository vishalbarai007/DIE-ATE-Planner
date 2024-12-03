import { Splide, SplideSlide, SplideProps } from '../../../node_modules/@splidejs/react-splide';
import { useState } from 'react';
import { BackgroundLines } from '../AceternityComponents/support/background-lines';
import { Input } from '../AceternityComponents/support/input';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../../contexts/theme/ThemeContext';


const Carousel = () => {
    const context = useContext(ThemeContext);
    const [goal, setGoal] = useState<string | null>(null); // To store the selected goal
    // const [formData, setFormData] = useState<any>({}); // To store the entire form data

    const goals = [
        { name: 'Gaining Weight', fill: '#ffffff', icon: 'M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-56.2 0zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z' },
        { name: 'Losing Weight', fill: '#ffffff', icon: 'M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-56.2 0zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z' },
        { name: 'Healthy Nutrition', fill: '#fafafa', icon: 'M224 112c-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80l16 0c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80l-16 0zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z' },
        { name: 'Muscle Gaining', fill: '#f7f7f8', icon: 'M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z' },
    ];

    const handleGoalSelect = (selectedGoal: string) => {
        setGoal(selectedGoal);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget as HTMLFormElement);
        const formValues: Record<string, string> = {};
        data.forEach((value, key) => {
            formValues[key] = value.toString();
        });

        // Add the selected goal to the form data
        formValues['goal'] = goal || '';

        console.log('Submitted Form Data:', formValues);
        alert('Form submitted successfully!');

    };

    const options: SplideProps['options'] = {
        perPage: 1,
        gap: '1rem',
        arrows: true,
        classes: {
            arrows: 'splide__arrows custom-arrows',
            arrow: 'splide__arrow custom-arrow',
            prev: 'splide__arrow--prev custom-prev',
            next: 'splide__arrow--next custom-next',
        },
    };

    return (
        <div className="h-screen w-full text-white">
            <form onSubmit={handleSubmit}>
                <Splide options={options}>
                    <SplideSlide>
                        <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4">
                            <BackgroundLines>
                                <div className="h-fit w-fit flex flex-col justify-center z-50 items-center">
                                    <h1 className="text-white text-2xl md:text-4xl mb-10 text-center">
                                        Enter your age
                                    </h1>
                                    <Input type="number" name="age" id="age" placeholder="Age" />
                                    <div className="flex items-center">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={context?.theme === 'dark'}
                                                onChange={context?.changeTheme}
                                            />
                                            <div
                                                className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500
                 peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:outline-none 
                 before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full 
                 before:bg-white before:transition-all before:translate-x-1 peer-checked:before:translate-x-6"
                                            ></div>
                                            <span className="ml-3 text-sm font-medium text-white dark:text-gray-300">
                                                {context?.theme === 'light' ? "Light Mode" : "Dark Mode"}
                                            </span>
                                        </label>
                                    </div>

                                </div>
                            </BackgroundLines>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4">
                            <BackgroundLines>
                                <div className="h-fit w-fit flex flex-col justify-center z-50 items-center">
                                    <div className="font-bold relative z-10 text-3xl md:text-6xl mb-16 md:mb-28 text-center">GENDER</div>
                                    <h1 className="text-white text-2xl md:text-4xl mb-10 text-center">Select your gender</h1>
                                    <div className='grid grid-cols-1 gap-8'>
                                        <label className='flex items-center space-x-4 text-xl md:text-2xl'>
                                            <input type='radio' name='gender' value='male' className="w-5 h-5 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950" />
                                            <div className='flex items-center space-x-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#fafafa" d="M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8l112 0c13.3 0 24 10.7 24 24l0 112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM400 80s0 0 0 0s0 0 0 0s0 0 0 0zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" /></svg>
                                                <span>(Male)</span>
                                            </div>
                                        </label>
                                        <label className='flex items-center space-x-4 text-xl md:text-2xl'>
                                            <input type='radio' name='gender' value='female' className="w-5 h-5 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950" />
                                            <div className='flex items-center space-x-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512"><path fill="#f5f5f5" d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1l0 34.9-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-34.9z" /></svg>
                                                <span>(Female)</span>
                                            </div>
                                        </label>
                                        <label className='flex items-center space-x-4 text-xl md:text-2xl'>
                                            <input type='radio' name='gender' value='other' className="w-5 h-5 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950" />
                                            <div className='flex items-center space-x-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#fafafa" d="M112 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-31 31L112 78.1l7-7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-7 7 15.2 15.2C187.7 107.6 220.5 96 256 96s68.3 11.6 94.9 31.2l68.8-68.8-31-31c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l96 0c8.8 0 16 7.2 16 16l0 96c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-31-31-68.8 68.8C404.4 187.7 416 220.5 416 256c0 80.2-59 146.6-136 158.2l0 17.8 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0 0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l16 0 0-17.8C155 402.6 96 336.2 96 256c0-35.5 11.6-68.3 31.2-94.9L112 145.9l-7 7c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l7-7L58.3 92.3l-31 31c-4.6 4.6-11.5 5.9-17.4 3.5S0 118.5 0 112L0 16C0 7.2 7.2 0 16 0l96 0z" /></svg>
                                                <span>(Other)</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </BackgroundLines>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='relative h-full w-full flex flex-col items-center justify-center'>
                            <BackgroundLines>
                                <div className="h-fit w-fit flex flex-col justify-center z-50 items-center">
                                    <div className="font-bold relative z-10 text-3xl md:text-6xl mb-16 md:mb-28 text-center">HEIGHT & WEIGHT</div>
                                    <h1 className="text-white text-2xl md:text-4xl mb-10 text-center">Enter your height in cms</h1>
                                    <Input type="number" name="age" id="age" placeholder="Height" />
                                    <h1 className="text-white text-2xl md:text-4xl mb-10 text-center">Enter your weight in kgs</h1>
                                    <Input type="number" name="age" id="age" placeholder="Weight" />
                                </div>
                            </BackgroundLines>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="relative h-full w-full flex flex-col items-center justify-center">
                            <BackgroundLines>
                                <div className="h-fit w-fit flex flex-col justify-center z-50 items-center">
                                    <div className="font-bold relative z-10 text-3xl md:text-6xl mb-16 md:mb-28 text-center">CHRONIC CONDITIONS</div>
                                    <h1 className="text-white text-2xl md:text-4xl mb-10 text-center">Do you have any chronic conditions ? (eg. diabetes, hypertension)</h1>
                                    <div className='flex'>
                                        <div className='flex'>
                                            <label className='m-8 text-2xl'><input type='radio' name='issue' id='issue' value='yes' className="rounded-2xl hover:bg-black border w-5 h-5 mr-5 pl-10 border-white focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700" />Yes</label>
                                            <label className='m-8 text-2xl'><input type='radio' name='issue' id='issue' value='no' className="rounded-2xl border w-5 h-5 mr-5 pl-10 border-neutral-800 focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700" />No</label>
                                        </div>
                                    </div>
                                </div>
                            </BackgroundLines>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="relative h-full w-full flex flex-col items-center justify-center">
                            <BackgroundLines>
                                <div className="h-fit w-fit flex flex-col justify-center z-50 items-center">
                                    <div className="font-bold relative z-10 text-3xl md:text-6xl mb-16 md:mb-28 text-center">GOAL</div>
                                    <h1 className="text-white text-2xl md:text-4xl mb-10 text-center">What is your primary goal?</h1>

                                    <form onSubmit={handleSubmit}>
                                        {goals.map((goalItem, index) => (
                                            <button
                                                type="button"
                                                key={index}
                                                onClick={() => handleGoalSelect(goalItem.name)}
                                                className={`items-center rounded-lg flex justify-between px-4 py-2 border text-xl mb-4 w-72 ${goal === goalItem.name
                                                    ? 'bg-teal-600 border-teal-500'
                                                    : 'bg-neutral-950 border-neutral-800 hover:bg-slate-700'
                                                    }`}
                                            >
                                                <span>{goalItem.name}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 640 512">
                                                    <path fill="#ffffff" d={goalItem.icon} />
                                                </svg>
                                            </button>
                                        ))}
                                        <Link to="Login" >
                                            <button
                                                type="submit"
                                                className="mt-6 ml-20 px-6 py-3 text-lg  border font-semibold bg-neutral-950 border-neutral-800 hover:bg-teal-600 rounded-lg"
                                            // onClick={handleSubmit}

                                            >
                                                Submit
                                            </button>
                                        </Link>
                                    </form>
                                </div>
                            </BackgroundLines>
                        </div>
                    </SplideSlide>
                </Splide>
            </form>
        </div>
    );
};

export default Carousel;