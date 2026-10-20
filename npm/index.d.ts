declare module '@apiverve/wordrhymes' {
  export interface wordrhymesOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface wordrhymesResponse {
    status: string;
    error: string | null;
    data: RhymingWordsData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface RhymingWordsData {
      word:       null | string;
      rhymeCount: number | null;
      rhymes:     (null | string)[];
  }

  export default class wordrhymesWrapper {
    constructor(options: wordrhymesOptions);

    execute(callback: (error: any, data: wordrhymesResponse | null) => void): Promise<wordrhymesResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordrhymesResponse | null) => void): Promise<wordrhymesResponse>;
    execute(query?: Record<string, any>): Promise<wordrhymesResponse>;
  }
}
