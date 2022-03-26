import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";

//Icons
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const _icons = [
    faSearch,
    faGlobe,
    faEnvelope
];

_icons.forEach(icon => (library.add(icon)));

export default FontAwesomeIcon;
