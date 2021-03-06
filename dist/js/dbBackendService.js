/* ========================================================================
 * jQueryStickyNote: dbBackendService.js v1.0.0
 *
 * ========================================================================
 * Copyright 2016
 * Licensed under MIT (https://github.com/keshikashvili-gio/jQueryStickyNote/master/LICENSE)
 * ======================================================================== */
window.note = window.note || {};
+function ($) {
  'use strict';

  note.DbBackendService = function (options) {
    this.options = options;
    console.log(options);
    this.data = {};
  };

  note.DbBackendService.prototype = Object.create(note.DbService.prototype);

  note.DbBackendService.prototype.constructor = note.DbBackendService;

  note.DbBackendService.prototype.save = function (data) {
    var self = this;
    this._post(this.options.saveUrl, data).done(function (res) {
      if (res.success) {
        self.data = res.data;
      } else {
        return res.errorMsg;
      }
    });
  };

  note.DbBackendService.prototype.delete = function (id) {
    var self = this;
    this._post(self.options.deleteUrl, {id: id}).done(function (res) {
      if (res.success) {
        self.data = res.data;
      } else {
        console.log(res.errorMsg);
      }
    });
  };

  note.DbBackendService.prototype.deleteAll = function () {

  };

  note.DbBackendService.prototype.update = function (data) {
    var self = this;
    return this._post(self.options.updateUrl, data);
  };

  note.DbBackendService.prototype.updateAll = function () {


  };

  note.DbBackendService.prototype.getData = function () {
    var self = this;
    return this._get(this.options.loadUrl);
  };

  note.DbBackendService.prototype.lastInsertId = function () {
    return this.data.id;
  };

  note.DbBackendService.prototype._get = function (url, data) {
    return $.ajax({
      url: url,
      type: 'GET',
      data: data,
      dataType: 'json'
    });
  };

  note.DbBackendService.prototype._post = function (url, data) {
    return $.ajax({
      url: url,
      type: 'POST',
      data: data,
      dataType: 'json'
    });
  };


}(jQuery);

