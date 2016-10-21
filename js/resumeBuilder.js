var bio = {
    name: "Joel Rajkumar",
    age: "23",
    role: "Web Developer",
    contacts: {
        email: "JoelRajkumar@yahoo.com",
        "mobile": "646-221-5421",
        "github": "joelkraj",
        "twitter": "@joelkraj",
        "location": "New York",
        "blog": "irldevguy.com",
        "youtube": "@irldevguy"

    },
    welcomeMsg: "Hello there! I am a hard working Developer and Student!",
    skills: ["Programming", "JS", "HTML", "CSS", "Git", "Grunt", "Node.JS", "Angular", "MEAN Stack"],
    bioPic: "images/fry.jpg"
};

var education = {
    schools: [{
        name: "Stony Brook University",
        location: "Stony Brook, NY",
        degree: "Bachelors(inprogress)",
        major: "CS",
        dates: "2015, 2017, 2018",
        url: "https://www.stonybrook.edu"
    }],
    onlineCourses: [{
        title: "Frontend Nanodegree",
        school: "Udacity",
        dates: "2016",
        url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        title: "Web Developer Bootcamp",
        school: "Udemy",
        dates: "2016",
        url: "https://www.udemy.com/the-web-developer-bootcamp/learn/v4/"
    }]
};

var work = {
    jobs: [{
        employer: "US Army",
        title: "Army Specialist",
        dates: "2013-current",
        description: "The primary role of 68W healthcare specialists in the U.S. Army is providing medical treatment to wounded soldiers. Medics provide initial emergency medical care, evacuation, and supervision to other soldiers with medical training (such as Combat Lifesavers) as well as provide medical advice to unit chains of command.",
        location: "New York"
    }, {
        employer: "Rockaway Party Supply Store (Family Owned)",
        title: "Cashier",
        dates: "2009-2013",
        description: "Responsible for taking money in the form of cash, check, or credit card from patrons in exchange for food or services. Worked in a team to serve patrons daily. Scans items, provides change, balances drawer, and processes card transactions.",
        location: "Queens, NY"
    }]
};

var projects = {
    projects: [{
        title: "Web Dev Service",
        url: "https://github.com/",
        dates: "2016",
        description: "A site to market a Web Service. This site is fully responsive and will adapt to any screen. Made using Bootstrap 4.",
        images: [
            "images/project1.png",
            "images/project1-2.png",
            "images/project1-3.png"
        ]
    }]
};


bio.display = function() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedYoutube = HTMLyoutube.replace("%data%", bio.contacts.youtube);
    $("#topContacts").append(formattedYoutube);

    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    $("#topContacts").append(formattedBlog);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedYoutube);
    $("#footerContacts").append(formattedBlog);
    $("#footerContactst").append(formattedLocation);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);



    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var skillCount = 0;
        while (skillCount < bio.skills.length) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[skillCount]);
            $("#skills").append(formattedSkill);
            skillCount++;
        }
    }
};

work.display = function() {
    for (i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription); 
        
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);
    }
};

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});



function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

projects.display = function() {
    for (i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var titleArray = HTMLprojectTitle.split(" ");
        var formattedTitle = titleArray[0] + " " + titleArray[1].replace("#", projects.projects[i].url) + titleArray[2].replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        for (x = 0; x < projects.projects[i].images.length; x++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[x]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

education.display = function() {

    for (i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var schoolNameArray = HTMLschoolName.split(" ");
        var formattedSchoolName = schoolNameArray[0] + " " + schoolNameArray[1].replace("#", education.schools[i].url) + schoolNameArray[2].replace("%data%", education.schools[i].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        $(".education-entry:last").append(formattedMajor);
    }

    $("#onlineEducation").append(HTMLonlineClasses);

    for (i = 0; i < education.onlineCourses.length; i++) {
        $("#onlineEducation").append(HTMLonlineClassesStart);

        var formattedOnlineTitleArray = HTMLonlineTitle.split(" ");
        var formattedOnlineTitle = formattedOnlineTitleArray[0] + " " + formattedOnlineTitleArray[1].replace("#", education.onlineCourses[i].url) + formattedOnlineTitleArray[2].replace("%data%", education.onlineCourses[i].title);
        $(".onlineEducation-entry:last").append(formattedOnlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".onlineEducation-entry:last").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".onlineEducation-entry:last").append(formattedOnlineDates);

        // I placed the URL within the Title links for better UX (Below is the code needed if you want to see ugly links.)
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".onlineEducation-entry:last").append(formattedOnlineUrl);
    }
};



bio.display();
$("#main").append(internationalizeButton);
education.display();
$("#mapDiv").append(googleMap);
projects.display();
work.display();