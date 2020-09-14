window.addEventListener('DOMContentLoaded', function () {
    const portFItems = document.querySelectorAll('.portFItems');
    portFItems.forEach(e => {
        e.addEventListener('click', function (el) {
            console.log(el);  
        })
        
    });
})