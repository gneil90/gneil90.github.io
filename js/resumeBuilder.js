/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : name,
	"role" : role,
	"contacts" : {"email":"galiaskarov@phystech.edu", "github" : "github.com/gneil90", "location" : "Moscow, Russia"},
	"pictureURL" : "images/me.jpg",
	"welcomeMessage" : "Welcome to my Portfolio Page, I hope I will meet all your requirements.",
	"skills" : ["objective-c", "swift", "cocoa", "cocoa-touch"]
};


var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


var name = "Nail Galiaskarov";
var formattedName = HTMLheaderName.replace("%data%", name)

var role = "iOS/OSX developer";
var formattedRole = HTMLheaderRole.replace("%data%", role)
 $("#header").prepend([formattedRole]);
 $("#header").prepend([formattedName]); // 'prepend' inserts element at the beginning

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append([formattedWelcomeMsg]);


var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
 $("#header").prepend([formattedPic]);

 $("#topContacts").prepend([formattedEmail]);
 $("#topContacts").prepend([formattedGithub]);
 $("#topContacts").prepend([formattedLocation]);

var works = {
  "jobs": [
    {
      "employer": "Cognitico Inc",
      "title": "iOS-developer",
      "dates": "Dec 2012 - Jun 2014",
      "description": "Working 24/7 got huge experience as a developer. Main product we were developing is called easyten. It was awarded as a best education application in Russia. Application has won IIDF seed investments (420 000 USD)."
    },
    {
      "employer": "Fixapp Inc",
      "title": "iOS-developer",
      "dates": "Jun 2014 - Oct 2015",
	  "description": "Working 24/7 got huge experience as a developer. Main product we were developing is called easyten."
    },
    {
      "employer": "Peppermint Inc",
      "title": "iOS-developer",
      "dates": "Oct 2015 - Jan 2016",
 	  "description": "Working 24/7 got huge experience as a developer. Main product we were developing is called easyten."
    }
  ]
}

var projects = [{
	"title": "easyten",
	"description": "Learn 10 new foreighn words everyday. Learn Spanish, Portuguese, Italian, French, German & Russian. Any starting level. Up to 20 new words a day. Frequency vocabulary of 10 000 most commonly used words. All words are voiced. Twitter examples for all words. Smart notifications.",
	"dates": "Dec 2012 - present",
	"images":["images/easy_0.jpeg", "images/easy_1.jpeg", "images/easy_2.jpeg"]	
}, {
	"title": "TOEFL iBT",
	"description": "TOEFL IBT application gives intermediate to high-intermediate students all the tools they need to succeed on the TOEFL® iBT. Moreover, TOEFL iBT is the best tool for improving your vocabulary over all covered areas of TOEFL Test with clearly and distinctly explained meaning. Read reviews, get customer ratings, see screenshots, and learn more about TOEFL IBT on the App Store. Download TOEFL IBT and enjoy it on your iPhone, iPad, and iPod touch.",
	"dates": "Dec 2012 - present",
	"images":["images/toefl_0.jpg", "images/toefl_1.jpg", "images/toefl_2.jpg"]
}, {
	"title": "Trip Me HD",
	"description": "tripme is a trusted community for travellers and local guides offering excursions. It is great for searching like-minded people to travel with and get in touch with city you travelling to!",
	"dates": "Aug 2013 - September 2013",
	"images":[]
}, {
	"title": "Airtribune",
	"description": "This application provides live tracking for air sports competitions hosted on Airtribune.com Stay visible during the tasks to your friends and family, organizers and viewers!\nMain features: Competition“ Check in ”; \n1 sec live tracking during the competition task;\nBuffering function\nfor secure tracking data transfer in discontinuous GSM coverage conditions;Report back;\nGeo positioning.",
	"dates": "Jun 2015 - Jul 2015",
	"images":[]	
}, {
	"title": "Shanson Radio",
	"description": "Официальное мобильное приложение «Радио Шансон». «Радио Шансон» вещает на территории всех субъектов Российской Федерации, около 200 передающих станций расположены в крупных региональных центрах страны. «Радио Шансон» — это 800 городов и населенных пунктов, более 8 миллионов слушателей ежедневно.",
	"dates":"Sep 2015 - Oct 2015",
	"images":[]
}, {
	"title": "AlarmNewTrack",
	"description":"iOS application, which each day wakes you up with a new tasty track.",
	"dates":"May 2014 - June 2014",
	"images":[]
}, {
	"title": "My Portfolio Webpage",
	"description": "Actually, it is what you are seeing now. This is a result of my playing with css, jQuery, HTML",
	"dates": "Dec 2015 - present",
	"images":[]	
}
]

if (bio.skills.length > 0) {
	$("#header").append([HTMLskillsStart]);
	for (var i = 0; i < bio.skills.length; i++) {
	 var formattedSkill = HTMLskills.replace("%data%", bio.skills[i])
	 $("#skills").append([formattedSkill]);
	};
}

if (works.jobs.length > 0) {
	for (var i = 0; i < works.jobs.length ; i++) {
		var job = works.jobs[i]
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formatterTitle = HTMLworkTitle.replace("%data%", job.title);

		var formattedEmployerTitle = formattedEmployer + " " + formatterTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", job.description)
		$(".work-entry:last").append(formattedDescription);
	};
}

projects.display = function() {
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];

    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDescription);

    if (project.images.length > 0) {
      for (var j = 0; j < project.images.length; j++) {
      	console.log(j)
        var image = project.images[j];
        var formattedImage = HTMLprojectImage.replace("%data%", image)
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display()

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	console.log(x+y);
})
