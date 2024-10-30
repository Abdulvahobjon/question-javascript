// Random 
function shuffleArray(array) {
  const shuffledArray = [...array];
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = getRandomIndex(i + 1);
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray;
}

function filterLavel(datas , degree){
  let newData = datas.filter(function(item){
    return item.level == degree
  })
  return newData
}

var dataQuestionClone  = dataQuestion

let filterBtn  = document.querySelectorAll('.filter-btn')

// glavniy 
filterBtn.forEach(function(item, index){
  item.addEventListener('click' , function(){
    filterBtn.forEach(function(item, index){
      item.classList.remove('active')
    })
    item.classList.add('active')
  })
  filterBtn[0].addEventListener('click' , function(){
    createItem(dataQuestionClone)
  })
  filterBtn[1].addEventListener('click' , function(){
    createItem(shuffleArray(dataQuestion))
  })
  filterBtn[2].addEventListener('click' , function(){
    createItem(filterLavel(dataQuestion , "oddiy"))
  })
  filterBtn[3].addEventListener('click' , function(){
    createItem(filterLavel(dataQuestion , "o'rta"))
  })
  filterBtn[4].addEventListener('click' , function(){
    createItem(filterLavel(dataQuestion , "qiyin"))
  })

})



// creat element 
let accordion = document.querySelector(".accordion-row");
function createItem(dataQuestionClone){
  accordion.innerHTML = ''
  dataQuestionClone.map((item, index) => {
    let accordionContent = document.createElement("div");
    accordionContent.classList.add("accordion-content");
    accordionContent.classList.add("headline");
    accordionContent.innerHTML = `
            <header>
              <span class="title">${index + 1}. ${" "} ${item.title}</span>
              <i class="fa-solid fa-plus"></i>
            </header>
  
            <p class="description">
              ${item.text}
            </p>
      `;
    accordion.append(accordionContent);
  });

  const accordionContent = document.querySelectorAll(".accordion-content");
console.log(accordionContent);
accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      console.log(item.querySelector("i"));
      description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
      item.querySelector("i.fa-solid").classList.replace("fa-plus", "fa-minus");
    } else {
      description.style.height = "0px";
      item.querySelector("i.fa-solid").classList.replace("fa-minus", "fa-plus");
    }
    removeOpen(index); //calling the funtion and also passing the index number of the clicked header
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";
      item2.querySelector("i.fa-solid").classList.replace("fa-minus", "fa-plus");
    }
  });
}

}
createItem(dataQuestionClone)

// 