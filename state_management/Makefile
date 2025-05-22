NAMESPACE=default
DEPLOYMENT_NAME=dapr-state-management

up:
	kubectl apply -f components
	kubectl apply -f ./deployment.yaml

down:
	kubectl delete components statestore
	kubectl delete deployment $(DEPLOYMENT_NAME)

build-image:
	sudo docker build -t tommygood/$(DEPLOYMENT_NAME):latest .

push-image: build-image
	sudo docker push tommygood/$(DEPLOYMENT_NAME):latest

