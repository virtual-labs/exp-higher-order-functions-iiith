window.currentTab = "task1";

class List {
  constructor(list) {
    this.numOfCards = list.length;
    this.num = list;
  }
}
let list1 = new List(["hello", "this", "is", "a", "list"]);
let list2 = new List(["HELLO", "THIS", "IS", "A", "LIST"]);
let list3 = new List(["A", "HELLO", "IS", "LIST", "THIS"]);

function rebuildList(listId, list) {
  var classToFill = document.getElementById(listId);
  var newdiv = document.createElement("div");
  classToFill.appendChild(newdiv);
  // newdiv.outerHTML = "<br>";
  for (var i = 0; i < list.numOfCards; i++) {
    var temp = document.createElement("div");
    classToFill.appendChild(temp);
    temp.className = "card";
    temp.innerHTML = list.num[i];
    temp.style.fontStyle = "normal";
    temp.style.color = "white";
  }
}

function clearList(listId) {
  let rem = document.getElementById(listId);
  while (rem.firstChild) {
    rem.removeChild(rem.lastChild);
  }
}

function changeTabs(e) {
  const task = e.target.parentNode.id;
  if (window.currentTab === task) {
    return;
  }

  if (window.currentTab != null) {
    document.getElementById(window.currentTab).classList.remove("is-active");
  }
  switch(window.currentTab) {
    case "task1":
      clear('parameter');
      break;
    case "task2":
      clear('value');
      break;
  }
  window.currentTab = task;
  document.getElementById(task).classList.add("is-active");

  switch (task) {
    case "task1":
      init('parameter');
      break;
    case "task2":
      init('value');
      break;
  }
}

function clear(className) {
  console.log('clear'+className);
  let elements = [...document.getElementsByClassName(className)];
  elements.forEach((ele) => {
    ele.classList.add('hidden');
  });
}

function init(className) {
  console.log('init'+className);
  let elements = [...document.getElementsByClassName(className)];
  elements.forEach((ele) => {
    ele.classList.remove('hidden');
  });
}

function makeVisible(className) {
  let x = [...document.getElementsByClassName(className)],
    i = 0;
  x.forEach((y) => {
    setTimeout(() => {
      y.classList.remove("hidden");
    }, 1000 * i);
    i++;
  });
}

function handleSubmit() {
  let elements = [...document.getElementsByClassName("blank-parameter")];
  let blank = false;
  elements.forEach((ele) => {
    if (ele.innerHTML == "") {
      blank = true;
    }
  });
  if (blank) {
    document.getElementsByClassName("all")[0].classList.remove("hidden");
    return;
  }
  if (
    elements[0].innerHTML == "stringFunc(list[i])" &&
    elements[1].innerHTML == "listFunc(list)" &&
    elements[2].innerHTML == "str.upper" &&
    elements[3].innerHTML == "lambda x: sorted(x)"
  ) {
    document.getElementsByClassName("correct")[0].classList.remove("hidden");
    document.getElementsByClassName("wrong")[0].classList.add("hidden");
    makeVisible("without");
    makeVisible("with");
  } else {
    document.getElementsByClassName("correct")[0].classList.add("hidden");
    document.getElementsByClassName("wrong")[0].classList.remove("hidden");
  }
}

function handleSubmitValue() {
  let elements = [...document.getElementsByClassName("blank-value")];
  let blank = false;
  elements.forEach((ele) => {
    if (ele.innerHTML == "") {
      blank = true;
    }
  });
  if (blank) {
    document.getElementsByClassName("all")[0].classList.remove("hidden");
    return;
  }
  if (
    elements[0].innerHTML == "map" &&
    elements[1].innerHTML == "str.upper" &&
    elements[2].innerHTML == "lambda x: sorted(x)" &&
    elements[3].innerHTML == "capAndSort(input)"
  ) {
    document.getElementsByClassName("correct-value")[0].classList.remove("hidden");
    document.getElementsByClassName("wrong-value")[0].classList.add("hidden");
    makeVisible("without-value");
    makeVisible("with-value");
  } else {
    document.getElementsByClassName("correct-value")[0].classList.add("hidden");
    document.getElementsByClassName("wrong-value")[0].classList.remove("hidden");
  }
}

window.onload = () => {
  rebuildList("list1", list1);
  rebuildList("list2", list2);
  rebuildList("list3", list3);
  rebuildList("list4", list1);
  rebuildList("list5", list3);
  rebuildList("list1-value", list1);
  rebuildList("list2-value", list2);
  rebuildList("list3-value", list3);
  rebuildList("list4-value", list1);
  rebuildList("list5-value", list3);
};

document.addEventListener("DOMContentLoaded", (event) => {
  function handleDragStart(e) {
    this.style.opacity = "0.4";

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragEnd(e) {
    this.style.opacity = "1";

    items.forEach(function (item) {
      item.classList.remove("over");
    });
  }

  function handleDragOver(e) {
    e.preventDefault();
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add("over");
  }

  function handleDragLeave(e) {
    this.classList.remove("over");
  }

  function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
    }

    return false;
  }

  let items = document.querySelectorAll(".option");
  items = [...items, ...document.querySelectorAll(".blank")];
  items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("dragenter", handleDragEnter);
    item.addEventListener("dragleave", handleDragLeave);
    item.addEventListener("dragend", handleDragEnd);
    item.addEventListener("drop", handleDrop);
  });
});
