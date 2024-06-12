'use client'

import { RenameModal } from "@/components/modal/rename-modal";
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    // avoid error hydration and make this function render on client side
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <RenameModal />
        </>
    );
};
