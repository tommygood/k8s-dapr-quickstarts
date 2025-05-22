NAMESPACE=default
DEPLOYMENT_NAME=dapr-cryptography

up:
	kubectl apply -f components
	kubectl apply -f ./configmap.yaml
	kubectl apply -f ./deployment.yaml

down:
	kubectl delete configmap dapr-crypto-keys
	kubectl delete deploy dapr-cryptography
	kubectl delete components localstorage

build-image:
	sudo docker build -t tommygood/$(DEPLOYMENT_NAME):latest .

push-image: build-image
	sudo docker push tommygood/$(DEPLOYMENT_NAME):latest

