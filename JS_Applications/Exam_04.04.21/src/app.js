import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

import { logout } from "./api/data.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";


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
page('/details/:id', decorateCtx, detailsPage);
page('/edit/:id', decorateCtx, editPage);

page.start();

function decorateCtx(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;

    next();
}

function setUserNav() {
    const token = sessionStorage.getItem('authToken');
    if (token) {
        document.getElementById('user').style.display = '';
        document.getElementById('guest').style.display = 'none';
    } else {        
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = '';
    }
}