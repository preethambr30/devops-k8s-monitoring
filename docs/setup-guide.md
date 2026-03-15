# Setup Guide

This document explains how to set up the DevOps Kubernetes monitoring project.

---

# 1. Launch EC2 Instance

Create an EC2 instance with:

* Ubuntu 22.04
* t2.medium (recommended)
* 30GB storage

Open ports in security group:

* 22 (SSH)
* 3000 (Grafana)
* 9090 (Prometheus)
* 9093 (Alertmanager)
* 30007 (Application)

---

# 2. Install Docker

Run:

```
sudo apt update
sudo apt install docker.io -y
```

Enable Docker:

```
sudo systemctl start docker
sudo systemctl enable docker
```

---

# 3. Install Kubernetes (K3s)

Run:

```
curl -sfL https://get.k3s.io | sh -
```

Check cluster:

```
kubectl get nodes
```

---

# 4. Deploy Application

Apply Kubernetes manifests:

```
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

Check pods:

```
kubectl get pods
```

Access application:

```
http://EC2_PUBLIC_IP:30007
```

---

# 5. Install Helm

```
sudo snap install helm --classic
```

---

# 6. Install Monitoring Stack

Add Prometheus repo:

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

Install monitoring stack:

```
helm install monitoring prometheus-community/kube-prometheus-stack
```

---

# 7. Access Monitoring Dashboards

Grafana:

```
kubectl port-forward svc/monitoring-grafana 3000:80
```

Prometheus:

```
kubectl port-forward svc/monitoring-kube-prometheus-prometheus 9090:9090
```

Alertmanager:

```
kubectl port-forward svc/monitoring-kube-prometheus-alertmanager 9093:9093
```

---

# 8. Verify Monitoring

Check dashboards in Grafana and confirm metrics are visible.

---

# 9. Infrastructure Monitoring

AWS CloudWatch provides EC2 infrastructure monitoring including:

* CPU utilization
* Network traffic
* Disk operations

---
