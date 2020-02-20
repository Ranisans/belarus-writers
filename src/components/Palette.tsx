import React from 'react';
import {
  makeStyles, 
  createStyles, 
  Theme,
  styled
} from '@material-ui/core/styles';
import { 
  Typography, 
  Grid,
  Container,
  Button,
} from '@material-ui/core';
import { compose, spacing, palette } from '@material-ui/system';

interface PropType {
    title: string;
    item1: string[];
    item2: string[];
    item3: string[];
}

interface PaletteType {
    item: string[],
}

const Box = styled('div')(
    compose(
      spacing,
      palette,
    ),
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({    
    palette: {      
      margin: 0,
    },
    paletteItem: {
        maxWidth: '100%',
    }
  }),
);

const PaletteItem = ({ item }: PaletteType) => {
    const classes = useStyles();
    return (
        <Grid item xs={4} className={classes.paletteItem}>
          <Grid container wrap='nowrap' spacing={1}>
            <Grid item>
              <Box bgcolor={item[0]} p={7} />
            </Grid>
            <Grid item>
              <Typography variant='body2' className={classes.palette}>{item[1]}</Typography>
              <Typography variant='body2'>{item[2]}</Typography>
            </Grid>
          </Grid>
        </Grid>
    )
}

const Row = ({ title, item1, item2, item3}: PropType) => {
    return (
        <>
            <Grid container>
                <Typography variant="h3">{title}</Typography>
            </Grid>
            <Grid container spacing={2}>
                <PaletteItem item={item1} />
                <PaletteItem item={item2} />
                <PaletteItem item={item3} />
            </Grid>
        </>
    )
}
  
const Palette = () => {
    return(
      <Container maxWidth="lg">
        <Grid container wrap='wrap'>
          <Row
            title={'Primary'}
            item1={['primary.light', 'palette.primary.light', '#E8676B' ]}
            item2={['primary.main', 'palette.primary.main', '#E8676B' ]} 
            item3={['primary.dark', 'palette.primary.dark', '#E8676B' ]}
          />
          <Row
            title={'Secondary'}
            item1={['secondary.light', 'secondary.light', '#E8676B' ]}
            item2={['secondary.main', 'secondary.main', '#E8676B' ]} 
            item3={['secondary.dark', 'secondary.dark', '#E8676B' ]}
          />
        </Grid>
        <Row
            title={'Error'}
            item1={['error.light', 'error.light', '#E8676B' ]}
            item2={['error.main', 'error.main', '#E8676B' ]} 
            item3={['error.dark', 'error.dark', '#E8676B' ]}
        />
        <Row
            title={'Warning'}
            item1={['warning.light', 'warning.light', '#E8676B' ]}
            item2={['warning.main', 'warning.main', '#E8676B' ]} 
            item3={['warning.dark', 'warning.dark', '#E8676B' ]}
        />
        <Row
            title={'Info'}
            item1={['info.light', 'info.light', '#E8676B' ]}
            item2={['info.main', 'info.main', '#E8676B' ]} 
            item3={['info.dark', 'info.dark', '#E8676B' ]}
        />
        <Row
            title={'Success'}
            item1={['success.light', 'success.light', '#E8676B' ]}
            item2={['success.main', 'success.main', '#E8676B' ]} 
            item3={['success.dark', 'success.dark', '#E8676B' ]}
        />
      </Container>
    )
}

export default Palette;