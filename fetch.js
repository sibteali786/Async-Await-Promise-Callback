// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data));

// With pOST option
fetch(`https://reqres.in/api/users`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "User 1",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));
