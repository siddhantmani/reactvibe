import React from "react";
import { Moon } from "lucide-react";

function SupportingDarkmode() {
    return (
        <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/50">
            <div className="mb-3 flex items-center gap-2">
                <Moon className="h-4 w-4 text-zinc-900 dark:text-white" />
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                    Dark Mode
                </h3>
            </div>

            <p className="mb-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                This component supports Tailwind CSS{" "}
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-zinc-900 dark:bg-white/5 dark:text-zinc-200">
                    dark:
                </code>{" "}
                variants. To render this component in dark mode, add the{" "}
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-zinc-900 dark:bg-white/5 dark:text-zinc-200">
                    dark
                </code>{" "}
                className to your application's root element (for example, in{" "}
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-zinc-900 dark:bg-white/5 dark:text-zinc-200">
                    app/layout.tsx
                </code>
                ).
            </p>

            <div className="space-y-3">
                <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
                        Using {"<html>"}
                    </p>

                    <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-700 dark:border-white/10 dark:bg-black/40 dark:text-zinc-300">
                        {`<html className="dark">
  ...
</html>`}
                    </pre>
                </div>

                <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
                        Using {"<body>"}
                    </p>

                    <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-700 dark:border-white/10 dark:bg-black/40 dark:text-zinc-300">
                        {`<body className="dark">
  ...
</body>`}
                    </pre>
                </div>
            </div>
        </div>
    );
}

export default SupportingDarkmode;