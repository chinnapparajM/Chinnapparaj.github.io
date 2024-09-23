const imgs = document.querySelectorAll('.product-item a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((productitem) => {
    productitem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = parseInt(productitem.dataset.id);
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

 function openTab(evt, tabName) {
        var i, tabcontent, tablinks;

        // Hide all tab contents
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Remove the 'active' class from all tab links
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab and add 'active' class
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Show the first tab by default
    document.querySelector('.tablinks').click();
