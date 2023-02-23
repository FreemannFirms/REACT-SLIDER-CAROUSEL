import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const DemoCarousel = () => {
    return (
        <div className='bg-red-500'>
            <Carousel className='text-center'>
                <div className='px-6 py-10 h-full'>
                    <div class="max-w-6xl mx-auto flex h-full w-full items-center mb-8 bg-red-300">
                        <div>
                            <p class="flex items-center text-center text-gray-500 lg:mx-8 border">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis
                                eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus
                                minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
                                fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis
                                quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?
                            </p>

                            <div class="flex flex-col items-center justify-center mt-8">
                                <img class="object-contain rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div class="mt-4 text-center">
                                    <h1 class="font-semibold text-gray-800 dark:text-white">Mia Brown</h1>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Marketer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="legend">HUMAN 1</p>
                </div>
                <div className='px-6 py-10 h-full'>
                    <div class="max-w-6xl mx-auto flex h-full w-full items-center mb-8 bg-red-300">
                        <div>
                            <p class="flex items-center text-center text-gray-500 lg:mx-8 border">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis
                                eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus
                                minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
                                fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis
                                quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?
                            </p>

                            <div class="flex flex-col items-center justify-center mt-8">
                                <img class="object-contain rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div class="mt-4 text-center">
                                    <h1 class="font-semibold text-gray-800 dark:text-white">Mia Brown</h1>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Marketer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="legend">HUMAN 1</p>
                </div>
                <div className='px-6 py-10 h-full'>
                    <div class="max-w-6xl mx-auto flex h-full w-full items-center mb-8 bg-red-300">
                        <div>
                            <p class="flex items-center text-center text-gray-500 lg:mx-8 border">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis
                                eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus
                                minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
                                fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis
                                quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?
                            </p>

                            <div class="flex flex-col items-center justify-center mt-8">
                                <img class="object-contain rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div class="mt-4 text-center">
                                    <h1 class="font-semibold text-gray-800 dark:text-white">Mia Brown</h1>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Marketer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="legend">HUMAN 1</p>
                </div>
            </Carousel>
        </div>
    );
};

export default DemoCarousel