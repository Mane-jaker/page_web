import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// Crear el cliente de S3
const s3Client = new S3Client({
  region: import.meta.env.VITE_APP_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_APP_AWS_SECRET_ACCESS_KEY,
  },
});

// Función para subir la imagen a S3
export const uploadImageToS3 = async (file) => {
  const params = {
    Bucket: 'xilesbucket',
    Key: `${Date.now()}_${file.name}`,
    Body: file,
    ContentType: file.type,
  };

  try {
    // Utilizar el comando PutObjectCommand para subir el archivo
    const command = new PutObjectCommand(params);
    const data = await s3Client.send(command);

    // Codificar correctamente el Key en la URL para evitar problemas con espacios
    const encodedKey = encodeURIComponent(params.Key);
    const imageUrl = `https://${params.Bucket}.s3.${import.meta.env.VITE_APP_AWS_REGION}.amazonaws.com/${encodedKey}`;
    
    console.log('Imagen subida con éxito:', imageUrl);
    return imageUrl; // Devuelve la URL de la imagen
  } catch (error) {
    console.error('Error al subir la imagen:', error);
  }
};
