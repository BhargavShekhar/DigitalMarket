import { Category } from "@/payload-types";
import { Footer } from "./footer";
import { Navbar } from "./navbar"
import { SearchFilter } from "./search-filter";
import configPromise from "@payload-config"
import { getPayload } from "payload"

interface Props {
    children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
    const payload = await getPayload({
        config: configPromise
    })

    const data = await payload.find({
        collection: "categories",
        depth: 1, // depth of subcategorie
        pagination: false,
        where: {
            parent: { exists: false }
        }
    })

    const formattedData = data.docs.map(doc => ({
        ...doc,
        subcategories: (doc.subcategories?.docs ?? []).map(doc => ({
            ...(doc as Category),
            subcategories: undefined
        }))
    }))

    return (
        <div className="min-h-screen w-full flex flex-col">
            <Navbar />
            <SearchFilter data={formattedData} />
            <div className="flex-1 bg-[#f4f4f0]">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;