import axios from 'axios';

//공통 api 함수 모듈
//서버랑 통신
export default {
    methods: {
        async $api(url, data){
            return (await axios({
                method: 'post',
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;
        },
        //금액 자리수 콤마 포맷
        $currencyFormat(price){
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
}