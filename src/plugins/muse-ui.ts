import Vue from "vue";
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
//font-family
import "typeface-roboto";

Vue.use(MuseUI);

//muse-ui-message $alert
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';

//@ts-ignore
Vue.use(Message);

//muse-ui-loading v-loading
import Loading from 'muse-ui-loading';
import 'muse-ui-loading/dist/muse-ui-loading.css'; 

//@ts-ignore
Vue.use(Loading);
