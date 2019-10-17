export default class Util {

    static getCurrentPage(){
		const search = window.location.search;
		const params = new URLSearchParams(search);
		let page = params.get('page');
		if ( page === undefined || page === null ){
			page = 1;
		}
		return page;
	}

	static getQtdResults(){
		const search = window.location.search;
		const params = new URLSearchParams(search);
		let size = params.get('size');
		if (size === undefined || size === null ){
			size = 10;
		}
		return size;
	}

	static cutWords(string, qtd = 160){
		let stringTT = string;
		let qtdTC = qtd;
		if ( stringTT ){
			let newString = ( stringTT.length <= qtdTC ) ? stringTT :  stringTT.substring(0, qtdTC) + "...";
			return newString;
		}
	}

	static isMobile() {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	}

	static randBool(){
		return ( Math.floor((Math.random() * 2) + 1) === 1 ) ? true : false;
	}

	static getDate(datetime){
		const [date] = datetime.split("T");
		const [year, month, day] = date.split("-");
		return day + '/' + month + '/' + year;
	}

	static getTime(datetime){
		const [, times] = datetime.split("T");
		const [time] = times.split('.');
		const [hour, minutes] = time.split(':');
		return (hour-3) + 'h' + minutes + 'm';
	}

	static getToken(){
		return localStorage.getItem('RB_TOKEN');
	}

	static getUserLogedIn(){
		return localStorage.getItem('RB_USER');
	}

}
