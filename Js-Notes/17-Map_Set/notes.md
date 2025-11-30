# Maps 

- Maps are built-in data structure just like object to store data in key- value pair with some enhancement and some lore features like
- key can be of any type
- maintain the insertion order
- faster lookup for large datasets with built-in methods like
  - map.set(key, value);
  -  map.get(key);
  -  map.has(key);
  -  map.delete(key);
  -  map.clear();
  -  map.size;

# When to use Map in real world
- you want to store any type of key
- need guarenteed order
- need frequent add/ remove operations
- caching API responses

ex: const cache = new Map()
    cache.set('/users',responseData)

# Set

- Set stores unique values -no duplicate allowed
- Automatically remove duplicated
- faster existence check
- methods
  - set.add(value);
  - set.delete(value);
  - set.has(value);
  - set.clear();
  - set.size;


