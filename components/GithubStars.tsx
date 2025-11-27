"use client";

import { useEffect, useState } from "react";
import { IoLogoGithub } from "react-icons/io";

export default function GithubStars() {
    const [stars, setStars] = useState<string>("—");

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch("/api/github/stars", {
                    cache: "no-store", 
                });
                const data = await res.json();

                const formatted =
                    Intl.NumberFormat("en", { notation: "compact" }).format(
                        data.stars
                    );

                setStars(formatted);
            } catch {
                setStars("—");
            }
        }

        load();
    }, []);

    return (
        <a
            href="https://github.com/siddhantmani/reactvibe"
            target="_blank"
            className="flex items-center gap-2 group"
        >
            <IoLogoGithub className="text-xl group-hover:scale-110 transition" />

            <div className="flex items-center gap-1">
                <span className="text-[15px] tracking-wide">{stars}</span>
            </div>
        </a>
    );
}
