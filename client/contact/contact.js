Template.contact.events({
	'submit form #contactForm' : function(e,tpl){
		e.preventDefault();
		var obj = {};
		obj.name=$("#name").val();
		obj.email=$("#email").val();
		obj.phone=$("#phone").val();
		obj.meassage=$("#message").val();
		Details.insert(obj);

	}
});