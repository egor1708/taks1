var accordion__short = document.getElementsByClassName('e-accordion__short');
var accordion__more = document.getElementsByClassName('e-accordion__more');

for (var i = 0; i < accordion__short.length; i++) {
    accordion__short[i].onclick = function() {
        var accordion_set = !this.classList.contains('e-accordion__short_active_true');
        setClass(accordion__short, 'e-accordion__short_active_true', 'remove');
        setClass(accordion__more, 'e-accordion__more_show_true', 'remove');

        if (accordion_set) {
            this.classList.toggle('e-accordion__short_active_true');
            this.nextElementSibling.classList.toggle('e-accordion__more_show_true');
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}