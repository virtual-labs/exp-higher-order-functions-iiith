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
  document.getElementsByClassName("all")[0].classList.add("hidden");
  let answer = ["stringFunc(list[i])", "listFunc(list)", "str.upper", "lambda x: sorted(x)"]
  let times = ['first', 'second', 'third', 'fourth']
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
    wrong = [];
    for(let i = 0; i < 4; i++){
      if(elements[i].innerHTML != answer[i]){
        wrong.push(times[i]);
      }
    }
    wrong_string = wrong.slice(0, -1).join(', ') + (wrong.length > 1 ? ' and ' : '') + wrong.slice(-1);
    document.getElementsByClassName("wrong")[0].innerHTML = `You made a mistake in the ${wrong_string} blank.`
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
  let answer = ["map", "str.upper", "lambda x: sorted(x)", "capAndSort(input)"]
  let times = ['first', 'second', 'third', 'fourth']
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
    wrong = [];
    for(let i = 0; i < 4; i++){
      if(elements[i].innerHTML != answer[i]){
        wrong.push(times[i]);
      }
    }
    wrong_string = wrong.slice(0, -1).join(', ') + (wrong.length > 1 ? ' and ' : '') + wrong.slice(-1);
    document.getElementsByClassName("wrong-value")[0].innerHTML = `You made a mistake in the ${wrong_string} blank.`
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

function dragMoveListener(event) {
  var target = event.target;
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  target.style.transform = "translate(" + x + "px, " + y + "px)";
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

interact(".drag").draggable({
  inertia: true,
  autoScroll: true,
  onmove: dragMoveListener,
  onend: function (event) {
    var target = event.target;
    target.style.transform = "";
    target.setAttribute("data-x", 0);
    target.setAttribute("data-y", 0);
  },
});

interact(".drag").dropzone({
  accept: ".drag",
  overlap: 0.01,
  ondropactivate: function (event) {
    event.target.classList.add("drop-active");
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;

    dropzoneElement.classList.add("drop-target");
    draggableElement.classList.add("can-drop");
  },
  ondragleave: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;

    dropzoneElement.classList.remove("drop-target");
    draggableElement.classList.remove("can-drop");
  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;
    var temp = dropzoneElement.innerHTML;
    console.log(dropzoneElement.innerHTML, draggableElement.innerHTML);

    dropzoneElement.innerHTML = draggableElement.innerHTML;
    draggableElement.innerHTML = temp;

    dropzoneElement.classList.remove("drop-target");
    draggableElement.classList.remove("can-drop");
  },
  ondropdeactivate: function (event) {
    event.target.classList.remove("drop-active");
    event.target.classList.remove("drop-target");
  },
});