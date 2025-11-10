# Keys

# Keys are attributes that we assign to an element when rendering lists React
- key must be unique among siblings
- Array indexes is not recommended to use as keys

# Why it is important

- Key help to identify that which item in the list is changed, added, removed without-rerendering the entire list
- React uses keys in reconcilation process (diffing) to match existing elements to new elements efficiently.

# Without proper key

- React may re-render more elements than needed
- Performance may degrade in large lists
- UI may behave unexpectedly

# Why array index is not used as key?
- It is not stable Because when we modify list (add,remove) elements then index will change and keys also, so UI may behave unexpectedly in large lists

- If the list is static (never changes order, items don’t add/remove) then we can use.