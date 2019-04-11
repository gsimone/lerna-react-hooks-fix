import React from 'react'

export default function useHook() {
    React.useEffect(() => {
        console.log("Hook working")
    }, [])
}