import React, { useState } from 'react';
import {
    IconButton,
    InputAdornment,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

    const handleCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(event.target.value);
    };

    const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
    };

    const handleConfirmNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmNewPassword(event.target.value);
    };

    const handleToggleCurrentPasswordVisibility = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const handleToggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };

    const handleToggleConfirmNewPasswordVisibility = () => {
        setShowConfirmNewPassword(!showConfirmNewPassword);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform password change logic here
        if (newPassword !== confirmNewPassword) {
            alert("New password and confirm password must match.");
            return;
        }
        console.log('Password changed successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel htmlFor="current-password">Current Password</InputLabel>
                <OutlinedInput
                    id="current-password"
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={currentPassword}
                    onChange={handleCurrentPasswordChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleToggleCurrentPasswordVisibility}
                                edge="end"
                            >
                                {showCurrentPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Current Password"
                />
            </FormControl>

            <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel htmlFor="new-password">New Password</InputLabel>
                <OutlinedInput
                    id="new-password"
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleToggleNewPasswordVisibility}
                                edge="end"
                            >
                                {showNewPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="New Password"
                />
            </FormControl>

            <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel htmlFor="confirm-new-password">Confirm New Password</InputLabel>
                <OutlinedInput
                    id="confirm-new-password"
                    type={showConfirmNewPassword ? 'text' : 'password'}
                    value={confirmNewPassword}
                    onChange={handleConfirmNewPasswordChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleToggleConfirmNewPasswordVisibility}
                                edge="end"
                            >
                                {showConfirmNewPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Confirm New Password"
                />
            </FormControl>

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Change Password
            </Button>
        </form>
    );
}
