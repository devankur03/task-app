pipeline {
     agent any
     tools {nodejs "nodejs"}
     stages {
         stage("Unit Tests") {
            steps {
                sh "node -v"
                sh "npm install"
                sh "npm run test"
            }
        }
        stage("End2End Tests") {
            steps {
                sh "unset DISPLAY && npm install"
                sh "unset DISPLAY && DEBUG=cypress:* npm run e2e:ci"
            }
        }
        stage("Build") {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh " rm -rf /var/www/jenkins-react-app"
                sh " cp -r ${WORKSPACE}/build/ /var/www/task-app/"
            }
        }
    }
}