import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import Sidenav from "../components/sidenav"
import Navbar from "../components/Navbar"
import AccordionDash from "../components/AccordionDash"
import Grid from '@mui/material/Grid';
import "../Dash.css"
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import BarChart from "../charts/BarChart";
import CountUp from 'react-countup';

export default function Home() {
    return (
        <>
            <div className="bgColor">
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: "flex" }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient">
                                        <CardContent>
                                            <div className="iconstyle">
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                $<CountUp delay={0.2} end={500.00} duration={0.6} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Earning
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradientlight">
                                        <CardContent>
                                            <div className="iconstyle">
                                                <LocalMallIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                $<CountUp delay={0.2} end={900.00} duration={0.6} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Orders
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card className="gradientlight">
                                        <Stack spacing={2} direction="row">
                                            <div className="iconstyle">
                                                <StoreIcon />
                                            </div>
                                            <div className="paddingall">
                                                <span className="pricetitle">$203k</span>
                                                <br />
                                                <span className="pricesubtitle">Total income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <Stack spacing={2} direction="row">
                                            <div className="iconstyleblack">
                                                <StoreIcon />
                                            </div>
                                            <div className="paddingall">
                                                <span className="pricetitle">$203k</span>
                                                <br />
                                                <span className="pricesubtitle">Total income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <BarChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <div className="paddingall">
                                            <span className="pricetitle">Popular Products</span>
                                        </div>
                                        <AccordionDash />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    )
}
