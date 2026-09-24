import { Bricolage_Grotesque, JetBrains_Mono, Manrope } from "next/font/google";

export const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const LinearRevealFont = Bricolage_Grotesque({
    weight: ["400", "500", "600", "700"],
    subsets: ['vietnamese']
});
export const titleFont = Bricolage_Grotesque({
    weight: ["400", "500", "600", "700"],
    subsets: ['vietnamese']
});

export const creditFont = JetBrains_Mono({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})
export const stepsFont = JetBrains_Mono({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})
