
let cities = [
    {
        image: "./images/badshai.jpg",
        city: "Lahore"
    },
    {
        image: "./images/mazare-quid.jpg",
        city: "Karachi"
    },
    {
        image: "./images/peshawer.jpg",
        city: "Peshawar"
    },
    {
        image: "./images/islamabad.jpg",
        city: "Islamabad"
    },
    {
        image: "./images/quetta.png",
        city: "Quetta"
    },
    {
        image: "./images/multan.jpeg",
        city: "Multan"
    },
    {
        image: "./images/faislabad.jpg",
        city: "Faislabad"
    },
    {
        image: "./images/rawalpindi.jpg",
        city: "Rawalpindi"
    },
    {
        image: "./images/sahiwal.jpg",
        city: "Sahiwal"
    },
    {
        image: "./images/hyderabad2.jpg",
        city: "Hyderabad"
    },
    {
        image: "./images/muree.jpg",
        city: "Muree"
    },
    {
        image: "./images/silakot.jpg",
        city: "Sialkot"
    },
    {
        image: "./images/gujranwala.jpg",
        city: "Gujranwala"
    },
    {
        image: "./images/bahwalpur.jpg",
        city: "Bahwalpur"
    },
    {
        image: "./images/abbottabad.jpg",
        city: "Abbottabad"
    },
    {
        image: "./images/wahcant.jpeg",
        city: "Wah Cantt"
    },
    {
        image: "./images/larkana.jpg",
        city: "Larkana"
    },
    {
        image: "./images/deraghazikhan.jpg",
        city: "Dera Ghazi Khan"
    },
    {
        image: "./images/okara.jpg",
        city: "Okara"
    },
    {
        image: "./images/mardan.png",
        city: "Mardan"
    },
    {
        image: "./images/swat.jpg",
        city: "Swat"
    },
    {
        image: "./images/muzafarghar.webp",
        city: "Muzzafarghar"
    },
    {
        image: "./images/bhera.jpg",
        city: "Bhera"
    },
    {
        image: "./images/khushab.jpg",
        city: "Khushab"
    }
];


let cityCardsContainor =document.querySelector(".cityCardsContainor");

cities.forEach((data,index)=>{
    cityCardsContainor.innerHTML +=`
    <div class="cityCard col-lg-2 col-md-4 col-sm-12 col-12" >
    <div class="card">
        <div class="image-container">
            
            <img src="${data.image}" alt="Card Image">
        </div>
        <div class="content">
          <h2>${data.city}</h2>
        </div>
        <button class="btn ">Discover</button>
      </div>
</div>
    `
    console.log(data,index)
})