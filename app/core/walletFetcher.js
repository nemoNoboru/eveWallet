var parseString = require('react-native-xml2js').parseString;

var eveId = {
  keyID: '6193649',
  vCode: 'vZG2GPKtLDFAf4JqItKnaonGHoaKwGuDT0IVbN8kzmqTd1CtO2hD2QyHSFXJYruh'
}

function requestBalanceFromEve(){
  return new Promise(function(resolve, reject) {
    fetch(`https://api.eveonline.com/char/AccountBalance.xml.aspx?keyID=${eveId.keyID}&vCode=${eveId.vCode}`)
      .then( function (response) {
        response.text().then(function (body) {
          parseString(body, function (err, result) {
            resolve(result.eveapi.result[0].rowset[0].row[0].$.balance)
          });
        })
      })
      .catch( function (err) {
        console.error(err);
      })
  })
}

function requestTransactionsFromEve(){
  return new Promise(function(resolve, reject) {
    fetch(`https://api.eveonline.com/char/WalletTransactions.xml.aspx?keyID=${eveId.keyID}&vCode=${eveId.vCode}`)
      .then( function (response) {
        response.text().then(function (body) {
          parseString(body, function (err, result) {
            console.log(JSON.stringify(result.eveapi.result[0]))
            resolve(JSON.stringify(result.eveapi.result[0]))
          });
        })
      })
      .catch( function (err) {
        console.error(err);
      })
  })
}

export default requestTransactionsFromEve;
