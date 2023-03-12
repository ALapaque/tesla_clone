export default class SectionModel {
	public readonly title: string = '';
	public readonly image: string = '';
	public readonly shownInNav?: boolean = false;
	public readonly description?: string;
	public readonly leftButtonText?: string;
	public readonly rightButtonText?: string;

	constructor(object?: Omit<SectionModel, 'getHref'>) {
		if (object) {
			return Object.assign(this, object)
		}

		return Object.create(this)
	}

	public get getHref(): string {
		return `#${encodeURIComponent(this.title)}`
	}
}