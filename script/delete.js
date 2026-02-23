// function deleteElement(id){
//     const element = document.getElementById(id);
//     element.remove();
// }

document.querySelector('main')
    .addEventListener('click', function(event) {
        if(event.target.classList.contains('del-icon')){
            const parentNode = event.target.parentNode.parentNode;
            parentNode.remove();
        }
    })