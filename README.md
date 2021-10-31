## . NET Conf Thailand Website

## Running

Docker

`docker-compose -f docker-compose.yml up`

Local Machine

jekyll serve --force_polling --livereload

## Redirect form

-   You need to add redirect form to \_config.yml and Gemfile

\_config.yml

```
plugins:
  -jekyll-redirect-from
```

Gemfile

```
gem "jekyll-redirect-from"
```
