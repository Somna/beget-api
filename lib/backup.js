/**
 * Created by Andrey on 27.09.2015.
 */
'use strict'

module.exports = function(params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'backup/';
    var _methodName = '';


    /** backup */

    /** ����� ���������� ��������� ������ ��������� �������� �����. */
    this.getFileBackupList = function (callback) {
        _methodName = 'getFileBackupList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /** ����� ���������� ��������� ������ ��������� ����� ��� mysql */
    this.getMysqlBackupList = function (callback) {
        _methodName = 'getMysqlBackupList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     * ����� ���������� ������ ������ � ���������� �� ��������� ����� �� ��������� ���� � ��������������.
     * @var data.backup_id  - ������������� ��������� ����� backup_id, ���� �� ����� - ������ ������� ���� �� ������� �����
     * @var data.path - ���� �� ����� �������� ���������� (�������� "/site.ru/public_html")
     * */
    this.getFileList = function (data, callback) {
        _methodName = 'getFileList';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /** ����� ���������� ������ ��� ������ �� ��������� ����� �� ��������� ��������������.
     * @var data.backup_id - ������������� ��������� ����� backup_id, ���� �� ����� - ������ ������� ���� �� ������� �����
     * */
    this.getMysqlList = function (data, callback) {
        _methodName = 'getMysqlList';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ����� ������� ������ �� �������������� ������ �� ��������� ����� �� ��������� ���� � ��������� �����.
     * @var data.backup_id  - ������������� ��������� ����� backup_id
     * @var data.paths - ������ (���� ��� ��������� ��������) ����� ��� �������������� �� ����� �������� ���������� (�������� "/site.ru/public_html")
     * */
    this.restoreFile = function (data, callback) {
        _methodName = 'restoreFile';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ����� ������� ������ �� �������������� �� �� ��������� ����� �� ��������� ����� �� � �������������� ��������� �����.
     * @var data.backup_id - ������������� ��������� ����� backup_id
     * @var data.bases - ������ (���� ��� ��������� ��������) ����� ��� ������ MySQL ��� ��������������
     * */
    this.restoreMysql = function (data, callback) {
        _methodName = 'restoreMysql';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ����� ������� ������ �� �������� � ������������ ������ �� ��������� ����� � ������ ��������.
     * @var data.backup_id - ������������� ��������� ����� backup_id (��������������), ���� �� ������ �� ������������ ������� �����
     * @var data.paths - ������ (���� ��� ��������� ��������) ����� ��� �������������� �� ����� �������� ���������� (�������� "/site.ru/public_html");
     * */
    this.downloadFile = function (data, callback) {
        _methodName = 'downloadFile';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ����� ������� ������ �� �������� � ������������ ������ �� ��������� ����� � ������ ��������.
     * @var data.backup_id - ������������� ��������� ����� backup_id (��������������), ���� �� ������ �� ������������ ������� �����
     * @var data.bases - ������ (���� ��� ��������� ��������) ����� ��� ������ MySQL ��� ��������������
     * */
    this.downloadMysql = function (data, callback) {
        _methodName = 'downloadMysql';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };
    /** ����� ���������� ������ � ������� ������� �� �������������� � �������� */
    this.getLog = function (callback) {
        _methodName = 'getLog';
        begetRequest.sendRequest(_path, _methodName, callback);
    };



    return this;
};