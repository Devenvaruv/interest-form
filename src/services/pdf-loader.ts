import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import type { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import flattenDeep from "lodash/flattenDeep";


export async function getChunkedDocsFromUploadedPDFs(
  fileList: File[],
): Promise<Document<Record<string, unknown>>[]> {
  try {
    const docList = [];
    for (const file of fileList) {
      const pdfLoader = new WebPDFLoader(file);
      const docs = await pdfLoader.load();
      docList.push(docs);
    }

    const flatDocs = flattenDeep(docList);

    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const chunkedDocs = await textSplitter.splitDocuments(flatDocs);

    return chunkedDocs;
  } catch (error) {
    throw new Error("Error loading PDF");
  }
}
