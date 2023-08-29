// let cities=[
//  lahore ={
//         image:"./images/badshai.jpg",
//         city : "Lahore"
//     },
//     karachi ={
//         image:"./images/mazare-quid.jpg",
//         city : "Karachi"
//     },
//     peshawar ={
//         image:"./images/peshawer.jpg",
//         city : "Peshawar"
//     },
//     islamabad ={
//         image:"./images/islamabad.jpg",
//         city : "Islamabad"
//     },
//     quetta ={
//         image:"./images/quetta.png",
//         city : "Quetta"
//     },
//     multan ={
//         image:"./images/multan.jpeg",
//         city : "Multan"
//     },
//     faislabad ={
//         image:"./images/faislabad.jpg",
//         city : "Faislabad"
//     },
//     rawalpindi ={
//         image:"./images/rawalpindi.jpg",
//         city : "Rawalpindi"
//     },
//     sahiwal ={
//         image:"./images/sahiwal.jpg",
//         city : "Sahiwal"
//     },
//     hyderabad ={
//         image:"./images/hyderabad.jpeg",
//         city : "Hyderabad"
//     },
//     muree ={
//         image:"./images/muree.jpg",
//         city : "Muree"
//     },
//     sialkoat ={
//         image:"./images/sialkot.jpg",
//         city : "Sialkoat"
//     },
//     gujranwala ={
//         image:"./images/gujranwala.jpg",
//         city : "Gujranwala "
//     },
//      bahwalpur ={
//         image:"./images/ bahwalpur.jpg",
//         city : " Bahwalpur"
//     },
//     abbottabad ={
//         image:"./images/ abbottabad.jpg",
//         city : " Abbottabad"
//     },
//     wahcantt ={
//         image:"./images/wahcant.jpeg",
//         city : "Wah Cantt"
//     },
//    larkana ={
//         image:"./images/larkana.jpg",
//         city : "Larkana"
//     },
//     deraghazi ={
//         image:"./images/deraghazikhan.jpg",
//         city : "Dera Ghazi Khan"
//     },
//     okara ={
//         image:"./images/okara.jpg",
//         city : "Okara"
//     },
//     mardan ={
//         image:"./images/mardan.png",
//         city : "Mardan"
//     },
//     swat ={
//         image:"./images/swat.jpg",
//         city : "Swat"
//     },
//     muzzafarghar ={
//         image:"./images/muzzafarghar.webp",
//         city : "Muzzafarghar"
//     },
//     bhera ={
//         image:"./images/bhera.jpg",
//         city : "Bhera "
//     },
//    khushab ={
//         image:"./images/khushab.jpg",
//         city : "Khushab"
//     },
// ]



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
        image: "./images/hyderabad.jpeg",
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


let cityCardsContainor =document.getElementById("cityCardsContainor");

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