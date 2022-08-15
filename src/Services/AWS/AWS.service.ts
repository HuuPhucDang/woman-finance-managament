import { S3 } from 'aws-sdk';

class AWSService {
  static async uploadPublicFile(
    dataBuffer: Buffer,
    filename: string,
    folder: string = null,
  ) {
    const s3 = new S3();
    const uploadResult = await s3
      .upload({
        Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
        Body: dataBuffer,
        Key: folder ? `${folder}/key-${filename}` : `key-${filename}`,
        ACL: 'public-read',
      })
      .promise();
    const uploadedFileData = {
      filename: filename,
      key: uploadResult.Key,
      url: uploadResult.Location,
    };
    return uploadedFileData;
  }

  static async deleteFile(fileKey) {
    const s3 = new S3();
    const params = { Bucket: process.env.AWS_PUBLIC_BUCKET_NAME, Key: fileKey };
    const deleteResult = await s3.deleteObject(params).promise();
    return deleteResult;
  }
}

export default AWSService;
