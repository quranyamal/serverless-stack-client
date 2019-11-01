export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "udanotesapp"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://onlluaa4lf.execute-api.ap-southeast-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_0eYCfJVsa",
    APP_CLIENT_ID: "6hik8uglnk5r16970pfaqn04ii",
    IDENTITY_POOL_ID: "ap-southeast-1:00919cb3-d1d5-439e-8acf-1c15ea892da7"
  }
};