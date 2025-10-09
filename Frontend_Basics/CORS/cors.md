# Cross Origin Resource Sharing (CORS)

- It provides safety to our application.

# Real Life Scenario 

- We don't allow everyone to enter or house only the person that have same origin has allowed to enter like father,mother,brother,sister. So, If a mechanic came then we have to check first.

1. whitelist URL in backend 
2. make proxy in frontend 
  - it will differ with every bundlers (vite proxy, next.js proxy)
  - proxy is a object which holds our URL
  - proxy will append the url to the route.
  - And the server will also get to know that the from where the origin came.