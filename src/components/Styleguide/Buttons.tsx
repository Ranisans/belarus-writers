import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import theme from '../../../static/themes/theme';

const ColoredButton = withStyles(() => ({
    root: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: '0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)',
      },
    },
  }))(Button);
  
  const OutlinedButton = withStyles((theme) => ({
    root: {
      color: theme.palette.text.secondary,
      border: '1px solid #cbcdcf',
      '&:hover': {
        border: '1px solid #cbcdcf',
        boxShadow: '0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)',
      },
    },
  }))(Button);

  export { ColoredButton, OutlinedButton }