import { ipod, rps, numbers, teainventory, joshuaanswers } from './assets/screenshots';
import { linkedin, stackoverflow, github, email } from './assets';
  
export const currentPortfolio = [
    {
        image: ipod, 
        text: 'iPod.js', 
        src: 'https://jc-ipodclassic.web.app', 
        pstn: 'object-center',
        desc: 'Audio player designed with CSS by photo reference running on Javascript.'
    },
    {
        image: joshuaanswers, 
        text: 'Peter Answers 2.0', 
        src: 'https://joshuaanswers.web.app', 
        pstn: '',
        desc: 'Replicated the Peter Answers app using React.js. By toggling the cheat, you can type the desired answer while another prompt appears in its place.'
    },
    {
        image: numbers, 
        text: 'Inventory Recorder', 
        src: 'https://uclinventory.web.app', 
        pstn: '',
        desc: 'Record/Format/Report food inventory for a small business that automatically renders based off of the day.'
    },
    {
        image: teainventory, 
        text: 'Tea Checklist', 
        src: 'https://teainventory.web.app', 
        pstn: 'object-center',
        desc: 'Record/Format/Report tea inventory based off of quick visual cues.'
    },
    {
        image: rps, 
        text: 'Rock Paper Scissors', 
        src: 'https://jc-rpsgame.web.app', 
        pstn: 'object-top',
        desc: 'Classic game created from photo reference with some added animations.'
    }
];

export const currentSocials = [
    {id: 'email', icon: email, src: 'mailto:jjdcooper6@gmail.com'},
    {id: 'github', icon: github, src: 'https://github.com/joshcooper6'},
    {id: 'stackoverflow', icon: stackoverflow, src: 'https://stackoverflow.com/users/17411692/joshua-cooper'},
    {id: 'linkedin', icon: linkedin, src: 'https://www.linkedin.com/in/joshua-cooper-9b7288109/'},
];

export const aboutMe = `Currently located in the tech utopia of Seattle. Started coding to expedite daily 
inventory tasks for a small business. Now, I have almost two years of experience building projects 
with popular front end frameworks such as React.js and TailwindCSS.
`

export const name = {
    first: 'Joshua',
    last: 'Cooper'
  };

