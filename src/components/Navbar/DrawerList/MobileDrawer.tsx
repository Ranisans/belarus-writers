import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MobileDrawer = ({ dummyCategories }: { dummyCategories: string[] }) => {
    return (
        <div>
            <List>
                {dummyCategories.map((text: string) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default MobileDrawer;
