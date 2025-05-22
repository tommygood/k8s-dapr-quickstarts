.PHONY: apply delete logs

NAMESPACE=dapr-istio

up:
	kubectl apply -f redis-pubsub.yaml -n $(NAMESPACE)
	kubectl apply -f sub/deployment.yaml -n $(NAMESPACE)
	kubectl apply -f pub/deployment.yaml -n $(NAMESPACE)

down:
	kubectl delete -f pub/deployment.yaml -n $(NAMESPACE) || true
	kubectl delete -f sub/deployment.yaml -n $(NAMESPACE) || true
	kubectl delete -f redis-pubsub.yaml -n $(NAMESPACE) || true

logs-sub:
	kubectl logs deployment/subscriber -n $(NAMESPACE) -f

logs-pub:
	kubectl logs deployment/publisher -n $(NAMESPACE) -f

status:
	kubectl get pods -n $(NAMESPACE) -o wide
