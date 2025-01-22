import loadModule from "./generator.js";
import data from "./data.js";

window.addEventListener("load", async () => {
  const callBackMap = new Map();
  const historyMap = new Map();
  let currentComponent;
  const header = loadModule((await import("./header.js")).default, callBackMap);
  document.body.appendChild(header);
  console.log(callBackMap);
  const container = document.getElementById("container1");
  let comp1;
  let comp2;
  const markElement = document.getElementById("marks");
  const totalElement = document.getElementById("total");

  async function changeElement(path) {
    console.log(path);
    switch (path) {
      case "/routing/marks":
        try {
          if (!comp1) {
            callBackMap.set("comp1", []);
            comp1 = loadModule(
              (await import("./comp1.js")).default,
              callBackMap.get("comp1")
            );
          }
          if (!currentComponent) currentComponent = "comp1";
          unSubscribeOldComponent();
          container.replaceChildren(comp1);
          currentComponent = "comp1";
          subscribeCurrentComponent();
          console.log(callBackMap);
          addListener(callBackMap.get("comp1"));
          break;
        } catch (error) {
          console.log(error);
        }
      case "/routing/total":
        try {
          if (!comp2) {
            callBackMap.set("comp2", []);
            comp2 = loadModule(
              (await import("./comp2.js")).default,
              callBackMap.get("comp2")
            );
          }
          if (!currentComponent) currentComponent = "comp2";
          unSubscribeOldComponent();
          container.replaceChildren(comp2);
          currentComponent = "comp2";
          subscribeCurrentComponent();
          console.log(callBackMap);
          document.getElementById("update").addEventListener("click", () => {
            const mark = document.getElementById("mark").value;
            const markValue = document.getElementById("mark-value").value;
            data[mark] = Number(markValue);
          });
          addListener(callBackMap.get("comp2"));
          break;
        } catch (error) {
          console.log(error);
        }
      default:
        console.log("Exit");
    }
  }

  function unSubscribeOldComponent() {
    historyMap.set(
      currentComponent,
      callBackMap
        .get(currentComponent)
        .filter((item) => item.subscribed)
        .map((item) => item.id)
    );
    console.log("history Map", historyMap);
    callBackMap.get(currentComponent).forEach((item) => {
      item.subscribed = false;
    });
  }

  function subscribeCurrentComponent() {
    if (historyMap.get(currentComponent)) {
      callBackMap.get(currentComponent).forEach((item) => {
        item.subscribed = historyMap.get(currentComponent).includes(item.id);
        if (item.subscribed) item.callback(data);
      });
    }
  }

  markElement.addEventListener("click", (e) => {
    e.preventDefault();
    const path = URL.parse(markElement.href).pathname;
    history.pushState({ path: path }, "", path);
    changeElement(path);
  });

  totalElement.addEventListener("click", async (e) => {
    const path = URL.parse(totalElement.href).pathname;
    history.pushState({ path: path }, "", path);
    changeElement(path);
    e.preventDefault();
  });
  window.addEventListener("popstate", (event) => {
    const path = event.state?.path || "/routing/demo.html";
    changeElement(path);
  });

  function addListener(map) {
    const subscribedCheckboxes = document.getElementsByName("subscribe");
    console.log(subscribedCheckboxes);
    for (const checkbox of subscribedCheckboxes) {
      checkbox.addEventListener("click", () => {
        const key = checkbox.getAttribute("unique-id");
        const callbackItem = map.find((item) => item.id === key);
        if (callbackItem) {
          callbackItem.subscribed = checkbox.checked;
          if (checkbox.checked) callbackItem.callback(data);
        }
      });
    }
  }

  function watchVariable(obj, propName, callback) {
    let value = obj[propName];
    Object.defineProperty(obj, propName, {
      get() {
        return value;
      },
      set(newValue) {
        if (newValue !== value) {
          value = newValue;
          callback();
        }
      },
    });
  }

  for (const prop of ["mark1", "mark2", "mark3", "mark4", "mark5"]) {
    watchVariable(data, prop, () => {
      callBackMap.values().forEach((array) => {
        array.forEach(({ subscribed, callback }) => {
          if (subscribed) {
            callback(data);
            console.log(1);
          }
        });
      });
    });
  }
});
