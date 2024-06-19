export interface ISidebarProps {
    isNonMobile: boolean
    drawerWidth: string
    sideBarIsOpen: boolean
    setSideBarIsOpen:(value: boolean) => void
}