import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid, Paper, Fade, Container } from '@mui/material';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import CompressIcon from '@mui/icons-material/Compress';

export default function InfoBox({info}) {
    const hoturl = "https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VubnklMjBkYXl8ZW58MHx8MHx8fDA%3D";
    const rainurl = "https://images.unsplash.com/photo-1626124902047-f3db8b02f740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D"
    const snowurl = "https://images.unsplash.com/photo-1638101177252-3d6dea4f0d61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbGQlMjBkYXl8ZW58MHx8MHx8fDA%3D";

    const getWeatherIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon sx={{ fontSize: 40, color: '#1976D2' }} />;
        if (info.temp > 25) return <WbSunnyIcon sx={{ fontSize: 40, color: '#FFA000' }} />;
        return <AcUnitIcon sx={{ fontSize: 40, color: '#90CAF9' }} />;
    };

    return (
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Fade in={true} timeout={1000}>
                <Card sx={{ 
                    maxWidth: 600, 
                    width: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-5px)'
                    }
                }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={info.humidity > 80 ? rainurl : info.temp > 25 ? hoturl : snowurl}
                        title="Weather background"
                    />
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                            <Typography variant="h4" component="div" sx={{ 
                                fontWeight: 'bold',
                                mr: 1,
                                textTransform: 'capitalize'
                            }}>
                                {info.city}
                            </Typography>
                            {getWeatherIcon()}
                        </Box>
                        
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={6}>
                                <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(33, 150, 243, 0.1)', borderRadius: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <ThermostatIcon color="primary" />
                                        <Typography variant="body1">
                                            Temperature: {info.temp}°C
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(33, 150, 243, 0.1)', borderRadius: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <WaterDropIcon color="primary" />
                                        <Typography variant="body1">
                                            Humidity: {info.humidity}%
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(33, 150, 243, 0.1)', borderRadius: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <CompressIcon color="primary" />
                                        <Typography variant="body1">
                                            Pressure: {info.pressure} hPa
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(33, 150, 243, 0.1)', borderRadius: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <AirIcon color="primary" />
                                        <Typography variant="body1">
                                            Wind: {info.wind} m/s
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(33, 150, 243, 0.1)', borderRadius: 2 }}>
                                    <Typography variant="body1" sx={{ textAlign: 'center' }}>
                                        Feels like: {info.feelslike}°C (Min: {info.tempMin}°C, Max: {info.tempMax}°C)
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Fade>
        </Container>
    );
}