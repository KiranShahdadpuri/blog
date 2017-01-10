Router.map(function(){
	// this.route("home",{
	// 		path:"/",
	// 		template:"hi"
	// 	})
	
	this.route("layout",{
			path:"/layout",
			
			yieldTemplates:{
				'nav': {to: 'navbar'},
				
				'footer': {to: 'footer'}	
			}
			
		}),
	this.route("home",{
			path:"/home",
			layoutTemplate:"layout",
			yieldTemplates:{
				'nav': {to: 'navbar'},
				
				'footer': {to: 'footer'}	
			}
			
		}),
	this.route("about",{
			path:"/about",
			layoutTemplate:"layout",
			yieldTemplates:{
				'nav': {to: 'navbar'},
				
				'footer': {to: 'footer'}	
			}
			
		}),
	this.route("contact",{
			path:"/contact",
			layoutTemplate:"layout",
			yieldTemplates:{
				'nav': {to: 'navbar'},
				
				'footer': {to: 'footer'}	
			}
			
		}),
	this.route("post",{
			path:"/post",
			layoutTemplate:"layout",
			yieldTemplates:{
				'nav': {to: 'navbar'},
				
				'footer': {to: 'footer'}	
			}
			
		})/*,
	this.route("contact",{
			path:"/contact",
			layoutTemplate:"layout",
			yieldTemplates:{
				'nav': {to: 'header'},
				'leftNav': {to: 'leftNav'},
				'footer': {to: 'footer'}	
			}
			
		}),
	this.route("services",{
			path:"/services",
			layoutTemplate:"layout",
			yieldTemplates:{
				'nav': {to: 'header'},
				'leftNav': {to: 'leftNav'},
				'footer': {to: 'footer'}	
			}
			
		})
	// 	this.route("center2center",{
	// 		path:"/center2center",
	// 		layoutTemplate:"layout",
	// 		yieldTemplates:{
	// 			'header': {to: 'header2Nav'}	
	// 		}
			
	// 	})*/
});