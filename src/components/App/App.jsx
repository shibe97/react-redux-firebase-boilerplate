import * as React from 'react';
import { Helmet } from 'react-helmet';
import Routes from '../Routes';
import firebase from '../../firebase';

class App extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('this user is signed in');
      } else {
        console.log('this user is signed out');
      }
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>React Redux Firebase</title>
        </Helmet>
        <Routes location={this.props.location} />
      </div>
    );
  }
}

export default App;
