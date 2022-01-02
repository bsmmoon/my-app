server:
	npm start

test:
	npm test

deploy-build:
	npm run build

deploy:
	firebase deploy

deploy-preview:
	firebase hosting:channel:deploy preview

deploy-init:
	firebase init
