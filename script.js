'use strict';

let output = document.querySelector(".output-data");
const def_text = document.querySelector(".in").innerHTML;
let input_cmd = document.querySelector('.type_pannu');
let help_helper = document.querySelector('.help-helper');
printHelpCmd();

function init() {
    document.querySelector('body').addEventListener('keydown', function(e) {
        var val = input_cmd.value;
        if (e.key === 'Enter' && val != "") {
            main(val.trim());
        }
    });
}

function main(val) {
    clearInputBox();
    modhalVelai(val);
    switch (val) {
        case 'help':
            printHelpCmd();
            break;
        case 'resume':
            printResumeCmd();
            break;
        case 'whoami':
            printAboutCmd();
            break;
        case 'projects':
            printProjectsCmd();
            break;
        case 'achievements':
            printAchievementsCmd();
            break;
        case 'techstack':
            printTechStackCmd();
            break;
            /*
            case 'certifications':
                printCertificationsCmd();
                break;
            case 'socials':
                printAllSocialsCmd();
                break;
            */
        case 'linkedin':
            openLinkedin();
            break;
        case 'github':
            openGit();
            break;
        case 'leetcode':
            openLeetcode();
            break;
        case 'skillrack':
            openSkillrack();
            break;
        case 'clear':
            clearOutput();
            break;
        default:
            illaSaab();
            break;
    }
    input_cmd.focus();
    input_cmd.scrollIntoView({ behavior: 'smooth' });
}

function clearInputBox() {
    input_cmd.value = "";
}

function clearOutput() {
    output.innerHTML = "";
}

function modhalVelai(cmd) {
    const html = `<p class="us-clr">${def_text}</p><p class = "text" style = "display:inline-block">${cmd}</p><br />`;
    output.insertAdjacentHTML('beforeend', html);
}

function illaSaab() {
    const html = `<br /><p class = "text">Command does not exist! ${help_helper.innerHTML}</p> <br />`;
    output.insertAdjacentHTML('beforeend', html);
}

function printHelpCmd() {
    let data = "";
    data += '<br />';
    data += "<p class = 'text' style='font-size: 20px;'><span class = 'highlight-cmd'>whoami</span> - A quick introduction about me.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>resume</span> - To take a look at my resume.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>projects</span> - To know & view my recent projects.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>achievements</span> - To know my accomplishments till now.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>techstack</span> - To take a look at my skillset.<br /></p>";
    /*data += "<span class = 'highlight-cmd'>certifications</span> - To view my certifications.<br />";
    data += "<span class = 'highlight-cmd'>socials</span> - To take a look at all my socials.<br />";*/
    data += "<p class = 'text'><span class = 'highlight-cmd'>linkedin</span> - To view my linkedin profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>github</span> - To view my Github profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>leetcode</span> - To check out my leetcode profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>skillrack</span> - To check out my skillrack profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>help</span> - To view all the available commands.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>clear</span> - To clear the terminal window.<br /></p>";
    data += `<br />`;

    output.insertAdjacentHTML('beforeend', data);
}

function openLinkedin() {
    output.insertAdjacentHTML('beforeend', `<br /><p class = "text">Opening LinkedIn...</p><br />`);
    setTimeout(() => {
        window.open('www.linkedin.com/in/mithrakaliraj', '_blank');
    }, 3000);
}

function openGit() {
    output.insertAdjacentHTML('beforeend', `<br /><p class = "text" >Opening GitHub...</p><br />`);
    setTimeout(() => {
        window.open('https://github.com/mithrakaliraj', '_blank');
    }, 3000);
}

function openLeetcode() {
    output.insertAdjacentHTML('beforeend', `<br /><p class = "text">Opening Leetcode...</p><br />`);
    setTimeout(() => {
        window.open('https://leetcode.com/u/Mithra_04/', '_blank');
    }, 3000);
}

function openSkillrack() {
    output.insertAdjacentHTML('beforeend', `<br /><p class = "text">Opening Skillrack...</p><br />`);
    setTimeout(() => {
        window.open('https://www.skillrack.com/faces/resume.xhtml?id=404296&key=d39c7341bfb3cf8f54c542aac3f7405960452a93', '_blank');
    }, 3000);
}

function printAboutCmd() {
    const html = `<br /><div class = "container">
    <div class = "container-right">
      <img class = "my-pic" src="mmmm" alt="my-image" />
    </div>
    <div class = "container-left">
      <p>Hello everyone! I’m Mithra, currently in my final year of Computer Science and Engineering at National Engineering College, Kovilpatti, with a current CGPA of 7.95.
My core interest lies in AI/ML and full-stack web development, where I enjoy building intelligent, user-friendly applications that solve real-world problems.

I actively contribute as the Technical Executive of the IEI club and serve as the Treasurer of the NSS club, where I take part in organizing and managing various technical and social initiatives, showcasing my leadership and multitasking abilities.

I’m proud to have earned the NPTEL Discipline Star badge, and I’m a consistently motivated learner, always striving to enhance my knowledge through hands-on learning and competitive programming.</p>
    </div>
  </div><br />`;
    output.insertAdjacentHTML('beforeend', html);
}

//update your resume
function printResumeCmd() {
    const html = `<br /><a href = "resume.pdf" download = "Mithra-cv" target = "_blank">Mithra-cv.pdf</a><br /><br />`;
    output.insertAdjacentHTML('beforeend', html);
}
//update project details here.
function printProjectsCmd() {
    const html = `<p class = "text"><ul type = "square">
    <li><a href = "https://netflixlandingpage-eight.vercel.app//" target="_blank"> Netflix Landing Page Clone (தமிழ்) - A responsive Netflix landing page clone with Tamil language support. </a></li>
    <li><a href = "https://cardflipgame-flame.vercel.app/" target="_blank"> Memory Flip Game - A beautifully styled memory-matching card game built with HTML, CSS, and JavaScript.</a></li>
    <li><a href = "https://mithrakaliraj.github.io/landingPageHBS/" target="_blank"> landingPage - Mith AI Image Generator. </a></li>
    <li><a href = "https://github.com/mithrakaliraj/IR_system" target="_blank"> IR_system - Information retrival system. </a></li>
    <li><a href = "" target="_blank"> My Portfolio - The website you are currently on. </a></li>
    </ul></p>`;
    output.insertAdjacentHTML('beforeend', html);
}

//update achievements heere
function printAchievementsCmd() {
    const html = `<ul> 
    <li>1800+ programs solved on Skillrack including mastery of 
    <li>120+ daily challenges and completion of 50+ daily tests.</li>
    <li>NPTEL Discipline Star</li>
    <li>NPTEL Motivated Learner star<li>
    </ul>`;
    output.insertAdjacentHTML('beforeend', html);
}

function printTechStackCmd() {
    const html = `<ul type = "square">
    <li>Java</li>
    <li>HTML, CSS</li>
    <li>Javascript</li>
    <li>SQL</li>
    <li>C</li>
    <li>C++</li>
    
    </ul>`;
    output.insertAdjacentHTML('beforeend', html);
}

//yet to implement certifications,all socials
// main code starts here
init();