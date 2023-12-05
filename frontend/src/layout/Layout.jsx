import React from "react";
import Navbar from "../components/Navbar";
import Routers from "../routes/Routers";
import Footer from "../components/Footer";

function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Routers />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
