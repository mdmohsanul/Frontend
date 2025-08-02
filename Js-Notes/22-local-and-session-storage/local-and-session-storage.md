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




🧠 “𝐖𝐡𝐲 𝐝𝐢𝐝 𝐦𝐲 𝐝𝐚𝐭𝐚 𝐝𝐢𝐬𝐚𝐩𝐩𝐞𝐚𝐫 𝐚𝐟𝐭𝐞𝐫 𝐈 𝐜𝐥𝐨𝐬𝐞𝐝 𝐭𝐡𝐞 𝐭𝐚𝐛?”
If you’ve hit that surprise in dev mode, chances are…
 👉 you used 𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐒𝐭𝐨𝐫𝐚𝐠𝐞 — and it did exactly what it’s built for.
But that’s a good thing.
 Here’s when to use 𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐒𝐭𝐨𝐫𝐚𝐠𝐞 like a pro:
🧩 𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐒𝐭𝐨𝐫𝐚𝐠𝐞 𝐢𝐬 𝐩𝐞𝐫𝐟𝐞𝐜𝐭 𝐟𝐨𝐫:
Multi-step form navigation (retain data only during the session)
Temporary user actions or selections
One-time tokens or page-specific flags
Preventing data leakage across tabs
Avoiding stale data after user leaves a tab
🔐 𝐖𝐡𝐲 𝐝𝐞𝐯𝐬 𝐥𝐨𝐯𝐞 𝐢𝐭:
 ✅ Clears itself (no manual cleanup needed)
 ✅ Scoped to a single tab — no sharing across windows
 ✅ Great for single-session UX enhancements
❌ Not meant for:
Long-term storage
Cross-tab or persistent preferences
Sensitive info (still accessible via JS)
🚀 Pro Tip:
When the user experience should reset after they close the tab — Session Storage is your best friend.
👇 Have you ever misused sessionStorage and learned the hard way?