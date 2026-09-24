import HeroSection from "./HeroSection";
import OverlayMenuBar from "./OverlayMenuBar";
import OverlayNavBar from "./OverlayNavBar";

function Page() {
    return (
        <div className="bg-[#ffffff] bg-gradient-to-t dark:from-[#141313] dark:to-[#141313] relative w-full">
            <div className="relative bg-[#ffffff] dark:bg-[#080707]">
                <div className='hidden md:inline-block w-full bg-transparent z-50'>
                    <OverlayNavBar />
                </div>
                <div className='md:hidden left-0 w-full z-50'>
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