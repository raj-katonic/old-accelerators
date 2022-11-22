const keys = {
    mlflowHostBaseUrl: "http://mlflow-service.mlflow.svc.cluster.local:5000",
    minioHost: "http://mlflow-minio-service.mlflow.svc.cluster.local:9000",
    namespace: "models",
    minioAccessKey: "minio",
    minioSecretKey: "BS6PpUKnW^Bkc@$l$QAsY$p#l",
    bucketName: "models",
    bucketPolicy: {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {"AWS": "*"},
                "Action": [
                    "s3:GetBucketLocation",
                    "s3:ListBucket",
                    "s3:ListBucketMultipartUploads",
                ],
                "Resource": "arn:aws:s3:::models",
            },
            {
                "Effect": "Allow",
                "Principal": {"AWS": "*"},
                "Action": [
                    "s3:GetObject",
                    "s3:PutObject",
                    "s3:DeleteObject",
                    "s3:ListMultipartUploadParts",
                    "s3:AbortMultipartUpload",
                ],
                "Resource": "arn:aws:s3:::models/*",
            },
        ],
    }
}

module.exports = keys;