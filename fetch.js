// function getData() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return res.json();
//     })
//     .then((d) => {
//       console.log(d);
//     });

// }

// async function getData()  {
//   const p1 = await Promise.all([1, 2, 3]);
//   const p2 = await Promise.all([1, 2, 3, Promise.resolve(444)]);

//   console.log(p1);
//   console.log(p2);

//   try {
//     const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);
//     console.log(p3);
//   } catch (error) {
//     console.log("error");
//   } finally {
//     console.log("End!!");
//   }
// }
// getData();


function watchVariable(obj, propName, callback) {
  let value = obj[propName];

  Object.defineProperty(obj, propName, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        const oldValue = value;
        value = newValue;
        callback(newValue, oldValue);
      }
    },
  });
}

// Example usage
const data = {
  variable: 10,
};

watchVariable(data, 'variable', (newValue, oldValue) => {
  console.log(`Variable changed from ${oldValue} to ${newValue}`);
});

console.log(data.variable)
data.variable = 20;
// Output: Variable changed from 10 to 20

data.variable = 20; // No output, value didn't change