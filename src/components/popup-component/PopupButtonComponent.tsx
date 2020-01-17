import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Container } from '@material-ui/core';
import CreateCategoryComponent from '../create-category-component/CreateCategoryContainer';
import CreateSkillComponent from '../create-skill-component/CreateSkillContainer';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function PopupButtonComponent(categories: any) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };




  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <button type="button" className="negativeMargBot" onClick={handleOpen}>
        Add Skill/Category
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        style={{ overflow: 'scroll', paddingTop: '15em', paddingBottom: '15em' }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} >
            <Container>

              <h1 id="head2" className="negativeMargBot">Add Skill/Category</h1>
                <CreateSkillComponent />
                <CreateCategoryComponent />

            </Container>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}