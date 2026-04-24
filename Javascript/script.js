/* ---------- NAVBAR TOGGLE ---------- */
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

/* Close mobile nav when clicking a link */
document.querySelectorAll("#navLinks > li > a").forEach(a => {
    a.addEventListener("click", function (e) {
        const isDropdownToggle = this.parentElement.classList.contains("dropdown");

        /* On mobile, toggle dropdown instead of navigating */
        if (isDropdownToggle && window.innerWidth <= 992) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
            return;
        }

        if (window.innerWidth <= 992 && !isDropdownToggle) {
            document.getElementById("navLinks").classList.remove("active");
        }
    });
});

/* Close mobile nav when clicking outside */
document.addEventListener("click", (e) => {
    const nav = document.getElementById("navLinks");
    const menuBtn = document.querySelector(".menu-icon");

    if (!nav.contains(e.target) && !menuBtn.contains(e.target) && window.innerWidth <= 992) {
        nav.classList.remove("active");
    }
});

/* ---------- HERO CAROUSEL ---------- */
(function () {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let index = 0;
    let interval;

    function showSlide(i) {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        slides[i].classList.add("active");
        dots[i].classList.add("active");
        index = i;
    }

    window.goToSlide = function (i) {
        showSlide(i);
        restart();
    };

    function next() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    function restart() {
        clearInterval(interval);
        interval = setInterval(next, 5000);
    }

    restart();
})();

/* ---------- SUCCESS STORIES ---------- */
(function () {
    const stories = document.querySelectorAll(".story");
    const count = document.getElementById("storyCount");
    let storyIndex = 0;
    let storyInterval;

    function showStory(i) {
        stories.forEach(s => s.classList.remove("active"));

        storyIndex = (i + stories.length) % stories.length;
        stories[storyIndex].classList.add("active");

        if (count) {
            count.innerText = `${storyIndex + 1} / ${stories.length}`;
        }
    }

    window.nextStory = function () {
        showStory(storyIndex + 1);
        restartStory();
    };

    window.prevStory = function () {
        showStory(storyIndex - 1);
        restartStory();
    };

    function restartStory() {
        clearInterval(storyInterval);
        storyInterval = setInterval(() => showStory(storyIndex + 1), 6000);
    }

    restartStory();
})();

/* ---------- EXPAND CARDS ---------- */
const expandData = [
    {
        title: "AI Automation & Consulting",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
        desc: "Advanced AI consulting helping businesses automate operations, improve efficiency and achieve measurable growth outcomes."
    },
    {
        title: "ERP & CRM Solutions",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        desc: "Complete ERP and CRM ecosystems integrating departments and enabling data-driven decision making."
    },
    {
        title: "Technology Transformation",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
        desc: "Modern technology transformation strategy including cloud migration, DevOps adoption and scalable architecture design."
    },
    {
        title: "Digital & CX Solutions",
        img: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=80",
        desc: "Customer experience transformation combining UX design, analytics and digital platforms."
    }
];

function openExpand(i) {
    const services = document.getElementById("services");
    const expanded = document.getElementById("expanded");

    document.getElementById("expandTitle").innerText = expandData[i].title;
    document.getElementById("expandDesc").innerText = expandData[i].desc;
    document.getElementById("expandImg").src = expandData[i].img;

    services.style.display = "none";
    expanded.style.display = "block";

    window.scrollTo({
        top: expanded.offsetTop - 80,
        behavior: "smooth"
    });
}

function closeExpand() {
    const services = document.getElementById("services");

    document.getElementById("expanded").style.display = "none";
    services.style.display = "block";

    window.scrollTo({
        top: services.offsetTop - 80,
        behavior: "smooth"
    });
}

/* Expose globally */
window.openExpand = openExpand;
window.closeExpand = closeExpand;
window.toggleMenu = toggleMenu;

/* ---------- SCROLL REVEAL ------*/
