const conf={
    appWriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    projectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    userCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_USERS),
    productsCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_PRODUCTS),
    ordersCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_ORDERS),
    bucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf;