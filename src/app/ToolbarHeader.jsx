import React from 'react';
import Avatar  from 'material-ui/Avatar';
import {Toolbar, ToolbarTitle, ToolbarGroup} from 'material-ui/Toolbar';

const style = {margin: 15};

class ToolbarHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange(event, index, value){
    this.setState({value});
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <Avatar src='assets/images/avatar.jpg' style={style} />
		  <ToolbarTitle text='David Bibb' />
		</ToolbarGroup>
        <ToolbarGroup>
          <img src={'https://travis-ci.org/kryptn/homepage.svg?branch=master'} />
          <Avatar src='assets/images/github.png' style={style} />
		</ToolbarGroup>
      </Toolbar>
    );
  }
};

export default ToolbarHeader;
