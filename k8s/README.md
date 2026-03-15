# Kubernetes Manifests

This directory contains Kubernetes configuration files used to deploy the application.

---

# Files

deployment.yaml – Defines the application deployment
service.yaml – Exposes the application using a NodePort service

---

# Deploy Application

Run:

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

---

# Verify Deployment

Check running pods:

kubectl get pods

Check services:

kubectl get svc

---

# Access Application

http://EC2_PUBLIC_IP:30007
