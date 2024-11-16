import { useState } from 'react';
import { Box, IconButton, Typography, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface AddProductProps {
  onClose: () => void; // Prop to handle closing the modal
}

export default function AddProduct({ onClose }: AddProductProps) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    onClose(); // Notify the parent to handle modal closure
  };

  return (
    <>
      <Box sx={{ m: 2 }}>
        <Typography variant="h5" align="center">
          Add Product
        </Typography>
        <IconButton
          style={{ position: 'absolute', top: '0', right: '0' }}
          onClick={openModal}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Modal Component */}
      <Modal
        open={showModal}
        onClose={closeModal}
        aria-labelledby="add-product-modal"
        aria-describedby="add-product-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Add New Product
          </Typography>
          <IconButton
            style={{ position: 'absolute', top: '10px', right: '10px' }}
            onClick={closeModal}
          >
            <CloseIcon />
          </IconButton>
          {/* Add your form or content here */}
          <Typography variant="body1">
            This is where the product form will be.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
