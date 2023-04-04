import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../style/globalStyle";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DeleteModal = ({ deleteOpen, setDeleteOpen, id }) => {
  const { deleteBlogsData, getMyBlogsData } = useBlogCalls();
    // const { id:userId } = useSelector((state) => state.auth);
    const navigate = useNavigate();
  const handleDeleteBlog = () => {
    deleteBlogsData("blogs", id);
    // getMyBlogsData("blogs", userId);

    navigate(-1);
  };
  return (
    <div>
      <Modal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            align="center"
            variant="h6"
            component="h2"
          >
            Do you really want to delete your blog? This process cannot be
            undone!
          </Typography>
          <Box sx={{ m: 4, display: "flex", justifyContent: "center" }}>
            <Button
              color="success"
              variant="contained"
              size="large"
              onClick={() => setDeleteOpen(false)}
            >
              cancel
            </Button>
            <Button
              sx={{ mx: 4 }}
              color="error"
              variant="contained"
              size="large"
              onClick={handleDeleteBlog}
            >
              DELETE
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteModal;
