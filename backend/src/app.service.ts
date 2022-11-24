import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4'; 
import { ConfigService } from '@nestjs/config'; 
import { BlobServiceClient } from '@azure/storage-blob';

@Injectable()
export class AppService {
  constructor (
    private readonly configService:ConfigService
    ){}
  private containerName:string

  private async getBlobServiceInstance() { 
    const connectionString = this.configService.get('CONNECTION_STRING'); 
    const blobClientService = await BlobServiceClient.fromConnectionString( connectionString,); 
    return blobClientService; 
} 

  private getBlobClient = async(imageName:String) =>{
    const blobService = await this.getBlobServiceInstance();
		const containerName = this.containerName; 
		const containerClient = blobService.getContainerClient(containerName); 
		const blockBlobClient = containerClient.getBlockBlobClient(imageName as string); 
    
		return blockBlobClient
  }
  
  azureImageUpload = async(image:Express.Multer.File,containerName:String) => {
    try{
      this.containerName = containerName as string
    const extension = image.originalname.split('.').pop(); 
    const file_name = uuid() + '.' + extension; 
    const blockBlobClient = await this.getBlobClient(file_name);
    const fileUrl = blockBlobClient.url; 
    await blockBlobClient.uploadData(image.buffer);  
        return fileUrl
    }
    catch(err){
      console.log(err,'err')
    }
  }
}
