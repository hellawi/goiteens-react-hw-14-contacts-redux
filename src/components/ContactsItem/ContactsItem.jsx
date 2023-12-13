import {
  Avatar,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { getRandom } from "../elements/getRandom";
import styles from "./ContactsItem.module.css";
import {
  CorporateFareOutlined,
  Delete,
  EmailOutlined,
  EmailSharp,
  LocalPhoneOutlined,
  LocalPhoneSharp,
  Sms,
} from "@mui/icons-material";
import { useState } from "react";
import { motion } from 'framer-motion'
import AlertORG from "../AlertORG";

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

function ContactsItem({ name, number, org, email, typeMobile, onDelete, id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const bgColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
  const nameSbs = name.substring(0, 1).toUpperCase();
  return (
    <div>
      <motion.div 
      className={styles["flex"]} 
      onClick={handleOpen}
      initial={{
        opacity: 0,
        translateX: '50%'
      }}
      animate={{
        opacity: 1,
        translateX: 0
      }}
      exit={{
        opacity: 0,
        translateX: '-100%',
        
      }}
      transition={{
        duration: 0.3,
      }}
      >
        <Avatar sx={{ bgcolor: bgColor }}>{nameSbs}</Avatar>
        <p className={styles["contact-name"]}>{name}</p>
        <a href={`tel:${number}`}>
          <LocalPhoneSharp style={{ color: "green" }} sx={{ fontSize: 30 }} />
        </a>
        <a href={`sms:${number}`}>
          <Sms sx={{ fontSize: 30 }} style={{ color: "orange" }} />
        </a>
        {email != 0 && (
          <a href={`mailto:${email}`}>
            <EmailSharp style={{ color: "#1bd1d1" }} sx={{ fontSize: 30 }} />
          </a>
        )}
        <a onClick={() => onDelete(id)} className={styles["delete"]}>
          <Delete />
        </a>
      </motion.div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h2>About contact {name}</h2>
            <div className={styles["modal-items"]}>
              <LocalPhoneOutlined style={{ color: "green", marginRight: 8 }} />
              <p>{number}</p>
              <span className={styles["modal-mobile"]}>Mobile</span>
            </div>
            <div className={styles["modal-items"]}>
              {org.length != 0 ? <span></span>
                : <AlertORG />}

              {org.length != 0 && (
                <CorporateFareOutlined
                  style={{ color: "blue", marginRight: 8 }}
                />
              )}
              <p>{org}</p>
            </div>
            <div className={styles["modal-items"]}>
              {email.length != 0 && (
                <EmailOutlined style={{ marginRight: 8 }} />
              )}
              <p>{email}</p>
            </div>
            <div className={styles["modal-footer"]}>
              <Button href={`tel:${number}`}>Call</Button>
              <Button href={`sms:${number}`}>SMS</Button>
              {email.length != 0 && (
                <Button href={`mailto:${email}`}>Write Email</Button>
              )}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default ContactsItem;
