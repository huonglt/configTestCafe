import { Selector } from 'testcafe';
export default class AppPage {
    constructor () {
        this.username = Selector('#username');
        this.password = Selector('#password');
        this.btn = Selector('#btn');
    }
}