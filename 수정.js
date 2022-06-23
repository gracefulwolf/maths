
window.TOUN28UI.subBarNav = {
    init: function(v){
        const el_wrap = document.querySelector('[data-wrap="'+ v +'"]');
        const el_listwrap = el_wrap.querySelector('.list-category');
        const el_lis = el_wrap.querySelectorAll('li');
        const el_on = el_wrap.querySelector('.on');
        const el_btns = el_wrap.querySelectorAll('[data-wrap-btn]');
        const w_list = el_listwrap.offsetWidth;


        if (w_list < el_wrap.offsetWidth) {
            return false;
        }

        if (!el_wrap.dataset.ready) {
            el_wrap.dataset.ready = true;
        } else {
            return false;
        }

        for (let i = 0; i < el_btns.length; i++) {
            el_btns[i].removeEventListener('click', act);
            el_btns[i].addEventListener('click', act);
        }
        for (let i = 0; i < el_lis.length; i++) {
            el_lis[i].removeEventListener('click', act2);
            el_lis[i].addEventListener('click', act2);
        }

        if (!!el_on) {
            act2(null, el_on);
        }

        function act2(e, v) {
            let el_this = this;

            if (e === null) {
                el_this = v;
            }

            const el_wrap = el_this.closest('[data-wrap]');
            const align = el_wrap.dataset.align;

            if (align === 'start') {
                if (w_list - 30 < (el_this.getBoundingClientRect().left - el_listwrap.getBoundingClientRect().left) + el_this.offsetWidth) {
                    window.TOUN28UI.subBarNav.act({
                        name: el_wrap.dataset.wrap,
                        align: 'end'
                    });
                }
            } else {
                console.log(w_list, (el_this.getBoundingClientRect().left - el_listwrap.getBoundingClientRect().left));

                if (30 > (el_this.getBoundingClientRect().left - el_listwrap.getBoundingClientRect().left)) {
                    window.TOUN28UI.subBarNav.act({
                        name: el_wrap.dataset.wrap,
                        align: 'start'
                    });
                }
            }
        }
        function act() {
            const this_wrap = document.querySelector('[data-wrap="'+ this.dataset.name +'"]');

            this_wrap.dataset.align = this.dataset.wrapBtn;
        }
    },
    act(opt) {
        const name = opt.name;
        const align = opt.align;
        const this_wrap = document.querySelector('[data-wrap="'+ name +'"]');

        this_wrap.dataset.align = align;
    }
}

