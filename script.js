/*MENU BAR*/
const windowSize = matchMedia('(max-width:768px)')
windowSize.addEventListener('change',({matches})=>{
    if(matches != true){
        menuButton.style.display = 'none'
        menuList.style.display = 'initial'
        exitMenu.style.display = 'none'
    }else{
        menuButton.style.display = 'block'
        menuList.style.display = 'none'
        exitMenu.style.display = 'none'
}})

/*NAVIGATION BAR*/
const mainPageContent = document.getElementById('main-page-content');
const projectsContent = document.getElementById('projects-content');
const resumeContent = document.getElementById('resume-content');

const projectNavLink = document.getElementById('project-nav-link');
const homeNavLink = document.getElementById('home-nav-link');
const resumeNavLink = document.getElementById('resume-nav-link')
const contactButton = document.getElementById('contact-nav-link');

homeNavLink.addEventListener('click',() =>{
    mainPageContent.style.display = 'block';
    projectsContent.style.display = 'none';
    resumeContent.style.display = 'none';
})

projectNavLink.addEventListener('click',() =>{
    mainPageContent.style.display = 'none';
    projectsContent.style.display = 'block';
    resumeContent.style.display = 'none';
});

resumeNavLink.addEventListener('click',() =>{
    mainPageContent.style.display = 'none';
    projectsContent.style.display = 'none';
    resumeContent.style.display = 'block';
})

contactButton.addEventListener('click',() =>{
    mainPageContent.style.display = 'block';
    projectsContent.style.display = 'none';
    resumeContent.style.display = 'none';
});

/*NAVIGATION BAR MOBILE*/
const menuButton = document.getElementById('menu-icon');
const menuList = document.getElementById('navLinks');
const exitMenu = document.getElementById('exit-menu-button');

menuButton.addEventListener('click', () =>{
    menuButton.style.display = 'none'
    menuList.style.display = 'block'
    exitMenu.style.display = 'inline-block'
});

exitMenu.addEventListener('click', () =>{
    menuButton.style.display = 'block'
    menuList.style.display = 'none'
    exitMenu.style.display = 'none'
})

/*CAROUSEL*/
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

/*RESUME SECTION*/
const pdfLink = document.getElementById('pdf-link');
const pdfText = document.getElementById('pdf-text');

pdfLink.addEventListener('click', ()=>{
    pdfText.innerHTML = '(This link does nothing :P)'
})

/*CONTACT FORM*/
const subjectField = document.getElementById('subject-field');
const maxLength = document.getElementById('max-length');
const subjectMaxLength = document.getElementById('subject-max-length');
const textArea = document.querySelector('textarea');
const textMaxLength = document.getElementById('message-max-length');
let subjectFieldCount = 0;
let textAreaCount = 0;

subjectField.addEventListener('keydown', ()=>{
    subjectFieldCount = subjectField.value.length
    if (subjectFieldCount >= 100){
        maxLength.style.display = 'initial'
        subjectMaxLength.style.display = 'initial'
    }else if(textAreaCount >= 1000 && subjectFieldCount < 100){
        maxLength.style.display = 'initial'
        subjectMaxLength.style.display = 'none'
    }else{
        maxLength.style.display = 'none'
        subjectMaxLength.style.display = 'none'
    }
})

textArea.addEventListener('keydown',()=>{
    textAreaCount = textArea.value.length
    if (textAreaCount >= 1000){
        maxLength.style.display = 'initial'
        textMaxLength.style.display = 'initial'
    }else if(textAreaCount < 1000 && subjectFieldCount >= 100){
        maxLength.style.display = 'initial'
        textMaxLength.style.display = 'none'
    }else{
        maxLength.style.display = 'none'
        subjectMaxLength.style.display = 'none'
    }
})

const paginationPhoto = document.getElementById('pagination-photo');
const openLibraryPhoto = document.getElementById('open-library-photo');
const videoExitBtn = document.getElementById('exit-video-btn');
console.log(document.getElementsByTagName('source')[0])
paginationPhoto.addEventListener('click' , function(){
    document.getElementsByTagName('video')[0].currentTime = 0;
    document.getElementsByTagName('video')[0].style.display = 'initial'
    document.getElementsByTagName('video')[1].style.display = 'none'
    document.getElementById("overlay").style.display = "flex";
}) ; 
openLibraryPhoto.addEventListener('click' , function(){
    document.getElementsByTagName('video')[1].currentTime = 0;
    document.getElementsByTagName('video')[1].style.display = 'initial'
    document.getElementsByTagName('video')[0].style.display = 'none'
    document.getElementById("overlay").style.display = "flex";
}) ; 
videoExitBtn.addEventListener('click',function(){
    document.getElementById("overlay").style.display = "none";
})
