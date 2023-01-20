const modal = document.querySelector('.mymodal');




window.onload = () => {
    setTimeout(() => {
        $('.modal').mymodal({ show: true });
    }, 3);
}