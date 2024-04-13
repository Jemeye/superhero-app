export interface Superhero {
        id: number;
        name: string;
        description: string;
        modified: string;
        thumbnail: {
          path: string;
          extension: string;
        };
        resourceURI: string;
        comics: {
          available: number;
          collectionURI: string;
          items: {
            resourceURI: string;
            name: string;
          }[];
          returned: number;
        };
        series: {
            available: 3;
            collectionURI: string;
            items: {
              resourceURI: string;
              name: string;
            }[];
        };
        stories: {
          available: number;
          collectionURI: string;
          items: {
            resourceURI: string;
            name: string;
            type: string;
          }[];
          returned: number;
        };
        events: {
          available: number;
          collectionURI: string;
          items: {
            resourceURI: string;
            name: string;
          }[];
          returned: number;
        };
        urls: {
          type: string;
          url: string;
        }[]
}


        

       
   