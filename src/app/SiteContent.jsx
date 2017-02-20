import React from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

const style = {
    margin: '20px',
    width: '80%',
    height: '90%',
    align: 'center',
    display: 'inline-block',
}

class SiteContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Paper style={style} zDepth={2}>
            Text Yo
        </Paper>
    );
  }
};

export default SiteContent;
