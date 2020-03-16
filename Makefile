service := cv-ui
docker-image := pineappleworkshop/pw-reactjs-base:0.0.1
root := $(abspath $(shell pwd))
port := 80

list:
	@grep '^[^#[:space:]].*:' Makefile | grep -v ':=' | grep -v '^\.' | sed 's/:.*//g' | sed 's/://g' | sort

bootstrap:
	pip install bumpversion
	yarn install

init:
	yarn install

dev:
	yarn start

docker-build:
	docker build -t $(docker-image) .

docker-dev:
	make docker-build
	make docker-run

docker-push:
	docker push $(docker-image)

docker-run:
	@docker run -itp $(port):$(port)  $(docker-image)

bumpversion-patch:
	bumpversion patch --allow-dirty

deploy:
	make docker-build
	make docker-push
	git push origin master
	kubectl apply -f k8s/deploy.yml

purge:
	go clean
	rm -rf $(root)/vendor
