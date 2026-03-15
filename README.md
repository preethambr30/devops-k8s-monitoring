# DevOps Kubernetes Monitoring Project

This project demonstrates **end-to-end monitoring of a Kubernetes application** using Prometheus, Grafana, Alertmanager, and AWS CloudWatch.

The application is deployed on a **K3s Kubernetes cluster running on an AWS EC2 instance**.

---

# Project Architecture

GitHub
↓
Docker Image
↓
DockerHub
↓
Kubernetes (K3s on EC2)
↓
Frontend Application
↓
Prometheus (metrics collection)
↓
Grafana (visualization dashboards)
↓
Alertmanager (alert handling)

Infrastructure Monitoring
↓
AWS CloudWatch

---

# Tech Stack

* Docker
* Kubernetes (K3s)
* Prometheus
* Grafana
* Alertmanager
* AWS EC2
* AWS CloudWatch
* GitHub

---

# Project Structure

```
devops-k8s-monitoring
│
├── app                # Frontend application
│
├── docker             # Dockerfile for container image
│
├── k8s                # Kubernetes manifests
│   ├── deployment.yaml
│   └── service.yaml
│
├── monitoring         # Prometheus alert rules
│   └── prometheus-alert-rules.yaml
│
├── screenshots        # Monitoring screenshots
│
├── README.md
└── LICENSE
```

---

# Application Deployment

The frontend application is containerized using Docker and deployed to Kubernetes.

### Build Docker Image

```
docker build -t preethambr/monitoring-app .
```

### Push Docker Image

```
docker push preethambr/monitoring-app
```

---

# Kubernetes Deployment

Deploy the application using Kubernetes manifests.

```
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

Check running pods:

```
kubectl get pods
```

Access the application:

```
http://EC2_PUBLIC_IP:30007
```

---

# Monitoring Stack Setup

The monitoring stack is installed using **kube-prometheus-stack Helm chart**.

### Install Helm

```
sudo snap install helm --classic
```

### Add Prometheus Helm Repository

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

### Install Monitoring Stack

```
helm install monitoring prometheus-community/kube-prometheus-stack
```

This installs:

* Prometheus
* Grafana
* Alertmanager
* Node Exporter
* kube-state-metrics

---

# Access Monitoring Dashboards

## Grafana

Run:

```
kubectl port-forward svc/monitoring-grafana 3000:80
```

Open in browser:

```
http://EC2_PUBLIC_IP:3000
```

---

## Prometheus

Run:

```
kubectl port-forward svc/monitoring-kube-prometheus-prometheus 9090:9090
```

Open:

```
http://EC2_PUBLIC_IP:9090
```

---

## Alertmanager

Run:

```
kubectl port-forward svc/monitoring-kube-prometheus-alertmanager 9093:9093
```

Open:

```
http://EC2_PUBLIC_IP:9093
```

---

# Prometheus Alert Rules

Custom alert rules are stored in:

```
monitoring/prometheus-alert-rules.yaml
```

Example alert rule:

```
HighCPUUsage
```

This alert triggers when **CPU usage exceeds 80% for 1 minute**.

---

# Infrastructure Monitoring

AWS CloudWatch monitors EC2 infrastructure metrics including:

* CPU Utilization
* Network Traffic
* Disk I/O

This provides **infrastructure-level monitoring**, while Prometheus provides **Kubernetes-level monitoring**.

---

# Screenshots

Monitoring dashboards and outputs are available in the **screenshots** directory.

Examples include:

* Grafana Kubernetes dashboard
* Prometheus alerts page
* Alertmanager interface
* Kubernetes pod status
* AWS CloudWatch metrics

---

# Key Features

* Kubernetes application deployment
* Real-time monitoring with Prometheus
* Grafana dashboards for visualization
* Alert management with Alertmanager
* Infrastructure monitoring using AWS CloudWatch

---

# Future Improvements

* Add CI/CD pipeline using GitHub Actions
* Configure Slack or Email alert notifications
* Deploy application using Helm charts
* Add service-level monitoring with ServiceMonitor
