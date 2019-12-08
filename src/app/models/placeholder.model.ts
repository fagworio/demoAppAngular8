export class Images {
	public albumId: number;
	public id: number;
	public title: string;
	public url: string;
	public thumbnailUrl: string;
}

export class Posts {
	public userId: number;
	public id: number;
	public title:  string;
	public body: string;
}

export class Todos {
	public userId: number;
	public id: number;
	public title:  string;
	public completed: boolean;
}