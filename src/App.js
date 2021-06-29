import Sidebar from './components/Sidebar';
import CreateTweet from './components/CreateTweet';
import Alltweets from './components/AllTweets';
import Topnav from './components/Topnav';
import Login from './components/Login';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


// * Theme Colors for Material Ui
const theme = createMuiTheme({

  overrides: {
    MuiTextField: {
      root: {
        backgroundColor: 'white',
      }
    },
    MuiInputBase: {
      root: {
        color: 'white',
      }
    }
  },

  palette: {
    primary: {
      main: '#40bbf4'
    },
    secondary: {
      main: '#161616',
    },
    text: {
      primary: '#161616',
    }
  },

  typography: {
    fontFamily: 'Poppins',
    fontWeight: '100 !important'
  }

})




const App = () => {

  //! All state values here Username, textInput Aka messages
  //! Tweeedfeed for stored tweets, TweetList
  const[userName, setUserName] = useState('');
  const[textInput, setTextInput] = useState('');
  const[TweetList, setTweetList] = useState([]);
  const [tweetFeed, setTweetFeed] = useState([])

  

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Topnav />
        
        <Route 
        path="/" 
        exact render={() => <Login setUserName={setUserName} userName={userName} />} 
        />

        <Route 
        path="/CreateTweet" 
        render={() => 
        <Sidebar
        userName={userName} 
        setUserName={setUserName} 
        setTweetList={setTweetList}/>} 
        />  
      
        <Route 
        path="/CreateTweet" 
        render={() => 
        <CreateTweet 
        setTextInput={setTextInput} 
        textInput={textInput} 
        TweetList={TweetList} 
        setTweetList={setTweetList} 
        userName={userName} />} 
        /> 

        <Route 
        path="/CreateTweet" 
        render={() => 
        <Alltweets 
        userName={userName} 
        TweetList={TweetList} 
        setTweetList={setTweetList}
        tweetFeed={tweetFeed}
        setTweetFeed={setTweetFeed}
        />} 
        />
        
      </ThemeProvider>
    </Router>
  );
}

export default App;
