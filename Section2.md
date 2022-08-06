# 클래스 네임
- 6번째 줄 packhacker 유무에 따라 className 변화

```js
    {dummyTweets.map((tweet) => {
        const isParkHacker = tweet.username === 'parkhacker'
        const tweetUserNameClass = isParkHacker
          ? 'tweet__username tweet__username--purple'
          : 'tweet__username';
        console.log(tweet)
        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              <img src={tweet.picture}/>
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                <span className={tweetUserNameClass}>{tweet.username}</span>
                <span className='tweet__createdAt'>{tweet.createdAt}</span>
              </div>
              <div className='tweet__message'>{tweet.content}</div>
            </div>
          </li>
        );
      })}
```
