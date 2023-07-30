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
            // withCredentials([[
            //             $class: 'AmazonWebServicesCredentialsBinding',
            //             credentialsId: "deploytos3",
            //             accessKeyVariable: 'AWS_ACCESS_KEY_ID',
            //             secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
            //     ]]) {   }
                // AWS Code  arn:aws:iam::120080062333:role/test-support-jenkins
                // role: 'test-support-jenkins', roleAccount: '120080062333', region:'us-east-1', duration: 900, roleSessionName: 'ankurv'

                 withAWS(credentials:'deploytos3',region:'us-east-1') {
    // do something deploytos3
     sh "echo inside aws function"
                sh "ls ${WORKSPACE}"
                s3Upload(file: "${WORKSPACE}/dist", bucket:'test-bucket-av03')
  }

//                 withAWS(region:'us-east-1',role:'test-support-jenkins', roleAccount:'120080062333', ) {
//                 sh "echo inside aws function"
//                 sh "ls ${WORKSPACE}"
//                 s3Upload(file: "${WORKSPACE}/dist", bucket:'test-bucket-av03')
// }
                
              
              
             
                // sh " rm -rf /var/www/task-app | mkdir /var/www/task-app"
                // sh " cp -r ${WORKSPACE}/dist/ /var/www/task-app/"


               
            }
        }
    }
}