import SectionModel from "../models/Section.model";

const sections: SectionModel[] = [
	new SectionModel({
		title: 'Model 3',
		description: 'Leasing starting at $349/mo',
		image: '/images/model-3.jpg',
		shownInNav: true
	}),
	new SectionModel({
		title: 'Model Y',
		image: '/images/model-y.jpg',
		shownInNav: true
	}),
	new SectionModel({
		title: 'Model S',
		description: 'Schedule a Demo Drive',
		image: '/images/model-s.jpg',
		shownInNav: true
	}),
	new SectionModel({
		title: 'Model X',
		description: 'Schedule a Demo Drive',
		image: '/images/model-x.jpg',
		shownInNav: true
	}),
	new SectionModel({
		title: 'Solar Panels',
		description: 'Lowest Cost Solar Panels in America',
		image: '/images/solar-panel.jpg'
	}),
	new SectionModel({
		title: 'Solar Roof',
		description: 'Produce Clean Energy From Your Roof',
		image: '/images/solar-roof.jpg'
	}),
	new SectionModel({
		title: 'Accessories',
		image: '/images/accessories.jpg'
	})
]

export default sections