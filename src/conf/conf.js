const conf = {

    appWriteUrl : String(import.meta.env.VITE_APP_WRITE_URL),
    appWriteProjectID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteTableID : String(import.meta.env.VITE_APPWRITE_TABLE_ID),
    appWriteBucketID : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)


}


export default conf;