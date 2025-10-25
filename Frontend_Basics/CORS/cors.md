# Cross Origin Resource Sharing (CORS)

- It provides safety to our application.
- Two different origins cannot share resource between them.
- CORS is a browser feature.
- If we talk with server to server then there is no cors issue using Postman

So basically what us origin in term of browser

Origin -> Tuple (Scheme/Protocol + Host + PORT)

- These origin having same scheme, host and path is not considered
https://bookmyshow.in/movies
https://bookmyshow.in/user
https://bookmyshow.in/bookings

- These are having different scheme and host. so they cannot share resource

http://bookmyshow.in/movies
https://bookmyshow.com/user

# By default CORS provide Same-Origin policy

# If backend and frontend are hoisted in same origin then there is no CORS issue. Issue arises when they are hoisted in different origins.

# All control of CORS are handled in backend

FE Hosted: http://bookmyshow.com
BE Hosted : http://api.bookmyshow.com

- In every request from client in the Request Header browser send the origin form where the request is generated.
Req Headers{
  origin: http://bookmyshow.com
}

- From backend if we use CORS middleware and in the Response Header if we pass.
Response Headers{
  Access-Control-Allow-Origin: http://bookmyshow.com
}


- In public API's we can use 
Response Headers{
  Access-Control-Allow-Origin: *
}
so it will allow request from any origin which is not good for private servers.
And If we mark * then if we want some cookies to send then it will not work.


# Standard HTTP Request 
- GET
- POST

# Non-Standard HTTP Request 
- PUT
- PATCH
- DELETE

This will send first a Preflight Request OPTIONS and then actual Request


# Real Life Scenario 

- We don't allow everyone to enter or house only the person that have same origin has allowed to enter like father,mother,brother,sister. So, If a mechanic came then we have to check first.

1. whitelist URL in backend 
2. make proxy in frontend 
  - it will differ with every bundlers (vite proxy, next.js proxy)
  - proxy is a object which holds our URL
  - proxy will append the url to the route.
  - And the server will also get to know that the from where the origin came.


