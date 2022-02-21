import moment from 'moment';

const setMoment = (time) => {
    return moment(time).locale('vi').startOf('second').fromNow(); 
}
export default setMoment