.PHONY: all test lint

start: lint test

lint:
	@node_modules/.bin/standard

test:
	@node_modules/.bin/karma start

test-once:
	@node_modules/.bin/karma start --single-run --browsers Chrome
