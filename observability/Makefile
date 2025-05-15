up:
	kubectl apply -f ./deploy/appconfig.yaml
	kubectl apply -f ./deploy/zipkin.yaml

forward:
	kubectl port-forward svc/zipkin 19411:9411 & \
	kubectl port-forward svc/dapr-prom-prometheus-server 9090:80 -n dapr-monitoring
