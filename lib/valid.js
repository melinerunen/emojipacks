/**
 * Module dependencies.
 */

var isUri = require('valid-url').isUri;
var resolve = require('path').resolve;
var exists = require('fs').existsSync;


module.exports = {
  /**
   * Is subdomain?
   * @param  {string} subdomain
   * @return {boolean} is a subdomain?
   */
  subdomain: function (subdomain) {
    // Regex to validate subdomains
    var _regEx = RegExp(/^[0-9a-zA-Z\-]+$/);
    return _regEx.test(subdomain);
  },

  /**
   * Is valid email?
   * @param  {string} email
   * @return {boolean}
   */
  email: function (email) {
    // Regex to validate emails
    var _regEx = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return _regEx.test(email);
  },

  /**
   *  Is password?
   * @param  {string} password
   * @return {boolean} is a valid password?
   */
  password: function (password) {
    return password.length > 1;
  },

  /**
   * Is a valid file?
   * @param  {string} pack
   * @return {boolean} is a valid file?
   */
  pack: function (pack) {
    return isUri(pack) || exists(resolve(process.cwd(), pack));
  },
};
