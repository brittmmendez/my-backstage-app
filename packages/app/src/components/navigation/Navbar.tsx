import React from 'react';
import { HomePageSearchBar, SearchContextProvider } from '@backstage/plugin-search';
import { Link } from '@backstage/core-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Logo from '../Root/Logo';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      // background: '#1A2C65',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      width: '100%',
      marginRight: '20px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    searchBar: {
      display: 'flex',
      maxWidth: '60vw',
      backgroundColor: '#F2F2F3',
      padding: '8px 0',
      margin: 'auto',
    },
    createMenuItem: {
      // color: '#253E8E'
    }
  }),
);

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-create-menu';
  const createMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/create?filters%5Bkind%5D=template&filters%5Buser%5D=all" className={classes.createMenuItem}><MenuItem onClick={handleMenuClose}>Component</MenuItem></Link>
      <Link to="/create/templates/react-ssr-template" className={classes.createMenuItem}><MenuItem onClick={handleMenuClose}>React Project</MenuItem></Link>
      <Link to="/create/templates/springboot-template" className={classes.createMenuItem}><MenuItem onClick={handleMenuClose}>Python Project</MenuItem></Link>
      <Link to="/catalog-import" className={classes.createMenuItem}><MenuItem onClick={handleMenuClose}>Register Existing</MenuItem></Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-create-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-create-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AddCircleOutlineIcon />
        </IconButton>
        <p>Create</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <Link to="/settings">
        <MenuItem>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <Link to="/">
        <Logo width={50} />
        </Link>
          {/* <Typography className={classes.title} variant="h6" noWrap>
            Developer Portal
          </Typography> */}
          <div className={classes.search}>
            <SearchContextProvider>
              <HomePageSearchBar
                  classes={{ root: classes.searchBar }}
                  placeholder="Search"
                />
            </SearchContextProvider>
          </div>
          <div className={classes.sectionDesktop}>
          <Typography noWrap>
            <Link to="/catalog" color="inherit" style={{ fontWeight: '600', marginRight: '40px' }}>Explore</Link>
          </Typography>
          <Typography noWrap>
            <Link to="/manage" color="inherit" style={{ fontWeight: '600', marginRight: '40px' }}>Manage</Link>
          </Typography>
          <Typography noWrap>
            <Link to="/docs" color="inherit" style={{ fontWeight: '600', marginRight: '40px' }}>Docs</Link>
          </Typography>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <IconButton
              edge="end"
              aria-label="create"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AddCircleOutlineIcon />
            </IconButton>
            <p
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            >Create</p>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Link to="/settings" color="inherit">
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {createMenu}
    </div>
  );
}
