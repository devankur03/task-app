pipeline {
     agent any
     stages {
         stage("Unit Tests") {
            steps {
                sh " npm install"
                sh " npm run test"
            }
        }
        stage("End2End Tests") {
            steps {
                sh " npm install"
                sh " npm run e2e:ci"
            }
        }
        stage("Build") {
            steps {
                sh " npm install"
                sh " npm run build"
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