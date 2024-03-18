
import React, { useState, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import Swal from 'sweetalert2';
import { TextField, Button, DialogActions, DialogTitle, Dialog } from '@mui/material';
import BusinessStore from '../../stores/BusinessStore';
import { observer } from 'mobx-react';
const EditDetails = observer(() => {
    const [localBussinessDetails, setLocalBussinessDetails]=useState(BusinessStore.data);
    const [detailsData, setDetailsData] = useState({     
        name: "Orientation Center - the occupational orientation center for the ultra-orthodox public in Jerusalem",
        address:"15 Hzvi St. Jerusalem",
        email: "kivun52@gmail.com",
        phone: "02-6456222",
        owner:  "Dan Levi",
        description: "The 'Direction' center was established in 2014 in cooperation with the Ministry of Economy and the Jerusalem Municipality.",
    });
    const ensure = () => {
        console.log("ensure");
        Swal.fire({
            title: "Are you sure want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Your details have been successfully saved!!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }
    useEffect(() => {
        setDetailsData({
            name: detailsData.name,
            address: detailsData.address,
            email: detailsData.email,
            phone: detailsData.phone,
            owner: detailsData.owner,
            description: detailsData.description,
            logo: detailsData.logo,
        });
    }, [localBussinessDetails]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetailsData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        ensure();
        console.log(detailsData.name);
        console.log(detailsData.address);
        console.log(detailsData.description);
        console.log(detailsData.email);
        console.log(detailsData.phone);
        console.log(detailsData.owner);
        console.log(detailsData.logo);
        BusinessStore.setData(detailsData);
        handleClose();
    };

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="edit" onClick={handleClickOpen} sx={{ position: 'absolute', top: 100, right: 50 }}>
                    <Tooltip title="Edit details">
                        <EditIcon />
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
                <DialogTitle>Business details</DialogTitle>
                <form onSubmit={handleSubmit} className="form">

                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        className="inputs"
                        name="name"
                        defaultValue={detailsData.name}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth

                    />
                    <TextField
                        id="address"
                        label="Address"
                        variant="outlined"
                        className="inputs"
                        name="address"
                        defaultValue={detailsData.address}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth

                    />
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        className="inputs"
                        name="email"
                        defaultValue={detailsData.email}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth

                    />
                    <TextField
                        id="phone"
                        label="Phone"
                        variant="outlined"
                        className="inputs"
                        name="phone"
                        defaultValue={detailsData.phone}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth

                    />

                    <TextField
                        id="owner"
                        label="Owner"
                        variant="outlined"
                        className="inputs"
                        name="owner"
                        defaultValue={detailsData.owner}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth

                    />
                    <TextField
                        id="description"
                        label="Description"
                        variant="outlined"
                        className="inputs"
                        name="description"
                        defaultValue={detailsData.description}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                    />
                    <DialogActions>
                        <Button type="submit" variant="contained" color="primary">
                            Save changes
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
});

export default EditDetails



