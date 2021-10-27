function main(){
    let buttons = document.querySelectorAll("button");
    for(let button of buttons){
        button.style.backgroundColor = "hotpink";
    }
    let articles = document.querySelectorAll(".art-1,.art-2,.art-3");

    for(let article of articles){
        article.style.backgroundColor = "lightblue";
    }
    let paragraph = document.createElement("p");
    paragraph.innerText = "hello";
    document.querySelector(".art-1").append(paragraph);
    let main = document.querySelector("main");
    main.innerHTML += 
    <article class="art-4">
        <figure><img src="img/bild1.jpg" alt="hoodie"></figure>
            <h2>Cat</h2>
            <h3>Cool</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>
        <button>buy</button>
    </article> 
    main.innerHTML += 
    <article class="art-4">
        <figure><img src="img/bild1.jpg" alt="hoodie"/></figure>
            <h2>Cat</h2>
            <h3>Cool</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>
        <button>buy</button>
    </article> /
    let firsth3 = document.querySelector("h3");
    firstH3.innerText = "potato";
    let anchor = document.querySelector("footer section article a");
    anchor.innerText = "Start";
let notFb = document.querySelector("footer section article:nth-of-type(3) a:nth-of-type(2)");
    notFb.innerText = "WhatsApp";

    let changeContact = document.querySelector("footer section article a:nth-of-type(3)");
    changeContact.innerText = "Mail Us";

    let changeShirtInfoFire = document.querySelector(".art-2 p");
    changeShirtInfoFire.innerText = "falafel"; 

    let middleButton = document.querySelector(".art-2 button");
    middleButton.innerText = "köp";
    middleButton.style.backgroundColor = "red";

    middleArticleColorSwap = document.querySelector(".art-2");
    middleArticleColorSwap.style.backgroundColor = "lightblue";

    changeAddress = document.querySelector("footer section article:nth-of-type(2) p");
    changeAddress.innerText = "stenvägen 2" + '\n' +'\n' + "14569 falafel";

    changeColorOfParagraph = document.querySelectorAll("p");
    for(let paragraph of changeColorOfParagraph){
        paragraph.style.color = "brown";
    }

    let buttons = document.querySelectorAll("button");
    for(let button of buttons){
        button.innerText = "add to cart";
    }
    let active = document.querySelector("section article a");
    active.innerHTML =
        <a class = "active" href="#">Home</a>
    ;

    let logo = document.querySelector(".logo");
    logo.classList.remove(logo);

}

main();