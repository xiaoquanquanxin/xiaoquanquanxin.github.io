export interface ArticleDataModule {
	title: string;
	description: string;
	indexList: Array<IndexItemModule>;
	sectionList: Array<ArticleContentDataModule>
}

export interface ArticleContentDataModule {
	title: string;
	content: string;
	code: string;
	language: string;
	__html: string;
}

export interface IndexItemModule {
	title: string;
}
