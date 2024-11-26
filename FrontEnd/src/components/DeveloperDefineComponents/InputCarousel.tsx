// // import { Splide, SplideSlide, SplideProps } from '@splidejs/react-splide';
// // import { useState } from 'react';
// // import { BackgroundLines } from '../AceternityComponents/support/background-lines';
// // import { Input } from '../AceternityComponents/support/input';

// // const Carousel = () => {
// //     const [goal, setGoal] = useState<string | null>(null); // To store the selected goal
// //     const [formData, setFormData] = useState<any>({}); // To store the entire form data

// //     const options: SplideProps['options'] = {
// //         perPage: 1,
// //         gap: '1rem',
// //         arrows: true,
// //         classes: {
// //             arrows: 'splide__arrows custom-arrows',
// //             arrow: 'splide__arrow custom-arrow',
// //             prev: 'splide__arrow--prev custom-prev',
// //             next: 'splide__arrow--next custom-next',
// //         },
// //     };

    // const handleGoalSelect = (selectedGoal: string) => {
    //     setGoal(selectedGoal);
    // };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();

    //     const data = new FormData(e.currentTarget as HTMLFormElement);
    //     const formValues: Record<string, string> = {};
    //     data.forEach((value, key) => {
    //         formValues[key] = value.toString();
    //     });

    //     // Add the selected goal to the form data
    //     formValues['goal'] = goal || '';

    //     console.log('Submitted Form Data:', formValues);
    //     alert('Form submitted successfully!');
// //     };

// //     return (
// //         <div className="h-screen w-full text-white">
// //             <form onSubmit={handleSubmit}>
// //                 <Splide options={options}>
// //                     {/* Existing slides */}
                    // <SplideSlide>
                    //     <div className="relative h-full w-full flex flex-col items-center justify-center">
                    //         <BackgroundLines>
                    //             <div className="h-fit w-fit flex flex-col justify-center z-50 items-center">
                    //                 <div className="font-bold relative z-10 text-3xl md:text-6xl mb-16 md:mb-28 text-center">GOAL</div>
                    //                 <h1 className="text-white text-2xl md:text-4xl mb-10 text-center">What is your primary goal?</h1>
                                    
                    //                 {['Gaining Weight', 'Losing Weight', 'Healthy Nutrition'].map((option, index) => (
                    //                     <button
                    //                         type="button"
                    //                         key={index}
                    //                         onClick={() => handleGoalSelect(option)}
                    //                         className={`items-center rounded-lg flex justify-between px-4 py-2 border text-xl mb-4 w-72 ${
                    //                             goal === option
                    //                                 ? 'bg-teal-600 border-teal-500'
                    //                                 : 'bg-neutral-950 border-neutral-800 hover:bg-slate-700'
                    //                         }`}
                    //                     >
                    //                         <span>{option}</span>
                    //                         <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
                    //                             <path
                    //                                 fill="#ffffff"
                    //                                 d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-56.2 0zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z"
                    //                             />
                    //                         </svg>
                    //                     </button>
                    //                 ))}

                    //                 <button
                    //                     type="submit"
                    //                     className="mt-6 px-6 py-3 text-lg font-semibold bg-teal-600 hover:bg-teal-700 rounded-lg"
                    //                 >
                    //                     Submit
                    //                 </button>
                    //             </div>
                    //         </BackgroundLines>
                    //     </div>
                    // </SplideSlide>
// //                 </Splide>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Carousel;

// // <div className=''><svg xmlns="http://www.w3.org/2000/svg" className='relative -right-5' height="32" width="32" viewBox="0 0 512 512"><path fill="#ffffff" d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-56.2 0zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z" /></svg></div>
// //                                         <div><svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#ffffff" d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-56.2 0zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z" /></svg></div>
// //                                         <div><svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#fafafa" d="M224 112c-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80l16 0c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80l-16 0zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z" /></svg></div>
// //                                         <div><svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 640 512"><path fill="#f7f7f8" d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z" /></svg></div>










// import React from 'react';

// const svgs = [
//   {
//     id: 1,
//     name: "Gaining Weight & Losing Weight",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" className="relative -right-5" height="32" width="32" viewBox="0 0 512 512">
//         <path
//           fill="#ffffff"
//           d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-56.2 0zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 2,
//     name: "Healthy Nutrition",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512">
//         <path
//           fill="#fafafa"
//           d="M224 112c-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80l16 0c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80l-16 0zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 3,
//     name: "Muscle Gain",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 640 512">
//         <path
//           fill="#f7f7f8"
//           d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"
//         />
//       </svg>
//     ),
//   },
// ];

// const SVGButtons = () => {
//   return (
//     <div className="flex flex-col items-center gap-4">
//       {svgs.map((item) => (
//         <button
//           key={item.id}
//           className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600"
//         >
//           {item.icon}
//           <span>{item.name}</span>
//         </button>
//       ))}
//     </div>
//   );
// };

// export default SVGButtons;

