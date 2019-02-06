class DataApi {
    constructor(rawData) {
        this.rawData = rawData;
    }
    mapArrayIntoObject(array) {
        return array.reduce((acc, curr)=> {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }
    getArticles() {
        return this.mapArrayIntoObject(this.rawData.articles);
    }
    getAuthors(){
        return this.mapArrayIntoObject(this.rawData.authors);
    }
}

export default DataApi;