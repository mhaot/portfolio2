// .l-header__drawer
export function initBody() {
    const navMenuItems = [
        { title: "トップページ", link: "#"},
        { title: "お知らせとご案内", link: "#"},
        { title: "薫玉堂について", link: "#"},
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

}
