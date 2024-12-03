import React from 'react'
import { SessionProvider } from 'next-auth/react'
import UploadImageButton from './uploadImageButton'

const UploadImageButtonWithProvider = () => {
    return (
        <SessionProvider>
            <UploadImageButton />
        </SessionProvider>
    )
}

export default UploadImageButtonWithProvider