import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { featured } from "../constant/data";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Featured = () => {
    return (
        <section className = "max-padd-container py-16 xl:pt-32 xl:pb-24" id = "featured">
            <div className = "mx-auto">
                <motion.div variants = {fadeIn("right", 1)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "flex items-end justify-end pt-12">
                    <h4 className = "flex flex-col items-end capitalize text-4xl leading-none font-ace">
                        Encuentra <span className = "medium-16">tu estilo</span>
                    </h4>
                </motion.div>
                <motion.div variants = {fadeIn("left", 1)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "">
                    <Swiper breakpoints = {{ 390: { slidesPerView: 1, spaceBetween: 20 }, 640: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 40 }, 1440: { slidesPerView: 4, spaceBetween: 40 } }} pagination = {{ clickable: true }} modules = {[Pagination]} className = "h-[440px] mt-8">
                        {
                            featured.map((feature, i) => (
                                <SwiperSlide key = {i} className = "pt-2">
                                    <div className = "px-10 py-6 rounded-xl shadow-xl hover-lift" style = {{ backgroundColor: feature.bgColor }}>
                                        <div className = "flex items-end justify-end text-white bold-24">
                                            0{i + 1}
                                        </div>
                                        <div className = "mb-4">
                                            <img src = {feature.shoe} alt = {feature.title} className = "w-[22rem] h-auto rounded-3xl" />
                                        </div>
                                        <div className = "flexBetween">
                                            <div className = "text-white">
                                                <h4 className = "medium-15">
                                                    {feature.title}
                                                </h4>
                                                <p className = "medium-20 !text-white">
                                                    <span className = "regular-14">S/.</span> {feature.price}
                                                </p>
                                            </div>
                                            <a href = "/" className = "flexCenter text-white bg-black/10 rounded-full regular-32 w-10 h-10 pb-1">+</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}

export default Featured;