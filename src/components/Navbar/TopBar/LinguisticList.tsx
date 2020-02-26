import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import LanguageIcon from '@material-ui/icons/Language';

const languageName = {
  en: 'English',
  ru: 'Русский',
  by: 'Беларускi',
};

interface LanguageItemTypes {
  languages: [];
  language: string;
}

const ITEM_HEIGHT = 50;

const LinguisticList = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="secondary"
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        <IntlContextConsumer>
          {({ languages, language: currentLocale }: LanguageItemTypes) =>
            languages.map(language => (
              <MenuItem
                key={language}
                selected={language === currentLocale}
                onClick={() => {
                  changeLocale(language);
                  handleClose();
                }}
              >
                {languageName[language]}
              </MenuItem>
            ))
          }
        </IntlContextConsumer>
      </Menu>
    </div>
  );
};

export default LinguisticList;
