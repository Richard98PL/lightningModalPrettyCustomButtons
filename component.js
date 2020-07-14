({
	cancelClick : function(component, event, helper) {
		$A.get("e.force:closeQuickAction").fire();
	},
	saveClick : function(component, event, helper) {
		$A.get("e.force:closeQuickAction").fire();
	}
})
