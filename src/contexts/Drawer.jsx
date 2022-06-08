import { createContext, useContext, useEffect, useState } from "react";

const DrawerContext = createContext()
DrawerContext.displayName = 'DrawerContext'

export const useDrawer = ({children}) => useContext(DrawerContext)

const DrawerProvider = ({children}) => {
    const [open, setOpen] = useState(false)

    const openDrawer = () => [
        setOpen(true)
    ]

    const closeDrawer = () => {
        setOpen(false)
    }

    const toggleDrawer = () => {
        setOpen(prev => !prev)
    }

    return (
        <DrawerContext.Provider value={{
            open,
            openDrawer,
            closeDrawer,
            toggleDrawer,
        }}>
            {children}
        </DrawerContext.Provider>
    )
}