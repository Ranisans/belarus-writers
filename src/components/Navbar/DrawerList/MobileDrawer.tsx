import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MobileDrawer = ({ categories }: { categories: string[] }) => {
    return (
        <div>
            <List>
                {categories.map((text: string) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default MobileDrawer;
