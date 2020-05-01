## CS411 Project
#### May 1, 2020

### User Experience
When a user logins in, they should see a button on the index page. Upon clicking, they will be redirected to Spotify OAuth. Following is a snippet of code that fulfills OAuth.
```Javascript
document.getElementById('sub').addEventListener("click", function() {
    $.get({
        url: "https://accounts.spotify.com/authorize",
        contentType: "application/json",
        crossDomain : true,
        data: JSON.stringify({
            client_id : "a5ed2648aaed434d8f4fbe45d30a5cb6",
            redirect_uri : "http://localhost:5000",
            response_type : "token"
        })
    })
})
```

When they complete authentication with Spotify, all of their client information will be returned with a hash.
```SQL
http://localhost:5000/#access_token=BQBZOwpLorN-MhxJ2mP7Ib6ZcjsZEgnTvBBN-AcA9DGQQK4a00GFuKFN1IhsmnlNHDY3zWVW8_qf_m_tnTifBIB8ozvNsMadLon3WhcOWl77RqkZq2H-LXHd_R4VL7DE_Tgs8OfeMNw1R67b&token_type=Bearer&expires_in=3600

# These are decomposition of redirect_uri above
access_token=BQBZOwpLorN-MhxJ2mP7Ib6ZcjsZEgnTvBBN-AcA9DGQQK4a00GFuKFN1IhsmnlNHDY3zWVW8_qf_m_tnTifBIB8ozvNsMadLon3WhcOWl77RqkZq2H-LXHd_R4VL7DE_Tgs8OfeMNw1R67b
token_type=Bearer
expires_in=3600
```

With client information, we will be able to get users' playlists. Here, we will store user's playlist to MongoDB.
```Python
MONGO_URI='mongodb://dbUser:Password1@ds031108.mlab.com:31108/csproj?retryWrites=false'
```

 However, Spotify is well-known for not providing lyrics. We found  [MusixMatch](https://developer.musixmatch.com/documentation/api-reference/) API that is super handy. An example usage is below.
 ```Python
 https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=righteous&q_artist=juice&apikey=ac2acd932119e89a7f58a117a5b0b1bc
 ```

It's lyrics will be returned and rendered.
```Json
callback({"message":
    {"header":
        {"status_code":200,
        "execute_time":0.12397909164429},
        "body":
            {"lyrics":
                {"lyrics_id":21596960,
                "explicit":1,
                "lyrics_body":"I will (Will)\nI will (I will)\nI will\n\nUh (Uh)\n\nAll white Gucci suit, I'm feeling righteous, yeah\nI know that the truth is hard to digest, yeah\nFive or six pills in my right hand, yeah\nCodeine runneth over on my nightstand\nTakin' medicine to fix all of the damage\nMy anxiety, the size of a planet (Yeah, ooh)\nHoles in my skull, over time\nMy heart's over ice (Woah)\n\nOver ice, I'm freezing\nBeautiful eyes, deceiving\nWe may die this evening\nCoughing, wheezing, bleeding\n...\n\n******* This Lyrics is NOT for Commercial use *******\n(1409618347384)",
                "script_tracking_url":"https:\/\/tracking.musixmatch.com\/t1.0\/m_js\/e_1\/sn_0\/l_21596960\/su_0\/rs_0\/tr_3vUCAHbh8OmTjDafQfnyLta1Dr0JFD6t9NBSfIZGAM_Rvog5ORBa-ikthUPUX2Cgoi-NnMv2Jl7jcm7IwU7onUqLboei2Vf6m2no3IQspfxQwWW0M2QkvdknNJYUfHsNBdM_yVbKrFE-uAl3ztFWT9cK9ctQk-TIwQAlsx0ik1Nn84F4lWraKysQK1CnwZtHkP4X81lGCElUZvr2UNcBadFpdoTH7VMUwL0tBEESzSobM-aSGppHKBaDZ3ZaIu5_J0abaaecQkgFZvvS5EglParM1DRH4RngHHAMILgU7QuUg-aKX8Cg6tfbss1q-K9X9_DjjsZDppoP3IXBdPvkKDWepSPY6t3bKYWy7e4kfdLFiGUINm4wcjp6H_k63dM-gvKVAdDVvtylOe5B5njB35UgbPKItEhQC5rLVq7tRqmquiZZ7Je4zLPnb4xag-CDRh_kN1AU\/",
                "pixel_tracking_url":"https:\/\/tracking.musixmatch.com\/t1.0\/m_img\/e_1\/sn_0\/l_21596960\/su_0\/rs_0\/tr_3vUCAH9oUw27DtWHhkcoCRQaqM89NokdbeKxuOGjxLGHVA4d_bhgPRjgJ-LmlL2rfw4BkbblKXKrsefK85m3v1g5NL_6qik80wZVfYwBkrTmb1BrWcoZApN-aZBPJaFEEmm6thbqYHguXdCMT8p1BxDY_4_2hc_cXbq7vWYrmOODnOU9CxqglcjIY06SmbGtDzY5xMgF9RdP53Defyn3IZlK4Wx0aGiUxdhaQs2zhhAQVKOZNxQkmxw8Iu44fBaLXdMg711mE5sm57SzNbjDkCVeo56pRHprh6szFQxlExquF1BALxghqBvnx7wNekl44y41TAZEDtQVCznzyDSyjU151jYnPAGGmCvjlBB_KFB8R2rStdWj1rJFTIrtCR00eXNQl-J-1T-fLCBKQLesyOHhbR104kQAg6dfpI4WCyRsyZYz68RYUUe_9nZ_IcIWGA5aM5jy\/",
                "lyrics_copyright":"Lyrics powered by www.musixmatch.com. This Lyrics is NOT for Commercial use and only 30% of the lyrics are returned.",
                "updated_time":"2020-04-27T20:55:22Z"}}}});

```

### Difficulties
Our team would like to acknowledge the fact that COVID-19 brought us trouble and turbulence on our schedule. We were very delayed and could not hand in the complete thing by the deadline. However, if we had any chance, we would like to get it done!!

### Things that we looked at


- Python Flask vs. Node JS
    - We admit that we went for a non-industry but more handy tool Python. Although Python Flask was very easy to set up, but we cannot find enough material online to deal with OAuth and deployment.
    - OAuth requires cross-domain requests, we did not find out how to deal with it and thus our OAuth works only if we enter this in our browser `https://accounts.spotify.com/authorize?client_id=a5ed2648aaed434d8f4fbe45d30a5cb6&redirect_uri=http://localhost:5000&response_type=token`
    - Deployment: we are literally learning by doing... We traced down to `gunicorn` an add-on for `Flask`... We tried to upload files to _PythonAnywhere_ and _Heroku_ but we did not get it to work

- Module spotipy vs. Spotify OAuth
    - We spent some time on spotipy, a wrapper for Spotify APIs. Then we learned, we needed to process Client-side OAuth, not Sever-side.
    - When we tried client-side OAuth, we ran into CORS trouble... We tried Jsonp and adding headers; neither worked.

- Google API, Twitter API
    - We tried.
    - Google API obviously has better documentations, but it's restrictions are tight. Especially with Google API, it requires API key and OAuth2 at the same time. We had a hard time setting up OAuth2 redirect_URI and decided to abandon it.
