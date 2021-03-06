﻿/// <reference path="..//intellisense.js" />

/*global $, Model, setTimeout */

Model.JSONFileDataSource = function () {
  /// <summary>
  /// A test version of JSONDataSource, which returns 'canned' responses.
  /// </summary>

  this.findProperties = function (location, pageNumber, callback) {
    function fetchData() {
      $.ajax({
        dataType: "json",
        url: location.trim() === "" ? "model/AmbiguousSearchResults.json" : "model/SearchResults.json",
        success: function (result) {
          callback(result);
        }
      });
    }
    setTimeout(fetchData, 1000);
  };
};