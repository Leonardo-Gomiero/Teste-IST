document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        function addAnimationFromBelow(className) {
            var elements = document.querySelectorAll("." + className);

            elements.forEach(function (element) {
                element.style.opacity = 0;
                var rect = element.getBoundingClientRect();
                var windowHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top <= windowHeight) {
                    element.classList.add("fromBelow");
                }
            });
        }

        function addAnimationFromAbove(className) {
            var elements = document.querySelectorAll("." + className);

            elements.forEach(function (element) {
                element.style.opacity = 0;
                var rect = element.getBoundingClientRect();
                var windowHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top <= windowHeight) {
                    element.classList.add("fromAbove");
                }
            });
        }

        function addAnimationFromLeft(className) {
            var elements = document.querySelectorAll("." + className);

            elements.forEach(function (element) {
                element.style.opacity = 0;
                var rect = element.getBoundingClientRect();
                var windowHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top <= windowHeight) {
                    element.classList.add("fromLeft");
                }
            });
        }

        function addAnimationFromRight(className) {
            var elements = document.querySelectorAll("." + className);

            elements.forEach(function (element) {
                element.style.opacity = 0;
                var rect = element.getBoundingClientRect();
                var windowHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top <= windowHeight) {
                    element.classList.add("fromRight");
                }
            });
        }

        addAnimationFromBelow("intro");
        addAnimationFromBelow("interests");
        addAnimationFromBelow("skills-bars");
        addAnimationFromBelow("technologies");
        addAnimationFromBelow("project");
        addAnimationFromBelow("certificates");
        addAnimationFromBelow("background");
        addAnimationFromBelow("languages");
        addAnimationFromBelow("testimonials");
        addAnimationFromBelow("contact");

        addAnimationFromLeft("from-left");
        addAnimationFromRight("from-right");

    });
});
