const coversList = document.querySelector(".covers-list");
const coverItem = document.querySelectorAll(".img-cover");
console.log(coversList);






const listLinks = Array.from(coverItem).map((item) => `<li class="cover-item"><img class="img-cover" src="${item.attributes.src.value}" alt="" width="283" height="163"></li>`);




function addCover() {
    coversList.insertAdjacentHTML("beforeend", listLinks.join(""));
    }

    
    addCover();
function animationCover() {
    const coverItem = document.querySelectorAll(".cover-item");
    coverItem.forEach((item) => {
        item.addEventListener("mouseover", () => {
                
            coversList.classList.add("active");
        });
        item.addEventListener("mouseout", () => {
            coversList.classList.remove("active");
        });
    });
}

function nonStop(){
    const isActived = coversList.classList.contains("active");
    
    
}


animationCover();
nonStop();
