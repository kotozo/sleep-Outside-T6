export default class ProductList{
    constructor(category, dadaSource, listElement) {
        this.category = category;
        this.dataSource = this.dataSource;
        this.listElement =listElement;
    }
    // init demand allows async/await usage
    async init(){
        // get products from dataSource
        const list = await this.dataSource.getData();
        this.renderList(products);
    }
}