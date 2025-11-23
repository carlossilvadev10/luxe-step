import React from "react";
import { stats } from "../constant/data";

const AboutStats = () => {
    return (
        <div className = "grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {
                stats.map((stat, index) => (
                    <div key = {index} className = {`${stat.bg} rounded-xl p-4 text-white shadow-md hover-lift`}>
                        <h4 className = "font-bold text-2xl">
                            {stat.value}
                        </h4>
                        <p className = "uppercase text-[13px] font-bold leading-4 !text-white">
                            {stat.label}
                        </p>
                    </div>
                ))
            }
        </div>
    );
};

export default AboutStats;