import { Category } from "@/payload-types"
import { CategoriesDropdown } from "./categories-dropdown"

interface Props {
    data: any
}

export const Categories = ({ data }: Props) => {
    return (
        <div className="w-full relative">
            <div className="flex flex-nowrap items-center">
                {data.map((category: Category, index: number) => (
                    <div key={index}>
                        <CategoriesDropdown category={category} isActive={false} isNavigationHovered={false} />
                    </div>
                ))}
            </div>
        </div>
    )
}