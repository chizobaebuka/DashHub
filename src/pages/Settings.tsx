import { Box } from "@mui/material"
import Sidenav from "../components/sidenav"
import Navbar from "../components/Navbar"
import List from "../settings/List"

export default function Settings() {
    return (
        <>
            <Navbar />
            <Box height={50} />
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <List />
                </Box>
            </Box>
        </>
    )
}
