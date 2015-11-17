.PHONY: all test lint

start: lint test

lint:
	@node_modules/.bin/standard

test: lint
	@node_modules/.bin/karma start

test-once: lint
	@node_modules/.bin/karma start --single-run --browsers Chrome
