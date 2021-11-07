const express = require('express');

const { quotes } = require('./data');
const { getRandomElement, filterQuotesByName, findId, newId } = require('./utils');

quotesRouter = express.Router();

quotesRouter.get('/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.json({quote: randomQuote});
});

quotesRouter.get('/', (req, res, next) => {
    const person = req.query.person;
    if(person) {
        const filteredQuotesByName = filterQuotesByName(person, quotes);
        res.json({quotes: filteredQuotesByName});
    } else {
        res.json({quotes: quotes});
    }
});

quotesRouter.post('/', (req, res, next) => {
    const person = req.query.person;
    const quote = req.query.quote;
    const year = req.query.year;
    if(person && quote && year) {
        const newQuote = {
            id: newId(quotes),
            quote: quote,
            person: person,
            year: year
        };
        quotes.push(newQuote);
        res.json({quote: newQuote});
    } else {
        res.status(400).send();
    }
});

quotesRouter.put('/:id', (req, res, next) => {
    const person = req.query.person;
    const quote = req.query.quote;
    const id = req.params.id;
    const foundQuoteIndex = findId(id, quotes);
    if(foundQuoteIndex !== -1) {
        if(person) {
            quotes[foundQuoteIndex].person = person;
        }
        if(quote) {
            quotes[foundQuoteIndex].quote = quote;
        }
        res.json({quote: quotes[foundQuoteIndex]});
    } else {
        res.status(404).send();
    }
});

quotesRouter.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    const foundQuoteIndex = findId(id, quotes);
    if(foundQuoteIndex !== -1) {
        res.json({quote: quotes[foundQuoteIndex]});
        quotes.splice(foundQuoteIndex, 1);
    } else {
        res.status(404).send();
    }
});

module.exports = quotesRouter;