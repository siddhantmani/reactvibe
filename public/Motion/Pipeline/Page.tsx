import Pipeline from "./Pipeline"


function Page() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center">
            <Pipeline
                particleCount={2}
                particleSpeed={3}
                particleSize={2.5}
            />
        </div>
    )
}

export default Page