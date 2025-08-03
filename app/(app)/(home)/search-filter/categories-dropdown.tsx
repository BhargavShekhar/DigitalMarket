'use client'

import { Button } from "@/components/ui/button";
import { Category } from "@/payload-types";
import { useRef, useState } from "react";
import { useDropdownPosition } from "./use-dropdown-position";
import { SubcategoryMenu } from "./subcategories-menu";

interface Props {
    category: Category,
    isActive?: boolean,
    isNavigationHovered?: boolean
}

export const CategoriesDropdown = ({
    category,
    isActive,
    isNavigationHovered
}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const getDropdownPosition = useDropdownPosition(dropdownRef);

    const dropdownPosition = getDropdownPosition();

    const onMouseEnter = () => {
        if (category.subcategories) setIsOpen(true);
    }

    const onMouseLeave = () => setIsOpen(false);

    return (
        <div
            ref={dropdownRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="relative"
        >
            <Button
                variant={'outline'}
                className={`bg-transparent rounded-full hover:bg-white hover:border-primary text-black
                    ${isActive && !isNavigationHovered && "bg-white border-primary"} 
                `}
            >
                {category.name}
            </Button>

            {category.subcategories && category.subcategories.length > 0 && (
                <div
                    className={`opacity-0 absolute -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px]
                            border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2
                            ${isOpen && "opacity-100"}
                        `}
                />
            )}

            <SubcategoryMenu category={category} isOpen={isOpen} position={dropdownPosition} />
        </div>
    )
}