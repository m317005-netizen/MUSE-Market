const pressLink = document.querySelector('.press-link');

if(pressLink){

    pressLink.addEventListener('click',function(e){

        e.preventDefault();

        document
            .querySelector('.page-transition')
            .classList.add('active');

        setTimeout(()=>{
            window.location.href = "evaluation.html";
        },800);

    });

}