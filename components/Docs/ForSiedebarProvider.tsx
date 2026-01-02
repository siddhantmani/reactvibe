    "use client"

    import React from 'react'
    import { SidebarProvider } from '../ui/sidebar'
    import Sidebar from './Sidebar'

    function ForSiedebarProvider() {
        return (
            <div>
                <SidebarProvider className="w-[340px] p-3">
                    <Sidebar onItemClick={() => { }} />
                </SidebarProvider>
            </div>
        )
    }

    export default ForSiedebarProvider