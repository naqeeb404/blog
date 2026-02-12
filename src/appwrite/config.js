
import conf from "../conf/conf";
import { ID, Client, TablesDB, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  tables;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectID);

    this.tables = new TablesDB(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.tables.createRow({
        databaseId: conf.appWriteDatabaseID,
        tableId: conf.appWriteTableID,
        rowId: ID.unique(),

        data: {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        },
      });
    } catch (error) {
      console.log("error at create post", error);
      throw error;
    }
  }

  //update functionality

  async updatePost(id, { title, slug, content, featuredImage, status }) {
    try {
      return await this.tables.updateRow({
        databaseId: conf.appWriteDatabaseID,
        tableId: conf.appWriteTableID,
        rowId: id,
        data: {
          title,
          slug,
          content,
          featuredImage,
          status,
        },
      });
    } catch (error) {
      console.error("Appwrite service :: updatePost :: error", error);
      throw error;
    }
  }

  //delete functionality

  async deleteRow(id) {
    try {
      return await this.tables.deleteRow({
        databaseId: conf.appWriteDatabaseID,
        tableId: conf.appWriteTableID,
        rowId: id,
      });
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }

  //get single  post

  async getPost(id) {
    try {
      return await this.tables.getRow({
        databaseId: conf.appWriteDatabaseID,
        tableId: conf.appWriteTableID,
        rowId: id,
      });
    } catch (error) {
      console.log("error", error);
      return false;
    }
  }

  //getPosts

  async getPosts() {
    try {
      return await this.tables.listRows({
        databaseId: conf.appWriteDatabaseID,
        tableId: conf.appWriteTableID,
        queries: [Query.equal("status", "active")],
      });
    } catch (error) {
      console.log("error", error);
      return false;
    }
  }

  //file upload service

  async uploadFile(file) {
    try {
      return await this.storage.createFile({
        bucketId: conf.appWriteBucketID,
        fileId: ID.unique(),
        file: file
      });
    } catch (error) {
      console.log("error", error);
      return false
    }
  }

  //file delete

  async fileDelete(id){

    try {
        return await this.storage.deleteFile({
            bucketId: conf.appWriteBucketID,
            fileId: id
        });
      return true;
    } catch (error) {
        console.log("error", error)
        return false
    }

  }

  //file preview

  getFilePreview(fileId){

        return this.storage.getFilePreview({
            bucketId: conf.appWriteBucketID,
            fileId: fileId
        })
    }
}

const serive = new Service();
export default serive;
