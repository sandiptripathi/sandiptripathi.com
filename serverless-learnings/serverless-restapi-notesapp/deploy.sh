echo -----Started Deployment of Notes App---------
STACK_NAME="sandip-notesapp-stack"
S3_CODE="notesapp-code-container"
S3_SWAGGER="s3://notesapp-swagger-container/"

aws s3 cp swagger.yaml  $S3_SWAGGER --profile dev
sam build
sam package --profile dev --template-file template.yaml --s3-bucket $S3_CODE --output-template-file packaged.yaml
sam deploy --profile dev --template-file packaged.yaml --stack-name $STACK_NAME \
           --capabilities CAPABILITY_IAM --region us-west-2 
echo ------------Completed Deployment -------------
