import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  '@keyframes app-logo-spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  app: {
    textAlign: 'center',
  },
  appLogo: {
    height: '40vmin',
    pointerEvents: 'none',
  },
  appLink: {
    color: '#61dafb',
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    appLogo: {
      animation: '$app-logo-spin infinite 20s linear',
    },
  },
});

export default useStyles;
