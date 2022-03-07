export default class Singleton {
    private static instance: Singleton;
    count = 0;
    constructor() {
        if (!Singleton.instance) Singleton.instance = this;
        return Singleton.instance;
    }
}