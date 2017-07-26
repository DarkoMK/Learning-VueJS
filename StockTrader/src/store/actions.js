import axios from 'axios'

export const loadData = ({commit}) => {
    axios.get('https://vuejs-stock-trader-8bb80.firebaseio.com/data.json')
        .then(function (response) {
            let data = response.data;
            if (data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                };

                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        })
};