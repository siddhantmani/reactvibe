import HeroSection from "./HeroSection";
import OverlayMenuBar from "./OverlayMenuBar";
import OverlayNavBar from "./OverlayNavBar";

function Page() {
    return (
        <div className="bg-gradient-to-t from-[#141313] to-[#141313] relative ">
            <div className="">
                <div className='hidden md:inline-block w-full absolute top-0 z-50'>
                    <OverlayNavBar />
                </div>
                <div className='md:hidden fixed top-0 left-0 w-full z-50'>
                    <OverlayMenuBar />
                </div>
            </div>
            <div className="">
                <HeroSection />
            </div>
        </div>
    )
}

export default Page