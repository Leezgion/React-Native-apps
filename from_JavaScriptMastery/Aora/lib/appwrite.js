import { Client } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.leezgion.aora',
  projectId: '669bbe7c003e6de5fa5e',
  databaseIdL: '669bc0890002ba92951d',
  userCollectionId: '669bc0b4003860ef8215',
  videoCollectionId: '669bc0e0002c88212d21',
  storageId: '669bc2ba0031cead4940',
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.
