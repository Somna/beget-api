/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'site/';
    var _methodName = '';

    /**
     * ����� ���������� ������ ������. ���� � ����� ������������ ������, �� ��� ��� �� ����� ����������
     * */
    this.getList = function (callback) {
        _methodName = 'getList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     *  ����� ������� ����� ���� � �������� ������.
     *  @var data.name - ��� ���������� � ������ (��������, site.ru)
     * */
    this.add = function (data, callback) {
        _methodName = 'add';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ����� ������� ����. ���� � ����� ���� ������������ ������, �� ��� ����� ����������� �� ����
     *  @var data.id - id �����, ��� int
     * */
    this.delete = function (data, callback) {
        _methodName = 'delete';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ����� �������������� ����� � �����
     *  @var data.domain_id - id ������, �������� ���������� id ������ ����� �������� domain/getList
     *  @var data.site_id - id �����.
     * */
    this.linkDomain = function (data, callback) {
        _methodName = 'linkDomain';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ����� ������������� �����.
     *  @var data.domain_id - id ������, �������� ���������� id ������ ����� �������� domain/getList
     * */
    this.unlinkDomain = function (data, callback) {
        _methodName = 'unlinkDomain';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ����� ��������� ��������� ������ �����.
     *  @var data.id - id �����, �������� ���������� id ����� ����� �������� site/getList
     *  @var data.excludedPaths - ������ ����� � ������� ����� ��������� ��������� ������
     * */
    this.freeze = function (data, callback) {
        _methodName = 'freeze';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ����� ��������� ��������� ������ �����.
     *  @var data.id - id �����, �������� ���������� id ����� ����� �������� site/getList
     * */
    this.unfreeze = function (data, callback) {
        _methodName = 'unfreeze';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    return this;
};