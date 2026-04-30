"use client"

import Flowlist from "./Flowlist";


function Page() {
    const faqItems = [
        {
            id: 1,
            title: 'What is React Vibe?',
            description: 'React Vibe is a collection of production-ready React components designed to help developers ship high-quality, interactive user interfaces faster without spending time building everything from scratch.'
        },
        {
            id: 2,
            title: 'How is React Vibe different from other UI libraries?',
            description: 'Unlike traditional UI libraries that provide static components, React Vibe focuses on delivering components with built-in animations and polished interactions, making them feel closer to final product UI.'
        },
        {
            id: 3,
            title: 'Do I need to install any package to use React Vibe?',
            description: 'No, React Vibe does not require a dedicated package installation. You can directly copy and use components, as long as your project includes required dependencies like Framer Motion.'
        },
        {
            id: 4,
            title: 'Is React Vibe beginner-friendly?',
            description: 'React Vibe is best suited for developers who already understand React basics. It is designed to help you move faster, not to teach core concepts from scratch.'
        },
        {
            id: 5,
            title: 'Can I customize the components?',
            description: 'Yes, all components are fully customizable since you are working with real code. You can modify styles, structure, and behavior based on your project requirements.'
        },
        {
            id: 6,
            title: 'Is React Vibe suitable for production use?',
            description: 'Yes, React Vibe components are built for real-world applications and can be used in production projects, provided they are properly integrated and tested within your system.'
        },
        {
            id: 7,
            title: 'Does React Vibe work with Next.js?',
            description: 'Yes, React Vibe works seamlessly with Next.js and other modern React frameworks, making it easy to integrate into both client-side and server-rendered applications.'
        },
        {
            id: 8,
            title: 'Will animations affect performance?',
            description: 'Animations are optimized, but performance depends on usage. When applied properly, they enhance user experience, but excessive animations can negatively impact performance.'
        },
        {
            id: 9,
            title: 'Is React Vibe better than building components from scratch?',
            description: 'React Vibe is better for speed and efficiency, allowing you to ship faster. However, building from scratch is more beneficial if your goal is to deeply learn UI development and animation systems.'
        },
        {
            id: 10,
            title: 'Who should use React Vibe?',
            description: 'React Vibe is ideal for SaaS founders, indie hackers, and developers who want to build polished, production-ready interfaces quickly without compromising on quality.'
        }
    ];
    return (

        <div className='border-[0px] border-[#131925] p-4 rounded-[10px] bg-[#fbfbfb] max-w-sm mx-auto'>
            <Flowlist
                items={faqItems}
                onItemSelect={(item, index) => console.log(item, index)}
                showGradients={true}
                enableArrowNavigation={true}
            />
        </div>

    )
}

export default Page