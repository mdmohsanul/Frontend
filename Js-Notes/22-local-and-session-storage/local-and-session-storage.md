What is a cookie
38 Why do you need a Cookie
39 What are the options in a cookie
40 How do you delete a cookie
41 What are the differences between cookie, local storage and session storage

## localStorage and sessionStorage

- these are storage provided by our browser.
- these are the API provided by Web API.
- It is on the window object.
- stores data in string.

# sessionStorage

- save data to sessionStorage
  sessionStorage.setItem('key','value')

- Get saved data from sesionStorage
  let data = sessionStorage.getItem('key')

- Remove saved data from sessionStorage
  sessionStorage.removeItem('key')

# localStorage

- save data to localStorage
  localStorage.setItem('key','value')

- Get saved data from localStorage
  let data = localStorage.getItem('key')

- Remove saved data from localStorage
  localStorage.removeItem('key')

# difference between localStorage and sesionStorage

- sesionStorage -> Data is lost when your session is over i.e on closing the browser or tab.
- localStorage -> Data persists even after closing your session or shut down your system

# These storage API follow same origin policy bcoz of secutity reason

Origin comprises of three things

- 1. Protocol -> http or https
- 2. Host -> flipcart.com
- 3. PORT -> 8080

So, if we are setting some data to localStorage we are setting for that particular origin
eg: if we set for origin http://akshaysaini.in

- CASE 1:
  http://akshaysaini.in/data.php -> Yes, we can access localStorage data bcoz we are on the same origin

- CASE 2:
  https://akshaysaini.in -> No, we cannot access data bcoz protocol changes

- CASE 3:
  http://blog:akshaysaini.in -> No, the host is changed

- CASE 4:
  http://blog:akshaysaini.in:8080 -> No, the PORT is changed
