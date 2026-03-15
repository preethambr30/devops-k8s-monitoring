# System Architecture

This project implements a monitoring system for a Kubernetes application.

---

# Architecture Overview

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
Prometheus
↓
Grafana
↓
Alertmanager

Infrastructure Monitoring
↓
AWS CloudWatch

---

# Components

## Kubernetes (K3s)

K3s is used as a lightweight Kubernetes distribution running on AWS EC2.

---

## Prometheus

Prometheus collects metrics from:

* Kubernetes nodes
* Pods
* Containers
* System resources

---

## Grafana

Grafana visualizes metrics using dashboards.

It provides:

* CPU usage
* Memory usage
* Pod health
* Cluster resource usage

---

## Alertmanager

Alertmanager handles alerts triggered by Prometheus rules.

Example alert:

* High CPU usage

---

## AWS CloudWatch

CloudWatch monitors infrastructure metrics of the EC2 instance.

---

# Monitoring Flow

Application Pods
↓
Prometheus scrapes metrics
↓
Grafana displays dashboards
↓
Alertmanager triggers alerts
