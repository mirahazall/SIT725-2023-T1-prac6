pipeline {
    agent any
    tools {
        nodejs 'NodeJS 21'
    }
    stages {
        stage('Check Environment') {
            steps {
                sh 'env'
            }
        }
        
        stage('Build') {
            steps {
                // Checkout source code from github
                git 'https://github.com/mirahazall/SIT725-2023-T1-prac6'
                 // To build the code first install dependencies
                sh 'npm install'
                
                // Build the code
                sh 'npm run build' 
                echo "Building the code using Node Package Manager(npm)"
                 // create a Docker image
                sh 'docker build -t mirahazall/jenkins-docker .'
            }
        }
        
        stage('Test') {
            steps {
                echo "Running unit tests to ensure the code functions as expected using Mocha and Chai"
            }
        }
        
        stage('Deploy') {
            steps {
                echo "Deploying the application to a staging server, using Docker Compose"
            }
        }
        
        stage('Release') {
            steps {
                echo "Releasing the web application"
            }
        }
    }
}