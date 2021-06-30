import Tweet from './Tweet';
//import TweetFeed from './TweetFeed'
import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';


const Alltweets = ({ userName, setTweetList, TweetList ,tweetFeed, setTweetFeed}) => {

    //! GSAP animation for side bar comes up
    let alltweets = useRef(null)
    useEffect(() => {
     TweenMax.from(alltweets, 3, {opacity: -1, y: -150, ease: Power3.easeOut, delay: .5})
    },[])

    // grab the db.json file and store it in tweetFeed
    // useEffect(() => {
    //     fetch('http://localhost:8000/tweets')
    //     .then(res => res.json())
    //     .then(data => setTweetFeed(data))
    // },[])

    return (
        <div ref={ele => alltweets = ele} className="allTweets">
            {/* Go through each element in tweet list and display a tweet for it */}
            {TweetList.map((tweet) =>

                <Tweet
                    userName={userName}
                    tweet={tweet}
                    setTweetList={setTweetList}
                    TweetList={TweetList}
                    key={tweet.id}
                    
                />)}

            {/* Go through each element in tweetFeed and display all tweets saved in db.json */} 
            {/* {tweetFeed.map((tweet) => <TweetFeed
                key={tweet.id} 
                user={tweet.user}
                message={tweet.tweet} 
            />)} */}


        </div>

    )
}

export default Alltweets;