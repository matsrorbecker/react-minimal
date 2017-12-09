const {createElement} = require('react')
const {render} = require('react-dom')

const app = require('./components/app')

document.addEventListener('DOMContentLoaded', () =>
        render(createElement(app), document.querySelector('#app'))
    )