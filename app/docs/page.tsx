"use client"

import LinearReveal from '@/components/LinearReveal';
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import React from 'react'

const LinearRevealHeadingFont = Bricolage_Grotesque({
  weight: '600',
  subsets: ['vietnamese']
});

const LinearRevealParaFont = JetBrains_Mono({
  weight: "200",
  subsets: ["latin"],
})

const LinearRevealSubHeadingFont = JetBrains_Mono({
  weight: "600",
  subsets: ["latin"],
})

import { motion } from "framer-motion"

function DocsPage() {
  return (
    <div className='max-w-4xl xl:ml-24 px-3 pb-52'>
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{
          once: true,
          amount: 0.2,
          margin: "50px"
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2
        }}
      >

        {/* INTRO */}
        <div>
          <LinearReveal
            as={'h1'}
            className={`${LinearRevealHeadingFont.className} text-[50px] pb-5`}
            text='React Vibe'
          />

          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`Motion-first React components you copy–paste. Production-ready, fully animated, and easy to drop into any project.

ReactVibe isn't a traditional component library. There's no installation, no package imports, and no bundle weight to worry about.

Instead, ReactVibe gives you the actual component code — clean, animation-ready, and built to integrate directly into your codebase. Copy it, paste it, customize it, ship it.`}
          </p>
        </div>

        {/* WHY IT EXISTS */}
        <div>
          <LinearReveal
            as={'h2'}
            className={`${LinearRevealHeadingFont.className} text-4xl py-10`}
            text='Why It Exists'
          />

          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`Most UI libraries fall apart the moment you try to customize anything.

Animations break, styles fight you, and you end up wrapping component after component just to make layouts behave.

ReactVibe solves this by removing the library entirely.

You get real component code — clean, readable, and yours from the start. No wrappers. No hidden logic. No “magic configuration”. Just components that fit naturally into your project.`}
          </p>
        </div>

        {/* CORE PRINCIPLES */}
        <div>
          <LinearReveal
            as={'h2'}
            className={`${LinearRevealHeadingFont.className} text-4xl pt-10`}
            text='Core Principles'
          />

          {/* 1 */}
          <LinearReveal
            as={'h3'}
            className={`${LinearRevealSubHeadingFont.className} text-xl py-3 pt-5 text-[#aaa]`}
            text='1. No Installation'
          />

          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`ReactVibe doesn't live in NPM. There's nothing to install and nothing to configure.

Every component is standalone. Copy it, paste it, and you're done.

If a component uses Framer Motion or Three.js, you install those directly — not ReactVibe.`}
          </p>

          {/* 2 */}
          <LinearReveal
            as={'h3'}
            className={`${LinearRevealSubHeadingFont.className} text-xl py-3 pt-5 text-[#aaa]`}
            text='2. Minimal, Honest Dependencies'
          />

          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`ReactVibe doesn't force you into a framework or design system.

Each component relies only on widely used tools — nothing custom, nothing proprietary, nothing that locks you in.

No bloat. No unexpected abstractions. Just real React components.`}
          </p>
        </div>

        {/* 3 Motion-First */}
        <div>
          <LinearReveal
            as={'h3'}
            className={`${LinearRevealSubHeadingFont.className} text-xl py-3 pt-5 text-[#aaa]`}
            text='3. Motion-First Design'
          />

          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`Every component is built around animation and interaction:

• Text + section reveals  
• Smooth transitions  
• Micro motions  
• Hover effects  
• 3D visuals  

No setup hell. No fragile configs. The animations simply work.`}
          </p>
        </div>

        {/* 4 Own the Code */}
        <div>
          <LinearReveal
            as={'h3'}
            className={`${LinearRevealSubHeadingFont.className} text-xl py-3 pt-5 text-[#aaa]`}
            text='4. You Own the Code'
          />

          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`You don't import ReactVibe — you own ReactVibe.

Since you get raw component code:

• Edit anything  
• Avoid API limitations  
• Keep your design system consistent  
• Let AI tools refactor or extend your components  

It's the opposite of a black-box UI kit.`}
          </p>
        </div>

        {/* 5 Modularity */}
        <div>
          <LinearReveal
            as={'h3'}
            className={`${LinearRevealSubHeadingFont.className} text-xl py-3 pt-5 text-[#aaa]`}
            text='5. Component-Level Modularity'
          />

          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`Pick only what you need:

✔ A single animation  
✔ A hero section  
✔ A CTA  
✔ A 3D effect  

No bundles. No tree-shaking fights. Just focused components that stay under your control.`}
          </p>
        </div>

        {/* IN SHORT */}
        <div>
          <LinearReveal
            as={'h2'}
            className={`${LinearRevealHeadingFont.className} text-4xl pt-10 pb-5`}
            text='In short'
          />

          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`React Vibe is a collection of motion-first React components designed to be copied, pasted, customized, and shipped — without ever installing a UI library.`}
          </p>
        </div>

      </motion.div>
    </div>
  )
}

export default DocsPage
