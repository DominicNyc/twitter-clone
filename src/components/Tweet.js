import React, { useState } from 'react';
import  Button  from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';



const Tweet = ({ setTweetList, TweetList, tweet, userName}) => {

    //! holds the likes for you tweets
    const[tweetLikes,setTweetLikes]= useState(null)

    //! delete the tweet when the delete button is pressed
    const deleteThis = () => {
        setTweetList(TweetList.filter(message => message.id !== tweet.id))
        console.log(`you deleted ${tweet.message} ID:${tweet.id}`)
    }


    //! keeps track of all the times the like button was pressed 
    const likeTweet = () => {
        setTweetLikes((prev) => prev + 1)
    }

    return (
        <div className="tweets">
          
            <div>@{userName}</div>
            <p>{tweet.message}</p>
               
            <div className='buttons'>

                <Button 
                className="Like-button" 
                size="small" 
                aria-label="add an alarm"
                startIcon={<FavoriteIcon />}
                onClick={likeTweet}
                >
                    {tweetLikes}
                </Button>

                <Button 
                className="Delete-button" 
                aria-label="add an alarm"
                endIcon={<DeleteIcon />}
                onClick={deleteThis}
                >
                </Button>

            </div>
            
        </div>

    )
}

export default Tweet;