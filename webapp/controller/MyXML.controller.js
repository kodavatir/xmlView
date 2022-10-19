sap.ui.define([
    "sap/ui/core/mvc/Controller"
],

function(controller){
    return controller.extend("mickey.controller.MyXML",{

      clickMe:function(params){
        var oView = this.getView();
        var oControl = oView.byId("MyButton");
        oControl.setVisible(false);
      }
    });
});