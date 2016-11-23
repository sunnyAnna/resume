// BIO
var bio = {
	'name': 'anna krygier',
	'role': 'front end web developer',
	'contacts': {
		'email': '<a href="mailto:anna@topchoicedesign.com">anna@topchoicedesign.com</a>',
		'mobile': '<a href="tel:1-415.450.8740">415.450.8740</a>',
		'github': '<a href="https://github.com/sunnyAnna">sunnyAnna</a>',
		'linkedIn': '<a href="https://www.linkedin.com/in/annakrygier">annakrygier</a>',
		'website': '<a href="http://topchoicedesign.com">topchoicedesign.com</a>',
		'location': '<a href="#home">Larkspur, CA</a>',
		'locationInfo': '',
		'icons': {
			'email': 'icon-mail-alt',
			'mobile': 'icon-phone',
			'github': 'icon-github-circled',
			'linkedIn': 'icon-linkedin',
			'website': 'icon-link-ext',
			'location': 'icon-home'
		}
	},
	'welcomeMessage': 'hello',
	'skills': ['HTML5', 'CSS3', 'Javascript', 'jQuery', 'Bootstrap', 'Wordpress', 'Photoshop'],
	'biopic': 'images/TopChoiceDesign.jpg',
	'display': function () {
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile).replace('white-text', bio.contacts.icons.mobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email).replace('white-text', bio.contacts.icons.email);
		var formattedGitbub = HTMLgithub.replace('%data%', bio.contacts.github).replace('white-text', bio.contacts.icons.github);
		var formattedWebsite = HTMLwebsite.replace('%data%', bio.contacts.website).replace('white-text', bio.contacts.icons.website);
		var formattedLinkedIn = HTMLlinkedIn.replace('%data%', bio.contacts.linkedIn).replace('white-text', bio.contacts.icons.linkedIn);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location).replace('white-text', bio.contacts.icons.location);
		$('#header').prepend(formattedPic + formattedName + formattedRole);
		$('#topContacts, #footerContacts').append(formattedMobile + formattedEmail + formattedWebsite + formattedGitbub + formattedLinkedIn + formattedLocation);
		$('<div id=web-skills></div>').insertBefore('#workExperience');
		$('#web-skills').append('<h3>skills</h3>');
		if (bio.skills.length >= 0) {
			$('#web-skills').append(HTMLskillsStart);
			bio.skills.forEach(bio.addSkillsInfo);
		}
		$('#topContacts span.orange-text').remove();
		$('#footerContacts span.orange-text').remove();
		$('#skills-h3').remove();
		$('#lets-connect h3').text('contact');
	},
	'addSkillsInfo': function (key) {
		var formattedSkills = HTMLskills.replace('%data%', key);
		$('#skills').append(formattedSkills);
	}
};


// WORK
var work = {
	'jobs': [{
			'employer': 'Top Choice Design LLC',
			'companyUrl': 'http://topchoicedesign.com',
			'title': 'web designer / developer',
			'location': 'Larkspur, CA',
			'locationInfo': '<img src="images/larkspur.jpg"><p>Larkspur is a city in Marin County, California, located north of San Francisco near Mount Tamalpais.</p>',
			'dates': '2013 - present',
			'description': '<div class="work-info"><p>Freelance web designer and developer specializing in small and medium size business porojects. Responsice design, hand coded or framework based, UX centered. Information architecture, market research and on-page SEO.</p></div>'
	}, {
			'employer': 'Web Development Services LLC',
			'title': 'visual designer',
			'location': 'Larkspur, CA',
			'locationInfo': '<img src=images/fort-lauderdale.jpg><p>Fort Lauderdale is a city on Florida\'s southeastern coast, known for its beaches and miles of boating canals.</p>',
			'dates': '2013 - 2015',
			'description': '<div class="work-info"><p>Marketing oriented web and graphic designer:</p><ul><li>marketing emails, banners, landing pages, UI elements, branding materials</li><li>design strategy creation and deployment oversight</li></ul></div>'
	},
		{
			'employer': 'Web Development Services LLC',
			'title': 'marketing consultant',
			'location': 'Fort Lauderdale, FL',
			'locationInfo': '<img src=images/fort-lauderdale.jpg><p>Fort Lauderdale is a city on Florida\'s southeastern coast, known for its beaches and miles of boating canals.</p>',
			'dates': '2007 - 2013',
			'description': '<div class="work-info"><p>Dynamic partner in decision making process, related but not limited to:</p><ul><li>marketing trends research, planning and implementation</li><li>affiliate marketing relationships</li><li>advertising</li></ul></div>'
	}],
	'display': function () {
		$('#workExperience h3').text('experience');
		work.jobs.forEach(work.addWorkInfo);
		$('.work-entry:first').addClass('first');
	},
	'addWorkInfo': function (key) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', key.employer).replace('#', key.companyUrl || '#');
		var formattedWorkTitle = HTMLworkTitle.replace('%data%', key.title);
		var formattedWorkDates = HTMLworkDates.replace('%data%', key.dates);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', key.location);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', key.description);
		var workInfo = formattedWorkTitle + formattedWorkEmployer + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;
		$('.work-entry:last').append(workInfo);
	}
};


