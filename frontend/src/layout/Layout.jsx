import React from "react";
import Navbar from "../components/Navbar";
import Routers from "../routes/Routers";
import Footer from "../components/Footer";

function Layout() {
    return (
        <div className="w-10/12 justify-center mx-auto">
            <Navbar />
            <main>
                <Routers />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
