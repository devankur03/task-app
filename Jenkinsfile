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
        // stage("End2End Tests") {
        //     steps {
        //         sh "unset DISPLAY && npm install"
        //         sh "unset DISPLAY && DEBUG=cypress:* npm run e2e:ci"
        //     }
        // }
        stage("Build") {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                 withAWS(credentials:'deploytos3',region:'us-east-1') {
    // do something deploytos3
     sh "echo inside aws function"
                sh "ls ${WORKSPACE}"
                s3Upload(file: "${WORKSPACE}/dist", bucket:'test-bucket-av03')
  }

               
            }
        }
    }
}