// PROJECTS
var projects = {
	'projects': [{
		'title': 'AvantGard Spa',
		'companyUrl': 'http://avantspa.com',
		'dates': '',
		'description': '',
		'images': ['images/AVS-2.jpg', 'images/AVS-1.jpg']
	}, {
		'title': 'Interpid Partners Consulting',
		'companyUrl': 'http://intrepid-partners-consulting.com',
		'dates': '',
		'description': '',
		'images': ['images/IPC-2.jpg', 'images/IPC-1.jpg']
	}],
	'display': function () {
		projects.projects.forEach(projects.addProjectInfo);
		$('.project-entry:first').addClass('first');
	},
	'addProjectInfo': function (key) {
		$('#projects').append(HTMLprojectStart);
		var formattedprojectTitle = HTMLprojectTitle.replace('%data%', key.title).replace('#', key.companyUrl);
		$('.project-entry:last').append(formattedprojectTitle);
		var formattedprojectDescription = HTMLprojectDescription.replace('%data%', key.description);
		$('.project-entry:last').append(formattedprojectDescription);
		for (var image in key.images) {
			if (key.images.hasOwnProperty(image)) {
				var formattedprojectImage = HTMLprojectImage.replace('%data%', key.images[image]);
				$('.project-entry:last').append(formattedprojectImage);
			}
		}
	}
};


