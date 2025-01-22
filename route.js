// import {hi, hello, home} from './component.js'

const button = document.createElement("button");
button.innerText = "click to import";
document.body.appendChild(button);
const a = document.createElement("a");

async function importModule() {
  try {
    const { hi, hello, home } = await import("./component.js");

    a.href = "hi";
    a.innerHTML = hi();
    document.body.appendChild(a);

    a.addEventListener("click", (e) => {
      e.preventDefault();
      const path = a.outerText;
      history.pushState({ path: path }, "", path);
      changeName(path);
    });

    function changeName(pathname) {
      switch (pathname) {
        case "hi":
          a.innerText = hello();
          a.href = "hello";
          break;
        case "hello":
          a.innerText = home();
          a.href = "home";
          break;
        case "home":
          a.innerText = hi();
          a.href = "hi";
          break;
        default:
          a.innerHTML = hi();
          a.href = "hi";
      }
      console.log(history);
    }
    console.log(history);

    window.addEventListener("popstate", (event) => {
      const path = event.state?.path || "";
      console.log(event.state.message);
      changeName(path);
    });
  } catch (err) {
    console.log(err);
  }
}

button.addEventListener("click", () => {
  importModule();
});
