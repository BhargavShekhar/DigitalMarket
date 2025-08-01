import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import Link from "next/link"

interface NavbarItem {
    href: string,
    children: React.ReactNode
}

interface Props {
    items: NavbarItem[],
    open: boolean,
    onOpenChange: (open: boolean) => void
}

export const NavbarSidebar = ({
    items,
    open,
    onOpenChange
}: Props) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="p-0 transition-none">
                <SheetHeader className="p-4 border-b">
                    <div className="flex items-center">
                        <SheetTitle>Menu</SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea className="flex flex-col h-full" onClick={() => onOpenChange(false)}>
                    {items.map((item, index) => (
                        <Link
                            href={item.href}
                            key={index}
                            className="w-full p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                        >
                            {item.children}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 mt-2">
                        <Button
                            className={`hover:bg-transparent hover:border-primary`}
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
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}