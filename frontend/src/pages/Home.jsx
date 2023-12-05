import React from "react";
import { Link } from "react-router-dom";
import heroImage_01 from "../assets/images/hero_img_01.png";
import heroImage_02 from "../assets/images/hero_img_02.png";
import heroImage_03 from "../assets/images/hero_img_03.png";

function Home() {
    return (
        // hero sections.
        <div className="hero_container grid grid-cols-12 gap-20 px-20 py-10">
            {/* hero content */}
            <section className="col-span-5">
                {/* hero title */}
                <h1 className="text-5xl font-bold break-after-column leading-snug">
                    We Help Patients
                    <br />
                    Live a Healthy,
                    <br />
                    Longer Life.
                </h1>
                {/* hero description */}
                <p className="text-sm font-semibold text-zinc-500 py-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque omnis
                    sapiente architecto nesciunt hic cum mollitia et illo sequi neque
                    repellat, dolorum laborum fugiat pariatur quibusdam culpa voluptatibus
                    quisquam.
                </p>
                {/* request button */}
                <Link to="/">
                    <button className="font-medium bg-primaryColor px-4 py-2 rounded-md text-white">
                        Request an Appointment
                    </button>
                </Link>
                {/* hero description #2 : history */}
                <div className=" py-14 flex justify-between items-center">
                    {/* #1: Experience */}
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-5xl font-bold border-b-8 border-yellow-500 rounded-md px-4">
                            30+
                        </h3>
                        <span className="text-xs font-semibold text-zinc-500 py-1">
                            Years Of Experience
                        </span>
                    </div>
                    {/* #2: clinics */}
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-5xl font-bold border-b-8 border-purple-500 rounded-md px-4">
                            20+
                        </h3>
                        <span className="text-xs font-semibold text-zinc-500 py-1">
                            Clinic Location
                        </span>
                    </div>
                    {/* #1: patient */}
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-5xl font-bold border-b-8 border-green-500 rounded-md px-4">
                            100%
                        </h3>
                        <span className="text-xs font-semibold text-zinc-500 py-1">
                            Patient Satisfaction
                        </span>
                    </div>
                </div>
            </section>
            {/* hero doctor images */}
            <section className="col-span-7 flex justify-center items-start gap-5">
                {/* image section #1 */}
                <img src={heroImage_01} alt="Hero Image 01" className="h-full w-auto" />
                {/* image section #2 */}
                <div className="flex flex-col justify-end items-end gap-5 pt-10">
                    <img src={heroImage_02} alt="Hero Image 02" />
                    <img src={heroImage_03} alt="Hero Image 03" />
                </div>
            </section>
        </div>
    );
}

export default Home;
