import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToolbarHeader from './ToolbarHeader.jsx';
import SiteContent from './SiteContent.jsx';

class App extends React.Component{
    render(){
        return (<div>
                  <ToolbarHeader />
                  <SiteContent />
                </div>);
        return result;
    }
}

class ThemedApp extends React.Component{
    render(){
        return (<MuiThemeProvider>
                  <App />
                </MuiThemeProvider>);
    }
}

injectTapEventPlugin();
ReactDOM.render(<ThemedApp/>, document.getElementById('app'));
