import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ForSiedebarProvider from "@/components/Docs/ForSiedebarProvider";
import NavbarDashboard from "@/components/Docs/NavbarDashboard";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

function StudioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className='dark:text-[#f2f2f2] dark:bg-gradient-to-r from-[#0b0b0b] from-[33%] to-[#131212]'>
                <div className="sticky top-0 z-50 px-4 py-2 ">
                    <NavbarDashboard />
                </div>
                <div className="flex w-full z-40">
                    {/* Option 1: sticky sidebar */}
                    <div className="overflow-y-auto sticky top-16 h-[calc(100vh-4rem)] hide-scrollbar hidden lg:inline-block">
                        <ForSiedebarProvider />
                    </div>
                    <div className="w-full">
                        <SmoothScrollProvider>
                            {children}
                            <Toaster position="top-center" />
                        </SmoothScrollProvider>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default StudioLayout