import SectionModel from "../models/Section.model";

const sections: SectionModel[] = [
	new SectionModel({
		title: 'Model 3',
		description: 'Leasing starting at $349/mo',
		image: '/images/model-3.jpg',
		shownInNav: true,
		leftButtonText: 'Custom Order',
		rightButtonText: 'Demo Drive'
	}),
	new SectionModel({
		title: 'Model Y',
		image: '/images/model-y.jpg',
		shownInNav: true,
		leftButtonText: 'Custom Order',
		rightButtonText: 'Demo Drive'
	}),
	new SectionModel({
		title: 'Model S',
		description: 'Schedule a Demo Drive',
		image: '/images/model-s.jpg',
		shownInNav: true,
		leftButtonText: 'Custom Order',
		rightButtonText: 'View Inventory'
	}),
	new SectionModel({
		title: 'Model X',
		description: 'Schedule a Demo Drive',
		image: '/images/model-x.jpg',
		shownInNav: true,
		leftButtonText: 'Custom Order',
		rightButtonText: 'View Inventory'
	}),
	new SectionModel({
		title: 'Solar Panels',
		description: 'Lowest Cost Solar Panels in America',
		image: '/images/solar-panel.jpg',
		leftButtonText: 'Order Now',
		rightButtonText: 'Learn More'
	}),
	new SectionModel({
		title: 'Solar Roof',
		description: 'Produce Clean Energy From Your Roof',
		image: '/images/solar-roof.jpg',
		leftButtonText: 'Order Now',
		rightButtonText: 'Learn More'
	}),
	new SectionModel({
		title: 'Accessories',
		image: '/images/accessories.jpg',
		leftButtonText: 'Shop Now'
	})
]

export default sections