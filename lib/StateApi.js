class StateApi {
    constructor(rawData) {
        this.data = {
            articles: this.mapArrayIntoObject(rawData.articles),
            authors: this.mapArrayIntoObject(rawData.authors),
            searchTerm: '',
            timestamp: new Date()
        };
        this.subscriptions = {};
        this.lastSubscriptionId = 0;
    }

    mapArrayIntoObject(array) {
        return array.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }

    getArticles() {
        return this.data.articles;
    }

    getAuthors() {
        return this.data.authors;
    }

    getAuthor = (authorid) => {
        return this.data.authors[authorid];
    }
    getState = () => {
        return this.data;
    }
    subscribe = (cb) => {
        this.lastSubscriptionId++;
        this.subscriptions[this.lastSubscriptionId] = cb;
        return this.lastSubscriptionId;
    }
    unsubscribe = (subscriptionId) => {
        delete this.subscriptions[subscriptionId];
    }
    notifySubscibers = () => {
        Object.values(this.subscriptions).forEach((cb) => cb());
    }
    mergeWithState= (stateChange) => {
        this.data = {
            ...this.data,
            ...stateChange
        };
        this.notifySubscibers();
    }
    setSearchTerm = (searchTerm) => {
        this.mergeWithState({searchTerm})
    };
    startClock = () => {
        setInterval(()=>{
            this.mergeWithState({
                timestamp: new Date()
            });
        });
    }
}

export default StateApi;