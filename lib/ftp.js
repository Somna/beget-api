/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'ftp/';
    var _methodName = '';

    /**
     * ����� ���������� ������ �������������� FTP-��������� � �� ��������� ������������
     * */
    this.getList = function (callback) {
        _methodName = 'getList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     * ����� ��������� ����� FTP �������
     * @var data.suffix - ���������� ����� ������. ��� �������� ����� ��������� ����� ���������, ��� �������� ����� ���� "login_suffix" ������ ���� �� ������� 17 ��������
     * @var data.homedir - ���� �� �������� ���������� ������������ ��������. �� ���������� �� �����. (��������, /site.ru/public_html)
     * @var data.password - ������ ��� ������ ftp-��������
     * */
    this.add = function (data, callback) {
        _methodName = 'add';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ����� ��������� ����� FTP �������
     * @var data.suffix - ���������� ����� ������. ��� �������� ����� ��������� ����� ���������, ��� �������� ����� ���� "login_suffix" ������ ���� �� ������� 17 ��������
     * @var data.password - ������ ��� ������ ftp-��������
     * */
    this.changePassword = function (data, callback) {
        _methodName = 'changePassword';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**     *
     * ����� ��������� ����� FTP �������
     * @var data.suffix - ���������� ����� ������. ��� �������� ����� ��������� ����� ���������, ��� �������� ����� ���� "login_suffix" ������ ���� �� ������� 17 ��������
     * */
    this.delete = function (data, callback) {
        _methodName = 'delete';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    return this;
};