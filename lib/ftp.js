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
    this.getList = function () {
        _methodName = 'getList';
        begetRequest.sendRequest(_path, _methodName);
    };

    /**
     * ����� ��������� ����� FTP �������
     * @var data.suffix - ���������� ����� ������. ��� �������� ����� ��������� ����� ���������, ��� �������� ����� ���� "login_suffix" ������ ���� �� ������� 17 ��������
     * @var data.homedir - ���� �� �������� ���������� ������������ ��������. �� ���������� �� �����. (��������, /site.ru/public_html)
     * @var data.password - ������ ��� ������ ftp-��������
     * */
    this.add = function (data) {
        _methodName = 'add';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     * ����� ��������� ����� FTP �������
     * @var data.suffix - ���������� ����� ������. ��� �������� ����� ��������� ����� ���������, ��� �������� ����� ���� "login_suffix" ������ ���� �� ������� 17 ��������
     * @var data.password - ������ ��� ������ ftp-��������
     * */
    this.changePassword = function (data) {
        _methodName = 'changePassword';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**     *
     * ����� ��������� ����� FTP �������
     * @var data.suffix - ���������� ����� ������. ��� �������� ����� ��������� ����� ���������, ��� �������� ����� ���� "login_suffix" ������ ���� �� ������� 17 ��������
     * */
    this.delete = function (data) {
        _methodName = 'delete';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    return this;
};