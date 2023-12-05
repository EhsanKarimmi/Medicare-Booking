import React from "react";
import Hero from "../components/Hero";
import MedicalServices from "../components/MedicalServices";

function Home() {
    return (
        <>
            {/* hero sections. */}
            <Hero />
            {/* medical services sections. */}
            <MedicalServices />
        </>
    );
}

export default Home;
