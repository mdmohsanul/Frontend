## Javascript Interview Questions

# Q1 -

        function showData(){
            console.log('variable name is ', name); // undefined
            console.log('variable name is ', age);  // referance error : cannot access age before initialization
            var name = 'norean ';
            let age = 999;
         }

          showData();

         Explanation -- It is due to hoisting which is default behavior of js which move variable declaration at the top.
                          variable declared with let and const are also hoist but it is in TDZ until it is initialized.

# Q2 -

         for (var i = 0; i<4 ;i++){
          setTimeout(() => console.log(i),1);
            }

          for (let i = 0; i<4 ;i++){
            setTimeout(() => console.log(i),1);
           }

    Explanation -- In the first for loop it gives four times 4 and in second loop it will give 0 1 2 3.
                    Because declaration of var is moved to the top and in every timeout it refer to the common i variable.but in the second loop every time it refer to new let variable.

# Q3 -

        const income = {
                    skills : 108,
                    monthly(){
                    return this.skills *108;
                    },
                    yearly: () => this.skills * 108
                }
               console.log(income.monthly()); //11664
               console.log(income.yearly()); //NaN
    Explanation - In monthly method this refer to the object in which it is Present .
                    but yearly is arrow function and inside arrow function this keyword refers parent scope and income parent scope is window object and there is no skills variable so it will be undefined and undefined * 108 will give output NaN.

# Q4 -

                console.log(+true); // 1
                console.log(+false); // 0
                console.log(+'true'); // NaN
                console.log(+null); // 0
                console.log(+undefined); // NaN

    Explanation -- if we use + operator with any data type then it will try to convert it in number

## Falsy values in Js - false , 0 , ''(empty string), null, undefined, NaN

# Q5 -

                console.log(!'java'); //false
                console.log(!true); //false
                console.log(!false); // true
                console.log(!0); //true
                console.log(!103); //false

        Explanation -- negation operator or Logical not operator and it try to covert the valu in boolean
                        if we use with truthy value then it will convert it false
                        and with falsy value it wil true .

# Q6 -

                let a = {greeting:'Hi'};
                let z = a;

                z.greeting = 'bye'

                console.log(a.greeting); // Bye

       Explanation -- z will change the value of greeting because
                      Objects are of referance type so in variable z we are not putting the value of variable a instead we
                      put the referance of a.
                      If we do anything on a then it will reflect on a.

                To prevent from these we use
                  1 - Object Destructuring --> let z = {...a};
                  2 - let z = Object.assign({}.a);
                  3 - let z = structuredClone(a);  (if the object is nested)

# 1. What is the difference between let, var and const ?

# 2. What is Hoisting?

# 3. What is Temporal Dead Zone?

# 4. What i s difference between == and ===?

# 5. What is scope in Javascript.

# 6. What is type conversion and type coercion.

# 7. What is pure function.

# 8.
