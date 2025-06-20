// .l-header__drawer
export function initBody() {
    const navMenuItems = [
        { title: "トップページ", link: "#"},
        { title: "お知らせとご案内", link: "#"},
        { title: "瑞香堂について", link: "#"},
        { title: "香りについて", link: "#"},
        { title: "会社概要",  link: "#"},
        { title: "お問い合わせ", link: "#"},
        { title: "採用情報", link: "#"}
    ];

    function generateMainNav() {
        const navContainer = document.querySelector('.l-header__navMenu--main');
        navMenuItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('navMenu--mainItem');

            const anchor = document.createElement('a');
            anchor.href = item.link;
            anchor.textContent = item.title;

            listItem.appendChild(anchor);
            navContainer.appendChild(listItem);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        generateMainNav();
    });


// l-header__navMenu--open&close
    const navBtn = document.querySelector('#js-navBtn');
    const navMenu = document.querySelector('#js-navMenu');
    const header = document.querySelector('.l-header');

    navBtn.addEventListener('click', function () {
        // ナビボタンとナビメニューのactiveクラスをトグル
        navBtn.classList.toggle('active');
        navMenu.classList.toggle('active');

        // ヘッダーにactiveクラスをトグルして、横幅の変更を反映
        header.classList.toggle('active');

    });


// mainVisual__slide
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slideImg--item');
    const indicators = document.querySelectorAll('.slideIndicator--item');
    const totalSlides = slides.length;

    function updateSlideAndIndicator() {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === currentSlide ? 1 : 0; //currentSlideのときopacityを1、他は0に
    });

    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active', 'inactive');

        if (index === currentSlide) {
        indicator.classList.add('active');
        } else {
        indicator.classList.add('inactive');
        }
    });
    }

    function changeSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlideAndIndicator();
    }

    setInterval(changeSlide, 8000);
    updateSlideAndIndicator();}

// メイン画像の下部が画面に見えたらボタンを表示
function toggleScrollEvent() {
    const buttonBnr = document.querySelector('.l-onlineStore__bnr');
    if (!buttonBnr) return;

    if (window.innerWidth > 959) {
    buttonBnr.style.display = 'none';
        window.removeEventListener('scroll', scrollHandler);
    } else {
        window.addEventListener('scroll', scrollHandler);
    }
}

    function scrollHandler() {
        const mainSlide = document.querySelector('.mainVisual__slide');
        const buttonBnr = document.querySelector('.l-onlineStore__bnr');

    if (!mainSlide || !buttonBnr) return;

    if (window.scrollY >= mainSlide.offsetHeight) {
        buttonBnr.style.display = 'block';
    } else {
        buttonBnr.style.display = 'none';
    }
}

    window.addEventListener('resize', toggleScrollEvent);
    window.addEventListener('DOMContentLoaded', toggleScrollEvent);