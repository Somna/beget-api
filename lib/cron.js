/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'cron/';
    var _methodName = '';

    /**
     * ����� ���������� ������ ���� ����� CronTab
     * */
    this.getList = function (callback) {
        _methodName = 'getList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     *  ����� ������� ����� �������. ����� ���������� ������� ����� �������.
     *  @var data.minutes - ������
     *  @var data.hours - ����
     *  @var data.days - ���
     *  @var data.months - ������
     *  @var data.weekdays - ��� ������
     *  @var data.command - �������
     *
     *  @return row_number - ������������ ID ������� (������������� ������� �������� � ������ ������ ������������)
     * */
    this.add = function (data, callback) {
        _methodName = 'add';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ����� ������ ������� � �������� ID.
     *  @var data.row_number - ID �������, ��� int
     * */
    this.delete = function (data, callback) {
        _methodName = 'delete';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ����� ������� ������ �������
     *  @var data.row_number - ID �������, ��� int
     *  @var data.is_hidden - ������ ������� (�������� / �� ��������), ��� boolean: 0 ��� 1
     *
     *  @return row_number - ������������ ID ������� (������������� ������� �������� � ������ ������ ������������)
     * */
    this.changeHiddenState = function (data, callback) {
        _methodName = 'changeHiddenState';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /** ����� ���������� email, �� ������� �������� ����� ����������� ������� */
    this.getEmail = function (callback) {
        _methodName = 'getEmail';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     *  ����� ������������� email, �� ������� ����� ��������� ����� ����������� �������
     *  @var data.email  - ID �������, ��� int
     * */
    this.setEmail = function (data, callback) {
        _methodName = 'setEmail';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };


    return this;
};