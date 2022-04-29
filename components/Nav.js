import { useRouter } from "next/router";

const listMenu = [
    { name: "Home", href: "/" },
    { name: "Concept", href: "/concept" },
    { name: "Residence", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "News", href: "#" },
    { name: "Service", href: "#" },
    { name: "Contacy", href: "#" },
]

const Nav = () => {
    const router = useRouter();
    return (
        <>
            <div className="fixed top-0 h-14 bg-[#010F2A] bg-opacity-70 w-full text-center text-white flex items-center justify-center !z-50 !overflow-hidden">

                <div className="max-w-7xl w-full hidden md:flex items-center justify-center absolute h-full" >

                    {listMenu.map((item, index) => (
                        <p key={index} className={router.pathname === item.href ? "font-medium bg-[#176724] h-full px-4 items-center grid" : "grid h-full px-4 items-center "}>
                            {item.name}
                        </p>
                    ))

                    }
                </div>

                <div className="max-w-7xl w-full flex items-center justify-end absolute h-full px-4">

                    <button className="bg-red-400 px-4 py-2 w-fit ">REGISTER</button>
                </div>

            </div>
        </>
    );
}

export default Nav;