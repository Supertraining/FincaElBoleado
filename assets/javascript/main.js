let navbod = document.getElementById(`navbod`);
let navvin = document.getElementById(`navvin`);
let navprod = document.getElementById(`navprod`);
let navcont = document.getElementById(`navcont`);

const observerFooter = new IntersectionObserver(entries1 => {
    entries1.forEach(entry => {
        if (entry.isIntersecting) {
        let int1 = setInterval(function() {
            entry.target=(navbod).classList.add(`navFooterAnimation`)
        },1000);
        let int2 = setInterval(function() {
            entry.target=(navvin).classList.add(`navFooterAnimation`)
        },2000);
        let int3 = setInterval(function() {
            entry.target=(navprod).classList.add(`navFooterAnimation`)
        },3000);
        let int4 = setInterval(function() {
            entry.target=(navcont).classList.add(`navFooterAnimation`)
            clearInterval(int1)
            clearInterval(int2)
            clearInterval(int3)
            clearInterval(int4)
            ;},4000);
    } else {
        entry.target=(navbod).classList.remove(`navFooterAnimation`);
        entry.target=(navvin).classList.remove(`navFooterAnimation`);
        entry.target=(navprod).classList.remove(`navFooterAnimation`);
        entry.target=(navcont).classList.remove(`navFooterAnimation`);
    };
    });
});
observerFooter.observe(document.getElementById(`piePag`));