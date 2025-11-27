"use client"

import DeskHeader from "@/components/Landing-Page/VibeHeader/DeskHeader";
import VibeHero from "@/components/Landing-Page/VibeHero/VibeHero";
import VibeHeroAnimation from "@/components/Landing-Page/VibeHero/VibeHeroAnimation";
import { Heart } from "lucide-react";

import { motion } from "framer-motion"
import { DM_Serif_Display, Figtree } from "next/font/google";
import Link from "next/link";
import RenderOnRoute from "@/components/RenderOnRoute";


const footerFont = Figtree({
  weight: "500",
  subsets: ["latin"],
})

const AnimatedFont = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  style: "italic"
})

export default function Home() {
  return (
    <div className="overflow-hidden text-white">
      <div>
        <RenderOnRoute path="/" withTransition>
          <VibeHeroAnimation />
        </RenderOnRoute>
      </div>
      <div className="w-full absolute top-0 ">
        <DeskHeader />
        <div className="xl:py-0 py-20">
          <VibeHero />
        </div>
      </div>
      <div className="bg-linear-to-t from-[#000000] to-transparent absolute bottom-0 w-full py-20">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.2, // Trigger when 20% visible
            margin: "50px"
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
            delay: 0.8
          }}

        >
          <footer className=" relative top-12 flex flex-col justify-center items-center space-y-5">
            <div className={`${footerFont.className} flex items-center gap-1 capitalize py-0 text-sm`}>
              <h1>Created by</h1>
              <div>
                <Heart className="h-4 w-5 stroke-[#ffa600] fill-[#ffa600]" />
              </div>
              <h1>by <span className={` ${AnimatedFont.className} px-1 text-[#ffa600] hover:underline hover:text-[#ffffff]`}> <Link href="https://x.com/_siddhantmani" target="_blank"> Siddhant Mani</Link></span></h1>
            </div>
          </footer>
        </motion.div>
      </div>
    </div >
  );
}
