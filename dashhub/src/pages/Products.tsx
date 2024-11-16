import { Box } from "@mui/material"
import Sidenav from "../components/sidenav"
import Navbar from "../components/Navbar"
import ProductList from "./products/ProductList"

export default function Products() {
    return (
        <>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <ProductList />
                </Box>
            </Box>
        </>
    )
}


