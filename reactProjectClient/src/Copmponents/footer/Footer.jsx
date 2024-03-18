import logo_image from '../../assets/images/לוגו-כיוון-שקוף.png'
import './Footer.css'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextField from '@mui/material/TextField';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BusinessStore from '../../stores/BusinessStore';
import { observer } from 'mobx-react';
const Footer = observer(() => {
    return (
        <>
            <div className="footerDiv">
                <div className="logo">
                    <img src={logo_image} className='imgLogo'/>
                </div>
                <div className='details'>
                    <p className='pDetails'><CallIcon></CallIcon>{BusinessStore.data.phone} </p>
                    <div className='line'></div>
                    <p className='pDetails'><EmailIcon></EmailIcon>{BusinessStore.data.email}</p>
                    <div className='line'></div>
                    <p className='pDetails'><LocationOnIcon></LocationOnIcon> {BusinessStore.data.address}</p>
                </div>
                <div className='socialMediaDiv'>
                    <h3>available in:</h3>
                    <YouTubeIcon className='socialmediaIcon'></YouTubeIcon>
                    <TwitterIcon className='socialmediaIcon'></TwitterIcon>
                    <InstagramIcon className='socialmediaIcon'></InstagramIcon>
                    <QrCode2Icon className='socialmediaIcon'></QrCode2Icon>
                    <FacebookIcon className='socialmediaIcon'></FacebookIcon>
                    <WhatsAppIcon className='socialmediaIcon'></WhatsAppIcon>
                </div>
                <div className='newsletter'>
                    <p className='addToNewsleeter'>join our newsletter:</p>
                    <TextField className="outlined-basic" label="name" variant="outlined" />
                    <TextField className="outlined-basic" label="email" variant="outlined" />
                </div>
            </div>
        </>
    )
});

export default Footer