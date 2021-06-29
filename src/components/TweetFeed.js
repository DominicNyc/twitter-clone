import React, { useState } from 'react';
import  Button  from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';



const TweetFeed = ({ user, message }) => {

    
    const[tweetLikes,setTweetLikes]= useState(null)

    //! holds the likes for you tweets
    const likeTweet = () => {
        setTweetLikes((prev) => prev + 1)
    }



    return (
        <div className="tweets">
          
            <div>@{user}</div>
            <p>{message}</p>
               
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
            </div>
            
        </div>

    )
}

export default TweetFeed;