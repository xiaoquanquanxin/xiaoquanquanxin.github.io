export interface ArticleDataModule {
	title: string;
	description: string;
	sectionList: Array<ArticleContentDataModule>
}

export interface ArticleContentDataModule {
	title: string;
	content: string;
}
