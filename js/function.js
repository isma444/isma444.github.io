window.addEventListener("DOMContentLoaded",  function(e) {

    let burger = document.querySelector(".burger");
    
    burger.addEventListener("click", menu);
    document.querySelector("body").addEventListener("click", function(e){
        deplacement()
    })

})

function addClassActive(){
    let menu = document.querySelector(".menu");
    menu.classList.add("active")
}

function removeMenu(){
    let menu = document.querySelector(".menu");
    menu.remove();
}

function menu(){

    let menu = document.querySelector(".menu");

    if(menu != undefined){
        menu.classList.remove("active");
        setTimeout(removeMenu, 500);
    }else {
        creatMenu();
        setTimeout(addClassActive, 1) ;

    }

}

function creatMenu(){

    let body = document.querySelector("body");
    let div = document.createElement("div");
    div.classList.add("menu")

    let nav = document.createElement("nav");

    let index = createLink("index.html", "page de presentation", "Presentation" );
    let hobbies = createLink("hobbies.html", "page de hobbies", "Hobbies" );
    let contact = createLink("contact.html", "page de contact", "Contact" );
    
    
    body.prepend(div);
    div.prepend(nav);
    nav.prepend(index);
    nav.prepend(hobbies);
    nav.prepend(contact);

    return div
}

function createLink(href , title , innerText){

    let a = document.createElement("a");
    a.setAttribute("href" , href);
    a.setAttribute("title" , title);
    a.innerText = innerText;

    return a
}

function deplacement (){

    
    
    
    setInterval(decalage, 1, ".langage")
    setInterval(decalage, 1, ".outil")

}

function selectMode(option){

    let box = document.querySelector(".listes").getBoundingClientRect()
    let langageBox = document.querySelector(option).getBoundingClientRect();
    if(langageBox.left == box.left ){
        mode = "right"
    }else if(langageBox.right == box.right){
        mode = "left"
    }
    return mode
}


// let val=0;
// function decalage(option){ 
   
//    let mode = selectMode(option);
    
//     let box = document.querySelector(".listes").getBoundingClientRect()
//     let langageBox = document.querySelector(option).getBoundingClientRect();
//     let langage = document.querySelector(option);

//     if(langageBox.right < box.right && mode == "right"){
//         val ++
//         langage.style.left= val + 'px';

//     }else if ( langageBox.right > box.right && mode == "left"){
//         val--
//         langage.style.left =   val + 'px';
//     }

    

// }