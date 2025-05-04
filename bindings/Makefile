NAMESPACE=default
DEPLOYMENT_NAME=dapr-bindings

up:
	kubectl apply -f components
	kubectl apply -f db
	kubectl apply -f ./deployment.yaml

clean:
	kubectl delete components cron
	kubectl delete components sqldb
	kubectl delete deployment postgres
	kubectl delete service postgres
	kubectl delete deploy dapr-bindings

build-image:
	sudo docker build -t tommygood/$(DEPLOYMENT_NAME):latest .

push-image: build-image
	sudo docker push tommygood/$(DEPLOYMENT_NAME):latest

