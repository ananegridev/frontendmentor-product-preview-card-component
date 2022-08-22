function changeImage(){
    let img = document.querySelector("#image");
    let mediaWidth = window.screen.width;
    if(mediaWidth <= 600){
        img.setAttribute('src', '/img/image-product-mobile.jpg');
    }
}
changeImage();

