import { NextResponse } from "next/server";

export async function GET() {
    const repo = "siddhantmani/reactvibe";

    try {
        const res = await fetch(
            `https://api.github.com/repos/${repo}`,
            {
                headers: {
                    "User-Agent": "ReactVibe",
                    "Accept": "application/vnd.github+json",
                },
                next: {
                    revalidate: 3600,
                },
            }
        );

        if (!res.ok) {
            console.error(
                "GitHub API failed:",
                res.status,
                res.statusText
            );

            return NextResponse.json(
                {
                    stars: 0,
                    cached: true,
                },
                {
                    status: 200,
                }
            );
        }

        const data = await res.json();

        return NextResponse.json({
            stars: data.stargazers_count || 0,
            cached: false,
        });
    } catch (err) {
        console.error("GitHub API crashed:", err);

        return NextResponse.json(
            {
                stars: 0,
                cached: true,
            },
            {
                status: 200,
            }
        );
    }
}