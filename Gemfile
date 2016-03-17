# A sample Gemfile
source "https://rubygems.org"

require 'json'
require 'open-uri'

gem 'jekyll'
gem 'guard'
gem 'guard-livereload'
gem 'kramdown', '~> 1.3'

versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
