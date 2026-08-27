import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from "motion/react"
import { subscribeDemoBlocked } from '../utils/demoBlock'

function DemoBlockedModal() {
    const [open, setOpen] = useState(false)

    useEffect(() => subscribeDemoBlocked(() => setOpen(true)), [])

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md px-4'>

                    <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className='relative w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.25)] p-7 text-center'>

                        <button
                            onClick={() => setOpen(false)}
                            className='absolute top-4 right-4 text-black/30 hover:text-[#0A0A0A] transition-colors'>
                            <FiX size={16} />
                        </button>

                        <p className='text-[#0A0A0A] text-sm font-medium leading-relaxed mt-2'>
                            Sorry backend not deployed currently, you can find the source code on github, ciao :3
                        </p>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default DemoBlockedModal
