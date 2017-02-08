function $(q) {
  return document.querySelector(q)
}

function $A(q) {
  return document.querySelectorAll(q)
}

//*
$(".left").addEventListener("click", (e) => {

  let elements = $(".left")

  elements.childNodes.map((element) => {
    return e.target == element
  })

  console.log(elements);

  for(element of e.target.parentNode.childNodes) {
    if(e.target!=element)
      element.classList.add("inactive")
  }
  e.target.classList.add("active")
  e.target.childNodes[1].classList.remove("inactive")

  e.target.childNodes[1].addEventListener("click", (f) => {
    console.log(f.target);
  })

  /*
  if(e.target===$("#corpid")) {
    console.log(e.target);
    let els = document.querySelectorAll(".left>.menu>*")
    for(el of els) {
      if(el!=$("#corpid")) {
        el.classList.toggle("inactive")
      }
      else {
        el.classList.toggle("active")
      }
    }
    $(".card-create.corpid").classList.toggle("inactive")
  }
  //*/
}, false)
//*/
