# Monitoring Configuration

This folder contains monitoring configuration used by Prometheus.

---

# Prometheus Alert Rules

File:

prometheus-alert-rules.yaml

This file defines custom alert rules for the Kubernetes cluster.

Example alert:

HighCPUUsage – triggers when CPU usage exceeds 80%.

---

# Apply Alert Rules

Run:

kubectl apply -f monitoring/prometheus-alert-rules.yaml

---

# Monitoring Stack

The monitoring stack includes:

* Prometheus
* Grafana
* Alertmanager
* Node Exporter
* kube-state-metrics

These components were installed using the Helm chart:

kube-prometheus-stack
