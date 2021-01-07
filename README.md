## . NET Conf Thailand Website

## Running

Docker

`docker-compose -f docker-compose.yml up`

Local Machine

jekyll serve --force_polling --livereload

## Redirect form

-   You need to add redirect form to \_config.xml and Gemfile

\_config.xml

```
plugins:
  -jekyll-redirect-from
```

Gemfile

```
gem "jekyll-redirect-from"
```
