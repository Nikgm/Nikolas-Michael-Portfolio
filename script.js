/*MENU BAR*/
const windowSize = matchMedia('(max-width:768px)') //Check to see if windowSize has a max-width of 768px
windowSize.addEventListener('change',({matches})=>{ //check to see if windowSize changes and see if it's still 768px
    if(matches != true){
        menuButton.style.display = 'none'
        menuList.style.display = 'initial'
        exitMenu.style.display = 'none'
    }else{
        menuButton.style.display = 'block'
        menuList.style.display = 'none'
        exitMenu.style.display = 'none'
}}) //add or remove menuButton display depending on window size

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
})//Show home page content if "Home" is clicked on navigation bar

projectNavLink.addEventListener('click',() =>{
    mainPageContent.style.display = 'none';
    projectsContent.style.display = 'block';
    resumeContent.style.display = 'none';
});//Show projects page content if "Projects" is clicked on navigation bar

resumeNavLink.addEventListener('click',() =>{
    mainPageContent.style.display = 'none';
    projectsContent.style.display = 'none';
    resumeContent.style.display = 'block';
})//Show resume page content if "Resume" is clicked on navigation bar

contactButton.addEventListener('click',() =>{
    mainPageContent.style.display = 'block';
    projectsContent.style.display = 'none';
    resumeContent.style.display = 'none';
});//Show home page content  & scroll to contact area if "Contact" is clicked on navigation bar

/*NAVIGATION BAR MOBILE*/
const menuButton = document.getElementById('menu-icon');
const menuList = document.getElementById('navLinks');
const exitMenu = document.getElementById('exit-menu-button');

menuButton.addEventListener('click', () =>{
    menuButton.style.display = 'none'
    menuList.style.display = 'block'
    exitMenu.style.display = 'inline-block'
});//Show navigation bar options if menu button is clicked on mobile view

exitMenu.addEventListener('click', () =>{
    menuButton.style.display = 'block'
    menuList.style.display = 'none'
    exitMenu.style.display = 'none'
})//Show menu button if "X" is clicked on navigation menu on mobile view

/*CAROUSEL*/
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})//add 'active' class to carosel panel that is clicked

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}//once a new carosel panel is clicked, remove 'active' class on all panels

/*CONTACT FORM*/
const subjectField = document.getElementById('subject-field');
const maxLength = document.getElementById('max-length');
const subjectMaxLength = document.getElementById('subject-max-length');
const textArea = document.querySelector('textarea');
const textMaxLength = document.getElementById('message-max-length');
let subjectFieldCount = 0;
let textAreaCount = 0;

subjectField.addEventListener('keydown', ()=>{
    subjectFieldCount = subjectField.value.length //for every keydown, let the subjectFieldCount increase to the length of the subjectField
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
}) //check if the subjectFieldCount is larger than max length, if yes show text saying 'max limit reached'

textArea.addEventListener('keydown',()=>{
    textAreaCount = textArea.value.length //for every keydown, let the textAreaCount increase to the length of the textArea
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
}) //check if the textAreaCount is larger than max length, if yes show text saying 'max limit reached'

const paginationPhoto = document.getElementById('pagination-photo');
const openLibraryPhoto = document.getElementById('open-library-photo');
const videoExitBtn = document.getElementById('exit-video-btn');

paginationPhoto.addEventListener('click' , function(){
    document.getElementsByTagName('video')[0].currentTime = 0;
    document.getElementsByTagName('video')[0].style.display = 'initial'
    document.getElementsByTagName('video')[1].style.display = 'none'
    document.getElementById("overlay").style.display = "flex";
}); //if paginationPhoto is clicked, show overlay along with pagination video
openLibraryPhoto.addEventListener('click' , function(){
    document.getElementsByTagName('video')[1].currentTime = 0;
    document.getElementsByTagName('video')[1].style.display = 'initial'
    document.getElementsByTagName('video')[0].style.display = 'none'
    document.getElementById("overlay").style.display = "flex";
});  //if paginationPhoto is clicked, show overlay along with pagination video
videoExitBtn.addEventListener('click',function(){
    document.getElementById("overlay").style.display = "none";
}) //if get rid of video overlay if "X" button is clicked
