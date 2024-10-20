resource "aws_security_group" "Pokedex-sg" {
  name        = "Pokedex-Security Group"
  description = "Open 22, 443, 80, 9000 , 8080 , 5173 for Pokedex"

  # Define a single ingress rule to allow traffic on all specified ports
  ingress = [
    for port in [22, 80, 443, 9000, 8080 ,5173] : {
      description      = "Access for Pokedex app"
      from_port        = port
      to_port          = port
      protocol         = "tcp"
      cidr_blocks      = ["0.0.0.0/0"]
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      security_groups  = []
      self             = false
    }
  ]

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "Pokedex-sg"
  }
}

resource "aws_instance" "pokedex" {
  ami                    = "ami-0f0a79878f8126e8c"
  instance_type          = "t3.micro"
  key_name               = "Pokedex"
  vpc_security_group_ids = [aws_security_group.Pokedex-sg.id]
 # Use the provided security group ID
#   subnet_id              = "subnet-025bdded9a2961bd2"  # Make sure this subnet belongs to the same VPC
  user_data              = templatefile("./install_jenkins.sh", {})

  tags = {
    Name = "Pokedex EC2"
  }

  root_block_device {
    volume_size = 30
  }
}

# resource "aws_instance" "pokedex_monitoring" {
#   ami                    = "ami-08eb150f611ca277f"
#   instance_type          = "t3.micro"
#   key_name               = "Base"
#   vpc_security_group_ids = ["sg-0a87b917bc5c4636b"]  # Use the provided security group ID
#   subnet_id              = "subnet-025bdded9a2961bd2"  # Make sure this subnet belongs to the same VPC
  
#   tags = {
#     Name = "Pokedex Monitoring via Grafana"
#   }

#   root_block_device {
#     volume_size = 30
#   }
# }

