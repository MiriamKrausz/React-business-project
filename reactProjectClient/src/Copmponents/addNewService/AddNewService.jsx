import img1 from '../../assets/images/השכלה.jpg'
import img2 from '../../assets/images/קורסים.jpg'
import img3 from '../../assets/images/סדנאות.jpg'
import img4 from '../../assets/images/אבחונים2.jpg'
import img5 from '../../assets/images/אבחונים.jpg'
import React, { useState, useEffect } from 'react';
import { TextField, Button, DialogActions, DialogTitle, Dialog } from '@mui/material';
import ServicesStore from '../../stores/ServicesStore';
import { observer } from 'mobx-react';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Swal from 'sweetalert2';
import AddIcon from '@mui/icons-material/Add';
const AddNewService = observer(() => {
    const [count, setCount] = useState(0);
    const imgArr=[img1,img2,img3,img4,img5]
    const [serviceData, setServiceData] = useState({
        id: count,
        name: '',
        description: '',
        price: '',
        imgService:imgArr[Math.floor(Math.random() * imgArr.length)]
    });
    const handleInputChange = (e) => {
        setServiceData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    const added = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Service addede successfully",
            showConfirmButton: false,
            timer: 1500
        });
    };
    const handleInCreaseId = (i) => {
        setFormService((prevService) => ({
            ...prevService,
            id: i,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        added(),
            ServicesStore.addService(serviceData)
        setServiceData((prevData) => ({
            ...prevData,
            id: count,
            name: '',
            description: '',
            price: '',
            imgService:imgArr[Math.floor(Math.random() * imgArr.length)]
        }));
        setCount((prevId) => prevId + 1);
        handleClose();
    };
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="add" onClick={handleClickOpen} sx={{ position: 'absolute'  ,left: '15px'}}>
                    <Tooltip title="Add new service">
                        <AddIcon />
                    </Tooltip>
                </Fab>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xs"
                fullWidth
                aria-labelledby="form-dialog-title"
                PaperProps={{ sx: { p: 4 } }}
            >
                <DialogTitle sx={{ textAlign: 'center' }}>new service</DialogTitle>
                <form onSubmit={handleSubmit} className="form">
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        className="inputs"
                        name="name"
                        value={serviceData.name}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    <TextField
                        id="description"
                        label="Description"
                        variant="outlined"
                        className="inputs"
                        name="description"
                        value={serviceData.description}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    <TextField
                        id="price"
                        label="Price"
                        variant="outlined"
                        className="inputs"
                        name="price"
                        value={serviceData.price}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    <DialogActions>
                        <Button type="submit" variant="contained" color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
});
export default AddNewService;



