var bio = {
  name : "Joel Rajkumar",
  age : "23",
  role : "Web Developer",
  contact : {
    email : "JoelRajkumar@yahoo.com",
    mobile : "646-221-5421",
    github : "joelkraj",
    twitter : "joelkraj",
    location : "New York"
  },
  welcomeMessage : "Hello there! lorem ipsum dolor sit",
  skills : ["programming", "JS", "HTML", "CSS"],
  bioPic : "images/fry.jpg"
};

var education = {
  Schools : {
    name : "Stony Brook University",
    city : "Stony Brook, NY",
    degree : "Bachelors(inprogress)",
    majors : "CS",
    dates : "2015, 2017, 2018",
    url : "www.stonybrook.edu"
  },
  onlineCourses : [
    {
      title : "Frontend Nanodegree",
      school : "Udacity",
      dates : "2016",
      url : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      title : "Web Developer Bootcamp",
      school : "Udemy",
      dates : "2016",
      url : "https://www.udemy.com/the-web-developer-bootcamp/learn/v4/"
    }
  ]  
}

var work = {
  jobs : [
  {
    employer : "US Army",
    title : "Army Specialist",
    dates : "2013-current",
    description : "The primary role of 68W healthcare specialists in the U.S. Army is providing medical treatment to wounded soldiers. Medics provide initial emergency medical care, evacuation, and supervision to other soldiers with medical training (such as Combat Lifesavers) as well as provide medical advice to unit chains of command."
  },
  {
    employer : "Rockaway Party Supply Store (Family Owned)",
    title : "Cashier",
    dates : "2009-2013",
    description : "Responsible for taking money in the form of cash, check, or credit card from patrons in exchange for food or services. Worked in a team to serve patrons daily. Scans items, provides change, balances drawer, and processes card transactions."
  }
  ]
}

var projects = {
  projects : [
  {
    title : "Web Dev Service",
    url : "https://github.com/",
    dates : "2016",
    description : "A site to market a Web Service. This site is fully responsive and will adapt to any screen. Made using Bootstrap 4.",
    images : [
      "images/project1.png",
      "images/project1-2.png"
    ]
  }
  ]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name)

$("#header").prepend(formattedName);

function displayWork(){
  for(i = 0; i < work.jobs.length; i++){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates)
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description)
    $(".work-entry:last").append(formattedDescription);
  }	
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  
  logClicks(x,y);
});



function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1]
}

$("#main").append(internationalizeButton);


function displayProjects() {
  for(i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var titleArray = HTMLprojectTitle.split(" ")
    formattedTitle = titleArray[0] + " " + titleArray[1].replace("#", projects.projects[i  ].url) + titleArray[2].replace("%data%",  projects.projects[i].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedDescription);

    for (x = 0; x < projects.projects[i  ].images.length; x++ )  {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[x]);
      $(".project-entry:last").append(formattedImage);
    }
  }  
}

displayWork();
displayProjects();

function displayEducation(){
	for(i = 0; i < education.Schools.length; i++){
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%" , education.schools[i].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%" , education.schools[i].degree);
      var formattedNameDegree = formattedName + formattedDegree;
      $(".education-entry:last").append(formattedNameDegree);
      var formattedDates = HTMLschoolDates.replace("%data%" , education.schools[i].dates);
      $(".education-entry:last").append(formattedDates);
      var formattedLocation = HTMLschoolLocation.replace("%data%" , education.schools[i].location);
      $(".education-entry:last").append(formattedLocation);
      var formattedMajor = HTMLschoolMajor.replace("%data%" , education.schools[i].major);
      $(".education-entry:last").append(formattedMajor);	
    }
    for(i = 0; i < education.onlineCourses.length; i++){
      $("#education").append(HTMLonlineClasses);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses[i].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%" , education.onlineCourses[i].school);
      var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
      $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%" , education.onlineCourses[i].dates);
      $(".education-entry:last").append(formattedOnlineDates);
      var formattedOnlineUrl = HTMLonlineURL.replace("%data%" , education.onlineCourses[i].url);
      $(".education-entry:last").append(formattedOnlineUrl);
    }
}

displayEducation();