import React, { useReducer } from "react";
import { formReducer } from "./FormReducer";
const initialState = {
  name: "",
  email: "",
  password: "",
  error: "",
  isLoggedIn: false,
};

const FormUsingReducerHooks = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.name || !formData.password) {
      dispatch({ type: "ERROR" });
      return;
    } else {
      dispatch({ type: "SUBMIT" });
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <div></div>

        {formData.isLoggedIn && (
          <div>
            <p>You are successfully logged In</p>
            <div>
              <button onClick={() => dispatch({ type: "LOGOUT" })}>
                Logout
              </button>
            </div>
          </div>
        )}

        {!formData.isLoggedIn && (
          <form onSubmit={submitHandler}>
            {formData.error && <p>{formData.error}</p>}
            <div>
              {" "}
              <label htmlFor="name">Name: </label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  dispatch({ type: "USERNAME", payload: e.target.value })
                }
                style={{ border: "1px solid black" }}
              />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
                style={{ border: "1px solid black" }}
              />
            </div>

            <div>
              <label htmlFor="password">Password: </label>
              <br />
              <input
                type="number"
                name="password"
                id="password"
                value={formData.password}
                onChange={(e) =>
                  dispatch({ type: "PASSWORD", payload: e.target.value })
                }
                style={{ border: "1px solid black" }}
              />
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "5px 10px",
                  margin: "10px",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default FormUsingReducerHooks;
