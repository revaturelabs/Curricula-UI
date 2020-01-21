import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';
import { Button, Grid, MenuItem, Icon } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RevatureLogo from '../navbar-component/RevatureLogo.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        revatureLogo: {
            maxWidth: 160,
        }
    }),
);

export default function NavBarComponent() {
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }
        prevOpen.current = open;
    }, [open]);


    return (
        <div className={classes.root}>
            <AppBar position="static" id="navbar">
                <Toolbar>
                    <Link to="/vis/">
                        <img src={RevatureLogo} alt="logo" className={classes.revatureLogo} />
                    </Link>
                    <Grid container justify="space-evenly">
                        <Button color="inherit" component={Link} to="/vis/"  ><Icon>home</Icon>Home</Button>
                        <Button
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleToggle}
                        >
                            Visualization
                        <ArrowDropDownIcon />
                        </Button>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList autoFocusItem={open} id="menu-list-grow" color="secondary" onKeyDown={handleListKeyDown}>
                                                <MenuItem component={Link} to="/vis/search" onClick={handleClose}>New Visualization</MenuItem>
                                                <MenuItem component={Link} to="/vis/" onClick={handleClose}>View Visualizations</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                        <Button color="inherit" component={Link} to="/vis/createcurriculumpage" >New Curriculum</Button>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}