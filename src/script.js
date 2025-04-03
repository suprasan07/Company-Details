const navDialog = document.getElementById("nav_dialog");
function handleMenu(){
    navDialog.classList.toggle('hidden');
}

const initialTranslateLTR = -48*4; //-ve for direction
const initialTranslateRTL =36*4; //+ve direction

function setupIntersectionObserver(element, isLTR, speed){ //element kaii andar ->line1,2,3 isLTR mai-> right to left yah left to right , then speed define 
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        // console.log(element,isIntersecting);
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler);
        }else{
            document.removeEventListener('scroll',scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback)
    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top)* speed;
        let totalTranslate =0;
        if(isLTR){
            totalTranslate = translateX + initialTranslateLTR;
        }else{
            totalTranslate =-(translateX + initialTranslateRTL);
        }
        element.style.transform =`translateX(${totalTranslate

        }px)`;
    }
}

const line1 = document.getElementById('line1')
setupIntersectionObserver(line1,true,0.15);

const line2 = document.getElementById('line2')
setupIntersectionObserver(line2,false,0.15);

const line3 = document.getElementById('line3')
setupIntersectionObserver(line3,true,0.15);

const line4 =document.getElementById('line-4')
setupIntersectionObserver(line4,true,0.8);



const dtElement = document.querySelectorAll('dt')
dtElement.forEach(element => {
    element.addEventListener('click',() =>{
        const ddId = element.getAttribute('aria-controls');
        const ddElement =document.getElementById(ddId);
        const ddArrowIcon =element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180')
    })
})