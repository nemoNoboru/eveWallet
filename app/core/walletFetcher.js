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
            console.log(processTransactions(result.eveapi.result[0].rowset[0].row))
            resolve(processTransactions(result.eveapi.result[0].rowset[0].row))
          });
        })
      })
      .catch( function (err) {
        console.error(err);
      })
  })
}

function processTransactions(transactions){
  processed = transactions.map(function (transaction) {
    var t = {}
    t.time = transaction.$.transactionDateTime
    t.quantity = transaction.$.quantity
    t.price = transaction.$.price
    t.type = transaction.$.transactionType
    t.name = transaction.$.typeName
    t.stationName = transaction.$.stationNameto
    return t
  })
  return processed
}

export {requestBalanceFromEve, requestTransactionsFromEve}
