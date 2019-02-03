
import axios from "axios/index";

export default axios.create({
    baseURL: 'http://api.ntstage.com/v1/bookingsweb/'
});
