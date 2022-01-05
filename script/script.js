window.addEventListener('scroll', function(e){
    const target = document.querySelectorAll('.scroll');
    //window.pageYoffset provides values of upper-left corner of window
    let scrolled = window.pageYOffset;

    let index = 0, length = target.length; //length points to the total of elements in array
    for(index; index < length; index++){
        let position = window.pageYOffset * target[index].dataset.rate;//target[index] points to current array position

        if(target[index].dataset.direction === 'y-Axis'){
            target[index].style.transform = 'translate3d(0px,'+position+'px, 100px)';
        }else{
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            
            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, -100px)';
        }

    }
});