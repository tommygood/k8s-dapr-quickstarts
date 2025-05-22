set-infra:
	helm repo add bitnami https://charts.bitnami.com/bitnami
	helm install redis bitnami/redis --namespace dapr-components --create-namespace
