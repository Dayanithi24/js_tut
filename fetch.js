function getData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((d) => {
      console.log(d);
    });

}

async function getData()  {
  const p1 = await Promise.all([1, 2, 3]);
  const p2 = await Promise.all([1, 2, 3, Promise.resolve(444)]);

  console.log(p1);
  console.log(p2);

  try {
    const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);
    console.log(p3);
  } catch (error) {
    console.log("error");
  } finally {
    console.log("End!!");
  }
}
getData();


