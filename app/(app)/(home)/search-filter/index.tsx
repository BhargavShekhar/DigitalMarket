import { Categories } from "./categories"
import { SearchInput } from "./search-input"

interface Props {
    data: any
}

export const SearchFilter = ({ data }: Props) => {
    return (
        <div className="w-full px-8 py-4 border-b flex flex-col items-center gap-4">
            <SearchInput disabled={false} />
            <Categories data={data} />
        </div>
    )
}