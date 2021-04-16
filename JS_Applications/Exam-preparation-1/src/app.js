import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

import { logout } from "./api/data.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";


const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
});

setUserNav();

page('/', decorateCtx, homePage);
page('/login', decorateCtx, loginPage);
page('/register', decorateCtx, registerPage);
page('/catalog', decorateCtx, catalogPage);
page('/create', decorateCtx, createPage);
// page('/details/:id', decorateCtx, registerPage);

page.start();

function decorateCtx(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;

    next();
}

function setUserNav() {
    const email = sessionStorage.getItem('email');
    if (email) {
        document.querySelector('div.profile > span').textContent = `Welcome, ${email}`;
        document.querySelector('.user').style.display = '';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = '';
    }
}