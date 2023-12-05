import React from "react";
import medicalIcon_01 from "../assets/images/icon_01.png";
import medicalIcon_02 from "../assets/images/icon_02.png";
import medicalIcon_03 from "../assets/images/icon_03.png";
import { IoArrowForwardOutline } from "react-icons/io5";

function MedicalServices() {
    return (
        <div className="my-5">
            {/* medical services title */}
            <section className="text-center">
                <h2 className="font-semibold text-4xl">
                    Providing the best medical services
                </h2>
                <p className="text-sm font-semibold text-zinc-500 py-2">
                    World class care for everyone.Our health system offers unmatched,expert
                    health care.
                </p>
            </section>
            {/* medical services card */}
            <div className="flex justify-between items-center gap-5 px-20 my-5">
                {/* #1: find a doctor */}
                <div className="flex flex-col justify-center items-center gap-2 py-3 border border-white hover:border-zinc-200 hover:shadow-md rounded-md transition-all duration-200">
                    {/* card image */}
                    <img src={medicalIcon_01} alt="Doctor Image" className="w-auto h-auto" />
                    {/* card title */}
                    <h4 className="text-2xl font-semibold">Find a Doctor</h4>
                    {/* card description */}
                    <p className="text-center text-sm font-semibold text-zinc-500 w-8/12">
                        World class care for everyone.Our health system offers
                        unmatched,expert health care.
                    </p>
                    {/* card icon */}
                    <span className="p-2 my-2 text-2xl rounded-full border-2 border-zinc-500 text-zinc-500 hover:bg-primaryColor hover:text-white hover:border-white transition-all duration-150 cursor-pointer">
                        <IoArrowForwardOutline />
                    </span>
                </div>
                {/* #2: find a location */}
                <div className="flex flex-col justify-center items-center gap-2 py-3 border border-white hover:border-zinc-200 hover:shadow-md rounded-md transition-all duration-200">
                    {/* card image */}
                    <img
                        src={medicalIcon_02}
                        alt="Location Image"
                        className="w-auto h-auto"
                    />
                    {/* card title */}
                    <h4 className="text-2xl font-semibold">Find a Location</h4>
                    {/* card description */}
                    <p className="text-center text-sm font-semibold text-zinc-500 w-8/12">
                        World class care for everyone.Our health system offers
                        unmatched,expert health care.
                    </p>
                    {/* card icon */}
                    <span className="p-2 my-2 text-2xl rounded-full border-2 border-zinc-500 text-zinc-500 hover:bg-primaryColor hover:text-white hover:border-white transition-all duration-150 cursor-pointer">
                        <IoArrowForwardOutline />
                    </span>
                </div>
                {/* #3: book appointment */}
                <div className="flex flex-col justify-center items-center gap-2 py-3 border border-white hover:border-zinc-200 hover:shadow-md rounded-md transition-all duration-200">
                    {/* card image */}
                    <img src={medicalIcon_03} alt="Booking Image" className="w-auto h-auto" />
                    {/* card title */}
                    <h4 className="text-2xl font-semibold">Book Appointment</h4>
                    {/* card description */}
                    <p className="text-center text-sm font-semibold text-zinc-500 w-8/12">
                        World class care for everyone.Our health system offers
                        unmatched,expert health care.
                    </p>
                    {/* card icon */}
                    <span className="p-2 my-2 text-2xl rounded-full border-2 border-zinc-500 text-zinc-500 hover:bg-primaryColor hover:text-white hover:border-white transition-all duration-150 cursor-pointer">
                        <IoArrowForwardOutline />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default MedicalServices;
