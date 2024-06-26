document.addEventListener('DOMContentLoaded', function () {
    const challengesSection = document.getElementsByClassName('challenges')[0];

    challengesSection.addEventListener('click', function () {
        challengesSection.classList.toggle('expanded');
    });
});
