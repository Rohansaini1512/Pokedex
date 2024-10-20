terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"  # Use AWS provider version 5.x.x
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"  # Specify the AWS region
}
