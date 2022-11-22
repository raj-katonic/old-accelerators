const { promisify } = require('util');
const exec = promisify(require('child_process').exec)
const keys = require('../keys');

// RUN SHELL COMMAND
const runCmd = async (cmd) => {
  const { stdout, stderr } = await exec(cmd);
  if (stderr) {
    return stderr;
  }
  return stdout;
}

// GET IP OF CURRENT CLUSTER
const getIp = async () => {
  const getIpCmd = 'kubectl get gw -n kubeflow kubeflow-gateway -o jsonpath="{.spec.servers[].hosts[]}"';
  const output = await runCmd(getIpCmd);
  return String(output).trim();
}

// VALIDATE MINIO BUCKET
const validateBucket = (minioClient, bucketName) => {
  const { bucketPolicy } = keys;
  return minioClient.bucketExists(bucketName, function(err, exists) {
    if (err) {
      console.log(err);
    }
    if (!exists) {
      minioClient.makeBucket(bucketName, 'us-east-1', function(err) {
        if (err) return console.log('Error creating bucket.', err);
        console.log('Bucket created successfully in "us-east-1".');
      })
    }
    minioClient.setBucketPolicy(bucketName, JSON.stringify(bucketPolicy), function(err) {
      if (err) throw err;
      console.log('Bucket policy set');
    })
    return exists;
  })
}

// GET CURRENT USER NAMESPACE
const getUserNs = async (currentUser) => {
  return currentUser.split('.').join('-').split('@').join('-');
}

module.exports = {
  runCmd,
  getIp,
  validateBucket,
  getUserNs
}