
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import ServicesStore from '../../stores/ServicesStore';
import AddNewMeeting from '../addNewMeeting/AddNewMeeting';
import GlobalStore from '../../stores/GlobalStore';
import AddNewService from '../addNewService/AddNewService';
const ServicesTabs = observer(() => {
    useEffect(() => {
        ServicesStore.getServices();
    }, []);
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly', padding: '1.5%', paddingBottom: '8%', paddingTop: '5%' }}>
                {ServicesStore.serviceArr.map((item, index) => (
                    <Card sx={{ width: 345, height: 500, position: 'relative', backgroundColor: "#c5f5ff4d" }} key={index}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="160"
                                image={item.imgService}
                                alt={item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="subtitle2">
                                    {item.description}
                                </Typography>
                                <Typography variant="subtitle1" >
                                    price: {item.price}
                                    <br />
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {!GlobalStore.isLogin && <AddNewMeeting service={item} />}
                        </CardActions>
                    </Card>
                ))}
                {GlobalStore.isLogin && <AddNewService />}

            </div>

        </>
    );
});
export default ServicesTabs;
