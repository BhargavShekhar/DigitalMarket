'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { poppins } from "../fonts"
import { NavbarSidebar } from "./navbar-sidebar"
import { useState } from "react"
import { MenuIcon } from "lucide-react"


interface NavbarItemsProps {
    href: string,
    children: React.ReactNode,
    isActive: boolean
}

const NavbarItem = ({
    href,
    children,
    isActive
}: NavbarItemsProps) => {
    return (
        <Button
            asChild
            variant={'outline'}
            className={`border-transparent hover:bg-transparent hover:border-primary ${isActive && "bg-black text-white hover:bg-black hover:text-white"}`}
        >
            <Link href={href}>{children}</Link>
        </Button>
    )
}

const NavbarItems = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About" },
    { href: "/features", children: "Features" },
    { href: "/pricing", children: "Pricing" },
    { href: "/contact", children: "Contact" },
]

export const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="h-20 border-b flex justify-between">
            <Link href="/">
                <span className={`h-full p-6 flex items-center ${poppins.className}`}>Digital Market</span>
            </Link>

            <div className="hidden lg:flex items-center gap-4">
                {NavbarItems.map((item, index) => (
                    <NavbarItem key={index} {...item} isActive={pathname === item.href} />
                ))}
            </div>

            <NavbarSidebar onOpenChange={setIsSidebarOpen} open={isSidebarOpen} items={NavbarItems} />

            <div className="hidden lg:flex gap-2 items-center p-4">
                <Button
                    className={`border-transparent hover:bg-transparent hover:border-primary`}
                    variant={'outline'}
                >
                    <Link href={'/signin'}>Login</Link>
                </Button>
                <Button
                    className={`bg-black text-white hover:bg-black hover:text-white`}
                    variant={'outline'}
                >
                    <Link href={'signup'}>Start Selling</Link>
                </Button>
            </div>

            <div className="flex lg:hidden items-center justify-center">
                <Button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    variant={'ghost'}
                >
                    <MenuIcon />
                </Button>
            </div>
        </div>
    )
}