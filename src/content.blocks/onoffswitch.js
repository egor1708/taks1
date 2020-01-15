document.querySelectorAll('.onoffswitch__button').forEach(el => {
    el.addEventListener('click', function() {
        var inverse_theme_els = document.querySelectorAll('.theme_color_project-inverse');
        var default_theme_els = document.querySelectorAll('.theme_color_project-default');

        default_theme_els.forEach(el => {
            el.classList.remove('theme_color_project-default');
            el.classList.add('theme_color_project-inverse');
        });

        inverse_theme_els.forEach(el => {
            el.classList.remove('theme_color_project-inverse');
            el.classList.add('theme_color_project-default');
        });

        el.closest('.onoffswitch').classList.toggle('onoffswitch_checked');
    });
})