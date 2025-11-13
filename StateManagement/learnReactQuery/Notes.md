## What is Tanstack / React query?
- It's a library that helps you to manage the state of data you fetch from servers, like APIs in your react applications.
- It is one of the most powerful tools for managing server-side state in react.

# Advantages

- Data Fetching Made Easy: With a simple useQuery hook, fetching data becomes super easy.
- Builtin Loading and Error states: No need to write custom code for handling loading, error  or success states.
- Automatic Caching: React query automatically caches your data.
- background refetching: If your data gets stale(basi) out of date, Tanstack query can refetch it in the background. eg: like in any trading app the price of the stocks changes in every miliseconds so with react query it fetches automatically.
- Pagination and Infinite scrolling: Handling pagination or infinite scrolling? React query solves those complex use cases

## TanStack Query makes working with server-side data in react a breeze. It's fast, eficient, and reduces the amount of boilerplate code you need to write. If you're working on any app that relies on API data, this tool is an absolute game-changer.

## npm i @tanstack/react-query

# QueryClientProvider
- This component is a part of react-query and is used to provide the QueryClient instance to your entire react app.
- So that all the components in the tree can use the useQuery, useMutation, and other hooks provided by react-query.

# QueryClient
- Is is the core part of the react-query library. It manages the caching, background fetching, data synshronization, and other query-related logic. It provides a centralized store for managing and caching asynchronous data in your application.

# new QueryClient()
- This creates a new QueryClient instance with default settings. You can configure it with options if needed (eg: setting cache time, stale time, etc)

# What is Query Client Provider?

- In React Query, the QueryClientProvider is a crucial component that provides query client instance to your react application.
- This Query Client is responsible for managing all the data fetching, caching, and state management related to your queries.

# What is useQuery hook?

- It is a hook provided by react query to get the data
- It accepts minimum two arguments:-

1. queryKey:["data"]
2. queryFn : getData

# queryKey

The queryKey is typically an array or string that uniquely identifies a query. It allow react Query to determine if the data in the cache is associated with a particular request.

It is used to cache data with a specific key and refetch or update data when certain dependencies change.

- Whenever queryKey changes our component re-render. we can assume it as a useState

# queryFn

- just pass the function reference don't call it
- We can assume queryFn as useEffect

# useMutation 
- Used for creating, updating, or deleting data (POST, PUT, DELETE requests) and allows triggering manual side effects

# Garbage Collection Time (gcTime)

- When you use React Query to get Data, it saves the results in a local cache. This means if you ask for the same data again, React Query will give you saved data instead of making API request. The cache updates automatically if the data changes, so you always get the latest information.

- By default, inactive queries are garbage collected after 5 minutes. This means that if query is not being used for 5 minutes, the cache for that query will be cleaned up.
- We can also define the gcTime by passing another property in useQuery hook

- USE CASE: Suppose if we have a fetch products and display as a product cards, after that if we move to another page and then move again to product listing page. React Query will show the saved list from the cache and show the list, but that doesn't mean it does not make a server call. It always make an API call and if the list remain intact(doesn't change) then the data will come from cache and if there is any change in the product list then react query will automatically upadtes the cache.

## Stale Time (expires or basi)

- In react query staleTime is the configuration option that determines how long fetched data is considered fresh before it needs to be refetched.

Fresh data:
When data is initially fetched or updated, it's considered fresh.

Stale Data:
After the staleTime duration (specified in milliseconds) elapses, the data is considered stale.

Default value:
The default staleTime is 0, meaning data becomes stale immediately after being fetched. this ensures data is always up-to-date but can lead to frequent refetching.

# Pooling 

- In React Query, polling refers to the technique of fetching data from an API at regular  intervals to keep the UI up-to-date with the latest information. This is espicially  useful for scenarios where data changes frequently and you want to display real-time updates without requiring the user to manually refresh the page.

`refetchInterval` option: The simplest way to enable polling is to pass the `refetchInterval` option to the 'useQuery' hook. This option specifies the interval (in milliseconds) at which React Query should automatically refetch the data.

// When you want to fetch the data even in background or you are in the anotehr tab, 
`refetchIntervalInBackground` option: If you want to continue polling even when the component is not mounted, you can use the refetchIntervalInBackground option

# useMutation

- useMutation hook is used to modify or send data to a server (create, update and delete)

syntax - useMutation(mutationFn,{
    optional configuration options
})

We can provide various configuration options to customize the behavior of the mutation such as :

- onSuccess : A callback function that runs when the mutation is successful.
- onError: A callback function that if the mutation fails.
- onSettled: A callback function that runs regardless of success or failure
- mutationKey:  A unique key to identify the mutation in the cache.

# mutate()

- The mutate() function is used to execute the mutation in React Query.

The process is same whether you're 
- Deleting data
- Updating Data
- Creating new data

When you call .mutate() it tells react query to run the muatation function defined inside the useMutation hook. This is needed because the mutation is an action that changes data, unlike queries, which are used to fetch data are often auto executed