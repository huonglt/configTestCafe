import { Selector } from 'testcafe';
import AppPage from './AppPage';

const page = new AppPage();

fixture `Getting started`
 .page `http://localhost:8080`;

test('My first test', async t => {
    console.log(`something here`);
     await t
        .typeText(page.username, 'Peter Parker')
        .typeText(page.password, '1234');
});