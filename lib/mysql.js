/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'mysql/';
    var _methodName = '';

    /**
     * ����� ���������� ������ ��� ������ MySQL � �� ���������.
     * */
    this.getList = function (callback) {
        _methodName = 'getList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     *  ����� ��������� ����� ���� ������ MySql � �������� ��������� � ������� ������ localhost � �������� �������.
     *  @var data.suffix - ���������� ����� ����� ���� ������. ��� �������� ����� ��������� ����� ���������, ��� �������� ����� ���� "login_suffix" ������ ���� �� ������� 16 ��������
     *  @var data.password - ������ ��� ����� ���� ������. ������ ��������� �� ����� 6 ��������
     * */
    this.addDb = function (data, callback) {
        _methodName = 'addDb';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ����� ��������� �������� ������ � �������� ���� ������ MySql
     *  @var data.suffix -  ���������� ����� ������. ��� �������� ����� ��������� ����� ���������, ��� �������� ����� ���� "login_suffix" ������ ���� �� ������� 16 ��������
     *  @var data.access - ��� ������� - ��� ����� ����: �����, IP, * ��� localhost
     *  @var data.password - ������ ��� ������ ������� � ���� ������. ������ ��������� �� ����� 6 ��������
     * */
    this.addAccess = function (data, callback) {
        _methodName = 'addAccess';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ����� ������� �������� ���� ������ � ��� ������� � ���
     *  @var data.suffix - ���������� ����� ����� ���� ������
     * */
    this.dropDb = function (data, callback) {
        _methodName = 'dropDb';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ����� ������� �������� ������ � ���� ������.
     *  @var data.suffix - ���������� ����� ����� ���� ������
     *  @var data.access - ��� ������� - ��� ����� ����: �����, IP, * ��� localhost
     * */
    this.dropAccess = function (data, callback) {
        _methodName = 'dropAccess';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ����� �������� ������ �� ��������� �������
     *  @var data.suffix - ���������� ����� ����� ���� ������
     *  @var data.access - ��� ������� - ��� ����� ����: �����, IP, * ��� localhost
     *  @var data.password - ������ ��� ������ ������� � ���� ������. ������ ��������� �� ����� 6 ��������
     * */
    this.changeAccessPassword = function (data, callback) {
        _methodName = 'changeAccessPassword';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };


    return this;
};