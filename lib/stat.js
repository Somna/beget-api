/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'stat/';
    var _methodName = '';

    /**
     * ����� ���������� ���������� � ������� �������� �� ������ ������������ �� ��������� �����
     * */
    this.getSiteListLoad = function (callback) {
        _methodName = 'getSiteListLoad';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     * ����� ���������� ���������� � ������� �������� �� ����� ������ ������������ �� ��������� �����
     * */
    this.getDbListLoad = function (callback) {
        _methodName = 'getDbListLoad';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     * ����� ���������� ��������� ���������� � �������� �� �������� ����� (�������� �� ���� � �����)
     * @var data.site_id - ������������� �����
     * */
    this.getSiteLoad = function (data, callback) {
        _methodName = 'getSiteLoad';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ����� ���������� ��������� ���������� � �������� �� ��������� ���� MySQL
     * @var data.db_name - ��� ���� ������
     * */
    this.getDbLoad = function (data, callback) {
        _methodName = 'getDbLoad';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    return this;
};