"use client";
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Folder, FileCode, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import LinearReveal from "@/components/LinearReveal";
import { Bricolage_Grotesque } from "next/font/google";

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700', 
    subsets: ['vietnamese']
});


function MotionDropdownCode() {
    // Folder & File Tree
    const fileTree = {
        Components: [
            { name: "Page.tsx", path: "/Components/MotionDropdown/Page.tsx" },
            { name: "Dropdown.tsx", path: "/Components/MotionDropdown/Dropdown.tsx" },
        ],
    };

    const [isOpen, setIsOpen] = useState(true);
    const [code, setCode] = useState("");
    const [activeFile, setActiveFile] = useState<null | { name: string; path: string }>(null);

    // Fetch code when a file is selected
    useEffect(() => {
        if (!activeFile) return;
        fetch(activeFile.path)
            .then((res) => res.text())
            .then(setCode);
    }, [activeFile]);

    const handleCopy = async () => {
        if (!activeFile) {
            toast.error("No file selected!");
            return;
        }

        try {
            const res = await fetch(activeFile.path);
            const text = await res.text();
            await navigator.clipboard.writeText(text);
            toast.success("Copied!");
        } catch {
            toast.error("Failed to copy!");
        }
    };

    return (
        <div>
            <LinearReveal
                className={`${LinearRevealFont.className} text-4xl mb-4`}
                text='Step 1'
            />

            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{
                    once: true,
                    amount: 0.2, // Trigger when 20% visible
                    margin: "50px"
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                    delay: 0.3
                }}

            >
                <div className="flex bg-[#1e1e1e] rounded-lg overflow-hidden border border-[#2d2d2d] shadow-lg">
                    {/* Sidebar */}
                    <div className="w-64 bg-[#252526] border-r border-[#333] text-gray-300 p-2 text-sm">

                        {Object.entries(fileTree).map(([folderName, files]) => (
                            <div key={folderName}>
                                <motion.div layout>

                                    <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between gap-2 px-2 py-1 text-gray-400 hover:bg-[#2f2f35] rounded cursor-pointer">
                                        <div className="flex items-center gap-1">
                                            <Folder size={15} /> <span>{folderName}</span>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 0 : -90 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="h-4 w-4" />
                                        </motion.div>

                                    </div>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                        className="overflow-hidden ml-0"
                                    >
                                        <div className="ml-4">
                                            {files.map((file) => (
                                                <div
                                                    key={file.name}
                                                    onClick={() => setActiveFile(file)}
                                                    className={`flex items-center gap-2 px-2 py-1.5 cursor-pointer rounded ${activeFile?.name === file.name
                                                        ? "bg-[#37373d]"
                                                        : "hover:bg-[#2f2f35]"
                                                        }`}
                                                >
                                                    <FileCode size={14} />
                                                    <span>{file.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>

                            </div>
                        ))}
                    </div>

                    {/* Editor Section */}
                    <div className="flex-1 relative">
                        {activeFile ? (
                            <>
                                {/* Header Bar */}
                                <div className="flex items-center justify-between bg-[#2d2d2d] px-3 py-1.5 text-gray-300 border-b border-[#3c3c3c] text-sm">
                                    <span>{activeFile.name}</span>
                                    <button
                                        onClick={handleCopy}
                                        className="text-xs bg-[#3c3c3c] px-2 py-0.5 rounded hover:bg-[#4d4d4d]"
                                    >
                                        Copy
                                    </button>
                                </div>

                                {/* Monaco Editor */}
                                <Editor
                                    height="500px"
                                    defaultLanguage="typescript"
                                    value={code}
                                    theme="vs-dark"
                                    options={{
                                        readOnly: true,
                                        minimap: { enabled: false },
                                        fontSize: 14,
                                        scrollBeyondLastLine: false,
                                    }}
                                />
                            </>
                        ) : (
                            <div className="h-[500px] flex items-center justify-center text-gray-500 text-sm">
                                Select a file to view its code
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>

        </div>
    );
}

export default MotionDropdownCode;
