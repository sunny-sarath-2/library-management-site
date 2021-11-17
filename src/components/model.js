import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const {
    author_name,
    title,
    year_of_publish,
    edition,
    floor_no,
    section_name,
    rack_no,
  } = props.data;
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            style={{ float: "right", cursor: "pointer" }}
            onClick={props.handleClose}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="subtitle2">
            Author Name: {author_name}
          </Typography>
          <Typography variant="subtitle2">
            Year Of Publish: {moment(year_of_publish).format("ll")}
          </Typography>
          <Typography variant="subtitle2">Edition: {edition}</Typography>
          <Typography variant="subtitle2">Floor No: {floor_no}</Typography>
          <Typography variant="subtitle2">
            Section Name: {section_name}
          </Typography>

          <Typography variant="subtitle2">Rack Number: {rack_no}</Typography>
        </Box>
      </Modal>
    </div>
  );
}
