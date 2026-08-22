import common from './common.json';
import navbar from './navbar.json';
import hero from './hero.json';
import about from './about.json';
import skills from './skills.json';
import experience from './experience.json';
import portfolio from './portfolio.json';
import certificates from './certificates.json';
import courses from './courses.json';
import contact from './contact.json';
import footer from './footer.json';
import chatbot from './chatbot.json';
import blog from './blog.json';
import errors from './errors.json';

import type en from '../en';

// ponytail: typed against the EN dictionary so a missing/extra key in any
// id/*.json fails `tsc` at build time instead of rendering undefined in prod.
const id: typeof en = {
    common,
    navbar,
    hero,
    about,
    skills,
    experience,
    portfolio,
    certificates,
    courses,
    contact,
    footer,
    chatbot,
    blog,
    errors,
};

export default id;
