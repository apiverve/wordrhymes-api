declare module '@apiverve/wordrhymes' {
  export interface wordrhymesOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface wordrhymesResponse {
    status: string;
    error: string | null;
    data: RhymingWordsData;
    code?: number;
  }


  interface RhymingWordsData {
      word:       string;
      rhymeCount: number;
      rhymes:     Rhyme[];
  }
  
  interface Rhyme {
      score: number;
      pron:  string;
      word:  string;
  }

  export default class wordrhymesWrapper {
    constructor(options: wordrhymesOptions);

    execute(callback: (error: any, data: wordrhymesResponse | null) => void): Promise<wordrhymesResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordrhymesResponse | null) => void): Promise<wordrhymesResponse>;
    execute(query?: Record<string, any>): Promise<wordrhymesResponse>;
  }
}
