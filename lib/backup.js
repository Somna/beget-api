/**
 * Created by Andrey on 27.09.2015.
 */

module.exports = function(params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'backup/';
    var _methodName = '';


    /** backup */

    /** ����� ���������� ��������� ������ ��������� �������� �����. */
    this.getFileBackupList = function () {
        _methodName = 'getFileBackupList';
        begetRequest.sendRequest(_path, _methodName);
    };

    /** ����� ���������� ��������� ������ ��������� ����� ��� mysql */
    this.getMysqlBackupList = function () {
        _methodName = 'getMysqlBackupList';
        begetRequest.sendRequest(_path, _methodName);
    };

    /**
     * ����� ���������� ������ ������ � ���������� �� ��������� ����� �� ��������� ���� � ��������������.
     * @var data.backup_id  - ������������� ��������� ����� backup_id, ���� �� ����� - ������ ������� ���� �� ������� �����
     * @var data.path - ���� �� ����� �������� ���������� (�������� "/site.ru/public_html")
     * */
    this.getFileList = function (data) {
        _methodName = 'getFileList';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /** ����� ���������� ������ ��� ������ �� ��������� ����� �� ��������� ��������������.
     * @var data.backup_id - ������������� ��������� ����� backup_id, ���� �� ����� - ������ ������� ���� �� ������� �����
     * */
    this.getMysqlList = function (data) {
        _methodName = 'getMysqlList';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     * ����� ������� ������ �� �������������� ������ �� ��������� ����� �� ��������� ���� � ��������� �����.
     * @var data.backup_id  - ������������� ��������� ����� backup_id
     * @var data.paths - ������ (���� ��� ��������� ��������) ����� ��� �������������� �� ����� �������� ���������� (�������� "/site.ru/public_html")
     * */
    this.restoreFile = function (data) {
        _methodName = 'restoreFile';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     * ����� ������� ������ �� �������������� �� �� ��������� ����� �� ��������� ����� �� � �������������� ��������� �����.
     * @var data.backup_id - ������������� ��������� ����� backup_id
     * @var data.bases - ������ (���� ��� ��������� ��������) ����� ��� ������ MySQL ��� ��������������
     * */
    this.restoreMysql = function (data) {
        _methodName = 'restoreMysql';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     * ����� ������� ������ �� �������� � ������������ ������ �� ��������� ����� � ������ ��������.
     * @var data.backup_id - ������������� ��������� ����� backup_id (��������������), ���� �� ������ �� ������������ ������� �����
     * @var data.paths - ������ (���� ��� ��������� ��������) ����� ��� �������������� �� ����� �������� ���������� (�������� "/site.ru/public_html");
     * */
    this.downloadFile = function (data) {
        _methodName = 'downloadFile';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     * ����� ������� ������ �� �������� � ������������ ������ �� ��������� ����� � ������ ��������.
     * @var data.backup_id - ������������� ��������� ����� backup_id (��������������), ���� �� ������ �� ������������ ������� �����
     * @var data.bases - ������ (���� ��� ��������� ��������) ����� ��� ������ MySQL ��� ��������������
     * */
    this.downloadMysql = function (data) {
        _methodName = 'downloadMysql';
        begetRequest.sendRequest(_path, _methodName, data);
    };
    /** ����� ���������� ������ � ������� ������� �� �������������� � �������� */
    this.getLog = function (data) {
        _methodName = 'getLog';
        begetRequest.sendRequest(_path, _methodName, data);
    };



    return this;
};