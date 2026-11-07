/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var newaddress = address.replaceAll(".","[.]")
    return newaddress

};