pipeline {
  agent any

  tools {
    // Configure a NodeJS tool named "node20" in Jenkins Global Tool Configuration
    nodejs "node20"
  }

  options {
    timestamps()
    ansiColor('xterm')
  }

  environment {
    CI = "true"
  }

  stages {
    stage('Checkout') {
      steps {
        echo 'Checking out source control'
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
      post {
        success {
          archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
        }
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished'
    }
  }
}
