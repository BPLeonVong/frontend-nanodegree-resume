//Bio Info.
var bio = {
	"name"  	: "Leon Vong",
	"role"  	: "Programmer",
	"contacts"	: {
		"email" : "bpleonvong@gmail.com",
		"github": "BPLeonVong",
		"twitter":"@BPLeonVong",
		"location":"Cambridge, ON, CA"
	},
	"welcome"	: "Hello, my name is Leon Vong and I am an aspiring programmer in development. I am looking for a career to kickstart my life in a programming related field but little luck in doing so. Hopefully this Udacity course may help myself in doing so. The information displayed is a mix between real and fake data, please do not take the content to serious and grade upon the code completion. Thank you for visiting.",
	"skills"	: [
		"C++","C","C#","Unity","AS3","Lua"
	],
	"bioPic"	: "Images/Ethel.png"
};
//Bio Display Function
bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);
	var formattedHTMLemail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.bioPic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedWelcome);
	$("#header").append(formattedPicture);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedHTMLemail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedHTMLemail);
	
	//I would like to add the menu options dynamically but was having trouble doing so, because of the scroll() function.
	//$(".MenuBar").append('<li><img src="Images/Ethel.png"></img><a href="#" onclick="Scroll("#header");return false;">About</a></li>');
	
	if(bio.skills.length>0){
		$("#header").append(HTMLskillsStart);
		for(var i = 0; i<bio.skills.length; ++i){
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
}
//Work Info
var work = {
	"jobs": [
		{
			"employer":"Self-Employed",
			"title":"Self-proclaimed Programmer, NEET",
			"dates":"June 30th - Current",
			"description":"Program an amount of code using various languages and scripts, learn and integrate new methods and continue too further educational studies."
		},
		{
			"employer":"Cambridge Hotels and Conference Centre",
			"title":"Line Cook",
			"dates":"March 2011 - July 2014",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
			"employer":"RCC Institute and Technology",
			"title":"Tutor",
			"dates":"December 2012 - August 2013",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		}
	]
};
//Work Display Function
work.display = function(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
}
//Projects Info
var projects = {
	"projects": [
	{
		"title":"Website",
		"dates":"2015",
		"description":"Learned how to program in web a bit, currently expanding knowledge in web development, contains all other projects currently working on and completed www.leonvong.com.",
		"images":["Images/fry.jpg","Images/Ethel.png"]
	},
	{
		"title":"AzureWolf Engine",
		"dates":"2014-2015",
		"description":"A game engine that I am currently developing in order to teach me fundamentals of programming game engines and programming designs.",
		"images":["Images/Ethel.png","Images/197x148.gif"]
	},
	{
		"title":"Other Small Projects",
		"dates":"Lifetime",
		"description":"You may find other examples of projects I have completed on my personal website @www.leonvong.com.",
		"images":["Images/197x148.gif","Images/fry.jpg"]
	}
	]
};
//Projects Display Function
projects.display = function(){
	for (project in projects.projects){
	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append(formattedTitle);
	$(".project-entry:last").append(formattedDates);
	$(".project-entry:last").append(formattedDescription);
		if(projects.projects[project].images.length>0){
			for(var i = 0; i<projects.projects[project].images.length; ++i){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[i]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
//Education Info
var education = {
    "schools": [
        {
            "name": "RCC Institute and Technology",
            "location": "Toronto, ON, CA",
            "degree": "Diploma",
            "major": [
                "Programming"
            ]
        }
    ]
};
//Education Display Function
education.display = function(){
	for(schools in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[schools].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[schools].degree);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[schools].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[schools].major);
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}
}
/* Other Relative Functions */
function locationizer(work_obj)
{
	var array = [];
    for (job in work_obj.jobs)
    {
        var nLocation = work_obj.jobs[job].location;
        array.push(nLocation);
    }
    return array;
}

function inName(){
	var name = $("#name").html();
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1];
}

function stdName(){
	var name = $("#name").html();
	name = name.trim().split(" ");
	name[1] = name[1].slice(0,1).toUpperCase()+name[1].slice(1).toLowerCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1];
}

//Custom Functions
function Scroll(destination) {
	$('html, body').animate({
        scrollTop: $(destination).offset().top
    });
}

function InternationButton(){
	var iName = inName() || function(){};
	var stName = stdName() || function(){};
	if($('#name').html()==iName){
		$('#name').html(stName);  
	}
	else if($('#name').html()==stName){
		$('#name').html(iName);  
	}
}

//Callbacks
bio.display();
work.display();
education.display();
projects.display();

//Add Map and Internationalize Button
$("#mapDiv").append(googleMap);