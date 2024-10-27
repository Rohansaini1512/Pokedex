# Pokedex App with CI/CD Pipeline

This project is a Pokedex application built with React and Redux, with a CI/CD pipeline implemented using Jenkins, Terraform, AWS, SonarQube, Prometheus, and Grafana.

## Project Overview

The Pokedex app allows users to browse and search Pokémon data in a simple, responsive interface. This project also demonstrates a full CI/CD pipeline setup, covering everything from infrastructure provisioning to code quality analysis and monitoring.

## Tech Stack

- **Frontend**: React, Redux
- **CI/CD**: Jenkins, Terraform
- **Infrastructure**: AWS (EC2)
- **Code Quality & Security**: SonarQube
- **Monitoring**: Prometheus, Grafana

## Blog Post

A comprehensive blog on this setup and pipeline is available [here](https://rohansaini1512.hashnode.dev/deployment-of-pokedex-app-using-terraform-and-jenkins-ci-cd).


## Project Setup

### Prerequisites

- Node.js
- AWS Account with IAM permissions
- Jenkins (set up locally or on an EC2 instance)
- SonarQube server
- Prometheus & Grafana servers

### Frontend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rohansaini1512/Pokedex.git
   cd Pokedex
