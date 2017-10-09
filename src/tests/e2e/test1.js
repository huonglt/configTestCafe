import { Selector } from 'testcafe';
import AppPage from './AppPage';

const page = new AppPage();

fixture `Getting started`
 .page `http://localhost:8080`;

test('My first test', async t => {
    console.log(`1st test`);
     await t
        .typeText('#username', 'Peter Parker')
        .typeText('#password', '1234')
        .click('#btn');
});

test('My second test', async t => {
    console.log(`2nd test`);
     await t
        .typeText('#username', 'Peter Parker')
        .typeText('#password', '1234')
        .click('#btn');
});