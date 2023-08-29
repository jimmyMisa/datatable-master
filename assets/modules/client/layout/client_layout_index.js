import $ from "jquery";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {main} from './client_layout_main.js';
import "styles/styles.scss";

require('utilities/utilities.js')

global.$ = $;


$(document).ready(() => {
	main()
});
