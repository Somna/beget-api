/**
 * Created by Andrey on 27.09.2015.
 */
'use strict'
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'mail/';
    var _methodName = '';

    /**
     * ����� ���������� ��� �������� ����� �� �������� ������
     * @var data.domain
     * */
    this.getMailboxList = function (data) {
        _methodName = 'getMailboxList';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     * ����� �������� ������ � ��������� ��������� �����
     * @var data.domain
     * @var data.mailbox
     * @var data.mailbox_password
     * */
    this.changeMailboxPassword = function (data) {
        _methodName = 'changeMailboxPassword';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     * ����� ������� �������� ���� �� �������� ������
     * @var data.domain
     * @var data.mailbox
     * @var data.mailbox_password
     * */
    this.createMailbox = function (data) {
        _methodName = 'createMailbox';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     * ����� ������� �������� ���� �� �������� ������
     * @var data.domain
     * @var data.mailbox
     * */
    this.dropMailbox = function (data) {
        _methodName = 'dropMailbox';
        begetRequest.sendRequest(_path, _methodName, data);
    };


    /**
     * ����� ������������� ����� ��� ��������� �����
     * @var data.domain - �����, �� ������� ��������� �������� ���� (��������, site.ru)
     * @var data.mailbox - ��� ��������� ����� (��������, info)
     * @var data.spam_filter_status - �����, �� ������� ��������� �������� ���� (��������, site.ru)
     * @var data.spam_filter - ������� ��������� ����� (0 - ����. ����������, 100 - �����������)
     * @var data.forward_mail_status - ����� ������ ��������������� ��� ��������� �����
     *          ��������� ��������:
     *                no_forward - ������ �� ����������������,
     *                forward - ������ ����� ���������������� �� �������� �������� �����,
     *                forward_and_delete - ������ ���������������� � ��������� �� ��������� �����.
     * */
    this.changeMailboxSettings = function (data) {
        _methodName = 'changeMailboxSettings';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     *  ����� ������� �������� ���� � ������ ������ ��� ���������
     *  @var data.domain - �����, �� ������� ��������� �������� ���� (��������, site.ru)
     *  @var data.mailbox - ��� ��������� ����� (��������, info)
     *  @var data.forward_mailbox - �������� ����, �� ������� ����� ���������������� �����a
     * */
    this.forwardListAddMailbox = function (data) {
        _methodName = 'forwardListAddMailbox';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     *  ����� ������� �������� ���� � ������ ������ ��� ���������
     *  @var data.domain - �����, �� ������� ��������� �������� ���� (��������, site.ru)
     *  @var data.mailbox - ��� ��������� ����� (��������, info)
     *  @var data.forward_mailbox - �������� ����, ������� ����� ������ �� ������ ���������
     * */
    this.forwardListDeleteMailbox = function (data) {
        _methodName = 'forwardListDeleteMailbox';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     *  ����� ������� �������� ���� � ������ ������ ��� ���������
     *  @var data.domain - �����, �� ������� ��������� �������� ���� (��������, site.ru)
     *  @var data.mailbox - ��� ��������� ����� (��������, info)
     * */
    this.forwardListShow = function (data) {
        _methodName = 'forwardListShow';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     *  ����� ������� �������� ���� � ������ ������ ��� ���������
     *  @var data.domain - ����� ��� �������� ����� ����������� ����� ������ (��������, site.ru)
     *  @var data.domain_mailbox - �������� ����, ������� ����� ���������� � �������� ����� ������ (��������, mail@site.ru)
     * */
    this.setDomainMail = function (data) {
        _methodName = 'setDomainMail';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     *  ����� ������� �������� ���� � ������ ������ ��� ���������
     *  @var data.domain - ����� ��� �������� ����� �������� ����� ������ (��������, site.ru)
     * */
    this.clearDomainMail = function (data) {
        _methodName = 'clearDomainMail';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    return this;
};