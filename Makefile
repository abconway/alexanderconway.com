all: install

install:
	npm install
	pip install -r requirements.txt

develop: install

lint:
	npm run lint

test: lint
	npm run test

build: test
	npm run build

publish: build sync

sync:
	aws s3 sync dist s3://alexanderconway.com
