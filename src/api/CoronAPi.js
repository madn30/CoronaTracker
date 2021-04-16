import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api/';

export const GetGlobalStatus = async (country) => {

	if (country) {
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(`${URL}countries/${country}`)
		return { confirmed, recovered, deaths, lastUpdate }
	}

	const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(URL)

	return { confirmed, recovered, deaths, lastUpdate }

};
export const GetStatusByCountry = async (country) => {
	const { data } = await axios.get(`https://api.covid19api.com/total/country/${country}`)
	return data.map(({ Recovered, Deaths, Confirmed, Date }) => ({ recovered: Recovered, deaths: Deaths, confirmed: Confirmed, lastUpdate: Date }))

}
export const GetCountries = async () => {
	const { data: { countries } } = await axios.get(URL + 'countries/');
	return countries.map(country => country.name);
};
