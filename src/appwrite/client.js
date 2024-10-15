import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class storageService {
  client = new Client();
  storage;
  dataBases;

  constructor() {
    this.client.setEndpoint(conf.appWriteURL).serProject(conf.projectId);
    this.dataBases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, featuredImage, slug, content, status, userid }) {
    try {
      return await this.dataBases.createDocument(
        conf.dataBaseId,
        conf.collectionId,
        slug,
        {
          title,
          featuredImage,
          content,
          status,
          userid,
        }
      );
    } catch (error) {
      console.log("Error=>", error);
    }
  }

  async updatePost(slug, { title, featuredImage, content, status }) {
    try {
      return await this.dataBases.updateDocument(
        conf.dataBaseId,
        conf.collectionId,
        slug,
        { title, featuredImage, content, status }
      );
    } catch (error) {
      console.log("error=>", error);
    }
  }

  async deleteDocument(slug) {
    try {
      await this.dataBases.deleteDocument(
        conf.dataBaseId,
        conf.collectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("error=>", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      this.dataBases.getDocument(conf.dataBaseId, conf.collectionId, slug);
      return true;
    } catch (error) {
      console.log("error=>", error);
      return false;
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      this.dataBases.listDocuments(conf.dataBaseId, conf.collectionId, queries);
    } catch (error) {
      console.log("error=>", error);
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(conf.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("error=>", error);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(conf.bucketId, fileId);
      return true;
    } catch (error) {
      console.log("error=>", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      this.storage.getFilePreview(conf.bucketId, fileId);
      return true;
    } catch (error) {
      console.log("Error=>", error);
      return false;
    }
  }
}

const service = new storageService();

export default service;
