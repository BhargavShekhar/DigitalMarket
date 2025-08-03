import { Category } from "@/payload-types";
import Link from "next/link";
import { useEffect } from "react";

interface Props {
    category: Category,
    isOpen: boolean,
    position: { top: number, left: number }
}

export const SubcategoryMenu = ({
    category,
    isOpen,
    position
}: Props) => {
    if (!isOpen || !category.subcategories || category.subcategories.length <= 0) return null;

    const backgroundColor = category.color || '#F5F5F5';

    return (
        <div
            className="fixed z-100"
            style={{
                top: position.top,
                left: position.left
            }}
        >
            <div className="h-3 w-60" />
            <div
                className={`w-60 text-black rounded-sm overflow-hidden border shadow -translate-x-[2px] -translate-y-[2px] bg-white px-2 py-1
            `}>
                <div>
                    {category.subcategories?.map((subcategory: Category, index: number) => (
                        <Link
                            href="/"
                            key={index}
                            className={`w-full text-black px-2 py-4 pl-4 hover:border hover:border-primary-foreground flex underline font-medium text-left rounded-2xl bg-[${backgroundColor}]`}
                        >
                            {subcategory.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}