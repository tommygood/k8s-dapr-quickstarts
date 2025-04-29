.PHONY: apply delete logs apply gen-default-secret

NAMESPACE=default
DEPLOYMENT_NAME=dapr-configruation-management

build-image:
	sudo docker build -t tommygood/$(DEPLOYMENT_NAME):latest .

push-image: build-image
	sudo docker push tommygood/$(DEPLOYMENT_NAME):latest

delete:
	kubectl delete deploy $(DEPLOYMENT_NAME)

apply:
	kubectl apply -f deployment.yaml -n $(NAMESPACE)
	kubectl apply -f configuration-store.yaml

gen-default-secret:
	kubectl create secret generic mysecrets \
	--from-literal=db-password=SuperSecret12345

logs:
	kubectl logs deployment/$(DEPLOYMENT_NAME) -n $(NAMESPACE) -f
