import { SearchIcon } from "lucide-react"

interface Props {
    disabled: boolean
}

export const SearchInput = ({ disabled }: Props) => {
    return (
        // <div className="w-full flex items-center gap-2">
            <div className="w-full relative">
                <input
                    type="text"
                    placeholder="Search Products"
                    disabled={disabled}
                    className="border px-10 py-2 w-full rounded-md"
                />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-4" />
            </div>
        // </div>
    )
}