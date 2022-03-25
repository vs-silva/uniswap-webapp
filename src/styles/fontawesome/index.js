import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";

//Icons
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const _icons = [
    faSearch
];

_icons.forEach(icon => (library.add(icon)));

export default FontAwesomeIcon;
