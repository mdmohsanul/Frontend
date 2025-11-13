
function multiply(a){
    return function(b){
        a * b
    }
}

const double = multiply(2)
const triple = multiply(3)

console.log(double(5))
console.log(triple(4))

// in react currying can be useful in event handlers also
const handleChange = (field) => (e) => {
  setFormData((prev) => ({ ...prev, [field]: e.target.value }));
};

// Usage:
{/* <input onChange={handleChange("email")} />
<input onChange={handleChange("password")} /> */}
