[![Build Status](https://travis-ci.org/telemark/micro-klarspraak.svg?branch=master)](https://travis-ci.org/telemark/micro-klarspraak)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-klarspraak

Microservice for checking your text against lix and kansellisten

## API

POST a text or url to check

```bash
$ curl -d '{"text": "Check me Im a nice text"}' https://klarspraak.micro.t-fk.win
```

```bash
$ curl -d '{"url": "https://www.telemark.no"}' https://klarspraak.micro.t-fk.win
```

## License

[MIT](LICENSE)
