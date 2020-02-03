import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    SlideOptions = {
        items: 1,
        lazyLoad: false,
        autoPlay: true,
        navigation: false,
        navigationText: false,
        pagination: true
    };
    items = [
        {
            header: `About me`,
            description: `Hi I'm pin. I tend to view myself as a generalist since I try not to focus on any given technology.
             My skills range from I have worked with .Net Code,Clean Architecture, CQRS, N-Tier, Web API, C#, Angular,React JS, CSS, HTML, JavaScript, MVC, and jQuery.
             I have been exposed to a wide variety of technologies in my career and consider myself to be very adaptable.`

        },
        {
            header: `My Education`,
            description: `North-Chiang Mai University  <br/>
            Major	: B. Sc. In Software Engineering <br/>
            Hangdong Rath Rat Uphatham school <br/>
            2004 - 2007: Science-Mathematics program
            `

        }, {
            header: `My Certificates`,
            description: `70-480 Programming in HTML5 with JavaScript and CSS3.`

        },

    ]
    constructor() { }

    ngOnInit() {
    }

}
