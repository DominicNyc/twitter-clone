import { v4 as uuidv4 } from 'uuid';
import { TweenMax, Power3 } from 'gsap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';

//! styles for Textinput Field material UI
const useStyles = makeStyles({
    root: {
        '& label.Mui-focused': {
          color: '#40bbf4',
        },

        '& .MuiOutlinedInput-root': {
            color: 'white',

          '& fieldset': {
            borderColor: '#40bbf4',
          },
          '&:hover fieldset': {
            borderColor: '#40bbf4',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#40bbf4',
          },
        },
      },
  });


const CreateTweet = ({ setTextInput, textInput, setTweetList, TweetList, userName }) => {

    const classes = useStyles();
    
    //! code for GSAP animation
    let createTweet = useRef(null)
    useEffect(() => {
    TweenMax.from(createTweet, 1, {opacity: -1, y: 400, ease: Power3.easeOut, delay: .2})
  },[])


    //! save what the user is typing into textinput
    const handleChange = (e) => {
        setTextInput(e.target.value);
    }

    //! for every element already in tweet list add the new tweet to it
    //! then save the new tweet inside db.json with all other tweets
    const submitForm = (e) => {
        e.preventDefault();
        setTweetList([...TweetList, { message: textInput, id: uuidv4() }])

        fetch('http://localhost:8000/tweets', {
          method: 'POST',
          headers: {"content-type": "application/json"},
          body: JSON.stringify({user: userName, tweet: textInput })
        })

        setTextInput("");
    }


    return (

      <div className="createTweet">

        <form 
        onSubmit={submitForm} 
        ref={ref => createTweet = ref}
        >

          <h3>@{userName}</h3>
          <TextField
          className={classes.root}
          label="Whats happening ?"
          value={textInput}
          multiline
          rows={2}
          onChange={handleChange}
          variant="outlined"
          color="primary"
          />
          
          <br />
          <Button 
          type="submit"
          color="secondary"
          >Tweet</Button>
        </form>

      </div>

    );
}

export default CreateTweet;