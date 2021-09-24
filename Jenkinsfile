pipeline {
    agent any
    stages{

        stage("Descargar código de la aplicación"){
            steps{
                git "url"
            } 
        }        

        stage("Creación de imagen"){
            steps{
                script{
                    if(isUnix()){
                        sh "docker build -t camila-formacion/app-rest ."
                    }
                    else{
                        bat "docker build -t camila-formacion/app-rest ."
                    }
                }
            }
        }

       stage("Ejecución de contenedor"){
           steps {
               script{
                   if(isUnix()){
                       sh "docker run -d --name app-rest -p 8081:8080 camila-formacion/app-rest"
                   }else{
                       bat "docker run -d --name app-rest -p 8081:8080 camila-formacion/app-rest"
                       
                   }
               }
                
           }
           
        }

        stage("Test del servicio"){
            steps {
                echo "Probando el servicio ..."
            }
        }

        stage("Cerrar recursos"){
           steps {
                script{
                    if(isUnix()){
                        sh "docker stop app-rest"
                        sh "docker container rm app-rest" 
                        sh "docker image rm camila-formacion/app-rest"
                    }
                    else{
                        bat "docker stop app-rest"
                        bat "docker container rm app-rest" 
                        bat "docker image rm camila-formacion/app-rest"
                    }
                }
            }            
        }
    }
}
