NAMESPACE=default
BACKEND_DEPLOYMENT_NAME=dapr-service-invocation-backend
FRONTEND_DEPLOYMENT_NAME=dapr-service-invocation-frontend

up:
	kubectl apply -f resiliency.yaml
	kubectl apply -f access-control.yaml
	kubectl apply -f ./server/deployment.yaml
	kubectl apply -f ./client/deployment.yaml

down:
	kubectl delete deploy service-invocation-backend
	kubectl delete deploy service-invocation-frontend
	kubectl delete Resiliency myresiliency
	kubectl delete Configuration app-access-policy

build-image:
	sudo docker build -t tommygood/$(BACKEND_DEPLOYMENT_NAME):latest ./server
	sudo docker build -t tommygood/$(FRONTEND_DEPLOYMENT_NAME):latest ./client

push-image: build-image
	sudo docker push tommygood/$(BACKEND_DEPLOYMENT_NAME):latest
	sudo docker push tommygood/$(FRONTEND_DEPLOYMENT_NAME):latest

