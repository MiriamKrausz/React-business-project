
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import { observer } from 'mobx-react';
import MeetingsStore from '../../stores/MeetingsStore';
import GroupsIcon from '@mui/icons-material/Groups';
const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
        paddingLeft: 24,
        paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize:20,
    },
});
function getColorClass(dateString) {
    const today = new Date();
    const date = new Date(dateString);
    const isToday = date.toDateString() === today.toDateString();
    const isThisWeek = date >= today && date <= new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6);
    if (isToday) {
        return '#ff6a6786';
    } else if (isThisWeek) {
        return 'rgba(255, 187, 0, 0.322)';
    } else {
        return '#c7ff879f';
    }
}
function generateData(meeting) {
    return [
        { icon: <DescriptionIcon />, label: meeting.name ,},
        { icon: <AccountCircleIcon />, label: meeting.clientName },
        { icon: <MailIcon />, label: meeting.clientEmail },
        { icon: <PhoneIcon />, label: meeting.clientPhone },
        { icon: <CalendarMonthIcon />, label: meeting.dateTime},
    ];
}
const roundedCorners = {
    borderRadius: '7px',
};
const Meetings = observer(() => {
    React.useEffect(() => {
        MeetingsStore.getMeetings();
    }, []);

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}>
            {MeetingsStore.meetingseArr.map((item, index) => (
                <ThemeProvider
                    key={index}
                    theme={createTheme({
                        components: {
                            MuiListItemButton: {
                                defaultProps: {
                                    disableTouchRipple: true,
                                },
                            },
                        },

                        palette: {
                            border: '2px solid black!important',
                            primary: { main: '#00b4d9!important' },
                            background: { paper: '#fff!important' },
                        },
                    })}
                >

                    <Paper elevation={0} sx={{ width: 300, height: 300, ...roundedCorners,border: '2px solid black'}}> {/* הוספת פינות עגולות */}
                        <FireNav component="nav" disablePadding>
                            <ListItemButton component="a" href="#customized-list">
                                <ListItemIcon sx={{ fontSize:"150px"}}> <GroupsIcon color="primary"  /></ListItemIcon>
                                <ListItemText
                                    sx={{ my: 0 }}
                                    primary="Meeting details"
                                    primaryTypographyProps={{
                                        backgroundColor: getColorClass(item.dateTime),
                                        fontSize:20,
                                        fontWeight: 'medium',
                                        letterSpacing: 0,
                                    }}
                                />
                            </ListItemButton>
                            <Divider />
                            <Divider />
                            {generateData(item).map((dataItem) => (
                                <ListItemButton
                                    key={dataItem.label}
                                    sx={{ py: 0, minHeight: 32, margin: "8px" }}
                                >
                                    <ListItemIcon sx={{ color: 'inherit'}}>
                                        {dataItem.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={dataItem.label}
                                        primaryTypographyProps={{ fontSize:16, fontWeight: 'medium'}}
                                    />
                                </ListItemButton>
                            ))}
                        </FireNav>
                    </Paper>
                </ThemeProvider>
            ))}
        </Box>
    );
});

export default Meetings;

