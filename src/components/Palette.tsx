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
          <Grid container>
            <Button variant="text" color="primary" size="medium">Text Primary</Button>
          </Grid>          
          <Row
            title={''}
            item1={['warning.main', 'warning.main', '#E8676B' ]}
            item2={['info.main', 'info.main', '#E8676B' ]} 
            item3={['success.dark', 'success.main', '#E8676B' ]}
          />
          <Row
            title={'Secondary'}
            item1={['secondary.light', 'secondary.primary.light', '#E8676B' ]}
            item2={['secondary.main', 'secondary.primary.main', '#E8676B' ]} 
            item3={['secondary.dark', 'secondary.primary.dark', '#E8676B' ]}
          />
        </Grid>
        <Grid container>
            <Button variant="text" color="secondary" size="medium">Text Primary</Button>
        </Grid>          
        <Row
            title={''}
            item1={['warning.main', 'warning.main', '#E8676B' ]}
            item2={['info.main', 'info.main', '#E8676B' ]} 
            item3={['success.dark', 'success.main', '#E8676B' ]}
        />
      </Container>
    )
}

export default Palette;