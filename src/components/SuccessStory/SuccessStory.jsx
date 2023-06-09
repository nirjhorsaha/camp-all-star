import React from 'react';

const SuccessStory = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container  py-10 mx-auto">
                <div class="flex flex-col text-center w-full my-10">
                    {/* <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2> */}
                    <h1 class="text-center text-3xl font-bold text-orange-500 mt-0">About Our Success Story</h1>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-slate-200 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 class="text-gray-900 text-lg title-font font-medium">5 Years of Great Success</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">We are thrilled to celebrate five years of great success at Summer Camp School! Over the past half-decade, we have been privileged to inspire and empower countless students in their pursuit of knowledge, skills, and personal growth</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-slate-200 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <h2 class="text-gray-900 text-lg title-font font-medium">10k Certified Learners</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">Through our expertly designed courses, dedicated instructors, and immersive learning experiences, we have successfully guided and supported thousands of learners on their educational journeys. </p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-slate-200 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <h2 class="text-gray-900 text-lg title-font font-medium">Well Designed Courses</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">From photography fundamentals to advanced editing techniques, our courses are designed to foster creativity, promote critical thinking, and inspire a lifelong love for learning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStory;