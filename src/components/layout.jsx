import { Theme } from "@radix-ui/themes";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Layout() {
    return (
        <Theme>
            <Header />
            <Outlet />
            <Footer />
        </Theme>
    )
}
