import { Footer } from "./footer";
import { Navbar } from "./navbar"

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Navbar />
            <div className="flex-1 bg-[#f4f4f0]">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;