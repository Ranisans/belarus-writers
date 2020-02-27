import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const Instruction = () => {
  const useStyles = makeStyles(() =>
    createStyles({
      code: {
        color: '#FFFFFF',
        backgroundColor: 'rgb(55, 59, 66)',
        padding: 15,
        margin: '15px 0',
      },
    })
  );

  const classes = useStyles();

  return (
    <div>
      <Typography variant="body1">
        To use this style on page or component wrap it like below:
      </Typography>
      <div className={classes.code}>
        <code>
          import theme from
          &quot;somewhere/from/your/folder/../static/theme&quot;;
          <br />
          <br />
          const YourSmartComponent = () =&gt; &#123;
          <br />
          &#8195;&#8195;const useStyles = makeStyles((theme: Theme) =&gt; &#123;
          <br />
          &#8195;&#8195;&#8195;&#8195;root: &#123;
          <br />
          &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;color:
          theme.palette.primary.main, // your text will be coral
          <br />
          &#8195;&#8195;&#8195;&#8195;&#125;
          <br />
          &#8195;&#8195;&#125;
          <br />
          &#8195;&#8195;return (
          <br />
          &#8195;&#8195;&#8195;&#8195;&lt;ThemeProvider
          theme=&#123;theme&#125;&gt;
          <br />
          &#8195;&#8195;&#8195;&#8195; &#8195;&#8195;...your components here
          <br />
          &#8195;&#8195;&#8195;&#8195;&lt;/ThemeProvider&gt;
          <br />
          &#8195;&#8195;)
          <br />
          &#125;
        </code>
      </div>
    </div>
  );
};

export default Instruction;
