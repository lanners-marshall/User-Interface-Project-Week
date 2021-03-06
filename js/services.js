// -----------------------------------------------------------

class TabLink {
	constructor(tab){
		this.tab = tab;
		this.tabData = this.tab.dataset.tab;
		tab.addEventListener('click', () => {this.select(this.tabData)})
	}
	select(data){

		let mainContent = document.querySelectorAll('.main-content');
		let tabs = document.querySelectorAll('.btn-s');

		mainContent.forEach(function(item){
			item.classList.remove("show-tabs");
		});

		tabs.forEach(function(item){
			item.classList.remove('btn-new-back')
		});
		
		switch(data){
			case "1":
				mainContent[0].classList.add("show-tabs");
			break;
			case "2":
				mainContent[1].classList.add("show-tabs");
			break;
			case "3":
				mainContent[2].classList.add("show-tabs");
			break;
			case "4":
				mainContent[3].classList.add("show-tabs");
			break;
		}
		this.tab.classList.add('btn-new-back');
	}
}


let tabLinks = document.querySelectorAll('.btn-s');
tabLinks = Array.from(tabLinks).map(tab => new TabLink(tab));
tabLinks[0].select("1");

// -----------------------------------------------------------