//EDUCATION
var education = {
	'schools': [{
		'name': 'Adam Mickiewicz University',
		'dates': 2005,
		'majors': ['n/a', 'n/a'],
		'location': 'Poznan, Poland',
		'locationInfo': '<img src="images/poznan.jpg"><p>Poznań is perceived as the historical capital of Greater Poland — a region in central-western Poland. In terms of population, it\'s the fifth largest Polish city.</p>',
		'degree': 'Psychology, M.A.',
		'url': 'https://amu.edu.pl/'
	}],
	'onlineCourses': [{
		'school': 'Udacity',
		'title': 'front end web developer',
		'dates': 2016,
		'url': 'https://www.udacity.com'
	}, {
		'school': 'Code School',
		'title': 'javascript',
		'dates': 2016,
		'url': 'https://www.codeschool.com'
	}, {
		'school': 'Treehouse',
		'title': 'web design',
		'dates': 2014,
		'url': 'https://teamtreehouse.com'
	}],
	'display': function () {
		$('#education').append(HTMLschoolStart);
		education.schools.forEach(education.addSchoolInfo);
		$('<div id="online-education"><div>').insertAfter($('#education'));
		$('#online-education').append(HTMLonlineClasses);
		education.onlineCourses.forEach(education.addCoursesInfo);
		$('#education').find('.education-entry:first').addClass('first');
		$('#online-education').find('.education-entry:first').addClass('first');
	},
	'addSchoolInfo': function (key) {
		var formattedSchoolName = HTMLschoolName.replace('%data%', key.name);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', '<span>' + key.degree + '</span>').replace('#', key.url);
		var formattedSchoolDates = HTMLschoolDates.replace('%data%', key.dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', key.location);
		$('.education-entry:last').append(formattedSchoolDegree + formattedSchoolName + formattedSchoolDates + formattedSchoolLocation);
	},
	'addCoursesInfo': function (key) {
		$('#online-education').append(HTMLschoolStart);
		var formattedonlineTitle = HTMLonlineTitle.replace('%data%', '<span>' + key.title + '</span>').replace('#', key.url);
		var formattedonlineSchool = HTMLonlineSchool.replace('%data%', key.school);
		var formattedonlineDates = HTMLonlineDates.replace('%data%', key.dates);
		$('.education-entry:last').append(formattedonlineTitle + formattedonlineSchool + formattedonlineDates);
	}
};


// MODAL
var myModal = {
	'structure': '<div class="modal fade" tabindex="-1" role="dialog" id="myModal" aria-labelledby="modalTitle"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" class="close">x</span></button></div><div class="modal-body"></div></div></div></div>',
	'visitorLocation': function () {
		navigator.geolocation.getCurrentPosition(myModal.currentLocation);
	},
	'currentLocation': function (position) {
		lat = position.coords.latitude;
		lng = position.coords.longitude;
		var latlng = {
			lat: lat,
			lng: lng
		};
		geocoder.geocode({
			'location': latlng
		}, function (results, status) {
			let address = results[0].address_components[2].long_name;
			myModal.modalMessage(address);
		});
	},
	'modalMessage': function (city) {
		var x = '<p>Thanks for visiting all the way from ' + city + '!</p>';
		var y = '<p>Thanks for visiting!</p>';
		var message = city ? x : y;
		$('.modal-body').append(message);
	},
	'display': function () {
		$(myModal.structure).insertBefore('#main');
		myModal.visitorLocation();
	}
};


// TODO: write each segment into HTML
bio.display();
work.display();
education.display();
projects.display();


// TODO: defer writing until screen width reached
if ($(window).width() > 599) {

	// TODO: set-up GEOCODER
	var geocoder = new google.maps.Geocoder();

	// TODO: set-up AMMAP
	var myMap = new AmCharts.AmMap();
	myMap.pathToImages = 'ammap/images/';
	myMap.zoomOnDoubleClick = false;
	myMap.areasSettings.unlistedAreasColor = '#ffcc00';
	myMap.zoomControl = {
		'homeButtonEnabled': false,
		'zoomControlEnabled': false
	};
	myMap.dataProvider = {
		'map': 'worldLow',
		'images': []
	};
	myMap.display = function (addr, label, info) {
		lat = addr.lat();
		lng = addr.lng();
		myMap.dataProvider.images.push({
			"type": 'circle',
			"labelPosition": 'middle',
			"labelShiftY": 5,
			"labelBackgroundColor": '#ffffff',
			"labelBackgroundAlpha": 0.5,
			"balloonText": '',
			"latitude": lat,
			"longitude": lng,
			"label": label,
			"title": label,
			"description": info
		});
		myMap.write('map');
	};
	myMap.checkDuplicate = function (element, index, array) {
		return element !== array[index - 1];
	}
	myMap.coordinate = function (locations) {
		var geoResult = function (location) {
			let address = location.address;
			let description = location.description;
			geocoder.geocode({
				'address': address
			}, function (results, status) {
				let coordinates = results[0].geometry.location,
					address = results[0].formatted_address;
				myMap.display(coordinates, address, description);
			});
		};
		for (var i = 0, j = locations.length; i < j; i++) {
			geoResult(locations[i]);
		}
	};
	myMap.locationFinder = function () {
		let places = [];
		var aggregatedPlaces = education.schools.concat(work.jobs);
		for (var key in aggregatedPlaces) {
			if (aggregatedPlaces.hasOwnProperty(key)) {
				let place = {
					address: aggregatedPlaces[key].location,
					description: aggregatedPlaces[key].locationInfo
				}
				places.push(place);
			}
		}
		places = places.sort().filter(myMap.checkDuplicate);
		return places
	}();
	myMap.placement = function () {
		$('#mapDiv').append('<div id="map"></div>');
		$('#mapDiv h3').text('my life map');
	}();
	AmCharts.ready(function () {
		myMap.coordinate(myMap.locationFinder);
	});
	myModal.display();
}



//TODO: click on icon shows its content
$('[class*="icon"]').on('click', function () {
	$(this).parents('li').siblings().find('a').slideUp(200);
	$(this).children('a').animate({
		width: 'toggle'
	}, 800);
});


//TODO: message displays upon screen exit
$('body').on('mouseleave', function () {
	$('#myModal').modal();
	$(this).off();
});
