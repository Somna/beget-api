/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'domain/';
    var _methodName = '';

    /**
     * ����� ���������� ������ ������� �� �������� ������������
     * */
    this.getList = function (callback) {
        _methodName = 'getList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };
    /**
     * ����� ���������� ������ ���
     * */
    this.getZoneList = function (callback) {
        _methodName = 'getZoneList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     * ����� ��������� �����
     * @var data.hostname - �������� ���, ��� ���� (��������, domain)
     * @var data.zone_id - id ����, ��� int
     * */
    this.addVirtual = function (data, callback) {
        _methodName = 'addVirtual';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };
    /**
     * ����� ������� �����. ���� ����� ��� ����������� � �����, �� �� ����� ���������� �� ����. ����� ����� ������� ��� ��������� ����� ������.
     * @var data.id - id ������;
     * */
    this.delete = function (data, callback) {
        _methodName = 'delete';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ����� ���������� ������ ����������
     * */
    this.getSubdomainList = function (callback) {
        _methodName = 'getSubdomainList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };
    /**
     * ����� ��������� �������� ��������
     * @var data.subdomain - ��� ���������
     * @var data.domain_id - id ������������� ������
     * */
    this.addSubdomainVirtual = function (data, callback) {
        _methodName = 'addSubdomainVirtual';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ����� ������� �������� ��������.
     * @var data.id - id ���������.
     * */
    this.addSubdomainVirtual = function (data, callback) {
        _methodName = 'addSubdomainVirtual';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ����� ���������� ���������� � ����������� ����������� ��������� ��������� �����.
     * @var data.hostname - �������� ���, ��� ����
     * @var data.zone_id - id ����, �������� ������ ��� ����� � ������� ������ getZoneList
     * @var data.period - ������ ����������� (� �����), ��� int
     * */
    this.checkDomainToRegister = function (data, callback) {
        _methodName = 'checkDomainToRegister';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /** ����� ���������� ������ ����������� ������, ��������� ��� ����������� �������. */
    this.getDomainPersons = function (callback) {
        _methodName = 'getDomainPersons';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     * ����� ��������� ����� � ��������� ������ �� ��� �����������
     * @var data.hostname - ��� ������, ��� ����
     * @var data.zone_id - id ����. �������� ������ ��� ����� ������� getZoneList
     * @var data.period - ������ �����������
     * @var data.pay_type - ������ ������
     * @var data.person_type - ��� ������������ �������
     * @var data.person_id - id ������� �������, ��� int
     * @var data.person_fields - ���� �������, ������
     * @var data.pp - ������������ �� ������ ������� ������������ ������ (����������� � ����� .ru / .su / .��) (0/1)
     * @var data.enable_auto_renew - �������� ������ ��������������� ��������� ������ (0/1)
     * */
    this.registerVirtual = function (data, callback) {
        _methodName = 'registerVirtual';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };


    /**
     * ����� ���������� ���������� � ����������� � ������� ��������� ������.
     * @var data.id - id ������
     * @var data.period - �������� ������ ���������.
     */
    this.getRenewInfo = function (data, callback) {
        _methodName = 'getRenewInfo';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };


    /**
     * ����� ��������� ������ �� ��������� ��������� ��������� ����� �� �������� ������
     * @var data.id - id ������
     * @var data.pay_type - ������ ������
     * @var data.period - �������� ������ ���������
     */
    this.renew = function (data, callback) {
        _methodName = 'renew';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ����� ���������� ���������� � ������� ������ php ��� ������, ������� �� php ��� cgi � ��������� ��� ��������� ������� php
     * @var data.full_fqdn - ������ ��� ������, ��� �������� ���������� �������� ����������
     */
    this.getPhpVersion = function (data, callback) {
        _methodName = 'getPhpVersion';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ����� ���������� ���������� � ������� ������ php ��� ������, ������� �� php ��� cgi � ��������� ��� ��������� ������� php
     * @var data.full_fqdn - ������ ��� ������, ��� �������� ���������� �������� ����������
     * @var data.php_version - ������ php � ������� ��������� � ������ ��������� ������, ����������� �������� getPhpVersion
     * @var data.is_cgi - �������� �� php ��� cgi, �� ��������� ���. �� ������������ ��������. 1 - �������� php ��� cgi, 0 - ��������� cgi (�������� ��� apache mod_php)
     */
    this.changePhpVersion = function (data, callback) {
        _methodName = 'changePhpVersion';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ����� ���������� ������ �������� apache ������ mod_php(php_admin_flag, php_admin_value, php_value, php_flag) ��� ������.
     * @var data.full_fqdn - ������ ��� ������, ��� �������� ���������� �������� ����������
    */
    this.getDirectives = function (data, callback) {
        _methodName = 'getDirectives';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ��������� � VirtualHost ������ ���������� ���������, ���� ��� ��������� � ������ ����������� (php_admin_flag, php_admin_value, php_value, php_flag)
     * @var data.full_fqdn - ������ ��� ������, ��� �������� ���������� �������� ����������
     * @var data.directives_list - ������ �������� ������ ���������� ��������, � ������� [{"name":"dirictive name","value":"dirictive value"}]
    */
    this.addDirectives = function (data, callback) {
        _methodName = 'addDirectives';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ������� �� VirtualHost ������ ���������� ���������, ���� ��� ��������� � ������ ����������� (php_admin_flag, php_admin_value, php_value, php_flag) ��� ��������������
     * @var data.full_fqdn - ������ ��� ������, ��� �������� ���������� �������� ����������
     * directives_list - ������ �������� ������ ���������� �������, � ������� [{"name":"dirictive name","value":"dirictive value"}]
    */
    this.removeDirectives = function (data, callback) {
        _methodName = 'removeDirectives';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    return this;
};