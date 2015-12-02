// BIO
var bio = {
    'name': 'anna krygier',
    'role': '{web: designer + developer}',
    'contacts': {
        'email': ['<a href="mailto:anna@topchoicedesign.com">anna@topchoicedesign.com</a>', 'icon-mail-alt'],
        'mobile': ['<a href="tel:1-415.450.8740">415.450.8740</a>', 'icon-phone'],
        'github': ['<a href="https://github.com/sunnyAnna">sunnyAnna</a>', 'icon-github-circled'],
        'linkedIn': ['<a href="https://www.linkedin.com/in/annakrygier">annakrygier</a>', 'icon-linkedin'],
        'website': ['<a href="http://topchoicedesign.com">topchoicedesign.com</a>', 'icon-link-ext'],
        'location': ['<a href="#home">Larkspur, CA</a>', 'icon-home'],
        'locationInfo': ''
    },
    'welcomeMessage': 'hello',
    'skills': ['HTML(5)', 'CSS(3)', 'Javascript', 'jQuery', 'Photoshop'],
    'biopic': 'images/TopChoiceDesign.jpg',
    'display': function() {
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile[0]).replace('white-text', bio.contacts.mobile[1]);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email[0]).replace('white-text', bio.contacts.email[1]);
        var formattedGitbub = HTMLgithub.replace('%data%', bio.contacts.github[0]).replace('white-text', bio.contacts.github[1]);
        var formattedWebsite = HTMLwebsite.replace('%data%', bio.contacts.website[0]).replace('white-text', bio.contacts.website[1]);
        var formattedLinkedIn = HTMLlinkedIn.replace('%data%', bio.contacts.linkedIn[0]).replace('white-text', bio.contacts.linkedIn[1]);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location[0]).replace('white-text', bio.contacts.location[1]);
        $('#header').prepend(formattedPic + formattedName + formattedRole);
        $('#topContacts').append(formattedMobile + formattedEmail + formattedWebsite + formattedGitbub + formattedLinkedIn + formattedLocation);
        $('#footerContacts').append(formattedMobile + formattedEmail + formattedGitbub + formattedLinkedIn + formattedWebsite + formattedLocation);
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
    'addSkillsInfo': function(key) {
        var formattedSkills = HTMLskills.replace('%data%', key);
        $('#skills').append(formattedSkills);
    }
};


