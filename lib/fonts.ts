
import localFont from "next/font/local";

// Manrope
export const manrope = localFont({
    src: "./fonts/Manrope-Variable.ttf",
    weight: "200 800",
    display: "swap",
});

// Bricolage Grotesque
const bricolageGrotesque = localFont({
    src: [
        {
            path: "./fonts/BricolageGrotesque_24pt-Regular.ttf",
            weight: "400",
        },
        {
            path: "./fonts/BricolageGrotesque_24pt-Medium.ttf",
            weight: "500",
        },
        {
            path: "./fonts/BricolageGrotesque_24pt-SemiBold.ttf",
            weight: "600",
        },
        {
            path: "./fonts/BricolageGrotesque_24pt-Bold.ttf",
            weight: "700",
        },
    ],
    display: "swap",
});

export const LinearRevealFont = bricolageGrotesque;
export const titleFont = bricolageGrotesque;

// JetBrains Mono
const jetbrainsMono = localFont({
    src: "./fonts/JetBrainsMono-Variable.ttf",
    weight: "100 800",
    display: "swap",
});

export const creditFont = jetbrainsMono;
export const tablePropsHeading = jetbrainsMono;
export const tableItems = jetbrainsMono;
export const stepsFont = jetbrainsMono;

// Handlee
export const comment = localFont({
    src: "./fonts/Handlee-Regular.ttf",
    weight: "400",
    display: "swap",
});
