/**
 * Created by Andrey on 27.09.2015.
 */

module.exports = function(params) {

    var begetRequest = require('./begetRequest')(params);

    var _path = 'backup/';
    var _methodName = '';


    /** backup */

    /** ����� ���������� ��������� ������ ��������� �������� �����. */
    this.getFileBackupList = function () {
        // TODO
    };

    /** ����� ���������� ��������� ������ ��������� ����� ��� mysql */
    this.getMysqlBackupList = function () {
        // TODO
    };

    /** ����� ���������� ������ ������ � ���������� �� ��������� ����� �� ��������� ���� � ��������������. */
    this.getFileList = function () {
        // TODO
    };

    /** ����� ���������� ������ ��� ������ �� ��������� ����� �� ��������� ��������������. */
    this.getMysqlList = function () {
        // TODO
    };

    /** ����� ������� ������ �� �������������� ������ �� ��������� ����� �� ��������� ���� � ��������� �����. */
    this.restoreFile = function () {
        // TODO
    };

    /** ����� ������� ������ �� �������������� �� �� ��������� ����� �� ��������� �����
     * �� � �������������� ��������� �����.  */
    this.restoreMysql = function () {
        // TODO
    };

    /** ����� ������� ������ �� �������� � ������������ ������ �� ��������� ����� � ������ ��������.  */
    this.downloadFile = function () {
        // TODO
    };

    /** ����� ������� ������ �� �������� � ������������ ������ �� ��������� ����� � ������ ��������. */
    this.downloadMysql = function () {
        // TODO
    };

    /**  ����� ���������� ������ � ������� ������� �� �������������� � ��������. */
    this.getLog = function (data) {
        /** @namespace data.backup_id */
        /** @namespace data.paths */

        // TODO
    };

    return this;
};