// WORK
var work = {
    'jobs': [{
        'employer': 'Top Choice Design LLC',
        'companyUrl': 'http://topchoicedesign.com',
        'title': 'web designer / owner',
        'location': 'Larkspur, CA',
        'locationInfo': '<img src="images/larkspur.jpg"><p>Larkspur is a city in Marin County, California, located north of San Francisco near Mount Tamalpais.</p>',
        'dates': '2013 - present',
        'description': '<div class="work-info"><p>Freelance web designer and developer specializing in small and medium size business porojects. Responsice design, hand coded or framework based, UX centered. Information architecture, market research and on-page SEO.</p></div>'
    }, {
        'employer': 'Web Development Services LLC',
        'title': 'visual designer / marketing consultant',
        'location': 'Fort Lauderdale, FL',
        'locationInfo': '<img src=images/fort-lauderdale.jpg><p>Fort Lauderdale is a city on Florida\'s southeastern coast, known for its beaches and miles of boating canals.</p>',
        'dates': '2007 - 2015',
        'description': '<div class="work-info"><h4>VISUAL DESIGNER:</h4><ul><p>Marketing oriented web and graphic designer:</p><li>marketing emails, banners, landing pages, UI elements, branding materials</li><li>design strategy creation and deployment oversight</li></ul></div><div class="work-info"><h4>MARKETING CONSULTANT:</h4><ul><p>Dynamic partner in decision making process, related but not limited to:</p><li>marketing trends research, planning and implementation</li><li>affiliate marketing relationships</li><li>advertising</li></ul></div>'
    }],
    'display': function() {
        $('#workExperience h3').text('experience');
        work.jobs.forEach(work.addWorkInfo);
        $('.work-entry:first').addClass('first');
    },
    'addWorkInfo': function(key) {
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
        'images': ['images/avs-2.jpg', 'images/avs-1.jpg']
    }, {
        'title': 'Interpid Partners Consulting',
        'companyUrl': 'http://intrepid-partners-consulting.com',
        'dates': '',
        'description': '',
        'images': ['images/ipc-2.jpg', 'images/ipc-1.jpg']
    }],
    'display': function() {
        projects.projects.forEach(projects.addProjectInfo);
        $('.project-entry:first').addClass('first');
    },
    'addProjectInfo': function(key) {
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
        'dates': '2000 - 2005',
        'location': 'Poznan, Poland',
        'locationInfo': '<img src="images/poznan.jpg"><p>Poznań is perceived as the historical capital of Greater Poland — a region in central-western Poland. In terms of population, it\'s the fifth largest Polish city.</p>',
        'degree': 'Psychology, M.A.',
        'url': 'https://amu.edu.pl/'
    }],
    'onlineCourses': [{
        'school': 'Udacity',
        'title': 'front end web developer',
        'dates': '2015',
        'url': 'https://www.udacity.com'
    }, {
        'school': 'Code School',
        'title': 'javascript',
        'dates': '2014',
        'url': 'https://www.codeschool.com'
    }, {
        'school': 'Treehouse',
        'title': 'web design',
        'dates': '2013',
        'url': 'https://teamtreehouse.com'
    }],
    'display': function() {
        $('#education').append(HTMLschoolStart);
        education.schools.forEach(education.addSchoolInfo);
        $('<div id="online-education"><div>').insertAfter($('#education'));
        $('#online-education').append(HTMLonlineClasses);
        education.onlineCourses.forEach(education.addCoursesInfo);
        $('#education').find('.education-entry:first').addClass('first');
        $('#online-education').find('.education-entry:first').addClass('first');
    },
    'addSchoolInfo': function(key) {
        var formattedSchoolName = HTMLschoolName.replace('%data%', key.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', '<span>' + key.degree + '</span>').replace('#', key.url);
        var formattedSchoolDates = HTMLschoolDates.replace('%data%', key.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', key.location);
        $('.education-entry:last').append(formattedSchoolDegree + formattedSchoolName + formattedSchoolDates + formattedSchoolLocation);
    },
    'addCoursesInfo': function(key) {
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
    'visitorLocation': function() {
        navigator.geolocation.getCurrentPosition(myModal.currentLocation);
    },
    'currentLocation': function(position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        var latlng = {
            lat: lat,
            lng: lng
        };
        geocoder.geocode({
            'location': latlng
        }, function(results, status) {
            address = results[0].address_components[2].long_name;
            myModal.modalMessage(address);
        });
    },
    'modalMessage': function(city) {
        var x = '<p>Thanks for visiting all the way from ' + city + '!</p>';
        var y = '<p>Thanks for visiting!</p>';
        var message = city ? x : y;
        $('.modal-body').append(message);
    },
    'display': function() {
        $(myModal.structure).insertBefore('#main');
        myModal.visitorLocation();
    }
};


// TODO: write each segment into HTML
bio.display();
work.display();
education.display();
projects.display();

// reference var
var coordinates, description, label, locationsInfo, places;


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
    myMap.display = function(addr, label) {
        lat = addr.lat();
        lng = addr.lng();
        description = myMap.descriptionFinder(work.jobs, label);
        if (description === undefined) {
            description = myMap.descriptionFinder(education.schools, label);
        }
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
            "description": description
        });
        myMap.write('map');
    };
    myMap.coordinate = function(addresses, descriptions) {
        var geoResult = function() {
            geocoder.geocode({
                'address': addresses[i]
            }, function(results, status) {
                coordinates = results[0].geometry.location;
                address = results[0].formatted_address;
                myMap.display(coordinates, address);
            });
        };
        for (var i = 0; i < addresses.length; i++) {
            geoResult();
        }
    };

    myMap.descriptionFinder = function(data, label) {
        for (var i = 0; i < data.length; i++) {
            var str2 = label.trim();
            var str1 = data[i].location.trim();
            if (str1.substr(0, 3).toLowerCase() === str2.substr(0, 3).toLowerCase()) {
                description = data[i].locationInfo;
                return description;
            }
        }
        return description;
    };
    myMap.locationFinder = function() {
        places = [];
        var schools = education.schools;
        var jobs = work.jobs;
        for (var key in schools) {
            if (schools.hasOwnProperty(key)) {
                places.push(schools[key].location);
            }
        }
        for (key in jobs) {
            if (jobs.hasOwnProperty(key)) {
                places.push(jobs[key].location);
            }
        }
        return places;
    };
    myMap.locationInfoFinder = function() {
        places = [];
        var schools = education.schools;
        var jobs = work.jobs;
        for (var key in schools) {
            if (schools.hasOwnProperty(key)) {
                places.push(schools[key].locationInfo);
            }
        }
        for (key in jobs) {
            if (jobs.hasOwnProperty(key)) {
                places.push(jobs[key].locationInfo);
            }
        }
        return places;
    };
    myMap.placement = function() {
        $('#mapDiv').append('<div id="map"></div>');
        $('#mapDiv h3').text('my life map');
    };

    myMap.placement();
    AmCharts.ready(function() {
        myMap.coordinate(myMap.locationFinder(), myMap.locationInfoFinder());
    });
    myModal.display();
}



//TODO: click on icon shows its content
$('[class*="icon"]').on('click', function() {
    $(this).parents('li').siblings().find('a').slideUp(200);
    $(this).children('a').animate({
        width: 'toggle'
    }, 800);
});


//TODO: message displays upon screen exit
$('body').on('mouseleave', function() {
    $('#myModal').modal();
    $(this).off();
});