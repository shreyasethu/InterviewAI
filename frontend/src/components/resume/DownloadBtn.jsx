import React from 'react'
import { FiDownload } from 'react-icons/fi'
import { showDemoBlocked } from '../../utils/demoBlock'
function DownloadBtn({ docRef, user, setUser }) {

    const handleDownload = () => {
        showDemoBlocked()
    }
    return (
        <button onClick={handleDownload} className='flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-xs text-white'>
            <FiDownload />
            Download PDF

        </button>
    )
}

export default DownloadBtn
