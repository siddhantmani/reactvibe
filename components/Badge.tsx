function Badge({ children }: { children: React.ReactNode }) {
    return (
        <div className="inline-flex items-center rounded-full text-[10px] font-semibold uppercase tracking-wide">

            <span className="rounded-md border border-neutral-300 bg-neutral-100 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-neutral-700">
                {children}
            </span>
        </div>
    )
}

export default Badge