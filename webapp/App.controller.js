sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("fabboo.App", {
        onPressButton: function () {
            MessageToast.show("Hello Word!");
        }
    });

});