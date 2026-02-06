const conf = {

    appWriteUrl : String(import.meta.env.VITE_APP_WRITE_URL),
    appWriteProjectID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteCollectionID : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWriteBuckedID : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)


}


export default conf;