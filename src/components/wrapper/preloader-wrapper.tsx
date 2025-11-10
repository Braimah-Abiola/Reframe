'use client'

import { usePreloader } from '@/hooks/usePreloader'
import React from 'react'
import Preloader from '../common/preloader'

interface PreloaderWrapperProps {
    children: React.ReactNode
    duration?: number
}

const PreloaderWrapper: React.FC<PreloaderWrapperProps> = ({
    children,
    duration = 3000
}) => {
    const { isLoading, completePreloader } = usePreloader({
        duration,
        autoStart: true
    })

    return (
        <>
            {isLoading && (
                <Preloader
                    onComplete={completePreloader}
                    duration={duration}
                />
            )}
            <div
                className={`transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-100'
                    }`}
                style={{ willChange: 'opacity' }}
            >
                {children}
            </div>
        </>
    )
}

export default PreloaderWrapper
