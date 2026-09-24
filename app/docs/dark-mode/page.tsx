"use client"

import { Dropdown, DropdownItem, DropdownNestedContainer, DropdownNestedHeading, DropdownNestedItem } from "@/components/Docs/Components/MotionDropdown/Dropdown";
import DarkLightMode from "@/components/Docs/DarkMode/DarkLightMode";
import DarkModeComponentsCode from "@/components/Docs/DarkMode/DarkModeComponentsCode";
import LayoutSetup from "@/components/Docs/DarkMode/LayoutSetup";
import ToggleAnywhere from "@/components/Docs/DarkMode/ToggleAnywhere";
import { useTheme } from "@/components/ThemeProvider";
import { manrope } from "@/lib/fonts";
import React from "react";

function DarkMode() {
    const { setTheme } = useTheme();
    return (
        <div
            className={`${manrope.className} lg:max-w-2xl xl:max-w-5xl 2xl:max-w-7xl mx-auto px-3 md:px-4 pb-20 space-y-14`}
        >
            <section className="space-y-4">
                <div className="space-y-3">
                    <h1 className="font-[600] text-4xl md:text-5xl tracking-[-0.04em] text-black/90 dark:text-white/90">
                        Dark Mode
                    </h1>

                    <p className="text-[13px] md:text-sm leading-6 max-w-2xl text-black/60 dark:text-white/60">
                        A lightweight, dependency-free theme system for
                        React. Add it once to your application and control
                        light or dark mode from anywhere.
                    </p>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                    <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/[0.025] dark:bg-white/[0.035] px-3 py-1.5 text-[11px] font-[500] text-black/60 dark:text-white/60">
                        No dependencies
                    </span>

                    <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/[0.025] dark:bg-white/[0.035] px-3 py-1.5 text-[11px] font-[500] text-black/60 dark:text-white/60">
                        Persistent preference
                    </span>

                    <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/[0.025] dark:bg-white/[0.035] px-3 py-1.5 text-[11px] font-[500] text-black/60 dark:text-white/60">
                        System preference
                    </span>
                </div>
            </section>

            {/* How it works */}
            <section className="space-y-6">
                <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-[0.16em] font-[600] text-black/35 dark:text-white/35">
                        Overview
                    </div>

                    <h2 className="font-[600] text-2xl md:text-3xl tracking-[-0.03em] text-black/90 dark:text-white/90">
                        How it works
                    </h2>

                    <p className="text-[12px] md:text-[13px] leading-6 max-w-2xl text-black/60 dark:text-white/60">
                        The theme provider keeps track of the active theme
                        and synchronizes it with your document. Once it is
                        added to your layout, any client component inside
                        the provider can control the theme.
                    </p>
                </div>

                {/* Flow */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Step 01 */}
                    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.025] p-5">
                        <div className="flex items-center justify-between mb-7">
                            <span className="text-[11px] font-[600] text-black/35 dark:text-white/35">
                                01
                            </span>

                            <div className="h-7 w-7 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center text-[10px] text-black/45 dark:text-white/45">
                                1
                            </div>
                        </div>

                        <h3 className="text-sm font-[600] text-black/85 dark:text-white/85 mb-1.5">
                            Create the provider
                        </h3>

                        <p className="text-[11px] leading-5 text-black/50 dark:text-white/50">
                            Add the theme logic to a reusable
                            <code className="mx-1 text-black/70 dark:text-white/70">
                                ThemeProvider
                            </code>
                            component.
                        </p>
                    </div>

                    {/* Step 02 */}
                    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.025] p-5">
                        <div className="flex items-center justify-between mb-7">
                            <span className="text-[11px] font-[600] text-black/35 dark:text-white/35">
                                02
                            </span>

                            <div className="h-7 w-7 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center text-[10px] text-black/45 dark:text-white/45">
                                2
                            </div>
                        </div>

                        <h3 className="text-sm font-[600] text-black/85 dark:text-white/85 mb-1.5">
                            Wrap your application
                        </h3>

                        <p className="text-[11px] leading-5 text-black/50 dark:text-white/50">
                            Add the provider once inside your
                            <code className="mx-1 text-black/70 dark:text-white/70">
                                layout.tsx
                            </code>
                            file.
                        </p>
                    </div>
                    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.025] p-5">
                        <div className="flex items-center justify-between mb-7">
                            <span className="text-[11px] font-[600] text-black/35 dark:text-white/35">
                                03
                            </span>

                            <div className="h-7 w-7 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center text-[10px] text-black/45 dark:text-white/45">
                                3
                            </div>
                        </div>

                        <h3 className="text-sm font-[600] text-black/85 dark:text-white/85 mb-1.5">
                            Add this line in your <code>globals.css</code>
                        </h3>

                        <code className="text-[11px] leading-5 text-black/50 dark:text-white/50">
                            @custom-variant dark (&:is(.dark *));
                        </code>
                    </div>

                    {/* Step 03 */}
                    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.025] p-5">
                        <div className="flex items-center justify-between mb-7">
                            <span className="text-[11px] font-[600] text-black/35 dark:text-white/35">
                                04
                            </span>

                            <div className="h-7 w-7 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center text-[10px] text-black/45 dark:text-white/45">
                                4
                            </div>
                        </div>

                        <h3 className="text-sm font-[600] text-black/85 dark:text-white/85 mb-1.5">
                            Control it anywhere
                        </h3>

                        <p className="text-[11px] leading-5 text-black/50 dark:text-white/50">
                            Use
                            <code className="mx-1 text-black/70 dark:text-white/70">
                                setTheme()
                            </code>
                            from any component inside the provider.
                        </p>
                    </div>
                </div>
            </section>

            {/* step 1 */}
            <section className="space-y-5">
                <div className="flex gap-4">
                    <div className="shrink-0 pt-1">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black text-[10px] font-[600] text-white dark:bg-white dark:text-black">
                            01
                        </span>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-[600] text-xl md:text-2xl tracking-[-0.025em] text-black/90 dark:text-white/90">
                            Create{" "}
                            <code className="text-[0.85em] font-[500]">
                                ThemeProvider.tsx
                            </code>
                        </h2>

                        <p className="text-[12px] md:text-[13px] leading-6 max-w-2xl text-black/60 dark:text-white/60">
                            Create the provider that manages the active
                            theme, persists the user's preference, and
                            applies the theme class to the document root.
                        </p>
                    </div>
                </div>

                <DarkModeComponentsCode />

                {/* Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
                        <div className="text-[11px] font-[600] text-black/80 dark:text-white/80 mb-1">
                            Theme state
                        </div>

                        <p className="text-[11px] leading-5 text-black/50 dark:text-white/50">
                            Keeps track of whether the application is
                            currently using light or dark mode.
                        </p>
                    </div>

                    <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
                        <div className="text-[11px] font-[600] text-black/80 dark:text-white/80 mb-1">
                            Persistence
                        </div>

                        <p className="text-[11px] leading-5 text-black/50 dark:text-white/50">
                            Stores the selected theme so the preference
                            can be restored when the user returns.
                        </p>
                    </div>

                    <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
                        <div className="text-[11px] font-[600] text-black/80 dark:text-white/80 mb-1">
                            Document class
                        </div>

                        <p className="text-[11px] leading-5 text-black/50 dark:text-white/50">
                            Automatically adds or removes the{" "}
                            <code className="text-black/70 dark:text-white/70">
                                dark
                            </code>{" "}
                            class when the theme changes.
                        </p>
                    </div>

                    <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
                        <div className="text-[11px] font-[600] text-black/80 dark:text-white/80 mb-1">
                            System preference
                        </div>

                        <p className="text-[11px] leading-5 text-black/50 dark:text-white/50">
                            The provider can fall back to the user's
                            operating-system theme when no preference is
                            stored.
                        </p>
                    </div>
                </div>
            </section>

            {/* step 2 */}
            <section className="space-y-5">
                <div className="flex gap-4">
                    <div className="shrink-0 pt-1">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black text-[10px] font-[600] text-white dark:bg-white dark:text-black">
                            02
                        </span>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-[600] text-xl md:text-2xl tracking-[-0.025em] text-black/90 dark:text-white/90">
                            Add it to your{" "}
                            <code className="text-[0.85em] font-[500]">
                                layout.tsx
                            </code>
                        </h2>

                        <p className="text-[12px] md:text-[13px] leading-6 max-w-2xl text-black/60 dark:text-white/60">
                            Wrap your application with{" "}
                            <code className="text-black/80 dark:text-white/80">
                                ThemeProvider
                            </code>{" "}
                            once. Every component inside it can then access
                            and control the current theme.
                        </p>
                    </div>
                </div>

                <LayoutSetup />

                <div className="flex items-start gap-3 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.025] dark:bg-white/[0.025] px-4 py-3.5">
                    <div className="mt-0.5 shrink-0 text-[11px] font-[600] text-black/50 dark:text-white/50">
                        Note
                    </div>

                    <p className="text-[11px] leading-5 text-black/55 dark:text-white/55">
                        You only need to add the provider once. There is no
                        need to initialize the theme again on individual
                        pages or components.
                    </p>
                </div>
            </section>

            {/* step 3 */}
            <section className="space-y-5">
                <div className="flex gap-4">
                    <div className="shrink-0 pt-1">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black text-[10px] font-[600] text-white dark:bg-white dark:text-black">
                            03
                        </span>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-[600] text-xl md:text-2xl tracking-[-0.025em] text-black/90 dark:text-white/90">
                            Add it to your{" "}
                            <code className="text-[0.85em] font-[500]">
                                globals.tsx
                            </code>
                        </h2>

                        <p className="text-[12px] md:text-[13px] leading-6 max-w-2xl text-black/60 dark:text-white/60">
                            Add this custom-variant into your globals file
                        </p>
                    </div>
                </div>
                <div className="bg-[#181515] text-white p-2 rounded-xl w-full">
                    <code>
                        @custom-variant dark (&:is(.dark *));
                    </code>
                </div>

            </section>

            {/* step 4 */}
            <section className="space-y-5">
                <div className="flex gap-4">
                    <div className="shrink-0 pt-1">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black text-[10px] font-[600] text-white dark:bg-white dark:text-black">
                            04
                        </span>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-[600] text-xl md:text-2xl tracking-[-0.025em] text-black/90 dark:text-white/90">
                            Control the theme from anywhere
                        </h2>

                        <p className="text-[12px] md:text-[13px] leading-6 max-w-2xl text-black/60 dark:text-white/60">
                            Access the theme API from any client component
                            inside the provider. Set a specific theme or
                            build your own toggle UI.
                        </p>
                    </div>
                </div>

                <ToggleAnywhere />
            </section>

            {/* live example */}
            <section className="space-y-5">
                <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-[0.16em] font-[600] text-black/35 dark:text-white/35">
                        Interactive example
                    </div>

                    <h2 className="font-[600] text-2xl md:text-3xl tracking-[-0.03em] text-black/90 dark:text-white/90">
                        Build your own theme control
                    </h2>

                    <p className="text-[12px] md:text-[13px] leading-6 max-w-2xl text-black/60 dark:text-white/60">
                        The theme API is intentionally small. Use{" "}
                        <code className="text-black/80 dark:text-white/80">
                            setTheme()
                        </code>{" "}
                        to build a switcher that matches your application's
                        design.
                    </p>
                </div>

                <div className="rounded-2xl border flex flex-col gap-20 2xl:flex-row border-black/10 dark:border-white/10 bg-black/[0.015] dark:bg-white/[0.02] p-5 md:p-8">
                    <div className="mb-6 w-full max-w-xs">
                        <Dropdown
                            forceDirection="down"
                            menuClassName="bg-white dark:bg-[#0c0c0c] text-black border-white/10"
                            itemClassName="text-black dark:text-white"
                            trigger={
                                <div className="flex items-center justify-between w-full dark:bg-[#0c0c0c] gap-10 bg-white border border-black/10 dark:border-white/10 px-2 py-2 rounded-md">
                                    Theme
                                </div>
                            }
                        >

                            <DropdownItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownItem>

                            <DropdownItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownItem>

                        </Dropdown>
                    </div>

                    <div className="w-full">
                        <DarkLightMode />
                    </div>
                </div>
            </section>

            <section className="space-y-5">
                <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-[0.16em] font-[600] text-black/35 dark:text-white/35">
                        Reference
                    </div>

                    <h2 className="font-[600] text-2xl md:text-3xl tracking-[-0.03em] text-black/90 dark:text-white/90">
                        Theme API
                    </h2>

                    <p className="text-[12px] md:text-[13px] leading-6 max-w-2xl text-black/60 dark:text-white/60">
                        The provider exposes a small API for reading and
                        changing the active theme.
                    </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
                    <div className="grid grid-cols-[1fr_1.5fr] bg-black/[0.025] dark:bg-white/[0.025] border-b border-black/10 dark:border-white/10">
                        <div className="px-4 py-3 text-[10px] uppercase tracking-[0.12em] font-[600] text-black/40 dark:text-white/40">
                            API
                        </div>

                        <div className="px-4 py-3 text-[10px] uppercase tracking-[0.12em] font-[600] text-black/40 dark:text-white/40">
                            Description
                        </div>
                    </div>

                    <div className="grid grid-cols-[1fr_1.5fr] border-b border-black/10 dark:border-white/10">
                        <div className="px-4 py-4">
                            <code className="text-[11px] text-black/80 dark:text-white/80">
                                theme
                            </code>
                        </div>

                        <div className="px-4 py-4 text-[11px] leading-5 text-black/55 dark:text-white/55">
                            Returns the currently active theme.
                        </div>
                    </div>

                    <div className="grid grid-cols-[1fr_1.5fr] border-b border-black/10 dark:border-white/10">
                        <div className="px-4 py-4">
                            <code className="text-[11px] text-black/80 dark:text-white/80">
                                setTheme("dark")
                            </code>
                        </div>

                        <div className="px-4 py-4 text-[11px] leading-5 text-black/55 dark:text-white/55">
                            Switches the application to dark mode.
                        </div>
                    </div>

                    <div className="grid grid-cols-[1fr_1.5fr]">
                        <div className="px-4 py-4">
                            <code className="text-[11px] text-black/80 dark:text-white/80">
                                setTheme("light")
                            </code>
                        </div>

                        <div className="px-4 py-4 text-[11px] leading-5 text-black/55 dark:text-white/55">
                            Switches the application to light mode.
                        </div>
                    </div>
                </div>
            </section>

            {/* tailwind use case */}
            <section className="space-y-5">
                <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-[0.16em] font-[600] text-black/35 dark:text-white/35">
                        Usage
                    </div>

                    <h2 className="font-[600] text-2xl md:text-3xl tracking-[-0.03em] text-black/90 dark:text-white/90">
                        Use dark mode in your components
                    </h2>

                    <p className="text-[12px] md:text-[13px] leading-6 max-w-2xl text-black/60 dark:text-white/60">
                        Once the provider is configured, you can use
                        Tailwind's standard{" "}
                        <code className="text-black/80 dark:text-white/80">
                            dark:
                        </code>{" "}
                        variant normally.
                    </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-[#1e1e1e]">
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
                        <span className="text-[10px] text-white/45">
                            Example.tsx
                        </span>

                        <span className="text-[10px] text-white/35">
                            Tailwind
                        </span>
                    </div>

                    <pre className="overflow-x-auto p-5 text-[11px] leading-6 text-white/75">
                        <code>{`<div
    className="
        bg-white
        text-black
        dark:bg-black
        dark:text-white
    "
>
    Hello, world.
</div>`}
                        </code>
                    </pre>
                </div>

                <div className="rounded-xl border border-black/10 dark:border-white/10 px-4 py-4">
                    <p className="text-[11px] leading-5 text-black/55 dark:text-white/55">
                        The provider does not control your component styles.
                        It simply manages the theme state and document
                        class, allowing your existing{" "}
                        <code className="text-black/75 dark:text-white/75">
                            dark:
                        </code>{" "}
                        styles to respond automatically.
                    </p>
                </div>
            </section>

            {/* final */}
            <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.025] dark:bg-white/[0.025] p-6 md:p-8">
                <div className="max-w-2xl">
                    <div className="text-[10px] uppercase tracking-[0.16em] font-[600] text-black/35 dark:text-white/35 mb-3">
                        Done
                    </div>

                    <h2 className="font-[600] text-xl md:text-2xl tracking-[-0.025em] text-black/90 dark:text-white/90">
                        That's all you need.
                    </h2>

                    <p className="mt-2 text-[12px] md:text-[13px] leading-6 text-black/55 dark:text-white/55">
                        Create the provider, add it to your layout, and
                        control the theme wherever you need it. No external
                        theme library is required.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default DarkMode;