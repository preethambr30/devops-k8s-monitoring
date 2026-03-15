# Docker Configuration

This folder contains the Docker configuration used to containerize the frontend application.

---

# Dockerfile

The Dockerfile builds a container image that serves the frontend application using **Nginx**.

---

# Build Image

Run the following command to build the Docker image:

docker build -t preethambr/monitoring-app .

---

# Push Image

Push the image to DockerHub:

docker push preethambr/monitoring-app

---

# Usage

The image is used in the Kubernetes deployment defined in the `k8s` directory.
