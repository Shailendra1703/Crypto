import Banner from "./Banner";
import Cards from "./Cards";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";

import React from "react";
function Home() {
return(
    <>
    <Navbar />
<Hero />
<Banner />
<Newsletter />
<Cards />
<Footer />
</>
)
}
export default Home;