const ed = document.querySelector('.demo');
setInterval(function() {
    if (screen.width > 360) {
        ed.innerHTML = '';
        ed.innerHTML = `<style>
            body {
                display: none
            }
        </style>`
    } else {
        ed.innerHTML = '';
        ed.innerHTML = `<style>
            body {
                display: block
            }
        </style>`;
    }
}, 1);
