pipeline {
     agent any
     stages {
         stage("Unit Tests") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run test"
            }
        }
        stage("End2End Tests") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run e2e:ci"
            }
        }
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/task-app/"
            }
        }
    }
}