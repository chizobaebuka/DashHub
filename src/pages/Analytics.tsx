import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import Sidenav from "../components/sidenav"
import Navbar from "../components/Navbar"
import Grid from '@mui/material/Grid';
import "../Dash.css";
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import HBarChart from "../charts/HBarChart";
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
                            <Grid item xs={5}>
                                <Stack spacing={2} direction="row">
                                    <Box sx={{ width: "50%" }}>
                                        <Card sx={{ height: 24 + "vh", marginBottom: "14px" }} className="gradient">
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc", padding: "7px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                    <CountUp delay={0.2} end={22000} duration={0.3} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ height: 24 + "vh" }} className="gradientlight">
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc", padding: "7px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                    <CountUp delay={0.2} end={1200} duration={0.3} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                    <Box sx={{ width: "50%", height: "50%" }}>
                                        <Card sx={{ height: 24 + "vh", marginBottom: "14px" }} className="gradient">
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc", padding: "7px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                    <CountUp delay={0.2} end={22000} duration={0.3} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ height: 24 + "vh" }} className="gradientlight">
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc", padding: "7px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                    <CountUp delay={0.2} end={22000} duration={0.3} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={7}>
                                <Stack spacing={2}>
                                    <Card sx={{ height: 50 + "vh" }}>
                                        <CardContent>
                                            <HBarChart />
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={16} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 45 + "vh" }}>
                                    <CardContent>
                                        <GeoChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 45 + "vh" }}>
                                    <CardContent>
                                        <PieChart />
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
