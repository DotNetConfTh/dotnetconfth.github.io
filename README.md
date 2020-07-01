## . NET Conf Thailand

###  Running the project locally
* clone the project
* docker-compose up
* Launch a browser and navigate to http://localhost:4000 (live reload)

## Plugins that we use
### Redirect form

* You need to add redirect form to _config.xml and Gemfile

_config.xml

```
plugins:
  -jekyll-redirect-from
```

Gemfile
```
gem "jekyll-redirect-from"
``
