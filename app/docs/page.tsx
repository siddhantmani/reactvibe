"use client"

import LinearReveal from '@/components/LinearReveal';
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import React from 'react'

const LinearRevealHeadingFont = Bricolage_Grotesque({
  weight: '600', // Specify the font weight if needed  
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
          amount: 0.2, // Trigger when 20% visible
          margin: "50px"
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
          delay: 0.2
        }}

      >
        <div>
          <LinearReveal
            as={'h1'}
            className={`${LinearRevealHeadingFont.className} text-[50px] pb-5`}
            text='React Vibe'
          />
          <div>
            <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
              {`Motion-first React components you copy–paste.
Zero dependencies. Zero setup. Zero lock-in.

ReactVibe isn't a traditional component library.
There's no installation, no bundle weight, and no “import from package” experience.

Instead, ReactVibe gives you raw component code; optimized, animation-ready, and built to drop directly into your project. Copy the component, paste it into your codebase, customize it however you want. That's it.
`}
            </p>
          </div>
        </div>

        <div>
          <LinearReveal
            as={'h2'}
            className={`${LinearRevealHeadingFont.className} text-4xl py-10`}
            text='Why It exists'
          />
          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`Most UI libraries fail the second you try to customize anything.

Animations break, styles fight you, and you end up wrapping component after component just to make things fit your layout.

ReactVibe solves this by removing the library completely.

You get actual component code, intentionally clean and dependency-free.
No wrappers. No hidden logic. No "magic configuration".

Just components that belong to your codebase from the start.
`}
          </p>
        </div>

        <div>
          <LinearReveal
            as={'h2'}
            className={`${LinearRevealHeadingFont.className} text-4xl pt-10`}
            text='Core Principles'
          />
          <LinearReveal
            as={'h3'}
            className={`${LinearRevealSubHeadingFont.className} text-xl py-3 pt-5 text-[#aaa]`}
            text='1. Zero Installation'
          />
          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`ReactVibe doesn't live in NPM.
There's nothing to install, nothing to configure.

Every component is standalone; copy it, paste it, use it.

If a component uses Three.js or Framer Motion, install those, not ReactVibe.
`}
          </p>
          <LinearReveal
            as={'h3'}
            className={`${LinearRevealSubHeadingFont.className} text-xl py-3 pt-5 text-[#aaa]`}
            text='2. Zero Dependencies'
          />
          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`ReactVibe doesn't force you into a system.
There's no package that bloats your bundle or hijacks your design system.

Each component is pure React + Tailwind + framer motion, and Three.js logic, nothing else!
`}
          </p>
        </div>

        <div>     
          <LinearReveal
            as={'h3'}
            className={`${LinearRevealSubHeadingFont.className} text-xl py-3 pt-5 text-[#aaa]`}
            text='3. Motion-First Design'
          />
          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`Everything is built around animation:

• Page transitions
• Text reveals
• 3D effects
• Smooth interactions
• Micro motions

No bulky libraries. No setup hell.
The animations just work, out of the box.
`}
          </p>
        </div>

        <div>
          <LinearReveal
            as={'h3'}
            className={`${LinearRevealSubHeadingFont.className} text-xl py-3 pt-5 text-[#aaa]`}
            text='4. Own the Code'
          />
          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`You don't import ReactVibe.

You own ReactVibe.

Since you get full component code:

• You can edit everything
• You never fight API limitations
• Your design system stays consistent
• AI tools can read + modify your components

It’s the opposite of a black-box UI kit.
`}
          </p>
        </div>

        <div>
          <LinearReveal
            as={'h3'}
            className={`${LinearRevealSubHeadingFont.className} text-xl py-3 pt-5 text-[#aaa]`}
            text='5. Component-Level Modularity'
          />
          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`Pick only what you need:

✔ One animation
✔ One section
✔ One effect

No bundles. No tree-shaking fights.
Just single-purpose components you control.
`}
          </p>
        </div>

        <div>
          <LinearReveal
            as={'h2'}
            className={`${LinearRevealHeadingFont.className} text-4xl pt-10 pb-5`}
            text='In short'
          />
          <p className={`${LinearRevealParaFont.className} whitespace-pre-wrap`}>
            {`React Vibe is a collection of motion-rich React components designed to be copied, pasted, customized, and shipped, without ever installing a library.
`}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default DocsPage