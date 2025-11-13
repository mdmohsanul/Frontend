## Redux

- Immutability -> immutable achieve karne me help krta hai
- redux is a javascript library so to use in react we have to install another package (react-redux)
- const store = {} - sare application ke data ek store object me store rehta hai.
  And there are some sort fo rules through which we can update our store object instead of doing directly.

# How to update store

1. create a object - action -> type:"Kya_Update_Krna_Hai", payload:value
2. dispatch(action) - useDispatch() hook jo milta hai react-redux se
3. reducer function - reducer invoke -> jo action leta hai or current state leta hai
4. component render -> subscription - useSelectore() hook --> react-redux

## Benefits of using redux

- To achieve Immutability
- To avoid prop drilling
- Debugging is very easy with dev tools
- redux data stores in heap memory bcoz object are stored in heap memory

// step 1 - create initial state
const initialState = { name: "React" };

// step 3 create reducer
function reducer(state = initialState, action) {
// it will recieve state and action

// based on action return a new state

// this educer function must return a state
if (action.type === "UPDATE_NAME") {
// state.name = action.value // Never update the state like this
return { ...state, name: action.value };
}
return state;
}

// step 4 -- create actions
const action = {
type: "UPDATE_NAME",
value: "35",
};

// step 2 create store
const store = createStore(reducer);

// step 6 subscribe to store
store.subscribe(() => {
console.log("store changed", store.getState());
});

// step 5 -- dispatch action
store.dispatch(action);
console.log(store.getState());
