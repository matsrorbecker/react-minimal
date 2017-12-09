const el = require('react').createElement

module.exports = () =>
    el(
        'div',
        {className: 'container'},
        el('h1', null, 'Minimal React app ...'),
        el('p', null, '... up and running.')
    )