import { Bricolage_Grotesque, Handlee, JetBrains_Mono, Manrope } from "next/font/google";

export const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const LinearRevealFont = Bricolage_Grotesque({
    weight: ["400", "500", "600", "700"],
    subsets: ['latin']
});
export const titleFont = Bricolage_Grotesque({
    weight: ["400", "500", "600", "700"],
    subsets: ['latin']
});

export const creditFont = JetBrains_Mono({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})
export const tablePropsHeading = JetBrains_Mono({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})
export const tableItems = JetBrains_Mono({
    weight: ["300","400", "500", "600", "700"],
    subsets: ["latin"],
})

export const stepsFont = JetBrains_Mono({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

export const comment = Handlee({
    weight: "400",
    subsets: ["latin"],
});

