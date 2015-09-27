/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'dns/';
    var _methodName = '';

    /**
     * ����� ���������� ���������� � DNS-������� � ������.
     * @var data.fqdn - ������ ��� ������ (������ �� ������������ ������ ������� ���������� � punycode)
     * */
    this.getData = function (data, callback) {
        _methodName = 'getData';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ����� ���������� ���������� � DNS-������� � ������.
     * @var data.fqdn - ������ ��� ������ (������ �� ������������ ������ ������� ���������� � punycode)
     * @var data.records - ������, ���������� DNS ������
     * */
    this.getData = function (data, callback) {
        _methodName = 'getData';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    return this;
};