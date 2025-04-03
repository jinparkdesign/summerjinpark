/** GENERALS */
/** ===================== */

var win = $(window);

// viewport dimensions
var ww = win.width();
var wh = win.height();

let suggestedProjects = [{
        id: 0,
        link: "Android-3d",
        img: "3d.gif",
        title: "\"Android 3D Modeling\"",
        subtitle: "3D & Animation | 2020"
    },
    {
        id: 1,
        link: "conneqtion",
        img: "UX3.jpg",
        title: "\"ConneQtion Mobile App\"",
        subtitle: "UX/UI Design | 2020"
    },
    {
        id: 2,
        link: "hug-mug",
        img: "brandbook.png",
        title: "\"HUG MUG Brand Book Design\"",
        subtitle: "Branding & Layout | 2020"
    },
    {
        id: 3,
        link: "project",
        img: "ecycle.jpg",
        title: "eCycle App Design",
        subtitle: "UX/UI Design | 2020"
    },
    {
        id: 4,
        link: "signage",
        img: "sign.jpg",
        title: "\"Signage Design @ Fastsigns\"",
        subtitle: "Graphic & Print Design |2016-2018"
    },
    {
        id: 5,
        link: "tiktok-logo-reveal",
        img: "tiktok.gif",
        title: "\"Tiktok Logo Reveal\"",
        subtitle: "Video Editing & Motion Design | 2020"
    },
    {
        id: 6,
        link: "when-you-drive",
        img: "drive1.gif",
        title: "\"Park Your Phone\"",
        subtitle: "Graphic & Motion Design | 2020"
    },
     {
        id: 7,
        link: "visual-rhetoric",
        img: "purple.gif",
        title: "\"Visual Rhetoric Shape Morph\"",
        subtitle: "Motion Graphic | 2020"
    },
     {
        id: 8,
        link: "icon",
        img: "Icon pack.jpg",
        title: "\"Icons - Political Leaders\"",
        subtitle: "Icon Design | 2020"
    },
    {
        id: 9,
        link: "illustrations",
        img: "illustration.jpg",
        title: "\"Digital Drawing\"",
        subtitle: "My Hobby | 2019"
    },
    {
        id: 10,
        link: "magazine",
        img: "layout.jpg",
        title: "\"Red Velvet In Magazine\"",
        subtitle: "Layout Design | 2020"
    },
    {
        id: 11,
        link: "VFX-animation",
        img: "video.gif",
        title: "\"VFX & Animation\"",
        subtitle: "Parallax & Motion Tracking | 2020"
    },
    {
        id: 12,
        link: "save-my-fridge",
        img: "fridge2.jpg",
        title: "\"Save My Fridge\"",
        subtitle: "UX/UI Design | 2021"
    }
];

let numProjectsToShow = 2;

const Item = ({
    link,
    img,
    title,
    subtitle
}) => `
<div class="col-md-6 portfolio-item filter-3d">
<div class="portfolio-wrap suggested-project" onclick="openProject('${link}')">
  <img src="../assets/img/portfolio/${img}" class="img-fluid" alt="">
  <div class="portfolio-info">
    <h4>${title}</h4>
    <p>${subtitle}</p>

  </div>
</div>
</div>
`;


$(document).ready(function () {

    // load functions
    imageBG();
    grid();
    let projects = [];
    // get current project by url
    let url = window.location.href;
    let urlArray = url.split('/');
    let fileUrl = urlArray[urlArray.length - 1];

    // search in suggestedProjects for current page
    suggestedProjects.find((o, i) => {
        let currentLink = o.link + '.html';
        if (currentLink === fileUrl) {
            // remove
            suggestedProjects.splice(i, 1);
            return true; // stop searching
        }
    });


    for (let i = 0; i < numProjectsToShow; i++) {
        let random = generateRandomNumber();
        projects.push(suggestedProjects[random]);
        // remove from suggestedProject
        suggestedProjects.splice(random, 1);
    }

    for (let i = 0; i < projects.length; i++) {
        $('.suggested-project').html(projects.map(Item).join(''));
    }
});

win.on('load', function () {

    setTimeout(function () {
        $('#preloader').addClass('hide');
    }, 1000);

    // load functions
    grid();

    $(document).on('click', '.mobile-nav-toggle', function (e) {
        $('body').toggleClass('mobile-nav-active');
        $('#header').toggleClass('header-animation');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    });

    $(document).click(function (e) {
        var container = $(".mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            }
        }
    });
});

win.on('resize', function () {

    // viewport dimensions
    ww = win.width();
    wh = win.height();

    // load functions
    grid();


});



/** SHOW/HIDE HEADER */
/** ===================== */

function show_hide_header() {

    var last_scroll = 0;

    win.on('scroll', function () {
        if (!$('#about').hasClass('visible')) {
            var scroll = $(this).scrollTop();

            if (scroll > last_scroll) {
                $('#main-header').addClass('hide');
            } else {
                $('#main-header').removeClass('hide');
            }

            last_scroll = scroll;
        }
    });

}



/** BACKGROUND IMAGES */
/** ===================== */

function imageBG() {

    $('.imageBG').each(function () {
        var image = $(this).data('img');

        $(this).css({
            backgroundImage: 'url(' + image + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        });
    });

}


/** GRID */
/** ===================== */

function grid() {

    var container = $('.grid');

    for (var i = 0; i < container.length; i++) {
        var active_container = $(container[i]);
        var container_width = active_container.width();

        var items = active_container.find('.entry');

        var cols = parseInt(active_container.data('cols'), 10);
        var margin = parseInt(active_container.data('margin'), 10);
        var height = parseFloat(active_container.data('height'));
        var double_height = parseFloat(active_container.data('double-height'));

        if (!margin) margin = 0;
        if (!double_height) double_height = 2;

        // set margins to the container
        active_container.css('margin', -Math.floor(margin / 2) + 'px');

        if (ww >= 1000) {
            if (!cols) cols = 3;
        } else if (ww >= 700) {
            if (cols !== 1) cols = 2;
        } else {
            cols = 1;
        }

        var items_width = Math.floor((container_width / cols) - margin);
        var items_height = Math.floor(items_width * height);
        var items_double_height = items_height * double_height;
        var items_margin = Math.floor(margin / 2);

        items.each(function () {
            $(this).css('width', items_width + 'px');
            $(this).css('height', items_height + 'px');
            $(this).css('margin', items_margin + 'px');

            if (!height) $(this).css('height', 'auto');
            if ($(this).hasClass('w2') && ww >= 500) $(this).css('width', (items_width * 2) + (items_margin * 2) + 'px'); /* Add w2 or h2 to the portfolio item for varoius layout sizes */
            if ($(this).hasClass('h2') && ww >= 500) $(this).css('height', items_double_height + (items_margin * 2) + 'px');
        });

        // isotope
        active_container.isotope({
            itemSelector: '.entry',
            transitionDuration: '.2s',
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            },
            masonry: {
                columnWidth: items_width + margin

            }
        });

        $('#filters li a').on('click', function (e) {
            e.preventDefault();

            var filter = $(this).attr('href');

            $('#filters li a').removeClass('active');
            $(this).addClass('active');

            active_container.isotope({
                filter: filter
            });
        });
    };

}

// Generate Random
function generateRandomNumber() {
    let max = suggestedProjects.length;
    return Math.floor(Math.random() * Math.floor(max));
}

let openProject = function (projectName) {
    location.href = `./${projectName}.html`;
}